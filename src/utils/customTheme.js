import { createSystem, defaultConfig, defineSlotRecipe } from '@chakra-ui/react';

const drawerRecipe = defineSlotRecipe({
  className: 'drawer',
  slots: ['content'],
  base: {
    content: {
      w: '100vw',
      h: '100vh'
    }
  }
});

const tabsRecipe = defineSlotRecipe({
  className: 'tabs',
  slots: ['trigger'],
  base: {
    trigger: {
      flex: '0 0 auto',
      bg: '#0A0A0A',
      borderRadius: '10px',
      fontSize: '14px',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      h: 9,
      px: '1rem',
      transition: 'background-color .3s',

      _hover: { bg: '#1a1a1a' },

      "&[data-state='active']": {
        color: '#fff',
        bg: '#000000'
      }
    }
  }
});

export const toastStyles = {
  style: {
    fontSize: '12px',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    color: '#fff',
    backgroundColor: '#0A0A0A'
  }
};

export const customTheme = createSystem(defaultConfig, {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },

  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
        fontFamily: '"Figtree", sans-serif',
        backgroundColor: '#0A0A0A'
      }
    }
  },

  components: {
    Slider: {
      baseStyle: {
        thumb: { bg: '#fff', _focus: { boxShadow: 'none' } }
      },
      variants: {
        solid: {
          track: { bg: '#1a1a1a' },
          filledTrack: { bg: '#fff' }
        }
      },
      defaultProps: { variant: 'solid' }
    },
    Switch: {
      baseStyle: {
        track: {
          bg: '#1a1a1a',
          _checked: { bg: '#FFD700' },
          _focus: { boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.3)' },
          _active: { bg: '#FFA500' }
        },
        thumb: {
          _checked: { bg: 'white' },
          _active: { bg: 'white' }
        }
      }
    }
  },

  recipes: {
    drawer: drawerRecipe,
    tabs: tabsRecipe
  }
});
