const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Analyze a student's chances of receiving a specific award using Gemini AI
 * @param {Object} studentData - The student's profile data
 * @param {Object} award - The award to analyze
 * @returns {Promise<Object>} - AI analysis with chance level, percentage, factors, and advice
 */
async function analyzeChance(studentData, award) {
    if (!process.env.GEMINI_API_KEY) {
        // Return a rule-based fallback if no API key
        return fallbackAnalysis(studentData, award);
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const prompt = `You are an expert university financial aid advisor. Analyze a student's chances of receiving a specific award in bullet-point form.

STUDENT PROFILE:
- Faculty: ${studentData.faculty || 'Not specified'}
- Year: ${studentData.year || 'Not specified'}
- Program: ${studentData.program || 'Not specified'}
- GPA: ${studentData.gpa || 'Not specified'}
- Campus: ${studentData.campus}
- Citizenship: ${studentData.citizenshipStatus}
- Indigenous Status: ${studentData.indigenousStatus ? 'Yes' + (studentData.indigenousGroup ? ` (${studentData.indigenousGroup})` : '') : 'No'}
- Has Disability: ${studentData.hasDisability ? 'Yes' : 'No'}
- Gender: ${studentData.gender || 'Not specified'}
- Has Financial Need: ${studentData.hasFinancialNeed ? 'Yes' : 'No'}
- Has Student Loan: ${studentData.hasStudentLoan ? 'Yes' : 'No'}
- Family Income: ${studentData.familyIncome ? '$' + studentData.familyIncome : 'Not specified'}
- Part-Time Student: ${studentData.partTimeStudent ? 'Yes' : 'No'}
- Former Youth in Care: ${studentData.formerYouthInCare ? 'Yes' : 'No'}
- Home Region: ${studentData.homeRegion || 'Not specified'}
- School District: ${studentData.schoolDistrict || 'Not specified'}
- Affiliations: ${Object.keys(studentData.affiliations || {}).filter(k => studentData.affiliations[k]).join(', ') || 'None'}

AWARD DETAILS:
- Name: ${award.name}
- Type: ${award.type}
- Amount: ${typeof award.amount === 'number' ? '$' + award.amount.toLocaleString() : award.amount}
- Category: ${award.category}
- Description: ${award.description}
- Eligibility Requirements: ${JSON.stringify(award.eligibility, null, 2)}
${award.requiredDocumentation ? '- Required Documentation: ' + award.requiredDocumentation.join(', ') : ''}

Based on this information, provide an analysis in the following JSON format ONLY (no other text):

{
  "chanceLevel": "HIGH" or "MEDIUM" or "LOW",
  "chancePercentage": <number between 0-100>,
  "keyFactors": ["factor1", "factor2", "factor3"],
  "advice": ["bullet point 1", "bullet point 2", "bullet point 3", "bullet point 4", "bullet point 5"],
  "summary": "A brief one-sentence summary of their chances"
}
`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse the JSON response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const analysis = JSON.parse(jsonMatch[0]);
            return {
                success: true,
                ...analysis
            };
        }

        throw new Error('Could not parse AI response');
    } catch (error) {
        console.error('Gemini AI error:', error.message);
        // Fall back to rule-based analysis
        return fallbackAnalysis(studentData, award);
    }
}

/**
 * Rule-based fallback when AI is not available
 */
function fallbackAnalysis(studentData, award) {
    const criteria = award.eligibility;
    let score = 100;
    const factors = [];

    // Check citizenship
    if (criteria.citizenshipRequired) {
        if (criteria.citizenshipRequired.includes(studentData.citizenshipStatus)) {
            factors.push('✓ Meets citizenship requirement');
        } else {
            score -= 100;
            factors.push('✗ Does not meet citizenship requirement');
        }
    }

    // Check GPA
    if (criteria.minGPA) {
        if (studentData.gpa >= criteria.minGPA) {
            factors.push(`✓ GPA (${studentData.gpa}) meets minimum (${criteria.minGPA})`);
        } else {
            score -= 30;
            factors.push(`✗ GPA (${studentData.gpa}) below minimum (${criteria.minGPA})`);
        }
    }

    // Check year
    if (criteria.requiredYear && !criteria.requiredYear.includes(studentData.year)) {
        score -= 40;
        factors.push(`✗ Not in required year (${criteria.requiredYear.join('/')})`);
    }

    // Check faculty
    if (criteria.requiredFaculty && criteria.requiredFaculty.length > 0) {
        if (criteria.requiredFaculty.some(f => f.toLowerCase() === (studentData.faculty || '').toLowerCase())) {
            factors.push('✓ In required faculty');
        } else {
            score -= 30;
            factors.push('✗ Not in required faculty');
        }
    }

    // Check financial need
    if (criteria.financialNeed && !studentData.hasFinancialNeed) {
        score -= 25;
        factors.push('✗ Financial need not demonstrated');
    }

    score = Math.max(0, Math.min(100, score));

    let chanceLevel = 'LOW';
    if (score >= 80) chanceLevel = 'HIGH';
    else if (score >= 50) chanceLevel = 'MEDIUM';

    return {
        success: true,
        chanceLevel,
        chancePercentage: score,
        keyFactors: factors.slice(0, 3),
        advice: score >= 80
            ? 'You appear to be a strong candidate for this award. Make sure to prepare all required documentation and submit a compelling application highlighting your achievements.'
            : score >= 50
                ? 'You may be eligible for this award but may not meet all criteria perfectly. Review the requirements carefully and consider applying if you can address any gaps.'
                : 'Based on the eligibility criteria, this award may not be the best fit for your profile. Consider focusing on awards that better match your qualifications.',
        summary: `${chanceLevel} chance based on ${factors.length > 0 ? 'eligibility analysis' : 'general criteria'}.`
    };
}

/**
 * Batch analyze multiple awards for a student
 */
async function analyzeMultipleAwards(studentData, awards, limit = 5) {
    const analyses = [];
    const awardsToAnalyze = awards.slice(0, limit);

    for (const award of awardsToAnalyze) {
        const analysis = await analyzeChance(studentData, award);
        analyses.push({
            awardId: award.id,
            awardName: award.name,
            ...analysis
        });
    }

    return analyses;
}

module.exports = {
    analyzeChance,
    analyzeMultipleAwards
};
