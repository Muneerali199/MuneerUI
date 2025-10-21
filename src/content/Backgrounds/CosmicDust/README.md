# Cosmic Dust Background

An animated canvas-based background component featuring floating particles with glow effects and dynamic connection lines.

## Features

- ✨ **150+ Animated Particles** - Smooth floating motion
- 🌟 **Glow Effects** - Radial gradient glow around each particle
- 🔗 **Connection Lines** - Dynamic lines between nearby particles
- 💫 **Pulse Animation** - Particles pulse and fade organically
- 🎨 **Customizable Colors** - Any hex color supported
- ⚡ **Adjustable Speed** - Control movement speed (0.1-2x)
- 🎛️ **Particle Count** - 50-300 particles
- 💡 **Glow Intensity** - Adjustable glow strength (0-1)

## Installation

### Option 1: Copy Files

1. Copy `CosmicDust.jsx` to your components folder
2. Copy `CosmicDust.css` to the same folder
3. Import and use in your project

### Option 2: CLI (Coming Soon)

```bash
npx muneerui add cosmic-dust
```

## Usage

### Basic Usage

```jsx
import CosmicDust from './CosmicDust';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', background: '#000' }}>
      <CosmicDust />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}
```

### With Custom Props

```jsx
<CosmicDust
  particleCount={150}
  particleColor="#FFD700"
  glowIntensity={0.8}
  speed={0.5}
/>
```

### Different Color Schemes

```jsx
// Gold (default)
<CosmicDust particleColor="#FFD700" />

// Blue
<CosmicDust particleColor="#3B82F6" />

// Purple
<CosmicDust particleColor="#8B5CF6" />

// Pink
<CosmicDust particleColor="#EC4899" />

// White
<CosmicDust particleColor="#FFFFFF" />
```

### Hero Section Example

```jsx
<section style={{ 
  position: 'relative', 
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000 0%, #0A0A0A 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <CosmicDust particleCount={200} particleColor="#FFD700" />
  
  <div style={{ 
    position: 'relative', 
    zIndex: 10, 
    textAlign: 'center',
    color: 'white'
  }}>
    <h1>Welcome to My Site</h1>
    <p>Amazing content with cosmic background</p>
  </div>
</section>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | number | `150` | Number of particles to render (50-300) |
| `particleColor` | string | `'#FFD700'` | Color of particles (hex, rgb, or named) |
| `glowIntensity` | number | `0.8` | Intensity of glow effect (0-1) |
| `speed` | number | `0.5` | Movement speed of particles (0.1-2) |
| `className` | string | `''` | Additional CSS classes |

## Performance Tips

### For Better Performance

```jsx
<CosmicDust
  particleCount={100}  // Reduce particle count
  speed={0.3}          // Slower movement
  glowIntensity={0.6}  // Less intensive glow
/>
```

### For More Impact

```jsx
<CosmicDust
  particleCount={250}  // More particles
  speed={0.8}          // Faster movement
  glowIntensity={1}    // Maximum glow
/>
```

## How It Works

### Particle System

Each particle has:
- Random position and velocity
- Size between 1-4px
- Opacity that pulses over time
- Glow effect with radial gradient

### Connection Lines

- Particles within 150px get connected
- Line opacity fades with distance
- Creates dynamic network effect

### Animation Loop

1. Clear canvas
2. Update particle positions
3. Draw particle glows
4. Draw particle cores
5. Draw connection lines
6. Request next frame (60 FPS)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Use Cases

Perfect for:
- 🌟 Hero sections
- 🌌 Space/cosmic themes
- 🎨 Creative portfolios
- 💼 Tech landing pages
- 🎮 Gaming websites
- 🔮 Futuristic designs
- 📱 App landing pages

## Examples

### Landing Page Hero

```jsx
<div style={{ 
  position: 'relative',
  minHeight: '100vh',
  background: '#000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <CosmicDust particleColor="#FFD700" />
  
  <h1 style={{ 
    position: 'relative', 
    zIndex: 10,
    fontSize: '4rem',
    color: 'white',
    marginBottom: '1rem'
  }}>
    Welcome to the Future
  </h1>
  
  <p style={{ 
    position: 'relative', 
    zIndex: 10,
    fontSize: '1.5rem',
    color: 'rgba(255,255,255,0.8)'
  }}>
    Experience the next generation
  </p>
</div>
```

### With Gradient Background

```jsx
<div style={{ 
  position: 'relative',
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000 0%, #1a1a2e 50%, #16213e 100%)'
}}>
  <CosmicDust particleColor="#3B82F6" glowIntensity={0.9} />
  {/* Your content */}
</div>
```

## Customization

### Custom Particle Behavior

You can modify the component to:
- Change particle size range
- Adjust connection distance
- Modify pulse speed
- Change wrap-around behavior

### Custom Styling

The component uses a canvas element with class `cosmic-dust`. You can add custom styles:

```css
.cosmic-dust {
  opacity: 0.8; /* Reduce overall opacity */
  filter: blur(1px); /* Add blur effect */
}
```

## License

MIT - Free to use in personal and commercial projects

## Credits

Created by **Muneer Ali** for MuneerUI  
Part of the MuneerUI component library

## Support

- 🐛 [Report Issues](https://github.com/Muneerali199/MuneerUI/issues)
- 💡 [Request Features](https://github.com/Muneerali199/MuneerUI/issues)
- ⭐ [Star on GitHub](https://github.com/Muneerali199/MuneerUI)
