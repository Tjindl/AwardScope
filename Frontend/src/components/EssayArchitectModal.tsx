import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Sparkles, PenTool, BookOpen } from "lucide-react";
import { EssayGuide, MatchResult } from "../types";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface EssayArchitectModalProps {
    guide: EssayGuide;
    match: MatchResult;
    onClose: () => void;
}

const EssayArchitectModal: React.FC<EssayArchitectModalProps> = ({
    guide,
    match,
    onClose,
}) => {
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            setMounted(false);
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleCopy = () => {
        const text = `
ESSAY GUIDE: ${match.award.name}

HOOK:
${guide.hook}

KEY TALKING POINTS:
${guide.talkingPoints.map((p) => `- ${p}`).join("\n")}

STRUCTURE:
${guide.structure
                .map((s) => `[${s.section}]\n${s.guidance}`)
                .join("\n\n")}
`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-[85vh] flex flex-col relative z-10"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white shrink-0">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <PenTool className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-display">
                                    Essay Architect
                                </h3>
                                <p className="text-white/80 text-sm mt-1">
                                    AI-powered outline for {match.award.name}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto flex-grow space-y-8 custom-scrollbar bg-slate-50/50 dark:bg-slate-900/50">
                    {/* Hook Section */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-2">
                            <Sparkles size={16} /> The Hook
                        </h4>
                        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50 p-4 rounded-xl text-slate-800 dark:text-slate-200 italic leading-relaxed">
                            "{guide.hook}"
                        </div>
                    </div>

                    {/* Talking Points */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                            <Check size={16} /> Key Talking Points
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {guide.talkingPoints.map((point, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Detailed Structure */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                            <BookOpen size={16} /> Suggested Structure
                        </h4>
                        <div className="space-y-4 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                            {guide.structure.map((section, idx) => (
                                <div key={idx} className="relative pl-12">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full font-bold text-slate-500 dark:text-slate-400 text-sm z-10">
                                        {idx + 1}
                                    </div>

                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                                        <h5 className="font-bold text-slate-800 dark:text-white mb-2">
                                            {section.section}
                                        </h5>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {section.guidance}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-end gap-3 shrink-0">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium shadow-sm"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? "Copied!" : "Copy Guide"}
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white/90 transition-colors font-bold shadow-lg"
                    >
                        Got it
                    </button>
                </div>
            </motion.div>
        </div>
    );

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {modalContent}
        </AnimatePresence>,
        document.body
    );
};

export default EssayArchitectModal;
