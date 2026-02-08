/**
 * INTEGRATION TEST SUITE
 * 
 * This script tests the RUNNING backend server endpoints.
 * It requires the backend to be running on localhost:3001.
 */

const BASE_URL = 'http://localhost:3001/api';

// ANSI colors for output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

async function runTest(name, fn) {
    process.stdout.write(`Testing: ${name}... `);
    try {
        await fn();
        console.log(`${colors.green}PASSED${colors.reset}`);
        return true;
    } catch (e) {
        console.log(`${colors.red}FAILED${colors.reset}`);
        console.error(e.message);
        if (e.response) console.error('Response:', e.response);
        return false;
    }
}

async function testHealth() {
    const res = await fetch(`${BASE_URL}/health`);
    if (res.status !== 200) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (data.status !== 'ok') throw new Error(`Invalid status: ${data.status}`);
}

async function testMatchPerfect() {
    // A student who should match many awards
    const student = {
        university: 'UBC',
        campus: 'Vancouver',
        year: 1,
        faculty: 'Science',
        program: 'Computer Science',
        gpa: 4.0,
        citizenshipStatus: 'Canadian Citizen',
        indigenousStatus: false,
        hasDisability: false,
        hasStudentLoan: true,
        hasFinancialNeed: true,
        gender: 'Female', // Should match frequent "Female" awards
        affiliations: {}
    };

    const res = await fetch(`${BASE_URL}/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });

    if (res.status !== 200) throw new Error(`Status ${res.status}`);
    const data = await res.json();

    if (!data.matches || !Array.isArray(data.matches)) throw new Error('No matches array returned');
    if (data.matches.length === 0) throw new Error('Expected matches for perfect student, got 0');

    // Verify scores
    const perfectScore = data.matches.find(m => m.matchScore === 100);
    if (!perfectScore) throw new Error('Expected at least one perfect match (100)');
}

async function testEmptyArraysEdgeCase() {
    // Testing the fix for empty faculty/gender arrays
    // We rely on the fact that existing seed data might have some empty arrays or undefined fields
    // If not, we check that generic awards (no specific faculty) are returned

    const student = {
        university: 'UBC',
        campus: 'Vancouver',
        year: 2,
        faculty: 'Forestry', // Specific faculty
        gpa: 3.0,
        citizenshipStatus: 'Canadian Citizen',
        gender: 'Male'
    };

    const res = await fetch(`${BASE_URL}/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });

    const data = await res.json();
    // We expect matches that are "Open to all faculties"
    const generalMatch = data.matches.find(m =>
        m.matchReasons.some(r => r.includes('Open to students from all faculties'))
    );

    if (!generalMatch) throw new Error('Failed to match generic awards (Empty Faculty Logic check)');
}

async function testCriticalFilterExclusion() {
    // Student who should fail critical checks (Wrong University)
    const student = {
        university: 'SFU', // Wrong Univ
        campus: 'Burnaby',
        year: 1,
        faculty: 'Science',
        gpa: 4.0,
        citizenshipStatus: 'Canadian Citizen'
    };

    const res = await fetch(`${BASE_URL}/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });

    const data = await res.json();
    if (data.matches.length > 0) {
        // Only University-agnostic awards should match, but our system is UBC specific mostly
        // If we have UBC awards, they should NOT match
        const ubcMatch = data.matches.find(m => m.award.university === 'UBC');
        if (ubcMatch) throw new Error('Matched UBC award despite being from SFU');
    }
}

async function testValidation() {
    // Missing required fields
    const student = {
        university: 'UBC'
        // Missing campus, year, etc.
    };

    const res = await fetch(`${BASE_URL}/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });

    if (res.status !== 400) throw new Error(`Expected 400 Bad Request, got ${res.status}`);
}

async function runAll() {
    console.log(`${colors.bold}Starting Integration Tests against ${BASE_URL}${colors.reset}\n`);

    let passed = 0;
    let total = 0;

    const tests = [
        { name: 'Health Check', fn: testHealth },
        { name: 'Perfect Match Scenario', fn: testMatchPerfect },
        { name: 'Empty Arrays / Generic Logic', fn: testEmptyArraysEdgeCase },
        { name: 'Critical Filter Exclusion', fn: testCriticalFilterExclusion },
        { name: 'Input Validation', fn: testValidation }
    ];

    for (const test of tests) {
        total++;
        if (await runTest(test.name, test.fn)) passed++;
    }

    console.log(`\n${colors.bold}Summary: ${passed}/${total} Tests Passed${colors.reset}`);

    if (passed !== total) process.exit(1);
}

runAll();
