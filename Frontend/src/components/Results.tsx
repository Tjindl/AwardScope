import { useState } from 'react';
import { MatchResult, AIAnalysis, StudentFormData } from '../types';
import ChanceBadge from './ChanceBadge';
import AnalysisModal from './AnalysisModal';
import axios from 'axios';
import { Check, AlertCircle, FileText, ChevronRight, RefreshCw, BarChart2 } from 'lucide-react';

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

const Results: React.FC<ResultsProps> = ({ matches, categorized, studentData, onReset }) => {
  const [analyses, setAnalyses] = useState<Record<string, AIAnalysis>>({});
  const [loadingAnalysis, setLoadingAnalysis] = useState<Record<string, boolean>>({});
  const [selectedAnalysis, setSelectedAnalysis] = useState<AIAnalysis | null>(null);
  const [analyzingAll, setAnalyzingAll] = useState(false);

  const formatAmount = (amount: number | string): string => {
    if (typeof amount === 'string') return amount;
    return `$${amount.toLocaleString()}`;
  };

  const analyzeAward = async (awardId: string) => {
    if (analyses[awardId]) {
      setSelectedAnalysis(analyses[awardId]);
      return;
    }

    setLoadingAnalysis(prev => ({ ...prev, [awardId]: true }));

    try {
      const defaultUrl = import.meta.env.PROD ? '' : 'http://localhost:3001';
      const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;
      const response = await axios.post<AIAnalysis>(`${apiUrl}/api/analyze-chance`, {
        studentData,
        awardId
      });

      const analysis = response.data;
      setAnalyses(prev => ({ ...prev, [awardId]: analysis }));
      setSelectedAnalysis(analysis);
    } catch (error) {
      console.error('Error analyzing award:', error);
    } finally {
      setLoadingAnalysis(prev => ({ ...prev, [awardId]: false }));
    }
  };

  const analyzeTopMatches = async () => {
    setAnalyzingAll(true);
    const topAwards = matches.slice(0, 5);

    for (const match of topAwards) {
      if (!analyses[match.award.id]) {
        setLoadingAnalysis(prev => ({ ...prev, [match.award.id]: true }));
        try {
          const defaultUrl = import.meta.env.PROD ? '' : 'http://localhost:3001';
          const apiUrl = import.meta.env.VITE_API_URL || defaultUrl;
          const response = await axios.post<AIAnalysis>(`${apiUrl}/api/analyze-chance`, {
            studentData,
            awardId: match.award.id
          });
          setAnalyses(prev => ({ ...prev, [match.award.id]: response.data }));
        } catch (error) {
          console.error('Error analyzing award:', error);
        } finally {
          setLoadingAnalysis(prev => ({ ...prev, [match.award.id]: false }));
        }
      }
    }
    setAnalyzingAll(false);
  };

  const renderMatchCard = (matchResult: MatchResult) => {
    const { award, matchScore, matchReasons, missingRequirements } = matchResult;
    const analysis = analyses[award.id];
    const isLoading = loadingAnalysis[award.id];

    let matchLevelColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    let matchLevelText = 'Perfect Match';

    if (matchScore < 90 && matchScore >= 60) {
      matchLevelColor = 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      matchLevelText = 'Good Match';
    } else if (matchScore < 60) {
      matchLevelColor = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      matchLevelText = 'Partial Match';
    }

    return (
      <div key={award.id} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{award.name}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="inline-block bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs px-2.5 py-1 rounded-md font-medium uppercase tracking-wider">
                {award.type}
              </span>
              <span className={`inline-block border text-xs px-2.5 py-1 rounded-md font-medium uppercase tracking-wider ${matchLevelColor}`}>
                {matchLevelText} ({matchScore}%)
              </span>
              <ChanceBadge
                analysis={analysis}
                loading={isLoading}
                onClick={() => analyzeAward(award.id)}
              />
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">{formatAmount(award.amount)}</div>
            {award.applicationDeadline && (
              <div className="text-xs text-slate-500 mt-1 font-mono">Due: {award.applicationDeadline}</div>
            )}
          </div>
        </div>

        <p className="text-slate-400 mb-6 leading-relaxed">{award.description}</p>

        {matchReasons.length > 0 && (
          <div className="mb-4 bg-emerald-900/10 rounded-xl p-4 border border-emerald-500/10">
            <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <Check size={16} strokeWidth={3} /> Why you match:
            </h4>
            <ul className="space-y-2">
              {matchReasons.map((reason, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start">
                  <span className="text-emerald-500/50 mr-2 mt-1">●</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        {missingRequirements.length > 0 && (
          <div className="mb-4 bg-amber-900/10 rounded-xl p-4 border border-amber-500/10">
            <h4 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
              <AlertCircle size={16} strokeWidth={3} /> Requirements you may not meet:
            </h4>
            <ul className="space-y-2">
              {missingRequirements.map((req, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start">
                  <span className="text-amber-500/50 mr-2 mt-1">●</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {award.requiredDocumentation && award.requiredDocumentation.length > 0 && (
          <div className="mt-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
            <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
              <FileText size={16} /> Required Documentation:
            </h4>
            <ul className="space-y-2">
              {award.requiredDocumentation.map((doc, idx) => (
                <li key={idx} className="text-sm text-slate-400">• {doc}</li>
              ))}
            </ul>
          </div>
        )}

        {award.sourceUrl && (
          <div className="mt-6 flex justify-end">
            <a
              href={award.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link transition-colors"
            >
              View Details <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-center mb-0 gap-6 relative z-10">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Matches</span></h2>
            <p className="text-slate-400 text-lg">
              Found <span className="text-white font-bold">{matches.length}</span> opportunit{matches.length !== 1 ? 'y' : 'ies'} for you!
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={analyzeTopMatches}
              disabled={analyzingAll}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              {analyzingAll ? (
                <>Analyzing...</>
              ) : (
                <>
                  <BarChart2 size={18} /> AI Analyze Top 5
                </>
              )}
            </button>
            <button
              onClick={onReset}
              className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <RefreshCw size={18} /> Start Over
            </button>
          </div>
        </div>

        {matches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-4xl font-black text-emerald-400 mb-1">{categorized.perfect.length}</div>
              <div className="text-sm font-bold text-emerald-200/70 uppercase tracking-widest">Perfect Matches</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-4xl font-black text-blue-400 mb-1">{categorized.good.length}</div>
              <div className="text-sm font-bold text-blue-200/70 uppercase tracking-widest">Good Matches</div>
            </div>
            <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-4xl font-black text-amber-400 mb-1">{categorized.partial.length}</div>
              <div className="text-sm font-bold text-amber-200/70 uppercase tracking-widest">Partial Matches</div>
            </div>
          </div>
        )}
      </div>

      {matches.length === 0 ? (
        <div className="bg-slate-800/50 border border-slate-700/50 shadow-xl rounded-3xl p-16 text-center backdrop-blur-md">
          <div className="text-slate-600 text-7xl mb-6 opacity-50">🔍</div>
          <h3 className="text-2xl font-bold text-slate-200 mb-3">No matches found</h3>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            We couldn't find any scholarships matching your profile.
            Try adjusting your year or faculty in the form.
          </p>
        </div>
      ) : (
        <div className="space-y-12 pb-20">
          {categorized.perfect.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                <span className="bg-emerald-500/20 p-2 rounded-lg border border-emerald-500/30">✨</span> Perfect Matches
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {categorized.perfect.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.good.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="bg-blue-500/20 p-2 rounded-lg border border-blue-500/30">👍</span> Good Matches
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {categorized.good.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.partial.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                <span className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/30">🤔</span> Partial Matches
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
    </div>
  );
};

export default Results;
