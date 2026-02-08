interface HomePageProps {
  onNavigate: () => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    /* This container provides the background gradient and centers content */
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 text-center">
      
      <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-blue-100">
        {/* 'text-blue-900' matches the header color in your FormPage */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Welcome to AwardScope
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A full-stack web application that helps UBC students discover 
          scholarships, bursaries, and financial aid opportunities 
          they're eligible for.
        </p>
        
        <button 
          onClick={onNavigate} 
          className="bg-blue-900 text-white px-10 py-3 rounded-full font-bold text-lg 
                     transition-all hover:bg-blue-800 hover:shadow-lg active:scale-95"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}