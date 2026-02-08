const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Generate an essay outline and talking points using Gemini AI
 * @param {Object} studentData - The student's profile data
 * @param {Object} award - The award details
 * @returns {Promise<Object>} - Structred essay guide
 */
async function generateEssayGuide(studentData, award) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('Gemini API Key is missing');
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const prompt = `You are an expert scholarship essay coach. A student is applying for the following award. Help them structure their essay.

STUDENT PROFILE:
- Faculty: ${studentData.faculty || 'Not specified'}
- Year: ${studentData.year || 'Not specified'}
- Program: ${studentData.program || 'Not specified'}
- GPA: ${studentData.gpa || 'Not specified'}
- Campus: ${studentData.campus}
- Citizenship: ${studentData.citizenshipStatus}
- Indigenous Status: ${studentData.indigenousStatus ? 'Yes' : 'No'}
- Has Disability: ${studentData.hasDisability ? 'Yes' : 'No'}
- Gender: ${studentData.gender || 'Not specified'}
- Financial Need: ${studentData.hasFinancialNeed ? 'Yes' : 'No'}
- Community Service/Activities: ${Object.keys(studentData.affiliations || {}).filter(k => studentData.affiliations[k]).join(', ') || 'None provided'}

AWARD DETAILS:
- Name: ${award.name}
- Description: ${award.description}
- Criteria: ${JSON.stringify(award.eligibility)}

TASK:
Generate a structured guide to help the student write a winning essay for THIS specific award.
Return ONLY valid JSON in the following format:

{
  "hook": "A compelling opening sentence or hook tailored to this award and student.",
  "talkingPoints": [
    "Specific point 1 linking student's profile to award criteria",
    "Specific point 2",
    "Specific point 3"
  ],
  "structure": [
    {
      "section": "Introduction",
      "guidance": "What to cover in the intro..."
    },
    {
      "section": "Body Paragraph 1",
      "guidance": "Focus on..."
    },
    {
      "section": "Body Paragraph 2",
      "guidance": "Discuss..."
    },
    {
      "section": "Conclusion",
      "guidance": "How to wrap up..."
    }
  ]
}
`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse the JSON response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }

        throw new Error('Could not parse AI response');
    } catch (error) {
        console.error('Gemini Essay Gen error:', error.message);
        throw error;
    }
}

module.exports = {
    generateEssayGuide
};
