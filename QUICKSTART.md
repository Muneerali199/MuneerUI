# 🚀 Quick Start Guide - MuneerUI

## Get Started in 3 Minutes!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Your Browser
Navigate to `http://localhost:5173` to see your UI library in action!

## 🎨 What You'll See

- **Landing Page**: Beautiful hero section with your branding
- **110+ Components**: Browse all available components
- **Live Demos**: Interactive examples you can copy
- **Code Variants**: Choose JS/TS and CSS/Tailwind versions

## 📝 Making Your First Change

### Update the Hero Text
Edit: `src/components/landing/Hero/Hero.jsx`

```jsx
<ResponsiveSplitText
  text="Your Custom Text Here"
  className="hero-split"
  // ... other props
/>
```

### Change Colors
Edit: `src/muneerui-theme.css`

```css
:root {
  --muneer-primary: #YOUR_COLOR;
  --muneer-secondary: #YOUR_COLOR;
}
```

### Customize Logo
Edit: `src/components/common/Misc/SVGComponents.jsx`

## 🏗️ Building for Production

```bash
npm run build
```

Your optimized build will be in the `dist/` folder.

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run new:component # Generate new component
```

## 🎯 Project Structure Overview

```
src/
├── components/
│   ├── landing/      # Landing page components
│   ├── common/       # Shared components
│   └── navs/         # Navigation components
├── content/          # Component implementations
│   ├── TextAnimations/
│   ├── Animations/
│   ├── Components/
│   └── Backgrounds/
├── pages/            # Page components
├── assets/           # Static assets
└── styles.css        # Global styles
```

## 🔧 Customization Tips

### 1. **Brand Colors**
All colors are in CSS variables - change them in one place!

### 2. **Component Variants**
Each component has 4 versions in different folders:
- `src/content/` - JS + CSS
- `src/tailwind/` - JS + Tailwind
- `src/ts-default/` - TS + CSS
- `src/ts-tailwind/` - TS + Tailwind

### 3. **Adding New Components**
```bash
npm run new:component
```
Follow the prompts to generate a new component scaffold.

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📚 Learning Resources

- **Main Docs**: `MUNEERUI_DOCS.md`
- **Setup Info**: `SETUP_COMPLETE.md`
- **Contributing**: `CONTRIBUTING.md`
- **Component Code**: Browse `src/content/`

## 🎉 You're Ready!

Start customizing and building with MuneerUI. Every component is yours to modify and enhance!

## 🆘 Need Help?

1. Check the documentation files
2. Explore example components in `src/content/`
3. Read component source code - it's well-commented
4. Check `package.json` for available scripts

## 🚀 Next Steps

1. ✅ Run the dev server
2. ✅ Browse components
3. ✅ Customize colors and branding
4. ✅ Add your own components
5. ✅ Deploy to production
6. ✅ Share with the world!

---

**Happy Building! 🎨**

*MuneerUI - Created by Muneer Ali Subzwari*
