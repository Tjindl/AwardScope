import { School, GraduationCap } from "lucide-react";

interface UniversitySelectionProps {
  onSelect: (university: string) => void;
}

const universities = [
  {
    id: "University of British Columbia",
    name: "University of British Columbia",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/UBC_Coat_of_Arms.svg/1200px-UBC_Coat_of_Arms.svg.png", // We can use icon if image fails
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "Simon Fraser University",
    name: "Simon Fraser University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Simon_Fraser_University_Coat_of_Arms.svg/1200px-Simon_Fraser_University_Coat_of_Arms.svg.png",
    color: "from-red-600 to-red-800",
  },
  {
    id: "University of Victoria",
    name: "University of Victoria",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/University_of_Victoria_Coat_of_Arms.svg/1200px-University_of_Victoria_Coat_of_Arms.svg.png",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    id: "British Columbia Institute of Technology",
    name: "BCIT",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/BCIT_Logo.svg/1200px-BCIT_Logo.svg.png",
    color: "from-blue-800 to-blue-950",
  },
  {
    id: "University of Northern British Columbia",
    name: "UNBC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/University_of_Northern_British_Columbia_Coat_of_Arms.svg/1200px-University_of_Northern_British_Columbia_Coat_of_Arms.svg.png",
    color: "from-green-600 to-green-800",
  },
  {
    id: "Thompson Rivers University",
    name: "Thompson Rivers University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Thompson_Rivers_University_logo.svg/1200px-Thompson_Rivers_University_logo.svg.png",
    color: "from-orange-500 to-orange-700",
  },
];

export default function UniversitySelection({
  onSelect,
}: UniversitySelectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center drop-shadow-sm">
        Select Your University
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {universities.map((uni) => (
          <button
            key={uni.id}
            onClick={() => onSelect(uni.id)}
            className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-4 text-left shadow-lg backdrop-blur-xl transition-all hover:bg-white/60 hover:scale-[1.02] active:scale-[0.98] dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-800/60 hover:shadow-cyan-500/20"
          >
            {/* Hover Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${uni.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:group-hover:opacity-20`}
            />

            <div className="relative flex items-center gap-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${uni.color} text-white shadow-lg ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300`}
              >
                <School className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors dark:text-white dark:group-hover:text-blue-300">
                  {uni.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5 group-hover:text-slate-700 transition-colors dark:text-slate-400 dark:group-hover:text-slate-200">
                  Click to find awards
                </p>
              </div>
            </div>
          </button>
        ))}

        {/* Placeholder for other universities */}
        <button
          disabled
          className="col-span-1 md:col-span-2 w-full relative overflow-hidden bg-slate-100/50 p-4 rounded-xl border border-dashed border-slate-300 flex items-center justify-center gap-2 opacity-60 cursor-not-allowed dark:bg-slate-800/50 dark:border-slate-700 backdrop-blur-sm hover:opacity-80 transition-opacity"
        >
          <GraduationCap className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          <span className="text-slate-500 font-medium text-sm dark:text-slate-400">
            More universities coming soon...
          </span>
        </button>
      </div>
    </div>
  );
}
