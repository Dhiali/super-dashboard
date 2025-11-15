import React, { useEffect, useState } from 'react';
import logo from '../assets/fo 2.3.png';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    // Start animation
    setAnimationState('animate');
    // Complete after animation
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 6016);
    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <img 
        src={logo} 
        alt="Logo" 
        className={`loading-logo ${animationState}`}
      />
    </div>
  );
};

export default LoadingScreen;
