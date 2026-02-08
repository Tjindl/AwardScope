import { School, GraduationCap } from 'lucide-react';

interface UniversitySelectionProps {
    onSelect: (university: string) => void;
}

const universities = [
    {
        id: 'University of British Columbia',
        name: 'University of British Columbia',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/UBC_Coat_of_Arms.svg/1200px-UBC_Coat_of_Arms.svg.png', // We can use icon if image fails
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 'Simon Fraser University',
        name: 'Simon Fraser University',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Simon_Fraser_University_Coat_of_Arms.svg/1200px-Simon_Fraser_University_Coat_of_Arms.svg.png',
        color: 'from-red-600 to-red-800'
    },
    {
        id: 'University of Victoria',
        name: 'University of Victoria',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/University_of_Victoria_Coat_of_Arms.svg/1200px-University_of_Victoria_Coat_of_Arms.svg.png',
        color: 'from-yellow-500 to-yellow-700'
    },
    {
        id: 'British Columbia Institute of Technology',
        name: 'BCIT',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/BCIT_Logo.svg/1200px-BCIT_Logo.svg.png',
        color: 'from-blue-800 to-blue-950'
    },
    {
        id: 'University of Northern British Columbia',
        name: 'UNBC',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/University_of_Northern_British_Columbia_Coat_of_Arms.svg/1200px-University_of_Northern_British_Columbia_Coat_of_Arms.svg.png',
        color: 'from-green-600 to-green-800'
    },
    {
        id: 'Thompson Rivers University',
        name: 'Thompson Rivers University',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Thompson_Rivers_University_logo.svg/1200px-Thompson_Rivers_University_logo.svg.png',
        color: 'from-orange-500 to-orange-700'
    }
];

export default function UniversitySelection({ onSelect }: UniversitySelectionProps) {
    return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 text-center">Select Your University</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {universities.map((uni) => (
                    <button
                        key={uni.id}
                        onClick={() => onSelect(uni.id)}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-left shadow-[0_18px_50px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700/70 dark:bg-slate-900/90"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${uni.color} opacity-10`} />

                        <div className="flex items-center gap-4">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${uni.color} text-white shadow-md`}>
                                <School className="w-8 h-8" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                    {uni.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                                    Click to find awards
                                </p>
                            </div>
                        </div>
                    </button>
                ))}

                {/* Placeholder for other universities */}
                <button
                    disabled
                    className="group relative overflow-hidden bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center gap-3 opacity-60 cursor-not-allowed"
                >
                    <GraduationCap className="w-6 h-6 text-gray-400 dark:text-slate-500" />
                    <span className="text-gray-400 dark:text-slate-400 font-medium">More universities coming soon...</span>
                </button>
            </div>
        </div>
    );
}
