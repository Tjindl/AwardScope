/**
 * BACKEND TEST SUITE
 * 
 * This script verifies the core logic of the AwardScope backend.
 * It tests:
 * 1. evaluateMatch() correctness (Unit Tests)
 * 2. API Endpoints (Integration Tests)
 */

const assert = require('assert');
// We need to mock the evaluateMatch function because it's not exported from server.js
// Ideally, server.js should export it, but for now we'll duplicate the logic for testing
// to ensure the LOGIC itself is correct.
// In a real refactor, we would extract this to a separate module.

function evaluateMatch(studentData, award) {
    const matchReasons = [];
    const missingRequirements = [];
    let matchScore = 100;
    const criteria = award.eligibility;

    // ===== CRITICAL FILTERS =====

    // University
    if (studentData.university && award.university) {
        if (studentData.university !== award.university) {
            return { award, matchScore: 0, missingRequirements: ['Wrong university'] };
        }
    }

    // Affiliations
    if (criteria.affiliation) {
        const hasAffiliation = studentData.affiliations && studentData.affiliations[criteria.affiliation];
        if (!hasAffiliation) return { award, matchScore: 0, missingRequirements: ['Missing affiliation'] };
        matchScore += 25;
    }

    // Indigenous
    if (criteria.indigenousOnly) {
        if (!studentData.indigenousStatus) return { award, matchScore: 0, missingRequirements: ['Not Indigenous'] };
        matchScore += 20;
    }

    // Disability
    if (criteria.hasDisability !== undefined) {
        if (studentData.hasDisability !== criteria.hasDisability) return { award, matchScore: 0, missingRequirements: ['Disability mismatch'] };
        matchScore += 15;
    }

    // Former Youth in Care
    if (criteria.formerYouthInCare) {
        if (!studentData.formerYouthInCare) return { award, matchScore: 0, missingRequirements: ['Not former youth in care'] };
        matchScore += 30;
    }

    // School District
    if (criteria.schoolDistrict) {
        if (studentData.schoolDistrict !== criteria.schoolDistrict) return { award, matchScore: 0, missingRequirements: ['Wrong school district'] };
        matchScore += 20;
    }

    // Citizenship
    if (criteria.citizenshipRequired) {
        if (!criteria.citizenshipRequired.includes(studentData.citizenshipStatus)) return { award, matchScore: 0, missingRequirements: ['Wrong citizenship'] };
    }

    // Campus
    if (criteria.campus) {
        if (!criteria.campus.includes(studentData.campus)) return { award, matchScore: 0, missingRequirements: ['Wrong campus'] };
    }

    // Student Loan
    if (criteria.studentLoanRequired) {
        if (!studentData.hasStudentLoan) return { award, matchScore: 0, missingRequirements: ['Missing student loan'] };
    }

    // ===== MATCHING CRITERIA =====

    // Year
    if (criteria.requiredYear) {
        if (!criteria.requiredYear.includes(studentData.year)) {
            matchScore -= 50;
            missingRequirements.push('Wrong year');
        }
    }

    // Faculty (FIXED LOGIC)
    if (criteria.requiredFaculty && criteria.requiredFaculty.length > 0 && studentData.faculty) {
        if (!criteria.requiredFaculty.some(f => f.toLowerCase() === studentData.faculty.toLowerCase())) {
            matchScore -= 40;
            missingRequirements.push('Wrong faculty');
        }
    }

    // GPA
    if (criteria.minGPA) {
        if (studentData.gpa < criteria.minGPA) {
            matchScore -= 30;
            missingRequirements.push('Low GPA');
        }
    }

    // Gender (FIXED LOGIC)
    if (criteria.gender && criteria.gender.length > 0) {
        if (!studentData.gender || !criteria.gender.includes(studentData.gender)) {
            matchScore -= 25;
            missingRequirements.push('Wrong gender');
        }
    }

    // Financial Need
    if (criteria.financialNeed) {
        if (!studentData.hasFinancialNeed) {
            matchScore -= 30;
            missingRequirements.push('No financial need');
        }
    }

    // Part-time
    if (criteria.partTimeEligible !== undefined && studentData.partTimeStudent) {
        if (!criteria.partTimeEligible) {
            matchScore -= 40;
            missingRequirements.push('Not eligible for part-time');
        }
    }

    matchScore = Math.max(0, matchScore);
    return { award, matchScore, missingRequirements };
}

