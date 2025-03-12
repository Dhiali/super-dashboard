import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Comparison from './pages/comparison';
import Timeline from './pages/timeline';
import './App.css'; // or App.css depending on where you put the background-color


export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/compare" element={<Comparison />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </div>
  );
}
