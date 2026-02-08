import { useState } from 'react';
import { MatchResult, AIAnalysis, StudentFormData } from '../types';
import ChanceBadge from './ChanceBadge';
import AnalysisModal from './AnalysisModal';
import axios from 'axios';
import { Check, AlertCircle, RefreshCw, BarChart2, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

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

    let matchColor = 'emerald';
    let matchText = 'Perfect Match';

    if (matchScore < 90 && matchScore >= 60) {
      matchColor = 'blue';
      matchText = 'Good Match';
    } else if (matchScore < 60) {
      matchColor = 'amber';
      matchText = 'Partial Match';
    }

    return (
      <div key={award.id} className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:border-slate-600 hover:shadow-lg hover:shadow-black/20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-slate-400">{award.type}</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className={cn(
                "px-2 py-0.5 rounded border",
                matchColor === 'emerald' ? "bg-emerald-950/30 text-emerald-400 border-emerald-900/50" :
                  matchColor === 'blue' ? "bg-blue-950/30 text-blue-400 border-blue-900/50" :
                    "bg-amber-950/30 text-amber-400 border-amber-900/50"
              )}>
                {matchText} {matchScore}%
              </span>
            </div>
            <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">{award.name}</h3>
          </div>

          <div className="flex flex-col items-end flex-shrink-0">
            <div className="text-2xl font-medium text-white flex items-center gap-1">
              <span className="text-slate-500 text-lg font-normal">$</span>{formatAmount(award.amount).replace('$', '')}
            </div>
            {award.applicationDeadline && (
              <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                <Calendar size={12} /> {award.applicationDeadline}
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-800 pl-4">{award.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {matchReasons.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-300 flex items-center gap-2 text-xs uppercase tracking-wider">
                <Check size={14} className="text-emerald-500" /> Matched Criteria
              </h4>
              <ul className="space-y-2">
                {matchReasons.map((reason, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start gap-2 pl-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50 mt-1.5 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {missingRequirements.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-300 flex items-center gap-2 text-xs uppercase tracking-wider">
                <AlertCircle size={14} className="text-amber-500" /> Missing Requirements
              </h4>
              <ul className="space-y-2">
                {missingRequirements.map((req, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start gap-2 pl-1">
                    <span className="w-1 h-1 rounded-full bg-amber-500/50 mt-1.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
          {/* Actions */}
          <div className="flex items-center gap-3">
            <ChanceBadge
              analysis={analysis}
              loading={isLoading}
              onClick={() => analyzeAward(award.id)}
            />
          </div>

          {award.sourceUrl && (
            <a
              href={award.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              Apply Now <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">

      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-3xl font-light text-white mb-2">My Opportunities</h2>
          <p className="text-slate-400 text-sm">
            We found <span className="text-white font-semibold">{matches.length}</span> matches based on your profile.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={analyzeTopMatches}
            disabled={analyzingAll}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/20 disabled:opacity-50"
          >
            {analyzingAll ? (
              <>Analyzing...</>
            ) : (
              <>
                <BarChart2 size={16} /> AI Analyze Top 5
              </>
            )}
          </button>
          <button
            onClick={onReset}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 border border-slate-700"
          >
            <RefreshCw size={16} /> New Search
          </button>
        </div>
      </div>

      {matches.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="text-3xl font-light text-emerald-400">{categorized.perfect.length}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Perfect</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="text-3xl font-light text-blue-400">{categorized.good.length}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Good</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="text-3xl font-light text-amber-400">{categorized.partial.length}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Partial</div>
          </div>
        </div>
      )}

      {matches.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-16 text-center">
          <div className="text-slate-700 mb-6 mx-auto"><AlertCircle size={48} className="mx-auto" /></div>
          <h3 className="text-xl font-medium text-white mb-2">No matches found</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            We couldn't find any scholarships matching your profile.
            Try adjusting your criteria.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {categorized.perfect.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-emerald-500 uppercase tracking-widest flex items-center gap-2 px-1">
                Perfect Matches ({categorized.perfect.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {categorized.perfect.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.good.length > 0 && (
            <div className="space-y-4 mt-8">
              <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-widest flex items-center gap-2 px-1">
                Good Matches ({categorized.good.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {categorized.good.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.partial.length > 0 && (
            <div className="space-y-4 mt-8">
              <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-widest flex items-center gap-2 px-1">
                Partial Matches ({categorized.partial.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
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
