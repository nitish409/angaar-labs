# PROMPTS.md — Vibe Coding Playbook & Execution Log

This document records the sequential prompts, architectural instructions, and implementation directives used to build **The Angaar Labs** flagship web application.

---

### Prompt 01 — Phase 0: Project Architecture & System Specification
```markdown
Read the attached Angaar Labs problem statement PS4_The_Angaar_Labs_Website.pdf and ANTIGRAVITY_MASTER_PROMPT.md.
Extract all P0/P1/P2 requirements, define the 'Angaari' design system (tokens, colors, typography, glowing shadows),
map out the 7 public routes, CMS admin structure, MongoDB schemas for projects, enquiries, users, and newsletter,
and create SPEC.md, .env.example, and the initial execution plan.
```
**Outcome:** Created `SPEC.md` and `.env.example`, initialized clean Next.js 14 App Router project with TypeScript and Tailwind CSS.

---

### Prompt 02 — Phase 1: Foundation, Tokens, Theme & Design System Primitives
```markdown
Configure Tailwind CSS for a dark-first, fiery 'ember' brand:
- Charcoal base #0C0A09, surface #1A1614, surface-elevated #241E1B, primary ember #F2660A, flame #FF8A1E, gold spark #FACC15, deep ember #7C2D12, text smoke #F5F5F4, ash #A8A29E.
- Warm ember glow box-shadows, typography scale, custom scrollbars, and keyframe animations.
- Set up Google Fonts Space Grotesk and Inter in layout.
- Build reusable UI primitives:
  * Button (primary ember fill with glowing aura, secondary outline, ghost, text link)
  * SectionHeading (badge with glowing spark dot, display title, subtitle)
  * Reveal (viewport scroll-stagger with prefers-reduced-motion support)
  * ProjectCard (interactive card with image zoom, tags, hover elevation)
  * ServiceCard (warm glowing border, Lucide icon, feature list)
  * Marquee (infinite silky smooth ticker for industries)
  * StatCounter (dynamic viewport counter with sample indicator)
  * TestimonialCard (dark glass card with glowing ember accents)
  * Navbar (sticky blur, fiery flame logo, active link indicator, mobile menu overlay)
  * Footer (brand identity, navigation, socials, newsletter, back-to-top)
```
**Outcome:** Implemented complete design token engine, typography, layout components, and verified responsive shell.

---
*(Additional prompt milestones will be recorded as subsequent phases are executed).*
