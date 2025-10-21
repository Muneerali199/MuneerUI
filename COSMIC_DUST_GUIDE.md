# Cosmic Dust Component - Complete Guide

## ✅ Visibility Fixed!

The component now has:
- ✅ Black background for better visibility
- ✅ "Cosmic Dust" title overlay
- ✅ Proper z-index layering
- ✅ Enhanced demo presentation

---

## 🎨 Installation & Usage

### Method 1: Manual Installation

**Step 1:** Copy the files to your project

```
your-project/
├── components/
│   └── CosmicDust/
│       ├── CosmicDust.jsx
│       └── CosmicDust.css
```

**Step 2:** Import and use

```jsx
import CosmicDust from './components/CosmicDust/CosmicDust';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', background: '#000' }}>
      <CosmicDust />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1>Your Content</h1>
      </div>
    </div>
  );
}
```

### Method 2: CLI Installation (Coming Soon)

```bash
npx muneerui add cosmic-dust
```

---

## 📖 Complete Usage Examples

### 1. Basic Hero Section

```jsx
import CosmicDust from './CosmicDust';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background */}
      <CosmicDust />
      
      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Welcome to the Future
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>
          Experience next-generation design
        </p>
      </div>
    </section>
  );
}
```

### 2. With Custom Colors

```jsx
// Gold particles (default)
<CosmicDust particleColor="#FFD700" />

// Blue particles
<CosmicDust particleColor="#3B82F6" />

// Purple particles
<CosmicDust particleColor="#8B5CF6" />

// Pink particles
<CosmicDust particleColor="#EC4899" />

// White particles
<CosmicDust particleColor="#FFFFFF" />
```

### 3. Performance Optimized

```jsx
// For mobile or lower-end devices
<CosmicDust
  particleCount={80}      // Fewer particles
  speed={0.3}             // Slower movement
  glowIntensity={0.5}     // Less glow
/>
```

### 4. High Impact

```jsx
// For powerful effect
<CosmicDust
  particleCount={250}     // More particles
  speed={0.8}             // Faster movement
  glowIntensity={1}       // Maximum glow
/>
```

### 5. With Gradient Background

```jsx
<div style={{ 
  position: 'relative',
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000 0%, #0A0A0A 50%, #000 100%)'
}}>
  <CosmicDust particleColor="#FFD700" glowIntensity={0.9} />
  
  <div style={{ position: 'relative', zIndex: 10, padding: '4rem' }}>
    {/* Your content here */}
  </div>
</div>
```

### 6. Full Page Example

```jsx
import { useState } from 'react';
import CosmicDust from './CosmicDust';

export default function LandingPage() {
  const [color, setColor] = useState('#FFD700');

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #000 0%, #1a1a2e 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <CosmicDust 
        particleCount={150}
        particleColor={color}
        glowIntensity={0.8}
        speed={0.5}
      />
      
      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10,
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ 
            fontSize: '5rem', 
            color: 'white',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Your Amazing Product
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
            The future is here
          </p>
        </header>

        {/* Color Picker */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          {['#FFD700', '#3B82F6', '#8B5CF6', '#EC4899', '#FFFFFF'].map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: c,
                border: color === c ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        {/* Features */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>
                Feature {i}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Amazing feature description here
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## 🎛️ Props Reference

| Prop | Type | Default | Range | Description |
|------|------|---------|-------|-------------|
| `particleCount` | number | `150` | 50-300 | Number of particles |
| `particleColor` | string | `'#FFD700'` | Any hex | Particle color |
| `glowIntensity` | number | `0.8` | 0-1 | Glow strength |
| `speed` | number | `0.5` | 0.1-2 | Movement speed |
| `className` | string | `''` | - | Additional CSS classes |

---

## 🎨 Color Presets

```jsx
// Gold (Luxury)
<CosmicDust particleColor="#FFD700" />

// Blue (Tech)
<CosmicDust particleColor="#3B82F6" />

// Purple (Creative)
<CosmicDust particleColor="#8B5CF6" />

// Pink (Modern)
<CosmicDust particleColor="#EC4899" />

// White (Minimal)
<CosmicDust particleColor="#FFFFFF" />

// Orange (Energy)
<CosmicDust particleColor="#FFA500" />

// Cyan (Futuristic)
<CosmicDust particleColor="#00D9FF" />

// Green (Nature)
<CosmicDust particleColor="#10B981" />
```

---

## ⚡ Performance Guide

### Mobile Optimization

```jsx
const isMobile = window.innerWidth < 768;

<CosmicDust
  particleCount={isMobile ? 60 : 150}
  speed={isMobile ? 0.3 : 0.5}
  glowIntensity={isMobile ? 0.5 : 0.8}
/>
```

### Conditional Rendering

```jsx
const [showBackground, setShowBackground] = useState(true);

{showBackground && <CosmicDust />}
```

---

## 🎯 Best Practices

1. **Always use dark backgrounds** - Particles are designed for dark themes
2. **Set z-index properly** - Background should be below content
3. **Optimize for mobile** - Reduce particle count on small screens
4. **Test performance** - Monitor FPS on target devices
5. **Use appropriate colors** - Match your brand colors

---

## 🐛 Troubleshooting

### Particles not visible?
- ✅ Ensure background is dark (`#000` or similar)
- ✅ Check z-index of content is higher than canvas
- ✅ Verify particleColor contrasts with background

### Performance issues?
- ✅ Reduce `particleCount` (try 80-100)
- ✅ Lower `glowIntensity` (try 0.5)
- ✅ Decrease `speed` (try 0.3)

### Canvas not resizing?
- ✅ Component handles resize automatically
- ✅ Ensure parent has defined dimensions

---

## 📱 Responsive Example

```jsx
import { useState, useEffect } from 'react';
import CosmicDust from './CosmicDust';

export default function ResponsiveHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      <CosmicDust
        particleCount={isMobile ? 60 : 150}
        speed={isMobile ? 0.3 : 0.5}
        glowIntensity={isMobile ? 0.5 : 0.8}
      />
      {/* Content */}
    </div>
  );
}
```

---

## ✨ Result

The Cosmic Dust component is now:
- ✅ Fully visible with black background
- ✅ Well documented with examples
- ✅ Ready for CLI installation
- ✅ Optimized for all devices
- ✅ Easy to customize

**Access it at:** `/backgrounds/cosmic-dust` 🚀
