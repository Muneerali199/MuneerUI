# Component Usage Guide

## Quick Start Examples

### 1. CosmicDustTailwind - Pure TailwindCSS Version

**Perfect for:** Hero sections, landing pages, cosmic themes

```jsx
import CosmicDustTailwind from './ts-tailwind/Backgrounds/CosmicDust/CosmicDustTailwind';

// Basic Usage
<div className="relative h-screen bg-black">
  <CosmicDustTailwind />
  <div className="relative z-10">Your Content</div>
</div>

// Custom Colors
<CosmicDustTailwind 
  particleCount={200}
  particleColor="#3B82F6"  // Blue theme
  glowIntensity={1}
  speed={0.8}
/>

// Performance Mode
<CosmicDustTailwind 
  particleCount={80}
  speed={0.3}
  glowIntensity={0.5}
/>
```

**Props:**
- `particleCount`: 50-300 (default: 150)
- `particleColor`: Any hex color (default: '#FFD700')
- `glowIntensity`: 0-1 (default: 0.8)
- `speed`: 0.1-2 (default: 0.5)

---

### 2. AuroraWaves - Northern Lights Effect

**Perfect for:** Artistic backgrounds, gradient themes, elegant designs

```jsx
import AuroraWaves from './ts-tailwind/Backgrounds/AuroraWaves/AuroraWaves';

// Aurora Borealis Theme
<div className="relative h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
  <AuroraWaves 
    colors={['#00ffff', '#ff00ff', '#00ff00', '#ffff00']}
    waveCount={6}
    speed={0.4}
    opacity={0.7}
    blur={50}
  />
</div>

// Sunset Theme
<AuroraWaves 
  colors={['#FF6B6B', '#FFA500', '#FFD700', '#FF69B4']}
  waveCount={4}
  blur={30}
/>

// Minimal Theme
<AuroraWaves 
  colors={['#3B82F6', '#8B5CF6']}
  waveCount={3}
  opacity={0.4}
/>
```

---

### 3. NeuralNetwork - AI/Tech Theme

**Perfect for:** Tech startups, AI products, data visualization

```jsx
import NeuralNetwork from './ts-tailwind/Backgrounds/NeuralNetwork/NeuralNetwork';

// Blue Tech Theme
<div className="relative h-screen bg-slate-900">
  <NeuralNetwork 
    nodeCount={60}
    nodeColor="#3B82F6"
    connectionColor="#60A5FA"
    speed={0.4}
  />
</div>

// Purple AI Theme
<NeuralNetwork 
  nodeCount={50}
  nodeColor="#8B5CF6"
  connectionColor="#A78BFA"
  connectionDistance={180}
/>

// Green Matrix Theme
<NeuralNetwork 
  nodeColor="#10B981"
  connectionColor="#34D399"
  pulseSpeed={3}
/>
```

---

### 4. ParticleField - 3D Space Effect

**Perfect for:** Futuristic designs, space themes, interactive backgrounds

```jsx
import ParticleField from './ts-tailwind/Backgrounds/ParticleField/ParticleField';

// Colorful Space
<div className="relative h-screen bg-black">
  <ParticleField 
    particleCount={250}
    colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']}
    speed={1.2}
  />
</div>

// Monochrome Theme
<ParticleField 
  particleCount={150}
  colors={['#FFFFFF', '#E5E5E5', '#CCCCCC']}
  speed={0.8}
/>

// Fast Warp Speed
<ParticleField 
  speed={3}
  rotationSpeed={0.003}
/>
```

**Note:** This component has mouse interaction - particles move away from cursor!

---

### 5. GlowingGrid - Cyberpunk Grid

**Perfect for:** Cyberpunk themes, retro-futuristic designs, gaming

```jsx
import GlowingGrid from './ts-tailwind/Backgrounds/GlowingGrid/GlowingGrid';

// Cyberpunk Theme
<div className="relative h-screen bg-black">
  <GlowingGrid 
    perspective={true}
    lineColor="#00ffff"
    glowColor="#ff00ff"
    gridSize={50}
    glowIntensity={1}
  />
</div>

// Flat Grid
<GlowingGrid 
  perspective={false}
  lineColor="#3B82F6"
  glowColor="#8B5CF6"
  gridSize={40}
/>

// Tron Style
<GlowingGrid 
  lineColor="#00D9FF"
  glowColor="#FF6C00"
  pulseSpeed={2}
/>
```

---

### 6. MatrixRain - Digital Rain

**Perfect for:** Hacker themes, tech events, cybersecurity