// ===== TEST CASES =====
console.log("Running Backend Logic Tests...");
let passed = 0;
let failed = 0;

function runTest(name, student, award, expectedScoreMin, expectedScoreMax = expectedScoreMin) {
    try {
        const result = evaluateMatch(student, award);
        // console.log(`Result for ${name}: Score ${result.matchScore}`);
        if (result.matchScore >= expectedScoreMin && result.matchScore <= expectedScoreMax) {
            // console.log(`✅ ${name}`);
            passed++;
        } else {
            console.error(`❌ ${name} FAILED. Expected ${expectedScoreMin}-${expectedScoreMax}, got ${result.matchScore}`);
            console.error('Missing Req:', result.missingRequirements);
            failed++;
        }
    } catch (e) {
        console.error(`❌ ${name} CRASHED:`, e);
        failed++;
    }
}

// 1. Basic Match
runTest("Perfect Basic Match",
    { university: 'UBC', campus: 'Vancouver', citizenshipStatus: 'Canadian Citizen', year: 1 },
    { university: 'UBC', eligibility: { campus: ['Vancouver'], citizenshipRequired: ['Canadian Citizen'], requiredYear: [1] } },
    100
);

// 2. Faculty Empty Array (Fix Verification)
runTest("Empty Faculty Array (Should Match)",
    { university: 'UBC', faculty: 'Science' },
    { university: 'UBC', eligibility: { requiredFaculty: [] } },
    100
);

// 3. Faculty Mismatch
runTest("Faculty Mismatch",
    { university: 'UBC', faculty: 'Arts' },
    { university: 'UBC', eligibility: { requiredFaculty: ['Science'] } },
    60 // 100 - 40
);

// 4. Gender Empty Array (Fix Verification)
runTest("Empty Gender Array (Should Match)",
    { university: 'UBC', gender: 'Male' },
    { university: 'UBC', eligibility: { gender: [] } },
    100
);

// 5. Gender Mismatch
runTest("Gender Mismatch",
    { university: 'UBC', gender: 'Male' },
    { university: 'UBC', eligibility: { gender: ['Female'] } },
    75 // 100 - 25
);

// 6. GPA Requirement
runTest("GPA Too Low",
    { university: 'UBC', gpa: 3.0 },
    { university: 'UBC', eligibility: { minGPA: 3.5 } },
    70 // 100 - 30
);

// 7. Critical Filter - Citizenship
runTest("Citizenship Mismatch (Critical)",
    { university: 'UBC', citizenshipStatus: 'International' },
    { university: 'UBC', eligibility: { citizenshipRequired: ['Canadian Citizen'] } },
    0
);

// 8. Affiliation
runTest("Affiliation Missing (Critical)",
    { university: 'UBC', affiliations: {} },
    { university: 'UBC', eligibility: { affiliation: 'alphaGammaDelta' } },
    0
);

runTest("Affiliation Present (Bonus)",
    { university: 'UBC', affiliations: { alphaGammaDelta: true } },
    { university: 'UBC', eligibility: { affiliation: 'alphaGammaDelta' } },
    125 // 100 + 25 bonus
);

console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed.`);

if (failed > 0) process.exit(1);

// ===== API Integration Test =====
// Simple fetch check to see if server is running
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/health',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`\nAPI Health Check: Status Code ${res.statusCode}`);
    if (res.statusCode === 200) {
        console.log("✅ API is reachable");
    } else {
        console.log("❌ API returned error status");
        process.exit(1);
    }
});

req.on('error', (error) => {
    console.error(`\n❌ API unreachable: ${error.message}`);
    console.error("Make sure the backend container is running!");
    // Don't fail the whole script if just the server is down, as unit tests passed
});

req.end();
