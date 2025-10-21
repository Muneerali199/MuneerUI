import code from '@content/Backgrounds/CosmicDust/CosmicDust.jsx?raw';
import tailwind from '@ts-tailwind/Backgrounds/CosmicDust/CosmicDust.jsx?raw';
import tailwindPure from '@ts-tailwind/Backgrounds/CosmicDust/CosmicDustTailwind.jsx?raw';

export const cosmicDust = {
  usage: `// CLI Installation (Recommended)
npx muneerui add cosmic-dust

// Manual Installation
// Copy CosmicDust.jsx and CosmicDust.css to your project

import CosmicDust from './CosmicDust';

// Basic usage with dark background
<div style={{ position: 'relative', height: '100vh', background: '#000' }}>
  <CosmicDust />
  <div style={{ position: 'relative', zIndex: 10 }}>
    {/* Your content here */}
    <h1>Welcome to My Site</h1>
  </div>
</div>

// With custom colors
<CosmicDust
  particleCount={150}
  particleColor="#FFD700"  // Gold
  glowIntensity={0.8}
  speed={0.5}
/>

// Different color schemes
<CosmicDust particleColor="#3B82F6" />  // Blue
<CosmicDust particleColor="#8B5CF6" />  // Purple
<CosmicDust particleColor="#EC4899" />  // Pink
<CosmicDust particleColor="#FFFFFF" />  // White

// Performance optimization
<CosmicDust
  particleCount={100}  // Reduce for better performance
  speed={0.3}          // Slower movement
  glowIntensity={0.6}  // Less intensive glow
/>

// Hero section example
<section style={{ 
  position: 'relative', 
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000 0%, #0A0A0A 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <CosmicDust particleCount={200} particleColor="#FFD700" />
  <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
    <h1>Your Amazing Title</h1>
    <p>Your description here</p>
  </div>
</section>

// Pure TailwindCSS Version (No external CSS)
import CosmicDustTailwind from './CosmicDustTailwind';

<div className="relative h-screen bg-black">
  <CosmicDustTailwind 
    particleCount={150}
    particleColor="#FFD700"
    glowIntensity={0.8}
    speed={0.5}
  />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-5xl font-bold text-white">Your Content</h1>
  </div>
</div>`,
  code,
  tailwind,
  tailwindPure
};
