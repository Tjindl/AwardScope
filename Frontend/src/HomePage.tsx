import { BarChart3, ShieldCheck, Sparkles, Star } from 'lucide-react';
import UniversitySelection from './components/UniversitySelection';

interface HomePageProps {
    onNavigate: (university: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    return (
        /* This container provides the background gradient and centers content */
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(226,232,255,0.5),rgba(224,231,255,0.2))] dark:bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.85),rgba(2,6,23,0.6),rgba(2,6,23,1))] flex flex-col items-center justify-center p-6">
            <div className="pointer-events-none absolute inset-0 mesh-bg opacity-100 mix-blend-multiply dark:mesh-bg-dark dark:mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.5)),linear-gradient(90deg,rgba(255,255,255,0.6),transparent)] opacity-20 dark:opacity-10" />
            <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/10 animate-float-slow" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10 animate-float-slow" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(30,41,59,0.55),rgba(2,6,23,0))]" />

            <div className="relative w-full max-w-6xl rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_35px_100px_-55px_rgba(30,64,175,0.55)] backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/80 md:p-12">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent dark:via-slate-600/70" />
                <div className="pointer-events-none absolute -left-10 top-8 h-20 w-40 rounded-full bg-blue-200/50 blur-2xl dark:bg-blue-500/10 animate-float-slow" />

                <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
                    <div className="text-center lg:text-left">
                        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-200 lg:mx-0">
                            Scholarships, simplified
                        </span>

                        <h1 className="font-display text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-5 leading-tight">
                            Welcome to AwardScope
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                            A full-stack web application that helps UBC students discover
                            scholarships, bursaries, and financial aid opportunities
                            they're eligible for.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 lg:justify-start">
                            <span>Smart filters</span>
                            <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                            <span>Fast matching</span>
                            <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                            <span>Personalized results</span>
                        </div>
                    </div>

                    <div className="relative w-full rounded-3xl border border-white/70 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/60 p-6 text-left shadow-[0_24px_70px_-45px_rgba(15,23,42,0.5)] dark:border-slate-700/60 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-800/70">
                        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 dark:border-slate-700/40" />
                        <div className="absolute -top-4 right-6 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
                            Live matching
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                            <svg
                                className="h-40 w-full"
                                viewBox="0 0 320 160"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="awardGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#38BDF8" />
                                        <stop offset="100%" stopColor="#6366F1" />
                                    </linearGradient>
                                </defs>
                                <rect x="16" y="20" width="200" height="120" rx="18" fill="url(#awardGradient)" opacity="0.15" />
                                <rect x="28" y="32" width="180" height="24" rx="12" fill="#E0F2FE" />
                                <rect x="28" y="64" width="150" height="16" rx="8" fill="#DBEAFE" />
                                <rect x="28" y="88" width="170" height="16" rx="8" fill="#E0E7FF" />
                                <circle cx="250" cy="70" r="40" fill="url(#awardGradient)" opacity="0.2" />
                                <circle cx="250" cy="70" r="26" fill="url(#awardGradient)" opacity="0.8" />
                                <path
                                    d="M250 56L255 66L266 67L258 75L260 86L250 80L240 86L242 75L234 67L245 66L250 56Z"
                                    fill="white"
                                />
                                <rect x="232" y="108" width="36" height="26" rx="8" fill="url(#awardGradient)" opacity="0.6" />
                            </svg>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="h-4 w-4 text-blue-500" />
                                    <span className="font-semibold text-slate-800 dark:text-slate-100">Eligibility score</span>
                                </div>
                                <span className="text-slate-500 dark:text-slate-300">High match</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {[
                        {
                            title: 'Intelligent filtering',
                            body: 'Surface awards that fit your background, program, and goals.',
                            icon: Sparkles,
                            color: 'text-blue-500'
                        },
                        {
                            title: 'Trusted matching',
                            body: 'Eligibility-first logic to reduce wasted applications.',
                            icon: ShieldCheck,
                            color: 'text-cyan-500'
                        }
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-3xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_22px_60px_-45px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70"
                        >
                            <feature.icon className={`h-6 w-6 ${feature.color} mb-4`} />
                            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-300">
                                {feature.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">
                        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                            How it works
                        </h2>
                        <div className="space-y-5">
                            {[
                                {
                                    title: 'Choose your university',
                                    body: 'Start with a campus-specific experience and award catalog.'
                                },
                                {
                                    title: 'Build your profile',
                                    body: 'Answer a few quick questions to highlight eligibility.'
                                },
                                {
                                    title: 'Get curated matches',
                                    body: 'We surface awards that align with your profile and goals.'
                                }
                            ].map((step, index) => (
                                <div key={step.title} className="flex items-start gap-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                                        0{index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-300">
                                            {step.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-white/90 via-white/70 to-slate-100/60 p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700/60 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-800/70">
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                            A clear, structured view of where your strongest opportunities live.
                        </p>
                        <div className="mt-6 space-y-4">
                            {[
                                { label: 'Merit-based awards', width: 'w-[82%]', color: 'bg-blue-500' },
                                { label: 'Need-based support', width: 'w-[68%]', color: 'bg-indigo-500' },
                                { label: 'Program-specific', width: 'w-[55%]', color: 'bg-cyan-500' }
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                                        <span>{item.label}</span>
                                        <span>Priority</span>
                                    </div>
                                    <div className="mt-2 h-3 rounded-full bg-slate-200/70 dark:bg-slate-700/70">
                                        <div className={`h-3 rounded-full ${item.width} ${item.color}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Focus area</p>
                                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Leadership awards</p>
                            </div>
                            <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Next step</p>
                                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Complete profile</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-60px_rgba(30,64,175,0.4)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                                Start your award match
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-300">
                                Select your university to personalize your scholarship search.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <UniversitySelection onSelect={onNavigate} />
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    <span>Designed for</span>
                    <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                    <span>UBC</span>
                    <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                    <span>SFU</span>
                    <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                    <span>More campuses coming soon</span>
                </div>
            </div>
        </div>
    );
}
