import { AIAnalysis } from '../types';
import { createPortal } from 'react-dom';
import { X, TrendingUp, Lightbulb } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect } from 'react';

interface AnalysisModalProps {
    analysis: AIAnalysis;
    onClose: () => void;
}

export default function AnalysisModal({ analysis, onClose }: AnalysisModalProps) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const colors = {
        HIGH: {
            bg: 'bg-emerald-950/40',
            border: 'border-emerald-900/50',
            text: 'text-emerald-400',
            badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
            progress: 'bg-emerald-500',
        },
        MEDIUM: {
            bg: 'bg-blue-950/40',
            border: 'border-blue-900/50',
            text: 'text-blue-400',
            badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            progress: 'bg-blue-500',
        },
        LOW: {
            bg: 'bg-amber-950/40',
            border: 'border-amber-900/50',
            text: 'text-amber-400',
            badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
            progress: 'bg-amber-500',
        },
    };

    const style = colors[analysis.chanceLevel];

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className={cn("px-6 py-5 border-b border-slate-800", style.bg)}>
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-white">{analysis.awardName}</h3>
                            <p className={cn("text-sm mt-1 font-medium", style.text)}>{analysis.summary}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Chance Display */}
                <div className="px-6 py-6 border-b border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">Estimated Success Rate</span>
                        <div className="flex items-center gap-3">
                            <span className={cn("px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border", style.badge)}>
                                {analysis.chanceLevel}
                            </span>
                            <div className="text-right">
                                <div className="text-3xl font-light text-white">{analysis.chancePercentage}%</div>
                            </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className={cn("h-full transition-all duration-1000 ease-out", style.progress)}
                            style={{ width: `${analysis.chancePercentage}%` }}
                        />
                    </div>
                </div>

                {/* Key Factors */}
                <div className="px-6 py-6 border-b border-slate-800">
                    <h4 className="font-semibold text-white mb-4 flex items-center text-sm uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 mr-2 text-cyan-500" />
                        Analysis Factors
                    </h4>
                    <ul className="space-y-3">
                        {analysis.keyFactors.map((factor, index) => (
                            <li key={index} className="flex items-start text-sm">
                                <span className={cn(
                                    "mr-3 mt-0.5",
                                    factor.startsWith('✓') ? 'text-emerald-500' : factor.startsWith('✗') ? 'text-red-500' : 'text-slate-500'
                                )}>
                                    {factor.startsWith('✓') || factor.startsWith('✗') ? '' : '•'}
                                    {factor.startsWith('✓') && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />}
                                    {factor.startsWith('✗') && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />}
                                </span>
                                <span className="text-slate-300 leading-relaxed">{factor.replace(/^[✓✗] /, '')}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advice */}
                <div className="px-6 py-6">
                    <h4 className="font-semibold text-white mb-4 flex items-center text-sm uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4 mr-2 text-amber-400" />
                        AI Recommendation
                    </h4>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                        <p className="text-slate-300 text-sm leading-relaxed">{analysis.advice}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                    <button
                        onClick={onClose}
                        className="py-2.5 px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700 text-sm"
                    >
                        Close Analysis
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
