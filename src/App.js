import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Comparison from './pages/comparison';
import Timeline from './pages/timeline';
import LoadingScreen from './components/LoadingScreen';
import './App.css'; 


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
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
      )}
    </>
  );
}
