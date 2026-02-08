import { Award, StudentFormData, MatchResult } from '../types';

export function matchStudentToAwards(
  studentData: StudentFormData,
  awards: Award[]
): MatchResult[] {
  const matches: MatchResult[] = [];

  for (const award of awards) {
    const matchResult = evaluateMatch(studentData, award);
    if (matchResult.matchScore > 0) {
      matches.push(matchResult);
    }
  }

  // Sort by match score (highest first)
  return matches.sort((a, b) => b.matchScore - a.matchScore);
}

function evaluateMatch(
  studentData: StudentFormData,
  award: Award
): MatchResult {
  const matchReasons: string[] = [];
  const missingRequirements: string[] = [];
  let matchScore = 100;
  const criteria = award.eligibility;

  // Check citizenship status
  if (criteria.citizenshipRequired && criteria.citizenshipRequired.length > 0) {
    if (criteria.citizenshipRequired.includes(studentData.citizenshipStatus)) {
      matchReasons.push('Meets citizenship requirement');
    } else {
      missingRequirements.push(`Requires citizenship status: ${criteria.citizenshipRequired.join(' or ')}`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check campus
  if (criteria.campus && criteria.campus.length > 0) {
    if (criteria.campus.includes(studentData.campus)) {
      matchReasons.push(`Available for ${studentData.campus} campus`);
    } else {
      missingRequirements.push(`Only available for: ${criteria.campus.join(' or ')} campus`);
      matchScore = 0;
      return { award, matchScore, matchReasons, missingRequirements };
    }
  }

  // Check year
  if (criteria.requiredYear && criteria.requiredYear.length > 0) {
    if (criteria.requiredYear.includes(studentData.year)) {
      matchReasons.push(`Open to year ${studentData.year} students`);
    } else {
      missingRequirements.push(`Requires year: ${criteria.requiredYear.join(' or ')}`);
      matchScore -= 50;
    }
  }

  // Check faculty
  if (criteria.requiredFaculty && criteria.requiredFaculty.length > 0 && studentData.faculty) {
    if (criteria.requiredFaculty.includes(studentData.faculty)) {
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
  if (criteria.gender && criteria.gender.length > 0) {
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
    const affiliationKey = criteria.affiliation as keyof typeof studentData.affiliations;
    if (studentData.affiliations[affiliationKey]) {
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

export function categorizeMatches(matches: MatchResult[]): {
  perfect: MatchResult[];
  good: MatchResult[];
  partial: MatchResult[];
} {
  return {
    perfect: matches.filter(m => m.matchScore >= 90 && m.missingRequirements.length === 0),
    good: matches.filter(m => m.matchScore >= 60 && m.matchScore < 90),
    partial: matches.filter(m => m.matchScore > 0 && m.matchScore < 60),
  };
}
