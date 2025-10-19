# 📦 MuneerUI Installation Guide

## Quick Installation

MuneerUI components can be installed directly from your domain using either **shadcn** or **jsrepo** CLI tools.

## 🚀 Using shadcn CLI (Recommended)

### Install a Single Component

Once your site is deployed, users can install components directly:

```bash
npx shadcn@latest add https://muneerui.com/r/SplitText-JS-CSS
```

### Examples

```bash
# JavaScript + CSS version
npx shadcn@latest add https://muneerui.com/r/BlurText-JS-CSS

# JavaScript + Tailwind version
npx shadcn@latest add https://muneerui.com/r/BlurText-JS-TW

# TypeScript + CSS version
npx shadcn@latest add https://muneerui.com/r/BlurText-TS-CSS

# TypeScript + Tailwind version
npx shadcn@latest add https://muneerui.com/r/BlurText-TS-TW
```

### Install Multiple Components

```bash
npx shadcn@latest add https://muneerui.com/r/SplitText-JS-CSS https://muneerui.com/r/FadeContent-JS-CSS https://muneerui.com/r/Aurora-JS-CSS
```

## 📦 Using jsrepo CLI

```bash
npx jsrepo add muneerui/SplitText-JS-CSS
```

### Examples

```bash
# JavaScript + CSS
npx jsrepo add muneerui/CountUp-JS-CSS

# JavaScript + Tailwind
npx jsrepo add muneerui/AnimatedList-JS-TW

# TypeScript + CSS
npx jsrepo add muneerui/Carousel-TS-CSS

# TypeScript + Tailwind
npx jsrepo add muneerui/BubbleMenu-TS-TW
```

## 🔧 Setup Requirements

Before deploying, ensure:

1. **Build the registry:**
   ```bash
   npm run build
   ```

2. **Deploy to your domain (muneerui.com)**
   - The `/r/` routes need to be configured to serve the registry JSON files
   - The `/public/r/` directory contains all component definitions

3. **Configure shadcn registry:**
   The `registry.json` file in the root already points to your domain

## 📂 Registry Structure

After building, your registry files will be in:

```
public/
├── r/
│   ├── SplitText-JS-CSS.json
│   ├── SplitText-JS-TW.json
│   ├── SplitText-TS-CSS.json
│   ├── SplitText-TS-TW.json
│   ├── BlurText-JS-CSS.json
│   ├── CountUp-JS-CSS.json
│   ├── Aurora-JS-CSS.json
│   └── ... (all 110+ components in 4 variants each)
```

## 🌐 Deployment Setup

### Vercel (Recommended)

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Add custom domain:**
   - Go to Project Settings → Domains
   - Add `muneerui.com` and `www.muneerui.com`

3. **Verify registry access:**
   - Test: `https://muneerui.com/r/SplitText-JS-CSS.json`
   - Should return the component JSON

### Netlify

