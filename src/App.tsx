import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KidsPage from './pages/KidsPage';
import TeensPage from './pages/TeensPage';
import AdultsPage from './pages/AdultsPage';
import WorkshopsPage from './pages/WorkshopsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/teens" element={<TeensPage />} />
        <Route path="/adults" element={<AdultsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
