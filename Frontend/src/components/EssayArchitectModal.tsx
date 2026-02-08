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

const TypewriterText = ({ text, delay }: { text: string; delay: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const startDelay = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 30); // Typing speed
            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(startDelay);
    }, [text, delay]);

    return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

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
                <div className="p-6 overflow-y-auto flex-grow space-y-8 custom-scrollbar bg-[#0d1117] text-gray-300 font-mono text-sm relative">
                    {/* Retro Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {/* Hook Section */}
                    <div className="space-y-2 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                            <Sparkles size={14} /> // THE_HOOK.md
                        </h4>
                        <div className="bg-[#161b22] border border-purple-500/30 p-4 rounded-lg text-purple-200/90 italic leading-relaxed shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                            <span className="text-purple-500 mr-2 opacity-50">&gt;</span>
                            <TypewriterText text={guide.hook} delay={0} />
                        </div>
                    </div>

                    {/* Talking Points */}
                    <div className="space-y-2 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                            <Check size={14} /> // KEY_POINTS.json
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {guide.talkingPoints.map((point, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + idx * 0.2 }}
                                    className="flex items-start gap-3 bg-[#161b22] p-3 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors"
                                >
                                    <div className="text-cyan-500 mt-0.5 shrink-0 font-bold opacity-70">
                                        [{idx}]
                                    </div>
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Detailed Structure */}
                    <div className="space-y-4 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                            <BookOpen size={14} /> // STRUCTURE_BLUEPRINT
                        </h4>
                        <div className="space-y-4 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-[1px] before:bg-slate-800">
                            {guide.structure.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2 + idx * 0.3 }}
                                    className="relative pl-10"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 top-0 w-9 h-9 flex items-center justify-center bg-[#0d1117] border border-slate-700 rounded-lg font-bold text-slate-500 text-xs z-10">
                                        {idx + 1}
                                    </div>

                                    <div className="bg-[#161b22] border border-slate-800 rounded-lg p-4 hover:border-emerald-500/30 transition-all duration-300 group">
                                        <h5 className="font-bold text-emerald-300 mb-1 flex items-center gap-2">
                                            <span className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors">function</span> {section.section}()
                                        </h5>
                                        <p className="text-slate-400 text-xs leading-relaxed font-mono pl-4 border-l-2 border-slate-800 group-hover:border-emerald-500/20 transition-colors">
                                            <span className="text-slate-600 select-none mr-2">return</span>
                                            "{section.guidance}"
                                        </p>
                                    </div>
                                </motion.div>
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
