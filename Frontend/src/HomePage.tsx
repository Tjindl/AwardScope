import { ArrowRight, Award, BarChart3, GraduationCap, ShieldCheck, Sparkles, Star } from 'lucide-react';
import UniversitySelection from './components/UniversitySelection';

interface HomePageProps {
    onNavigate: (university: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    return (
        /* This container provides the background gradient and centers content */
        <div
            className="relative min-h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center p-6"
            style={{ backgroundImage: "url('/Gemini_Generated_Image_qdhi4yqdhi4yqdhi.png')" }}
        >
            <div className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-slate-950/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.6),rgba(2,6,23,0))]" />
            <div className="pointer-events-none absolute inset-0 mesh-bg opacity-100 mix-blend-multiply dark:mesh-bg-dark dark:mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40 blur-3xl animate-float-medium dark:mesh-bg-dark dark:opacity-50" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.5)),linear-gradient(90deg,rgba(255,255,255,0.6),transparent)] opacity-20 dark:opacity-10" />
            <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/10 animate-float-slow" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10 animate-float-slow" />

            <div className="relative w-full max-w-6xl rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_35px_100px_-55px_rgba(30,64,175,0.55)] backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/80 md:p-12">
                <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40 dark:border-slate-700/40" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent dark:via-slate-600/70" />
                <div className="pointer-events-none absolute -left-10 top-8 h-20 w-40 rounded-full bg-blue-200/50 blur-2xl dark:bg-blue-500/10 animate-float-slow" />

                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                            <Award className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">AwardScope</p>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Scholarship studio</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
                        <Star className="h-4 w-4 text-yellow-400" />
                        Student-first
                    </div>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                    <div className="text-center lg:text-left">
                        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-200 lg:mx-0">
                            Scholarships, simplified
                        </span>

                        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-slate-900 dark:text-white">
                            <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-blue-600 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-300">
                                Welcome to AwardScope
                            </span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
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

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:justify-start">
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <Sparkles className="h-4 w-4 text-blue-500" />
                                Profile-based matching
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                                Eligibility-first
                            </span>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <a
                                href="#get-started"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900"
                            >
                                Find your awards
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative w-full rounded-3xl border border-white/70 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/60 p-6 text-left shadow-[0_24px_70px_-45px_rgba(15,23,42,0.5)] dark:border-slate-700/60 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-800/70">
                        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 dark:border-slate-700/40" />
                        <div className="absolute -top-4 right-6 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
                            Live matching
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                            <svg
                                className="h-44 w-full"
                                viewBox="0 0 320 180"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="awardGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#38BDF8" />
                                        <stop offset="100%" stopColor="#6366F1" />
                                    </linearGradient>
                                </defs>
                                <rect x="18" y="22" width="200" height="130" rx="20" fill="url(#awardGradient)" opacity="0.15" />
                                <rect x="32" y="38" width="176" height="24" rx="12" fill="#E0F2FE" />
                                <rect x="32" y="70" width="140" height="16" rx="8" fill="#DBEAFE" />
                                <rect x="32" y="94" width="164" height="16" rx="8" fill="#E0E7FF" />
                                <circle cx="252" cy="78" r="46" fill="url(#awardGradient)" opacity="0.2" />
                                <circle cx="252" cy="78" r="30" fill="url(#awardGradient)" opacity="0.85" />
                                <path
                                    d="M252 60L257 72L270 73L260 82L262 95L252 88L242 95L244 82L234 73L247 72L252 60Z"
                                    fill="white"
                                />
                                <rect x="234" y="122" width="36" height="24" rx="8" fill="url(#awardGradient)" opacity="0.6" />
                            </svg>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="h-4 w-4 text-blue-500" />
                                    <span className="font-semibold text-slate-800 dark:text-slate-100">Eligibility score</span>
                                </div>
                                <span className="text-slate-500 dark:text-slate-300">Strong fit</span>
                            </div>
                            <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
                                <div className="flex items-center gap-3">
                                    <Sparkles className="h-4 w-4 text-cyan-500" />
                                    <span className="font-semibold text-slate-800 dark:text-slate-100">Top matches</span>
                                </div>
                                <span className="text-slate-500 dark:text-slate-300">Curated</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Curated matches',
                            body: 'Surface awards that fit your background, program, and goals.',
                            icon: Sparkles,
                            color: 'text-blue-500'
                        },
                        {
                            title: 'Campus-focused',
                            body: 'Award discovery tailored to faculties, majors, and cohorts.',
                            icon: GraduationCap,
                            color: 'text-indigo-500'
                        },
                        {
                            title: 'Clear criteria',
                            body: 'Transparent eligibility guidance to keep you on track.',
                            icon: ShieldCheck,
                            color: 'text-cyan-500'
                        }
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-3xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_22px_60px_-45px_rgba(15,23,42,0.4)] backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/70"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 dark:bg-white/10">
                                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-300">
                                {feature.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Campus highlights',
                            body: 'Explore faculty-led awards curated by campus.',
                            accent: 'from-blue-500/10 to-indigo-500/10',
                            content: (
                                <svg className="h-28 w-full" viewBox="0 0 180 100" fill="none">
                                    <rect x="18" y="34" width="144" height="48" rx="12" fill="#DBEAFE" />
                                    <rect x="34" y="46" width="20" height="26" rx="4" fill="#93C5FD" />
                                    <rect x="62" y="46" width="20" height="26" rx="4" fill="#93C5FD" />
                                    <rect x="90" y="46" width="20" height="26" rx="4" fill="#93C5FD" />
                                    <rect x="118" y="46" width="20" height="26" rx="4" fill="#93C5FD" />
                                    <circle cx="140" cy="22" r="10" fill="#60A5FA" />
                                    <rect x="24" y="28" width="64" height="6" rx="3" fill="#2563EB" />
                                </svg>
                            )
                        },
                        {
                            title: 'Essay guides',
                            body: 'Structured prompts to craft standout applications.',
                            accent: 'from-cyan-500/10 to-blue-500/10',
                            content: (
                                <svg className="h-28 w-full" viewBox="0 0 180 100" fill="none">
                                    <rect x="30" y="18" width="120" height="64" rx="12" fill="#E0F2FE" />
                                    <rect x="44" y="32" width="80" height="8" rx="4" fill="#7DD3FC" />
                                    <rect x="44" y="48" width="92" height="8" rx="4" fill="#BAE6FD" />
                                    <rect x="44" y="64" width="64" height="8" rx="4" fill="#BAE6FD" />
                                    <rect x="126" y="28" width="18" height="54" rx="6" fill="#38BDF8" />
                                </svg>
                            )
                        },
                        {
                            title: 'Award packs',
                            body: 'Save top matches into a focused shortlist.',
                            accent: 'from-indigo-500/10 to-fuchsia-500/10',
                            content: (
                                <svg className="h-28 w-full" viewBox="0 0 180 100" fill="none">
                                    <circle cx="60" cy="50" r="26" fill="#C7D2FE" />
                                    <circle cx="120" cy="50" r="26" fill="#E0E7FF" />
                                    <path
                                        d="M60 36L64 46L74 47L66 54L68 64L60 58L52 64L54 54L46 47L56 46L60 36Z"
                                        fill="#6366F1"
                                    />
                                    <path
                                        d="M120 36L124 46L134 47L126 54L128 64L120 58L112 64L114 54L106 47L116 46L120 36Z"
                                        fill="#818CF8"
                                    />
                                    <rect x="36" y="70" width="108" height="8" rx="4" fill="#A5B4FC" />
                                </svg>
                            )
                        }
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_22px_60px_-45px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.accent}`} />
                            <div className="relative">
                                {card.content}
                                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mt-4">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-300">
                                    {card.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
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
                </div>

                <div
                    id="get-started"
                    className="mt-12 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-60px_rgba(30,64,175,0.4)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                                Start your award match
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-300">
                                Select your university to personalize your scholarship search.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                            <Star className="h-4 w-4 text-yellow-400" />
                            Student-first experience
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <UniversitySelection onSelect={onNavigate} />
                    </div>
                </div>

            </div>
        </div>
    );
}
