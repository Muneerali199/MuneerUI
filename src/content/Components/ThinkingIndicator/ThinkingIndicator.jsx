import { useEffect, useState } from 'react';
import './ThinkingIndicator.css';

const ThinkingIndicator = ({
  text = 'AI is thinking',
  variant = 'dots',
  size = 'md',
  showText = true,
  className = ''
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'thinking-sm',
    md: 'thinking-md',
    lg: 'thinking-lg'
  };

  return (
    <div className={`thinking-indicator ${sizeClasses[size]} ${className}`}>
      {variant === 'dots' && (
        <div className="thinking-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {variant === 'pulse' && (
        <div className="thinking-pulse">
          <div className="pulse-ring"></div>
          <div className="pulse-core"></div>
        </div>
      )}

      {variant === 'wave' && (
        <div className="thinking-wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {variant === 'brain' && (
        <div className="thinking-brain">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9.5 2C7.01 2 5 4.01 5 6.5C5 8.99 7.01 11 9.5 11C11.99 11 14 8.99 14 6.5C14 4.01 11.99 2 9.5 2Z"
              className="brain-part brain-part-1"
            />
            <path
              d="M14.5 13C12.01 13 10 15.01 10 17.5C10 19.99 12.01 22 14.5 22C16.99 22 19 19.99 19 17.5C19 15.01 16.99 13 14.5 13Z"
              className="brain-part brain-part-2"
            />
            <circle cx="12" cy="12" r="2" className="brain-part brain-part-3" />
          </svg>
        </div>
      )}

      {showText && (
        <span className="thinking-text">
          {text}
          {variant === 'dots' && dots}
        </span>
      )}
    </div>
  );
};

export default ThinkingIndicator;
