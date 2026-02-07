import { useState } from 'react';
import StudentForm from './components/StudentForm';
import Results from './components/Results';
import { StudentFormData, MatchResult } from './types';
import axios from 'axios';

interface MatchResponse {
  totalMatches: number;
  matches: MatchResult[];
  categorized: {
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  };
}

function App() {
  const [matches, setMatches] = useState<MatchResult[] | null>(null);
  const [categorized, setCategorized] = useState<{
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: StudentFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<MatchResponse>(
        'http://localhost:3001/api/match',
        formData
      );

      setMatches(response.data.matches);
      setCategorized(response.data.categorized);
    } catch (err) {
      console.error('Error fetching matches:', err);
      setError('Failed to find matches. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMatches(null);
    setCategorized(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-blue-900 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">UBC Financial Aid Finder</h1>
          <p className="text-blue-200 mt-2">Discover scholarships and bursaries you're eligible for</p>
        </div>
      </header>

      <main className="py-8">
        {error && (
          <div className="max-w-4xl mx-auto mb-4 px-6">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          </div>
        )}

        {matches === null || categorized === null ? (
          <StudentForm onSubmit={handleFormSubmit} loading={loading} />
        ) : (
          <Results matches={matches} categorized={categorized} onReset={handleReset} />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Data sourced from UBC Student Services. For official information, visit{' '}
            <a
              href="https://students.ubc.ca/finances/awards-scholarships-bursaries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              students.ubc.ca
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This tool provides guidance only. Always verify eligibility requirements directly with UBC.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
