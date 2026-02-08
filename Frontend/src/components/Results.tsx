import { useState } from "react";
import { motion } from "framer-motion";
import { MatchResult, AIAnalysis, StudentFormData } from "../types";
import ChanceBadge from "./ChanceBadge";
import AnalysisModal from "./AnalysisModal";
import EssayArchitectModal from "./EssayArchitectModal";
import axios from "axios";
import {
  Check,
  AlertCircle,
  ChevronRight,
  RefreshCw,
  BarChart2,
  PenTool,
  Loader2,
} from "lucide-react";
interface ResultsProps {
  matches: MatchResult[];
  categorized: {
    perfect: MatchResult[];
    good: MatchResult[];
    partial: MatchResult[];
  };
  studentData: StudentFormData;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({
  matches,
  categorized,
  studentData,
  onReset,
}) => {
  const [analyses, setAnalyses] = useState<Record<string, AIAnalysis>>({});
  const [loadingAnalysis, setLoadingAnalysis] = useState<
    Record<string, boolean>
  >({});
  const [selectedAnalysis, setSelectedAnalysis] = useState<AIAnalysis | null>(
    null
  );
  const [essayGuide, setEssayGuide] = useState<{
    guide: any;
    match: MatchResult;
  } | null>(null);
  const [loadingEssay, setLoadingEssay] = useState<Record<string, boolean>>({});
  const [analyzingAll, setAnalyzingAll] = useState(false);

  const formatAmount = (amount: number | string): string => {
    if (typeof amount === "string") return amount;
    return `$${amount.toLocaleString()}`;
  };

  const analyzeAward = async (awardId: string) => {
    if (analyses[awardId]) {
      setSelectedAnalysis(analyses[awardId]);
      return;
    }

    setLoadingAnalysis((prev) => ({ ...prev, [awardId]: true }));

    try {
      const defaultUrl = import.meta.env.PROD ? "" : "http://localhost:3001";
      const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;
      const response = await axios.post<AIAnalysis>(
        `${apiUrl}/api/analyze-chance`,
        {
          studentData,
          awardId,
        }
      );

      const analysis = response.data;
      setAnalyses((prev) => ({ ...prev, [awardId]: analysis }));
      setSelectedAnalysis(analysis);
    } catch (error) {
      console.error("Error analyzing award:", error);
    } finally {
      setLoadingAnalysis((prev) => ({ ...prev, [awardId]: false }));
    }
  };

  const analyzeTopMatches = async () => {
    setAnalyzingAll(true);
    const topAwards = matches.slice(0, 5);

    for (const match of topAwards) {
      if (!analyses[match.award.id]) {
        setLoadingAnalysis((prev) => ({ ...prev, [match.award.id]: true }));
        try {
          const defaultUrl = import.meta.env.PROD
            ? ""
            : "http://localhost:3001";
          const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;
          const response = await axios.post<AIAnalysis>(
            `${apiUrl}/api/analyze-chance`,
            {
              studentData,
              awardId: match.award.id,
            }
          );
          setAnalyses((prev) => ({ ...prev, [match.award.id]: response.data }));
        } catch (error) {
          console.error("Error analyzing award:", error);
        } finally {
          setLoadingAnalysis((prev) => ({ ...prev, [match.award.id]: false }));
        }
      }
    }
    setAnalyzingAll(false);
  };

  const generateEssay = async (match: MatchResult) => {
    const awardId = match.award.id;
    if (loadingEssay[awardId]) return;

    setLoadingEssay((prev) => ({ ...prev, [awardId]: true }));

    try {
      const defaultUrl = import.meta.env.PROD ? "" : "http://localhost:3001";
      const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;
      const response = await axios.post(
        `${apiUrl}/api/generate-essay`,
        {
          studentData,
          awardId,
        }
      );

      setEssayGuide({ guide: response.data, match });
    } catch (error) {
      console.error("Error generating essay:", error);
    } finally {
      setLoadingEssay((prev) => ({ ...prev, [awardId]: false }));
    }
  };

  const renderMatchCard = (matchResult: MatchResult) => {
    const { award, matchScore, matchReasons, missingRequirements } =
      matchResult;
    const analysis = analyses[award.id];
    const isLoading = loadingAnalysis[award.id];
    const isEssayLoading = loadingEssay[award.id];

    let matchLevelColor =
      "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30";
    let matchLevelText = "Perfect Match";

    if (matchScore < 90 && matchScore >= 60) {
      matchLevelColor = "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30";
      matchLevelText = "Good Match";
    } else if (matchScore < 60) {
      matchLevelColor = "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30";
      matchLevelText = "Partial Match";
    }

    return (
      <motion.div
        key={award.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
      >
        {/* Dynamic Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />

        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {award.name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-block bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">
                {award.type}
              </span>
              <span
                className={`inline-block border text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider ${matchLevelColor} shadow-sm`}
              >
                {matchLevelText} ({matchScore}%)
              </span>
              <ChanceBadge
                analysis={analysis}
                loading={isLoading}
                onClick={() => analyzeAward(award.id)}
              />
              <button
                onClick={() => generateEssay(matchResult)}
                disabled={isEssayLoading}
                className="inline-flex items-center gap-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs px-3 py-1.5 rounded-lg font-bold transition-colors"
              >
                {isEssayLoading ? (
                  <span className="w-3 h-3 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <PenTool size={12} />
                )}
                {isEssayLoading ? "Drafting..." : "Draft Essay"}
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 dark:from-cyan-300 dark:to-blue-400 drop-shadow-sm">
              {formatAmount(award.amount)}
            </div>
            {award.applicationDeadline && (
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono font-medium">
                Due: {award.applicationDeadline}
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg relative z-10">
          {award.description}
        </p>

        <div className="space-y-4 relative z-10">
          {matchReasons.length > 0 && (
            <div className="bg-emerald-500/10 rounded-2xl p-5 border border-emerald-500/20">
              <h4 className="text-sm font-black text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                <Check size={16} strokeWidth={4} /> Why you match
              </h4>
              <ul className="space-y-2">
                {matchReasons.map((reason, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-medium text-emerald-900/80 dark:text-emerald-100/80 flex items-start"
                  >
                    <span className="text-emerald-500 mr-2 mt-1.5 text-[0.6rem]">●</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {missingRequirements.length > 0 && (
            <div className="bg-amber-500/10 rounded-2xl p-5 border border-amber-500/20">
              <h4 className="text-sm font-black text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                <AlertCircle size={16} strokeWidth={3} /> Requirements check
              </h4>
              <ul className="space-y-2">
                {missingRequirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-medium text-amber-900/80 dark:text-amber-100/80 flex items-start"
                  >
                    <span className="text-amber-500 mr-2 mt-1.5 text-[0.6rem]">●</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {award.sourceUrl && (
          <div className="mt-8 flex justify-end relative z-10">
            <a
              href={award.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 flex items-center gap-2 group/link transition-colors"
            >
              View Official Page{" "}
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/link:bg-cyan-500 group-hover/link:text-white transition-all">
                <ChevronRight size={16} strokeWidth={3} />
              </div>
            </a>
          </div>
        )}
      </motion.div>
    );
  };



  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/5 dark:bg-slate-900/50 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden transition-all duration-500 group hover:shadow-cyan-500/10">
        {/* Glass Reflections & Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-sm">
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500">
                Matches
              </span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={analyzeTopMatches}
              disabled={analyzingAll}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.6)] hover:-translate-y-1 flex items-center gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {analyzingAll ? (
                <>
                  <Loader2 className="animate-spin" /> Analyzing...
                </>
              ) : (
                <>
                  <BarChart2 size={20} className="group-hover:scale-110 transition-transform" /> AI Analyze Top 5
                </>
              )}
            </button>
            <button
              onClick={onReset}
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center gap-3 hover:-translate-y-1"
            >
              <RefreshCw size={20} /> Start Over
            </button>
          </div>
        </div>

        {matches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2 relative z-10 transition-transform group-hover:scale-110 duration-300">
                {categorized.perfect.length}
              </div>
              <div className="text-xs font-bold text-emerald-700/70 dark:text-emerald-200/70 uppercase tracking-widest relative z-10">
                Perfect Matches
              </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2 relative z-10 transition-transform group-hover:scale-110 duration-300">
                {categorized.good.length}
              </div>
              <div className="text-xs font-bold text-blue-700/70 dark:text-blue-200/70 uppercase tracking-widest relative z-10">
                Good Matches
              </div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 text-center backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-black text-amber-600 dark:text-amber-400 mb-2 relative z-10 transition-transform group-hover:scale-110 duration-300">
                {categorized.partial.length}
              </div>
              <div className="text-xs font-bold text-amber-700/70 dark:text-amber-200/70 uppercase tracking-widest relative z-10">
                Partial Matches
              </div>
            </div>
          </div>
        )}
      </div>

      {matches.length === 0 ? (
        <div className="bg-white/50 border border-slate-200 shadow-xl rounded-3xl p-16 text-center backdrop-blur-md dark:bg-slate-800/50 dark:border-slate-700/50">
          <div className="text-slate-400 text-7xl mb-6 opacity-50 dark:text-slate-600">🔍</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3 dark:text-slate-200">
            No matches found
          </h3>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed dark:text-slate-400">
            We couldn't find any scholarships matching your profile. Try
            adjusting your year or faculty in the form.
          </p>
        </div>
      ) : (
        <div className="space-y-12 pb-20">
          {categorized.perfect.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
                <span className="bg-emerald-500/20 p-2 rounded-lg border border-emerald-500/30">
                  ✨
                </span>{" "}
                Perfect Matches
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {categorized.perfect.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.good.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-3">
                <span className="bg-blue-500/20 p-2 rounded-lg border border-blue-500/30">
                  👍
                </span>{" "}
                Good Matches
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {categorized.good.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.partial.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6 flex items-center gap-3">
                <span className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/30">
                  🤔
                </span>{" "}
                Partial Matches
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {categorized.partial.map(renderMatchCard)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Analysis Modal */}
      {selectedAnalysis && (
        <AnalysisModal
          analysis={selectedAnalysis}
          onClose={() => setSelectedAnalysis(null)}
        />
      )}

      {/* Essay Architect Modal */}
      {essayGuide && (
        <EssayArchitectModal
          guide={essayGuide.guide}
          match={essayGuide.match}
          onClose={() => setEssayGuide(null)}
        />
      )}
    </div>
  );
};

export default Results;
