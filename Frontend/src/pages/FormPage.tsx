import { useState } from "react";
import StudentForm from "../components/StudentForm";
import Results from "../components/Results";
import { StudentFormData, MatchResult } from "../types";
import { CosmicBackground } from "../components/CosmicBackground";
import axios from "axios";
import { useEffect } from "react";

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
  selectedUniversity: string;
  onBack: () => void;
}

export default function FormPage({
  selectedUniversity,
  onBack,
}: FormPageProps) {
  const [matches, setMatches] = useState<MatchResult[] | null>(null);
  const [categorized, setCategorized] = useState<{
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  } | null>(null);
  const [studentData, setStudentData] = useState<StudentFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (formData: StudentFormData) => {
    setLoading(true);
    setError(null);

    try {
      // In production, default to relative path (empty string)
      const defaultUrl = import.meta.env.PROD ? "" : "http://localhost:3001";
      const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;

      const response = await axios.post<MatchResponse>(
        `${apiUrl}/api/match`,
        formData
      );

      setMatches(response.data.matches);
      setCategorized(response.data.categorized);
      setStudentData(formData);
    } catch (err) {
      console.error("Error fetching matches:", err);
      if (axios.isAxiosError(err)) {
        setError(`Failed to find matches: ${err.message}. ${err.response?.data?.error || ''}`);
      } else {
        setError("Failed to find matches. Please try again (Unknown Error).");
      }
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
    <div className="min-h-screen relative font-sans text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="hidden dark:block">
        <CosmicBackground />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onBack}
          >
            <img
              src="/logo-transparent.png"
              alt="AwardScope Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <button
            onClick={onBack}
            className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors px-4 py-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="pt-24 md:pt-28 pb-12 px-4 relative z-0">
        {error && (
          <div className="max-w-4xl mx-auto mb-8 px-6 animate-fade-in-up">
            <div className="bg-red-500/10 border border-red-500/40 text-red-200 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-3">
              <span className="text-red-500 text-xl">⚠️</span> {error}
            </div>
          </div>
        )}

        {matches === null || categorized === null || studentData === null ? (
          <div className="max-w-3xl mx-auto">
            <StudentForm
              university={selectedUniversity}
              onSubmit={handleFormSubmit}
              loading={loading}
            />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto animate-fade-in-up backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-10 border border-white/20 bg-white/5 dark:bg-slate-900/50 shadow-2xl relative overflow-hidden">
            {/* Glass Reflections */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

            <Results
              matches={matches}
              categorized={categorized}
              studentData={studentData}
              onReset={handleReset}
            />
          </div>
        )}
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2">
            Data sourced from{" "}
            <span className="text-slate-400">UBC Student Services</span>.
          </p>
          <div className="flex justify-center gap-4 mt-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="hover:text-cyan-400">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
