# New Background Components

This document provides an overview of all the newly added background components with TailwindCSS support.

## Components Overview

1. **CosmicDustTailwind** - Pure TailwindCSS particle effect
2. **AuroraWaves** - Dynamic aurora-like waves
3. **NeuralNetwork** - Animated neural network
4. **ParticleField** - 3D particle field with depth
5. **GlowingGrid** - Cyberpunk glowing grid
6. **MatrixRain** - Matrix-style digital rain
7. **FloatingBubbles** - Elegant floating bubbles
8. **DigitalWaves** - Digital waveform effect
9. **StarField** - Animated starfield with shooting stars

## Installation

All components are located in `src/ts-tailwind/Backgrounds/` and use only TailwindCSS classes (no external CSS dependencies except for canvas rendering).

## Usage Examples

### CosmicDustTailwind
```jsx
import CosmicDustTailwind from './CosmicDustTailwind';

<div className="relative h-screen bg-black">
  <CosmicDustTailwind particleCount={150} particleColor="#FFD700" />
  <div className="relative z-10">Content</div>
</div>
```

### AuroraWaves
```jsx
import AuroraWaves from './AuroraWaves';

<div className="relative h-screen bg-gradient-to-b from-purple-900 to-black">
  <AuroraWaves colors={['#00ffff', '#ff00ff', '#ffff00']} waveCount={5} />
</div>
```

### NeuralNetwork
```jsx
import NeuralNetwork from './NeuralNetwork';

<div className="relative h-screen bg-slate-900">
  <NeuralNetwork nodeCount={50} nodeColor="#3B82F6" />
</div>
```

### ParticleField
```jsx
import ParticleField from './ParticleField';

<div className="relative h-screen bg-black">
  <ParticleField particleCount={200} speed={1} />
</div>
```

### GlowingGrid
```jsx
import GlowingGrid from './GlowingGrid';

<div className="relative h-screen bg-black">
  <GlowingGrid perspective={true} lineColor="#00ffff" />
</div>
```

### MatrixRain
```jsx
import MatrixRain from './MatrixRain';

<div className="relative h-screen">
  <MatrixRain color="#0F0" speed={1} />
</div>
```

### FloatingBubbles
```jsx
import FloatingBubbles from './FloatingBubbles';

<div className="relative h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <FloatingBubbles bubbleCount={30} />
</div>
```

### DigitalWaves
```jsx
import DigitalWaves from './DigitalWaves';

<div className="relative h-screen bg-black">
  <DigitalWaves waveCount={3} glow={true} />
</div>
```

### StarField
```jsx
import StarField from './StarField';

<div className="relative h-screen bg-black">
  <StarField starCount={200} shootingStars={true} />
</div>
```

## Common Props Pattern

Most components follow this pattern:
- `className` - Additional Tailwind classes
- Color props accept hex values
- Speed/intensity props are numbers
- All components use canvas for rendering
- Components are positioned absolutely with `inset-0`

## Performance Tips

1. Reduce particle/node counts for better performance
2. Lower glow intensity to reduce rendering load
3. Disable blur effects on mobile devices
4. Use `pointer-events-none` for non-interactive backgrounds
5. Consider using `will-change: transform` for smoother animations

## Browser Support

All components work in modern browsers that support:
- HTML5 Canvas
- ES6+ JavaScript
- CSS3 Transforms
- RequestAnimationFrame API
