# The Angaar Labs (PS04) — Examination & Submission Responses

Use these answers to fill out your project submission and evaluation form.

---

### 1. Technologies and tools you actually used
```text
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, MongoDB Atlas, Mongoose, Zod, Lucide React, Git, npm, Antigravity AI
```

---

### 2. Your individual work and contributions
```text
- Architected the full-stack Next.js 14 App Router project and defined the system specification (SPEC.md, PROMPTS.md, README.md).
- Designed and coded the custom "Angaari" dark-first design system (Charcoal #0C0A09, Ember #F2660A, Flame #FF8A1E, Spark #FACC15).
- Built responsive layout components including sticky glass Navbar with spring active pills, full-screen mobile menu overlay, and comprehensive Footer with newsletter and back-to-top functionality.
- Created reusable UI primitives: Button (with glowing aura & variants), SectionHeading, Reveal (scroll triggers), ProjectCard, ServiceCard, infinite Marquee, StatCounter, and TestimonialCard.
- Configured Space Grotesk and Inter typography, verified production build with zero TypeScript/ESLint errors, and tested local server execution on port 3000.
```

---

### 3. Current project status
```text
In progress — Phase 0 (Planning & Spec) and Phase 1 (Foundation, Design Tokens & Core Components) completed, verified with production build (npm run build) and running locally.
```

---

### 4. Challenges faced and how you solved them
```text
1. Deprecated Brand Icons: Modern Lucide React removed social icons (GitHub, Twitter/X, LinkedIn). Solved by building custom, accessible SVG vector components styled with ember hover effects.
2. Strict Type & Lint Compliance: Production build initially flagged unused imports and let declarations under Next.js strict ESLint rules. Solved by performing a complete code audit, eliminating dead code, and achieving a 0-error, 0-warning production build.
3. Dark Theme Contrast & Readability: Balancing a dark-charcoal background (#0C0A09) with fiery ember accents without sacrificing text legibility. Solved by establishing strict contrast tokens: Smoke White (#F5F5F4) for primary copy, Ash (#A8A29E) for secondary copy, and restricting ember primarily to accents, interactive buttons, and warm glows.
4. Smooth 60 FPS Motion & Accessibility: Ensuring smooth animations across devices. Solved by restricting Framer Motion animations strictly to hardware-accelerated transform and opacity, while integrating prefers-reduced-motion support for accessibility.
```

---

### 5. Skills and knowledge gained
```text
- Advanced Next.js 14 App Router architecture, distinguishing server components and client-side motion boundaries.
- Design token engineering: crafting an original, cohesive dark-mode design system in Tailwind CSS with warm ember glow effects.
- Motion choreography: implementing scroll reveals, infinite marquee loops, count-up animations, and spring physics using Framer Motion.
- Full-stack hygiene: establishing strict TypeScript type safety, Zod validation schemas, environment variable isolation, and clean Git milestone commits.
```
