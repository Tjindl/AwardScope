import { useState } from 'react';
import StudentForm from '../components/StudentForm';
import Results from '../components/Results';
import { StudentFormData, MatchResult } from '../types';
import { CosmicBackground } from '../components/CosmicBackground';
import axios from 'axios';
import { GraduationCap, ArrowLeft } from 'lucide-react';

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
    <div className="h-full relative font-sans text-slate-200 selection:bg-cyan-500/30 selection:text-white overflow-hidden">
      <CosmicBackground />

      {/* Professional Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10 backdrop-blur-md">
            <GraduationCap className="text-white w-4 h-4" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-300 uppercase">AwardScope</span>
        </div>
        <button
          onClick={onBack}
          className="pointer-events-auto group flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>
      </header>

      <main className="relative z-10 h-full flex flex-col items-center pt-24 pb-12 px-4 md:px-8 overflow-y-auto">
        {error && (
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up w-full">
            <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> {error}
            </div>
          </div>
        )}

        <div className="w-full max-w-5xl mx-auto">
          {matches === null || categorized === null || studentData === null ? (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10 space-y-2">
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Find your funding.</h1>
                <p className="text-slate-400 text-lg font-light max-w-md mx-auto">Discover scholarships and bursaries tailored to your unique profile.</p>
              </div>
              <StudentForm onSubmit={handleFormSubmit} loading={loading} />
            </div>
          ) : (
            <div className="animate-fade-in-up w-full">
              <Results matches={matches} categorized={categorized} studentData={studentData} onReset={handleReset} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 md:bottom-6 w-full text-center pointer-events-none z-0">
        <p className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">Built for UBC Students</p>
      </footer>
    </div>
  );
}