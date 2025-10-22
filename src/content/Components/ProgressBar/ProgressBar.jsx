import { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({
  progress = 0,
  variant = 'default',
  size = 'md',
  showPercentage = true,
  animated = true,
  label,
  color = 'gold',
  className = ''
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  const sizeClasses = {
    sm: 'progress-sm',
    md: 'progress-md',
    lg: 'progress-lg'
  };

  const colorClasses = {
    gold: 'progress-gold',
    blue: 'progress-blue',
    green: 'progress-green',
    red: 'progress-red'
  };

  return (
    <div className={`progress-bar-container ${sizeClasses[size]} ${className}`}>
      {label && <div className="progress-label">{label}</div>}
      
      <div className={`progress-bar-wrapper ${variant}`}>
        <div 
          className={`progress-bar-fill ${colorClasses[color]} ${animated ? 'animated' : ''}`}
          style={{ width: `${Math.min(100, Math.max(0, displayProgress))}%` }}
        >
          {variant === 'striped' && <div className="progress-stripes"></div>}
          {variant === 'glow' && <div className="progress-glow"></div>}
        </div>
        
        {showPercentage && (
          <div className="progress-percentage">
            {Math.round(displayProgress)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
