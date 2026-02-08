import { useState } from 'react';
import HomePage from './HomePage';
import FormPage from './pages/FormPage';

function App() {
    const [currentPage, setCurrentPage] = useState<'home' | 'form'>('home');
    const [selectedUniversity, setSelectedUniversity] = useState<string>('');

    const handleUniversitySelect = (university: string) => {
        setSelectedUniversity(university);
        setCurrentPage('form');
    };

    return (
        <div className="app">
            {currentPage === 'home' ? (
                <HomePage onNavigate={handleUniversitySelect} />
            ) : (
                <FormPage
                    selectedUniversity={selectedUniversity}
                    onBack={() => setCurrentPage('home')}
                />
            )}
        </div>
    );
}

export default App;