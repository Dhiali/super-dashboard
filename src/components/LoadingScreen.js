import React, { useEffect, useState } from 'react';
import logo from '../assets/fo 2.3.png';
import loadingSound from '../assets/202503261801.mp4';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    // Create new Audio element
    const audio = new Audio(loadingSound);
    
    // Configure audio
    audio.volume = 1;
    audio.preload = 'auto';

    // Play audio and handle any errors
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    // Start animation and audio
    setAnimationState('animate');
    playAudio();

    // Complete after animation
    const timer = setTimeout(() => {
      onLoadingComplete();
      audio.pause();
    }, 6016);

    // Cleanup
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
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
