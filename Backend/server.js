require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { analyzeChance, analyzeMultipleAwards } = require('./services/aiAnalysis');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Awards database (in production, this would be in a real database)
const awards = require('./data/awards');

// Matching algorithm
function matchStudentToAwards(studentData, awards) {
  const matches = [];

  for (const award of awards) {
    const matchResult = evaluateMatch(studentData, award);
    if (matchResult.matchScore > 0) {
      matches.push(matchResult);
    }
  }

  // Sort by match score (highest first)
  return matches.sort((a, b) => b.matchScore - a.matchScore);
}

function evaluateMatch(studentData, award) {
  const matchReasons = [];
  const missingRequirements = [];
  let matchScore = 100;
  const criteria = award.eligibility;

  // Check citizenship status
  if (criteria.citizenshipRequired) {
    if (criteria.citizenshipRequired.includes(studentData.citizenshipStatus)) {
      matchReasons.push('Meets citizenship requirement');
    } else {
      missingRequirements.push(`Requires citizenship status: ${criteria.citizenshipRequired.join(' or ')}`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check campus
  if (criteria.campus) {
    if (criteria.campus.includes(studentData.campus)) {
      matchReasons.push(`Available for ${studentData.campus} campus`);
    } else {
      missingRequirements.push(`Only available for: ${criteria.campus.join(' or ')} campus`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check year
  if (criteria.requiredYear) {
    if (criteria.requiredYear.includes(studentData.year)) {
      matchReasons.push(`Open to year ${studentData.year} students`);
    } else {
      missingRequirements.push(`Requires year: ${criteria.requiredYear.join(' or ')}`);
      matchScore -= 50;
    }
  }

  // Check faculty
  if (criteria.requiredFaculty && studentData.faculty) {
    if (criteria.requiredFaculty.some(f =>
      f.toLowerCase() === studentData.faculty.toLowerCase()
    )) {
      matchReasons.push(`Matches your faculty (${studentData.faculty})`);
    } else {
      missingRequirements.push(`Requires faculty: ${criteria.requiredFaculty.join(' or ')}`);
      matchScore -= 40;
    }
  }

  // Check GPA
  if (criteria.minGPA) {
    if (studentData.gpa >= criteria.minGPA) {
      matchReasons.push(`Meets minimum GPA requirement (${criteria.minGPA})`);
    } else {
      missingRequirements.push(`Requires minimum GPA of ${criteria.minGPA}`);
      matchScore -= 30;
    }
  }

  // Check Indigenous status
  if (criteria.indigenousOnly) {
    if (studentData.indigenousStatus) {
      matchReasons.push('Meets Indigenous student requirement');
      matchScore += 20;
    } else {
      missingRequirements.push('Requires Indigenous status');
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check disability status
  if (criteria.hasDisability !== undefined) {
    if (studentData.hasDisability === criteria.hasDisability) {
      matchReasons.push('Meets disability requirement');
      matchScore += 15;
    } else {
      missingRequirements.push('Requires student with disability');
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check gender
  if (criteria.gender) {
    if (studentData.gender && criteria.gender.includes(studentData.gender)) {
      matchReasons.push(`Matches gender requirement`);
    } else {
      missingRequirements.push(`Requires gender: ${criteria.gender.join(' or ')}`);
      matchScore -= 25;
    }
  }

  // Check financial need
  if (criteria.financialNeed) {
    if (studentData.hasFinancialNeed) {
      matchReasons.push('Matches financial need requirement');
    } else {
      missingRequirements.push('Requires demonstrated financial need');
      matchScore -= 30;
    }
  }

  // Check student loan
  if (criteria.studentLoanRequired) {
    if (studentData.hasStudentLoan) {
      matchReasons.push('Has required student loan');
    } else {
      missingRequirements.push('Requires full-time Canadian government student loan');
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check affiliations
  if (criteria.affiliation) {
    if (studentData.affiliations && studentData.affiliations[criteria.affiliation]) {
      matchReasons.push(`Matches affiliation requirement`);
      matchScore += 25;
    } else {
      missingRequirements.push(`Requires specific affiliation: ${criteria.affiliation}`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check school district
  if (criteria.schoolDistrict) {
    if (studentData.schoolDistrict === criteria.schoolDistrict) {
      matchReasons.push(`From required school district (#${criteria.schoolDistrict})`);
      matchScore += 20;
    } else {
      missingRequirements.push(`Requires home in School District #${criteria.schoolDistrict}`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check part-time eligibility
  if (criteria.partTimeEligible !== undefined && studentData.partTimeStudent) {
    if (criteria.partTimeEligible) {
      matchReasons.push('Eligible as part-time student');
    } else {
      missingRequirements.push('Requires full-time enrollment');
      matchScore -= 40;
    }
  }

  // Check former youth in care
  if (criteria.formerYouthInCare) {
    if (studentData.formerYouthInCare) {
      matchReasons.push('Meets former youth in care requirement');
      matchScore += 30;
    } else {
      missingRequirements.push('Requires former youth in care status');
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Ensure score doesn't go below 0
  matchScore = Math.max(0, matchScore);

  return {
    award,
    matchScore,
    matchReasons,
    missingRequirements,
  };
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'UBC Financial Aid API is running' });
});

// Get all awards
app.get('/api/awards', (req, res) => {
  res.json(awards);
});

// Match student to awards
app.post('/api/match', (req, res) => {
  try {
    const studentData = req.body;

    // Validate required fields
    if (!studentData.campus || !studentData.citizenshipStatus || !studentData.faculty || !studentData.year || !studentData.gender) {
      return res.status(400).json({
        error: 'Missing required fields!'
      });
    }

    const matches = matchStudentToAwards(studentData, awards);

    // Categorize matches
    const categorized = {
      perfect: matches.filter(m => m.matchScore >= 90 && m.missingRequirements.length === 0),
      good: matches.filter(m => m.matchScore >= 60 && m.matchScore < 90),
      partial: matches.filter(m => m.matchScore > 0 && m.matchScore < 60),
    };

    res.json({
      totalMatches: matches.length,
      matches,
      categorized,
      studentData
    });
  } catch (error) {
    console.error('Error matching student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Analyze chance for a single award
app.post('/api/analyze-chance', async (req, res) => {
  try {
    const { studentData, awardId } = req.body;

    if (!studentData || !awardId) {
      return res.status(400).json({
        error: 'Missing required fields: studentData and awardId are required'
      });
    }

    // Find the award
    const award = awards.find(a => a.id === awardId);
    if (!award) {
      return res.status(404).json({ error: 'Award not found' });
    }

    const analysis = await analyzeChance(studentData, award);
    res.json({
      awardId: award.id,
      awardName: award.name,
      ...analysis
    });
  } catch (error) {
    console.error('Error analyzing chance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Analyze chances for multiple awards (top matches)
app.post('/api/analyze-chances', async (req, res) => {
  try {
    const { studentData, awardIds, limit = 5 } = req.body;

    if (!studentData) {
      return res.status(400).json({
        error: 'Missing required field: studentData'
      });
    }

    // Get awards to analyze (either specific IDs or use top matches)
    let awardsToAnalyze;
    if (awardIds && awardIds.length > 0) {
      awardsToAnalyze = awards.filter(a => awardIds.includes(a.id));
    } else {
      // Get top matches first
      const matches = matchStudentToAwards(studentData, awards);
      awardsToAnalyze = matches.slice(0, limit).map(m => m.award);
    }

    const analyses = await analyzeMultipleAwards(studentData, awardsToAnalyze, limit);
    res.json({
      totalAnalyzed: analyses.length,
      analyses
    });
  } catch (error) {
    console.error('Error analyzing chances:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server if not in Vercel environment (or similar)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
    console.log(`Gemini AI: ${process.env.GEMINI_API_KEY ? 'Enabled' : 'Using fallback (no API key)'}`);
  });
}

module.exports = app;
