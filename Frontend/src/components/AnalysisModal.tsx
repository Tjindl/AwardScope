import { AIAnalysis } from "../types";

interface AnalysisModalProps {
  analysis: AIAnalysis;
  onClose: () => void;
}

export default function AnalysisModal({
  analysis,
  onClose,
}: AnalysisModalProps) {
  const colors = {
    HIGH: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      badge: "bg-green-100 text-green-800",
    },
    MEDIUM: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
      badge: "bg-yellow-100 text-yellow-800",
    },
    LOW: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      badge: "bg-red-100 text-red-800",
    },
  };

    const style = colors[analysis.chanceLevel as keyof typeof colors];

    // Map backend levels to display labels
    const displayLabels: Record<string, string> = {
        HIGH: 'Likely',
        MEDIUM: 'Moderate',
        LOW: 'Low',
    };

    const displayLabel = displayLabels[analysis.chanceLevel] || analysis.chanceLevel;

    // ...existing code...
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className={`${style.bg} ${style.border} border-b px-6 py-4 rounded-t-xl`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{analysis.awardName}</h3>
                            <p className={`text-sm ${style.text} mt-1`}>{analysis.summary}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Chance Display */}
                <div className="px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">Your Chances</span>
                        <div className="flex items-center gap-3">
                            <span className={`px-4 py-2 rounded-lg font-bold text-xl ${style.badge}`}>
                                {displayLabel}
                            </span>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">{analysis.chancePercentage}%</div>
                                <div className="text-xs text-gray-500">estimated</div>
                            </div>
                        </div>
                    </div>

        {/* Chance Display */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Your Chances</span>
            <div className="flex items-center gap-3">
              <span
                className={`px-4 py-2 rounded-lg font-bold text-xl ${style.badge}`}
              >
                {analysis.chanceLevel}
              </span>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {analysis.chancePercentage}%
                </div>
                <div className="text-xs text-gray-500">estimated</div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                analysis.chanceLevel === "HIGH"
                  ? "bg-green-500"
                  : analysis.chanceLevel === "MEDIUM"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${analysis.chancePercentage}%` }}
            />
          </div>
        </div>

        {/* Key Factors */}
        <div className="px-6 py-4 border-b">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Key Factors
          </h4>
          <ul className="space-y-2">
            {analysis.keyFactors.map((factor, index) => (
              <li key={index} className="flex items-start">
                <span
                  className={`mr-2 ${
                    factor.startsWith("✓")
                      ? "text-green-500"
                      : factor.startsWith("✗")
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  {factor.startsWith("✓") || factor.startsWith("✗") ? "" : "•"}
                </span>
                <span className="text-gray-700">{factor}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Advice */}
        <div className="px-6 py-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Personalized Advice
          </h4>
          <ul className="space-y-2 text-gray-700">
            {analysis.advice.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Got it!
          </button>
        </div>
    );
}
