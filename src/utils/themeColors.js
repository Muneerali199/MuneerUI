// MuneerUI Theme Colors - Dark Black & Gold Theme
export const THEME_COLORS = {
  // Primary backgrounds
  bgPrimary: '#0A0A0A',
  bgSecondary: '#1a1a1a',
  bgTertiary: '#000000',
  
  // Accent colors
  accentGold: '#FFD700',
  accentOrange: '#FFA500',
  accentWhite: '#FFFFFF',
  accentGray: '#E0E0E0',
  
  // Borders
  borderGold: 'rgba(255, 215, 0, 0.2)',
  borderGoldBright: 'rgba(255, 215, 0, 0.3)',
  borderWhite: 'rgba(255, 255, 255, 0.1)',
  borderWhiteBright: 'rgba(255, 255, 255, 0.2)',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  
  // Button states
  buttonBg: '#1a1a1a',
  buttonHover: '#2a2a2a',
  buttonActive: '#000000',
  buttonActiveBg: '#000000',
  buttonActiveText: '#FFD700',
  
  // Legacy purple colors (for reference - DO NOT USE)
  // OLD: #170D27, #271E37, #5227FF, #392e4e, #B19EEF
};

// Helper function to replace old purple colors
export const replaceOldColors = (color) => {
  const colorMap = {
    '#170D27': THEME_COLORS.bgSecondary,
    '#271E37': THEME_COLORS.buttonHover,
    '#5227FF': THEME_COLORS.accentGold,
    '#392e4e': THEME_COLORS.borderGold,
    '#B19EEF': THEME_COLORS.accentGold,
    '#060010': THEME_COLORS.bgPrimary,
  };
  return colorMap[color] || color;
};

export default THEME_COLORS;