```jsx
import MatrixRain from './ts-tailwind/Backgrounds/MatrixRain/MatrixRain';

// Classic Green
<div className="relative h-screen">
  <MatrixRain 
    color="#0F0"
    speed={1}
    fontSize={16}
  />
</div>

// Blue Variant
<MatrixRain 
  color="#00BFFF"
  speed={0.8}
  density={0.9}
/>

// Fast Rain
<MatrixRain 
  speed={2}
  trailLength={15}
/>
```

---

### 7. FloatingBubbles - Elegant Bubbles

**Perfect for:** Soft designs, playful themes, creative portfolios

```jsx
import FloatingBubbles from './ts-tailwind/Backgrounds/FloatingBubbles/FloatingBubbles';

// Pastel Theme
<div className="relative h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
  <FloatingBubbles 
    bubbleCount={40}
    colors={['#FFB6C1', '#DDA0DD', '#87CEEB', '#98FB98']}
  />
</div>

// Large Bubbles
<FloatingBubbles 
  bubbleCount={20}
  minSize={40}
  maxSize={120}
  speed={0.3}
/>

// Vibrant Colors
<FloatingBubbles 
  colors={['#FF0080', '#7928CA', '#FF0080', '#00DFD8']}
  opacity={0.8}
/>
```

**Note:** Bubbles avoid mouse cursor for interactive effect!

---

### 8. DigitalWaves - Waveform Visualization

**Perfect for:** Music apps, audio visualization, modern designs

```jsx
import DigitalWaves from './ts-tailwind/Backgrounds/DigitalWaves/DigitalWaves';

// Neon Theme
<div className="relative h-screen bg-black">
  <DigitalWaves 
    waveCount={4}
    colors={['#FF006E', '#8338EC', '#3A86FF', '#06FFA5']}
    amplitude={60}
    glow={true}
  />
</div>

// Minimal Waves
<DigitalWaves 
  waveCount={2}
  colors={['#3B82F6', '#8B5CF6']}
  amplitude={40}
  lineWidth={2}
/>

// Fast Animation
<DigitalWaves 
  speed={0.08}
  frequency={0.03}
/>
```

---

### 9. StarField - Space Background

**Perfect for:** Space themes, sci-fi designs, night sky effects

```jsx
import StarField from './ts-tailwind/Backgrounds/StarField/StarField';

// Full Experience
<div className="relative h-screen bg-black">
  <StarField 
    starCount={300}
    layers={4}
    shootingStars={true}
    twinkle={true}
  />
</div>

// Subtle Stars
<StarField 
  starCount={150}
  layers={2}
  shootingStars={false}
  speed={0.5}
/>

// Colorful Stars
<StarField 
  colors={['#FFFFFF', '#FFE9A0', '#B0E0E6', '#FFB6C1', '#DDA0DD']}
  shootingStarFrequency={0.005}
/>
```

---

## Combining Components

You can layer multiple components for unique effects:

```jsx
<div className="relative h-screen bg-black">
  {/* Base layer */}
  <StarField starCount={100} />
  
  {/* Middle layer */}
  <div className="absolute inset-0 opacity-50">
    <AuroraWaves waveCount={3} />
  </div>
  
  {/* Top layer */}
  <CosmicDustTailwind particleCount={80} />
  
  {/* Content */}
  <div className="relative z-10">Your Content</div>
</div>
```

## Performance Tips

1. **Mobile Optimization:**
```jsx
const isMobile = window.innerWidth < 768;

<CosmicDustTailwind 
  particleCount={isMobile ? 50 : 150}
  speed={isMobile ? 0.3 : 0.5}
/>
```

2. **Conditional Rendering:**
```jsx
const [showBackground, setShowBackground] = useState(true);

{showBackground && <ParticleField />}
```

3. **Lazy Loading:**
```jsx
import { lazy, Suspense } from 'react';

const StarField = lazy(() => import('./StarField'));

<Suspense fallback={<div>Loading...</div>}>
  <StarField />
</Suspense>
```

## Common Patterns

### Hero Section
```jsx
<section className="relative min-h-screen flex items-center justify-center bg-black">
  <CosmicDustTailwind />
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-bold text-white">Welcome</h1>
  </div>
</section>
```

### Card Background
```jsx
<div className="relative h-96 rounded-xl overflow-hidden">
  <NeuralNetwork nodeCount={30} />
  <div className="relative z-10 p-8">
    <h2>Card Content</h2>
  </div>
</div>
```

### Full Page Background
```jsx
<div className="fixed inset-0 -z-10">
  <GlowingGrid />
</div>
<main className="relative z-0">
  {/* Your page content */}
</main>
```
