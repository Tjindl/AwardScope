import { useState } from 'react';
import { MatchResult, AIAnalysis, StudentFormData } from '../types';
import ChanceBadge from './ChanceBadge';
import AnalysisModal from './AnalysisModal';
import axios from 'axios';

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
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
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
          const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
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

    let matchLevelColor = 'bg-green-100 text-green-800';
    let matchLevelText = 'Perfect Match';

    if (matchScore < 90 && matchScore >= 60) {
      matchLevelColor = 'bg-blue-100 text-blue-800';
      matchLevelText = 'Good Match';
    } else if (matchScore < 60) {
      matchLevelColor = 'bg-yellow-100 text-yellow-800';
      matchLevelText = 'Partial Match';
    }

    return (
      <div key={award.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{award.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                {award.type}
              </span>
              <span className={`inline-block text-xs px-2 py-1 rounded ${matchLevelColor}`}>
                {matchLevelText} ({matchScore}%)
              </span>
              {/* AI Chance Badge */}
              <ChanceBadge
                analysis={analysis}
                loading={isLoading}
                onClick={() => analyzeAward(award.id)}
              />
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-900">{formatAmount(award.amount)}</div>
            {award.applicationDeadline && (
              <div className="text-xs text-gray-500 mt-1">Due: {award.applicationDeadline}</div>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-4">{award.description}</p>

        {matchReasons.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-green-700 mb-2">✓ Why you match:</h4>
            <ul className="space-y-1">
              {matchReasons.map((reason, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        {missingRequirements.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-orange-700 mb-2">⚠ Requirements you may not meet:</h4>
            <ul className="space-y-1">
              {missingRequirements.map((req, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {award.requiredDocumentation && award.requiredDocumentation.length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">📄 Required Documentation:</h4>
            <ul className="space-y-1">
              {award.requiredDocumentation.map((doc, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {doc}</li>
              ))}
            </ul>
          </div>
        )}

        {award.sourceUrl && (
          <div className="mt-4">
            <a
              href={award.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              View more details →
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Your Matches</h2>
            <p className="text-gray-600 mt-1">
              Found {matches.length} scholarship{matches.length !== 1 ? 's' : ''} and bursary opportunities for you!
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={analyzeTopMatches}
              disabled={analyzingAll}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-2 px-4 rounded transition duration-200 flex items-center"
            >
              {analyzingAll ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI Analyze Top 5
                </>
              )}
            </button>
            <button
              onClick={onReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-200"
            >
              Start Over
            </button>
          </div>
        </div>

        {matches.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-700">{categorized.perfect.length}</div>
              <div className="text-sm text-gray-600">Perfect Matches</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-700">{categorized.good.length}</div>
              <div className="text-sm text-gray-600">Good Matches</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-700">{categorized.partial.length}</div>
              <div className="text-sm text-gray-600">Partial Matches</div>
            </div>
          </div>
        )}
      </div>

      {matches.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-12 text-center">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No matches found</h3>
          <p className="text-gray-600">
            We couldn't find any scholarships or bursaries that match your current profile.
            Try adjusting your responses or check back later for new opportunities.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {categorized.perfect.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">✨ Perfect Matches</h3>
              <div className="space-y-4">
                {categorized.perfect.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.good.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 mt-8">👍 Good Matches</h3>
              <div className="space-y-4">
                {categorized.good.map(renderMatchCard)}
              </div>
            </div>
          )}

          {categorized.partial.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4 mt-8">🤔 Partial Matches</h3>
              <p className="text-gray-600 mb-4">
                These awards may have some requirements you don't meet, but you might still be eligible. Review carefully.
              </p>
              <div className="space-y-4">
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
