import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      {/* Animated background particles */}
      <div className="loading-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      {/* Main loading content */}
      <div className="loading-content">
        {/* Animated logo */}
        <div className="loading-logo">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
              <filter id="loadingGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="40" cy="40" r="36" fill="rgba(255, 255, 255, 0.05)" className="logo-circle"/>
            <path
              d="M20 60V20L28 36L40 20L52 36L64 20V60H56V40L40 56L24 40V60H20Z"
              fill="url(#loadingGradient)"
              className="logo-m"
              filter="url(#loadingGlow)"
            />
          </svg>
        </div>

        {/* Loading text */}
        <h2 className="loading-title">
          <span className="loading-letter" style={{ animationDelay: '0s' }}>M</span>
          <span className="loading-letter" style={{ animationDelay: '0.1s' }}>u</span>
          <span className="loading-letter" style={{ animationDelay: '0.2s' }}>n</span>
          <span className="loading-letter" style={{ animationDelay: '0.3s' }}>e</span>
          <span className="loading-letter" style={{ animationDelay: '0.4s' }}>e</span>
          <span className="loading-letter" style={{ animationDelay: '0.5s' }}>r</span>
          <span className="loading-letter gold" style={{ animationDelay: '0.6s' }}>U</span>
          <span className="loading-letter gold" style={{ animationDelay: '0.7s' }}>I</span>
        </h2>

        <p className="loading-subtitle">Loading premium components...</p>

        {/* Progress bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="loading-percentage">{progress}%</span>
        </div>

        {/* Animated dots */}
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Orbiting rings */}
      <div className="orbit-container">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
