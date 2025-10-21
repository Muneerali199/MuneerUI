import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <div className="logo-icon">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Background Circle */}
          <circle cx="22" cy="22" r="20" fill="rgba(255, 255, 255, 0.05)" className="logo-bg"/>
          {/* M Letter Design - Enhanced */}
          <path
            d="M10 30V10L16 18L22 10L28 18L34 10V30H30V20L22 28L14 20V30H10Z"
            fill="url(#logoGradient)"
            className="logo-path"
            filter="url(#glow)"
          />
          {/* Accent Lines */}
          <path
            d="M22 8L22 12"
            stroke="url(#logoGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            className="logo-accent"
          />
          <path
            d="M22 32L22 36"
            stroke="url(#logoGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            className="logo-accent"
          />
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-title">MuneerUI</span>
        <span className="logo-subtitle">React Components</span>
      </div>
    </Link>
  );
};

export default Logo;
