# Branding Updates - MuneerUI

## Summary
Updated all references from "MuneerUi" and "reactbits.dev" to "MuneerUI" and "muneer-cli" throughout the codebase.

## Changes Made

### 1. Installation Documentation
**File:** `src/docs/Installation.jsx`
- Changed "MuneerUi supports" to "MuneerUI supports"
- Updated CLI commands:
  - `npx shadcn@latest add https://reactbits.dev/r/...` → `npx shadcn@latest add muneer-cli/r/...`
  - `npx jsrepo add https://reactbits.dev/...` → `npx jsrepo add muneer-cli/...`

### 2. Component Demos Updated
- **GlitchTextDemo.jsx**: Changed display text from "MuneerUi" to "MuneerUI"
- **FallingTextDemo.jsx**: Updated description text to use "MuneerUI" instead of "MuneerUi"
- **ScrollStackDemo.jsx**: Changed "All on MuneerUi!" to "All on MuneerUI!"
- **StepperDemo.jsx**: Updated welcome message to "Welcome to the MuneerUI stepper!"
- **FluidGlass.jsx**: Changed 3D text from "MuneerUi" to "MuneerUI"

### 3. Background Components Updated
**File:** `src/components/common/Preview/BackgroundContent.jsx`
- Changed logo alt text from "MuneerUi Logo" to "MuneerUI Logo"
- This component is used across ALL background demos (Prism, Aurora, Iridescence, etc.)

**File:** `src/demo/Components/GlassSurfaceDemo.jsx`
- Changed logo alt text from "MuneerUi Logo" to "MuneerUI Logo"

### 4. Components Removed
**File:** `src/constants/Components.js`
- Removed `liquid-button` from animations section
- Removed `premium-pricing-card` from components section

These components are no longer accessible through the navigation but files still exist in:
- `src/demo/Animations/LiquidButtonDemo.jsx`
- `src/ts-tailwind/Animations/LiquidButton/`
- `src/demo/Components/PremiumPricingCardDemo.jsx`
- `src/ts-tailwind/Components/PremiumPricingCard/`

## Files Not Updated
The following files still contain "MuneerUi" references but were left unchanged as they are:
- Testimonials (user-generated content - actual tweets/reviews)
- Code examples in constants (documentation examples)
- MCP Server documentation
- Announcement component (Vue Bits reference)

## CLI Configuration
The actual CLI base URL is configured in:
- `src/utils/cli.js` - uses `https://muneer-ui.vercel.app` as baseUrl

## Complete List of Updated Files

### Demo Files (9 files)
1. `src/constants/Components.js` - Removed components
2. `src/docs/Installation.jsx` - Updated branding and CLI
3. `src/demo/TextAnimations/GlitchTextDemo.jsx` - Changed to MuneerUI
4. `src/demo/TextAnimations/FallingTextDemo.jsx` - Changed to MuneerUI
5. `src/demo/Components/ScrollStackDemo.jsx` - Changed to MuneerUI
6. `src/demo/Components/StepperDemo.jsx` - Changed to MuneerUI
7. `src/content/Components/FluidGlass/FluidGlass.jsx` - Changed to MuneerUI
8. `src/components/common/Preview/BackgroundContent.jsx` - Changed logo alt text
9. `src/demo/Components/GlassSurfaceDemo.jsx` - Changed logo alt text

### Code Example Files (11 files)
10. `src/constants/code/TextAnimations/variableProximityCode.js` - Updated example text
11. `src/constants/code/TextAnimations/textTrailCode.js` - Updated example text
12. `src/constants/code/TextAnimations/textPressureCode.js` - Updated comment
13. `src/constants/code/TextAnimations/splitTextCode.js` - Updated comment
14. `src/constants/code/TextAnimations/scrollVelocityCode.js` - Updated example text
15. `src/constants/code/TextAnimations/scrollFloatCode.js` - Updated example text
16. `src/constants/code/TextAnimations/glitchTextCode.js` - Updated example text
17. `src/constants/code/TextAnimations/fallingTextCode.js` - Updated example text
18. `src/constants/code/TextAnimations/curvedLoopCode.js` - Updated example text
19. `src/constants/code/Components/stepperCode.js` - Updated example text
20. `src/constants/code/Animations/magnetCode.js` - Updated example text

**Total: 20 files updated**

## Notes
- All user-facing branding now shows "MuneerUI"
- CLI commands simplified to use "muneer-cli" prefix
- All background components now display "MuneerUI Logo" instead of "MuneerUi Logo"
- The BackgroundContent component is shared across all background demos, so one change updated all backgrounds
- The changes maintain backward compatibility with existing component structure
