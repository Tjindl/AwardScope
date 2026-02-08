# AwardScope

A web application that helps BC post-secondary students discover scholarships, bursaries, and financial aid opportunities they're eligible for.

## Features

- **Smart Matching Algorithm**: Matches students with relevant financial aid based on academic info, demographics, and affiliations
- **Comprehensive Database**: Includes scholarships, bursaries, and grants from official sources
- **Categorized Results**: Awards are categorized as Perfect Match, Good Match, or Partial Match
- **Detailed Information**: Each award/bursary shows the monetary amount, eligibility criteria, required documentation, and application deadlines

## Tech Stack

### Frontend

- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Axios (HTTP client)

### Backend

- Node.js
- Express.js
- Docker
- CORS enabled for frontend communication

3. **Fill out the form** with your information:

   - Academic information (campus, year, faculty, GPA)
   - Demographic information (citizenship, gender, Indigenous status, disability)
   - Financial information (student loans, financial need)
   - Affiliations (unions, fraternities, heritage groups, etc.)

4. **Click "Find My Scholarships & Bursaries"** to see your matches

5. **Review your results**:

   - Perfect Matches (90%+ match score, no missing requirements)
   - Good Matches (60-89% match score)
   - Partial Matches (<60% match score)

6. Each award card shows:
   - Award name and amount
   - Match percentage and reasons
   - Any missing requirements
   - Required documentation
   - Application deadline (if applicable)
   - Link to official UBC page

## Future Enhancements

- Add more awards from external sources (provincial, federal, private organizations)
- Implement user accounts to save profiles and track applications
- Add email notifications for application deadlines
- Include ML-based recommendations based on similar successful applicants
- Create admin panel for updating award database
- Add PDF export of eligible awards

## Disclaimer

This tool provides guidance only and is not officially affiliated with any post-secondary institution. Always verify eligibility requirements directly. Award information is current as of February 2026 and may change.
