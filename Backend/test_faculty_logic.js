const mongoose = require('mongoose');
const { analyzeChance } = require('./services/aiAnalysis');
require('dotenv').config();

// Mock standard logic from server.js
function evaluateMatch(studentData, award) {
    const matchReasons = [];
    const missingRequirements = [];
    let matchScore = 100;
    const criteria = award.eligibility;

    // Check faculty
    if (criteria.requiredFaculty && studentData.faculty) {
        if (criteria.requiredFaculty.some(f =>
            f.toLowerCase() === studentData.faculty.toLowerCase()
        )) {
            matchReasons.push(`✓ Matches your faculty (${studentData.faculty})`);
        } else {
            missingRequirements.push(`Requires faculty: ${criteria.requiredFaculty.join(' or ')}`);
            matchScore -= 40;
        }
    } else {
        matchReasons.push('✓ Open to students from all faculties');
    }

    return { matchScore, matchReasons, missingRequirements };
}

// Mock Data
const awardWithEmptyArray = {
    name: "Empty Array Award",
    eligibility: {
        requiredFaculty: [] // Simulating Mongoose empty array
    }
};

const awardWithUndefined = {
    name: "Undefined Faculty Award",
    eligibility: {} // Simulating missing field
};

const student = {
    faculty: "Science",
    year: 1
};

console.log("--- Testing Logic Behavior ---");
console.log("1. Award with requiredFaculty: []");
console.log(evaluateMatch(student, awardWithEmptyArray));

console.log("\n2. Award with missing requiredFaculty");
console.log(evaluateMatch(student, awardWithUndefined));
