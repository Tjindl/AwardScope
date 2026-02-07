import { useState } from 'react';
import StudentForm from '../components/StudentForm';
import Results from '../components/Results';
import { StudentFormData, MatchResult } from '../types';
import { CosmicBackground } from '../components/CosmicBackground';
import axios from 'axios';
import { GraduationCap } from 'lucide-react';

interface MatchResponse {
  totalMatches: number;
  matches: MatchResult[];
  categorized: {
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  };
}

interface FormPageProps {
  onBack: () => void;
}

export default function FormPage({ onBack }: FormPageProps) {
  const [matches, setMatches] = useState<MatchResult[] | null>(null);
  const [categorized, setCategorized] = useState<{
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  } | null>(null);
  const [studentData, setStudentData] = useState<StudentFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: StudentFormData) => {
    setLoading(true);
    setError(null);

    try {
      // In production, default to relative path (empty string)
      const defaultUrl = import.meta.env.PROD ? '' : 'http://localhost:3001';
      const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;

      const response = await axios.post<MatchResponse>(
        `${apiUrl}/api/match`,
        formData
      );

      setMatches(response.data.matches);
      setCategorized(response.data.categorized);
      setStudentData(formData);
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
    setStudentData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen relative font-sans text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden">
      <CosmicBackground />

      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">UBC Financial Aid Finder</h1>
            </div>
          </div>
          <button
            onClick={onBack}
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors px-4 py-2 hover:bg-white/5 rounded-lg border border-transparent hover:border-slate-700"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="pt-28 pb-12 px-4 relative z-0">
        {error && (
          <div className="max-w-4xl mx-auto mb-8 px-6 animate-fade-in-up">
            <div className="bg-red-500/10 border border-red-500/40 text-red-200 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-3">
              <span className="text-red-500 text-xl">⚠️</span> {error}
            </div>
          </div>
        )}

        {matches === null || categorized === null || studentData === null ? (
          <StudentForm onSubmit={handleFormSubmit} loading={loading} />
        ) : (
          <div className="animate-fade-in-up backdrop-blur-sm bg-slate-900/30 rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl">
            <Results matches={matches} categorized={categorized} studentData={studentData} onReset={handleReset} />
          </div>
        )}
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2">
            Data sourced from <span className="text-slate-400">UBC Student Services</span>.
          </p>
          <div className="flex justify-center gap-4 mt-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="hover:text-cyan-400">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}