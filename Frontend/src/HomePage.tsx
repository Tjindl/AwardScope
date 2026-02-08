import React from "react";
import {
    ArrowRight,
    Award,
    Sparkles,
    Star,
    Zap,
    TrendingUp,
    CheckCircle2,
    PenTool,
    UserCircle
} from "lucide-react";
import UniversitySelection from "./components/UniversitySelection";
import { motion } from "framer-motion";

interface HomePageProps {
    onNavigate: (university: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50, damping: 20 },
        },
    };

    return (
        /* This container provides the background gradient and centers content */
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-950">
            {/* Background Image with Pan-Zoom Animation - KEPT AS REQUESTED */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-pan-zoom opacity-20 dark:opacity-40"
                style={{
                    backgroundImage: "url('/Gemini_Generated_Image_qdhi4yqdhi4yqdhi.png')",
                }}
            />

            {/* Overlay Gradients */}
            <div className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-slate-950/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.6),rgba(2,6,23,0))]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.5)),linear-gradient(90deg,rgba(255,255,255,0.6),transparent)] opacity-20 dark:opacity-10" />

            {/* Floating Elements - KEPT AS REQUESTED */}
            <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/10 animate-float-slow" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10 animate-float-slow" style={{ animationDelay: '2s' }} />
            <div className="pointer-events-none absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10 animate-float-slow" style={{ animationDelay: '5s' }} />
            <div className="pointer-events-none absolute bottom-1/4 -right-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-500/10 animate-float-slow" style={{ animationDelay: '7s' }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full max-w-7xl"
            >
                {/* Main Content Card */}
                <div className="rounded-[40px] border border-white/40 bg-white/60 p-6 md:p-12 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.3)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60 relative overflow-hidden group">
                    {/* Gloss Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                    <div className="relative z-10">
                        {/* Header Row */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-6 mb-16">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
                                        <Award className="h-7 w-7" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-display text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                                        AwardScope
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.3em] font-medium text-slate-500 dark:text-slate-400">
                                        Financial Aid AI
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300 backdrop-blur-md"
                            >
                                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                For BC Students
                            </motion.div>
                        </motion.div>

                        <div className="grid gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                            <div className="text-center lg:text-left">
                                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-6 dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-300">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    AI-Powered Scholarship Search
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-black leading-[0.9] text-slate-900 dark:text-white tracking-tight mb-8">
                                    Unlock your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 saturate-150">
                                        Funding Potential
                                    </span>
                                </motion.h1>

                                <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed opacity-90">
                                    Stop searching, start applying. Our AI matches you with high-value awards and even writes your essay outlines.
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <motion.a
                                        href="#get-started"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                                    >
                                        Get Matched Now
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.a>
                                    <motion.a
                                        href="#features"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-xl shadow-slate-200/40 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:shadow-none dark:hover:bg-slate-700"
                                    >
                                        How it works
                                    </motion.a>
                                </motion.div>
                            </div>

                            {/* Hero Visual */}
                            <motion.div variants={itemVariants} className="relative perspective-1000 group">
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotateZ: [0, 1, 0, -1, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10 rounded-[3rem] border border-white/50 bg-white/40 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40 transform-style-3d group-hover:rotate-y-12 transition-transform duration-700"
                                >
                                    {/* Mock Card */}
                                    <div className="rounded-[2rem] bg-white shadow-xl overflow-hidden border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                                        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-600 p-6 flex flex-col justify-between relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                            <div className="flex justify-between items-start text-white relative z-10">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-bold uppercase tracking-wider">Scholarship</div>
                                                <div className="text-2xl font-black tracking-tight">$25,000</div>
                                            </div>
                                            <div className="text-white relative z-10">
                                                <div className="opacity-80 text-xs font-medium uppercase tracking-wider">Top Match</div>
                                                <div className="font-bold text-lg">Centennial Leadership Award</div>
                                            </div>
                                        </div>
                                        <div className="p-5 space-y-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-green-500 dark:bg-slate-700">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <div className="h-2 bg-slate-100 rounded-full w-2/3 dark:bg-slate-700" />
                                                </div>
                                            ))}
                                            <div className="pt-2">
                                                <div className="w-full h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-sm dark:bg-blue-600">Apply Now</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badge */}
                                    <motion.div
                                        animate={{ y: [0, 15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                        className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700 flex flex-col items-center gap-2"
                                    >
                                        <div className="text-3xl">🎉</div>
                                        <div className="font-bold text-slate-900 dark:text-white">98% Match</div>
                                    </motion.div>
                                </motion.div>

                                {/* Glow behind */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[80px] opacity-30 -z-10" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Features Grid ("Bento Style") */}
                <div id="features" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-2 rounded-[32px] border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles size={120} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6">
                                <PenTool className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI Essay Architect</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">Generate personalized essay outlines, hooks, and talking points in seconds.</p>

                            <div className="mt-auto bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-white/60 dark:border-slate-700 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">AI Generating...</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-slate-200 rounded dark:bg-slate-700" />
                                    <div className="h-2 w-full bg-slate-200 rounded dark:bg-slate-700" />
                                    <div className="h-2 w-5/6 bg-slate-200 rounded dark:bg-slate-700" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="rounded-[32px] border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60"
                    >
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Instant Match</h3>
                        <p className="text-slate-500 dark:text-slate-400">Real-time eligibility checking against hundreds of awards.</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="rounded-[32px] border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60"
                    >
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Smart Filters</h3>
                        <p className="text-slate-500 dark:text-slate-400">Only see what you actually qualify for. No more noise.</p>
                    </motion.div>
                </div>

                {/* How it Works Section */}
                <div className="mt-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 font-display tracking-tight">
                            Your Path to Funding
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Three simple steps to unlock thousands of dollars in unclaimed awards.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 -z-10" />

                        {[
                            {
                                step: "01",
                                title: "Create Profile",
                                desc: "Tell us about your grades, major, and background in 2 minutes.",
                                icon: <UserCircle />
                            },
                            {
                                step: "02",
                                title: "AI Analysis",
                                desc: "Our engine scans 500+ awards to find your perfect matches.",
                                icon: <Sparkles />
                            },
                            {
                                step: "03",
                                title: "Apply & Win",
                                desc: "Use our AI Essay Architect to draft winning applications instantly.",
                                icon: <Award />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-6 z-10 relative transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800 dark:border-slate-700">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="h-10 w-10 text-blue-600 dark:text-blue-400">
                                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-full h-full" })}
                                    </div>
                                    <div className="absolute -bottom-3 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full dark:bg-white dark:text-slate-900 shadow-lg border-2 border-white dark:border-slate-900">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed px-4">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 rounded-[40px] bg-white border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden dark:bg-slate-800 dark:border-slate-700 shadow-xl dark:shadow-none"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 dark:from-blue-600/20 dark:to-purple-600/20 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 font-display">
                            Ready to fund your education?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                            Join thousands of UBC students discovering millions in unclaimed financial aid.
                        </p>

                        <div id="get-started" className="bg-slate-50 dark:bg-slate-900/10 p-2 rounded-[24px] backdrop-blur-sm border border-slate-100 dark:border-slate-900/10 inline-block w-full max-w-xl">
                            <UniversitySelection onSelect={onNavigate} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}


