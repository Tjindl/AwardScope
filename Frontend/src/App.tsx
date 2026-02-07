import { useState } from 'react';
import HomePage from './HomePage';
import FormPage from './pages/FormPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'form'>('home');

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <HomePage onNavigate={() => setCurrentPage('form')} />
      ) : (
        <FormPage onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;