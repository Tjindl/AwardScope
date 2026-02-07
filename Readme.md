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

## Project Structure

```
ubc-financial-aid-app/
├── backend/
│   ├── server.js              # Express server with matching API
│   ├── data/
│   │   └── awards.js         # Awards database
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.tsx    # Form component
│   │   │   └── Results.tsx        # Results display component
│   │   ├── types/
│   │   │   └── index.ts           # TypeScript type definitions
│   │   ├── data/
│   │   │   └── awards.ts          # Frontend awards data
│   │   ├── utils/
│   │   │   └── matching.ts        # Matching algorithm
│   │   ├── App.tsx                # Main app component
│   │   ├── main.tsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm start
```

The backend API will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Usage

1. **Start both servers** (backend on port 3001, frontend on port 3000)

2. **Open your browser** and navigate to `http://localhost:3000`

3. **Fill out the form** with your information:

   - Academic information (campus, year, faculty, GPA)
   - Demographic information (citizenship, gender, Indigenous status, disability)
   - Financial information (student loans, financial need)
   - Optional affiliations (unions, fraternities, heritage groups, etc.)

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

The application uses data extracted from official UBC Student Services pages:

- [Affiliation Scholarships](https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/)
- [UBC Bursary Program](https://students.ubc.ca/finances/awards-scholarships-bursaries/ubc-bursary-program/)
- [Awards for Indigenous Students](https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-indigenous/)
- [Awards for Students with Disabilities](https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-disabilities/)
- And more...

## API Endpoints

### GET /api/health

Health check endpoint

- **Response**: `{ status: 'ok', message: 'UBC Financial Aid API is running' }`

### GET /api/awards

Get all available awards

- **Response**: Array of Award objects

### POST /api/match

Match a student profile to eligible awards

- **Request Body**: StudentFormData object
- **Response**:

```json
{
  "totalMatches": 5,
  "matches": [...],
  "categorized": {
    "perfect": [...],
    "good": [...],
    "partial": [...]
  },
  "studentData": {...}
}
```

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

## Contributing

This project was created to help UBC students find financial aid opportunities. To add more awards or improve the matching algorithm, please:

1. Verify award information from official UBC sources
2. Follow the existing data structure in `awards.ts/awards.js`
3. Test the matching algorithm with various student profiles
4. Update documentation as needed

## Disclaimer

This tool provides guidance only and is not officially affiliated with UBC. Always verify eligibility requirements directly with UBC Student Services. Award information is current as of February 2026 and may change.

## License

MIT License - feel free to use and modify for educational purposes.

## Contact

For questions or suggestions, please contact your UBC Enrolment Services Advisor or visit [students.ubc.ca](https://students.ubc.ca/finances/awards-scholarships-bursaries/).
