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
    }
];

export default function UniversitySelection({ onSelect }: UniversitySelectionProps) {
    return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Select Your University</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {universities.map((uni) => (
                    <button
                        key={uni.id}
                        onClick={() => onSelect(uni.id)}
                        className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-2xl text-left"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${uni.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                        <div className="flex items-center gap-4">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${uni.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <School className="w-8 h-8" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors">
                                    {uni.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Click to find awards
                                </p>
                            </div>
                        </div>
                    </button>
                ))}

                {/* Placeholder for other universities */}
                <button
                    disabled
                    className="group relative overflow-hidden bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center gap-3 opacity-60 cursor-not-allowed"
                >
                    <GraduationCap className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-400 font-medium">More universities coming soon...</span>
                </button>
            </div>
        </div>
    );
}
