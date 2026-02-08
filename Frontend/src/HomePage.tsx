
interface HomePageProps {
  onNavigate: () => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="home-page">
      <h1>Welcome to AwardScope</h1>
      <p>A full-stack web application that helps UBC students discover scholarships, bursaries,
        and financial aid opportunities they're eligible for.</p>
      <button onClick={onNavigate}>Get Started</button>
    </div>
  );
}