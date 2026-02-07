# AwardScope

A full-stack web application that helps UBC students discover scholarships, bursaries, and financial aid opportunities they're eligible for.

## Features

- **Smart Matching Algorithm**: Matches students with relevant financial aid based on academic info, demographics, and affiliations
- **Comprehensive Database**: Includes scholarships, bursaries, and grants from UBC's official sources
- **User-Friendly Interface**: Clean, modern React interface with Tailwind CSS
- **Categorized Results**: Awards are categorized as Perfect Match, Good Match, or Partial Match
- **Detailed Information**: Each award shows amount, eligibility criteria, required documentation, and application deadlines

## Tech Stack

### Frontend

- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Axios (HTTP client)

### Backend

- Node.js
- Express.js
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

## Data Sources

The application uses data extracted from official UBC Student Services pages.

## Matching Algorithm

The matching algorithm evaluates each award against the student's profile based on:

1. **Required criteria** (must match or award is excluded):

   - Citizenship status
   - Campus
   - Specific affiliations
   - Indigenous status (if required)
   - Disability status (if required)
   - Student loan requirement

2. **Preferred criteria** (affects match score):
   - Year of study
   - Faculty/program
   - GPA requirements
   - Gender
   - Financial need
   - Geographic location

Match scores range from 0-100, with higher scores indicating better matches.

## Future Enhancements

- Add more awards from external sources (provincial, federal, private organizations)
- Implement user accounts to save profiles and track applications
- Add email notifications for application deadlines
- Include ML-based recommendations based on similar successful applicants
- Add filtering and sorting options for results
- Create admin panel for updating award database
- Add PDF export of eligible awards
- Integrate with UBC's official award application system

## Disclaimer

This tool provides guidance only and is not officially affiliated with UBC. Always verify eligibility requirements directly with UBC Student Services. Award information is current as of February 2026 and may change.