1. **Build settings:**
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"
   ```

2. **Add custom domain in Netlify dashboard**

3. **Configure redirects** (if needed):
   Create `public/_redirects`:
   ```
   /r/*  /r/:splat  200
   ```

### Custom Server

Ensure your server serves:
- Static files from `/public/r/`
- CORS headers enabled for CLI access

## 🎯 Component Naming Convention

All components follow this pattern:

```
[ComponentName]-[Language]-[Styling]

Where:
- Language: JS (JavaScript) or TS (TypeScript)
- Styling: CSS (CSS Modules) or TW (Tailwind CSS)
```

### Examples:
- `SplitText-JS-CSS` - JavaScript with CSS
- `AnimatedList-TS-TW` - TypeScript with Tailwind
- `Aurora-JS-CSS` - JavaScript with CSS
- `BubbleMenu-TS-TW` - TypeScript with Tailwind

## 🔍 Finding Components

### On Your Website

Browse all 110+ components at:
```
https://muneerui.com/text-animations/split-text
https://muneerui.com/animations/fade-content
https://muneerui.com/components/carousel
https://muneerui.com/backgrounds/aurora
```

Each component page shows:
- Live demo
- 4 installation commands (one for each variant)
- Props documentation
- Code examples

### CLI Commands per Component

Each component page displays ready-to-copy commands:

```bash
# shadcn CLI
pnpm dlx shadcn@latest add https://muneerui.com/r/ComponentName-JS-CSS

# jsrepo CLI
pnpm dlx jsrepo add muneerui/ComponentName-JS-CSS
```

## 🎨 Available Categories

### Text Animations (20+ components)
```bash
npx shadcn@latest add https://muneerui.com/r/SplitText-JS-CSS
npx shadcn@latest add https://muneerui.com/r/BlurText-JS-CSS
npx shadcn@latest add https://muneerui.com/r/CountUp-JS-CSS
npx shadcn@latest add https://muneerui.com/r/DecryptedText-JS-CSS
npx shadcn@latest add https://muneerui.com/r/CircularText-JS-CSS
```

### Animations (25+ components)
```bash
npx shadcn@latest add https://muneerui.com/r/FadeContent-JS-CSS
npx shadcn@latest add https://muneerui.com/r/AnimatedContent-JS-CSS
npx shadcn@latest add https://muneerui.com/r/BlobCursor-JS-CSS
npx shadcn@latest add https://muneerui.com/r/ClickSpark-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Crosshair-JS-CSS
```

### UI Components (35+ components)
```bash
npx shadcn@latest add https://muneerui.com/r/Carousel-JS-CSS
npx shadcn@latest add https://muneerui.com/r/BubbleMenu-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Dock-JS-CSS
npx shadcn@latest add https://muneerui.com/r/CardNav-JS-CSS
npx shadcn@latest add https://muneerui.com/r/ElasticSlider-JS-CSS
```

### Backgrounds (30+ components)
```bash
npx shadcn@latest add https://muneerui.com/r/Aurora-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Beams-JS-CSS
npx shadcn@latest add https://muneerui.com/r/DotGrid-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Particles-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Ripple-JS-CSS
```

## 🛠️ Troubleshooting

### Component Not Found

If users get a 404 error:

1. **Check the build output:**
   ```bash
   npm run build
   ls public/r/
   ```

2. **Verify the component name:**
   - Ensure correct spelling and casing
   - Check that the variant exists (JS/TS, CSS/TW)

3. **Test the URL directly:**
   ```bash
   curl https://muneerui.com/r/ComponentName-JS-CSS.json
   ```

### Dependencies Not Installing

Some components require additional dependencies. Users may need to install them manually:

```bash
# For Three.js components
npm install three @react-three/fiber @react-three/drei

# For GSAP animations
npm install gsap

# For Motion components
npm install motion

# For OGL components
npm install ogl
```

## 📝 Usage After Installation

After installation, import and use:

```jsx
// JavaScript
import SplitText from './components/SplitText';

function App() {
  return (
    <SplitText 
      text="Welcome to MuneerUI" 
      className="hero-text"
      delay={50}
    />
  );
}
```

```tsx
// TypeScript
import SplitText from './components/SplitText';

function App() {
  return (
    <SplitText 
      text="Welcome to MuneerUI" 
      className="hero-text"
      delay={50}
    />
  );
}
```

## 🌟 Best Practices

1. **Choose the right variant:**
   - Use TypeScript variants for type safety
   - Use Tailwind variants if your project uses Tailwind
   - Use CSS variants for maximum flexibility

2. **Install dependencies:**
   - Check component dependencies before installation
   - Install all required peer dependencies

3. **Customize:**
   - All components accept props for customization
   - Modify the installed code as needed
   - Check the component page for all available props

## 🎓 Examples

### Building a Landing Page

```bash
# Install hero components
npx shadcn@latest add https://muneerui.com/r/SplitText-JS-CSS
npx shadcn@latest add https://muneerui.com/r/FadeContent-JS-CSS
npx shadcn@latest add https://muneerui.com/r/Aurora-JS-CSS

# Install interactive elements
npx shadcn@latest add https://muneerui.com/r/AnimatedList-JS-CSS
npx shadcn@latest add https://muneerui.com/r/BubbleMenu-JS-CSS

# Install background effects
npx shadcn@latest add https://muneerui.com/r/Beams-JS-CSS
npx shadcn@latest add https://muneerui.com/r/DotGrid-JS-CSS
```

### Building a Portfolio

```bash
# Gallery components
npx shadcn@latest add https://muneerui.com/r/Carousel-JS-TW
npx shadcn@latest add https://muneerui.com/r/CircularGallery-JS-TW
npx shadcn@latest add https://muneerui.com/r/DomeGallery-JS-TW

# Text animations
npx shadcn@latest add https://muneerui.com/r/DecryptedText-JS-TW
npx shadcn@latest add https://muneerui.com/r/CircularText-JS-TW

# Interactive elements
npx shadcn@latest add https://muneerui.com/r/BlobCursor-JS-TW
npx shadcn@latest add https://muneerui.com/r/Crosshair-JS-TW
```

## 📞 Support

Need help?

- 📚 Documentation: https://muneerui.com/text-animations/split-text
- 💬 GitHub Issues: https://github.com/Muneerali199/MuneerUI/issues
- 🐦 Twitter: https://twitter.com/muneerali

---

**Built with ❤️ by Muneer Ali Subzwari**

Make sure to ⭐ star the repo if you find MuneerUI helpful!
