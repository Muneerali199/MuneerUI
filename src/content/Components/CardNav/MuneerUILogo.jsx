const MuneerUILogo = ({ variant = 'default', size = 'md' }) => {
  const sizes = {
    sm: { fontSize: '16px', iconSize: 20 },
    md: { fontSize: '20px', iconSize: 24 },
    lg: { fontSize: '24px', iconSize: 28 }
  };

  const currentSize = sizes[size] || sizes.md;

  const variants = {
    default: {
      background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)',
      textShadow: '0 2px 10px rgba(255, 255, 255, 0.3)',
      iconGradient: ['#FFFFFF', '#E0E0E0']
    },
    gold: {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      textShadow: '0 2px 10px rgba(255, 215, 0, 0.5)',
      iconGradient: ['#FFD700', '#FFA500']
    },
    white: {
      background: '#FFFFFF',
      textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)',
      iconGradient: ['#FFFFFF', '#E0E0E0']
    },
    dark: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      iconGradient: ['#1a1a1a', '#000000']
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Logo Icon - M Letter */}
      <svg 
        width={currentSize.iconSize} 
        height={currentSize.iconSize} 
        viewBox="0 0 44 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`muneerui-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentVariant.iconGradient[0]} />
            <stop offset="100%" stopColor={currentVariant.iconGradient[1]} />
          </linearGradient>
          <filter id={`muneerui-glow-${variant}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="22" cy="22" r="20" fill="rgba(255, 255, 255, 0.05)" />
        <path
          d="M10 30V10L16 18L22 10L28 18L34 10V30H30V20L22 28L14 20V30H10Z"
          fill={`url(#muneerui-gradient-${variant})`}
          filter={`url(#muneerui-glow-${variant})`}
        />
      </svg>

      {/* Logo Text */}
      <span
        style={{
          fontSize: currentSize.fontSize,
          fontWeight: '900',
          letterSpacing: '-0.5px',
          background: currentVariant.background,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: currentVariant.textShadow,
          fontFamily: 'inherit'
        }}
      >
        MuneerUI
      </span>
    </div>
  );
};

export default MuneerUILogo;
