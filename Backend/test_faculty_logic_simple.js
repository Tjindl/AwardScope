// Mock standard logic from server.js
function evaluateMatch(studentData, award) {
    const matchReasons = [];
    const missingRequirements = [];
    let matchScore = 100;

    // Simulate what Mongoose might return for eligibility
    const criteria = award.eligibility;

    // Check faculty - THE LOGIC FROM server.js
    if (criteria.requiredFaculty && studentData.faculty) {
        // If criteria.requiredFaculty is an empty array [], this block is ENTERED because [] is truthy
        // But [].some(...) returns false
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

    return { matchScore, missingRequirements };
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
const result1 = evaluateMatch(student, awardWithEmptyArray);
console.log(JSON.stringify(result1, null, 2));

console.log("\n2. Award with missing requiredFaculty");
const result2 = evaluateMatch(student, awardWithUndefined);
console.log(JSON.stringify(result2, null, 2));

if (result1.matchScore < 100) {
    console.log("\nCONCLUSION: The logic FAILED for empty array! It treated it as a mismatch.");
} else {
    console.log("\nCONCLUSION: The logic worked correctly.");
}
