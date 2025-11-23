import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import HomePage from './pages/HomePage';
import KidsPage from './pages/KidsPage';
import TeensPage from './pages/TeensPage';
import AdultsPage from './pages/AdultsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import WinterWorkshopsPage from './pages/WinterWorkshopsPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/teens" element={<TeensPage />} />
        <Route path="/adults" element={<AdultsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/winter" element={<WinterWorkshopsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
