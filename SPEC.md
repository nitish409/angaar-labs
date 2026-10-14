# THE ANGAAR LABS — TECHNICAL SPECIFICATION & ARCHITECTURE (SPEC.md)

**Domain:** Agency & Marketing Flagship Website  
**Stack:** Next.js (App Router, TypeScript, Tailwind CSS), Framer Motion, MongoDB Atlas + Mongoose, Zod, Lucide React  
**Theme:** "Angaari" — High-energy, fiery, dark-first ember aesthetics, cinematic contrast, 60fps purposeful motion  
**Project Directory:** `C:\Users\nitis\.gemini\antigravity\scratch\angaar-labs`  

---

## 1. Executive Summary & Brand Positioning

**The Angaar Labs** is a premier digital engineering and web-development studio creating high-impact digital experiences for forward-thinking brands across real estate, hospitality, fashion, healthcare, SaaS/CRM, and modern e-commerce.

The brand ethos is **"Angaari"** (fiery, bold, unyielding craftsmanship):
- **Core Tagline:** *"We build digital experiences that ignite growth."*
- **Aesthetic Direction:** Obsidian charcoal background, fiery ember accents, golden spark highlights, generous whitespace, razor-sharp typography, and purposeful motion.
- **Rule of Truth:** All illustrative metrics, concept case studies, and sample testimonials are explicitly labelled to ensure absolute honesty and compliance with examination guidelines.

---

## 2. Design System & Tokens

### 2.1 Color Palette
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Base (Charcoal)** | `#0C0A09` | Dark-first background canvas |
| **Surface** | `#1A1614` | Primary container, cards, sections |
| **Surface Elevated** | `#241E1B` | Card hover state, dropdowns, modals |
| **Surface Subdued** | `#141110` | Inset backgrounds, code chips, tags |
| **Border Subdued** | `#292320` | Subtle hairline dividers (1px) |
| **Border Active** | `#F2660A` / `#7C2D12` | Glow-accented borders |
| **Ember (Primary)** | `#F2660A` | Primary brand accent, primary CTA fill, glows |
| **Flame (Secondary)**| `#FF8A1E` | Secondary gradient stop, hover highlights |
| **Gold Spark** | `#FACC15` | Micro-accents, badge dots, stars |
| **Deep Ember** | `#7C2D12` | Radial shadows, gradient dark undertones |
| **Smoke White** | `#F5F5F4` | Primary high-contrast typography (4.5:1+ contrast) |
| **Ash Gray** | `#A8A29E` | Secondary muted body text and captions |

### 2.2 Typography Scale
- **Display / Headings:** Space Grotesk / Syne (tight tracking `-0.03em`, bold weights `700`, `800`)
- **Body / Interface:** Inter (clean sans-serif, high legibility, weights `400`, `500`, `600`)
- **Scale:**
  * `xs`: 12px (line-height: 16px) — Badges, footnotes, metadata
  * `sm`: 14px (line-height: 20px) — Form labels, secondary links
  * `base`: 16px (line-height: 24px) — Standard body copy
  * `lg`: 20px (line-height: 28px) — Subheadings, card titles
  * `xl`: 24px (line-height: 32px) — Section subtitles
  * `2xl`: 32px (line-height: 40px) — Subsection headlines
  * `3xl`: 40px (line-height: 48px) — Major section titles
  * `4xl`: 48px / 64px — Hero primary headline, cinematic titles
  * `5xl`: 72px / 96px — Stat counters, oversized display numerals

### 2.3 Spacing & Layout
- **Grid:** 12-column responsive layout with max content width of `1280px` (`max-w-7xl`).
- **Section Padding:** `py-20 md:py-28 lg:py-32` for spacious breathing room.
- **Corner Radii:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px).
- **Glow Shadows:**
  * Ember Glow: `0 0 35px -5px rgba(242, 102, 10, 0.35)`
  * Ember Soft: `0 10px 30px -10px rgba(242, 102, 10, 0.2)`
  * Inner Glass: `inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)`

---

## 3. Information Architecture & Routes

| Route | Classification | Key Responsibilities & Sections |
| :--- | :--- | :--- |
| `/` | Public (P0) | **Home:** Full-viewport interactive ember Hero, Infinite Industry Marquee, Services Preview (6 cards), Industries Matrix (7 categories), Featured Projects (4 rich cards), Why Us / Stats Counters, 4-Step Process Timeline, Standout Sample Testimonial, Bold Final CTA. |
| `/about` | Public (P0) | **About Studio:** Manifesto, Mission & Core Values, Technical Capabilities Grid, Team Spotlight (explicit sample tags), Studio Culture & Engineering Philosophy. |
| `/story` | Public (P0) | **Our Story:** Scroll-based milestone timeline from inception to present day, architectural journey, and vision for the future. |
| `/work` | Public (P0) | **Portfolio Grid:** Interactive industry category filters (`REAL_ESTATE`, `CAFE`, `CLOTHING`, `HEALTHCARE`, `CRM`, `ECOMMERCE`, `OTHER`), search query, animated card lift/reveal, responsive masonry/grid. |
| `/work/[slug]` | Public (P0) | **Case Study:** Full dynamic case study: hero cover, client & industry tags, the challenge, the architectural solution, interactive mockup gallery, tech stack badges, verified/sample metrics, next case study switcher. Real 404 for nonexistent slugs. |
| `/services` | Public (P0) | **Services Deep-Dive:** 6 service verticals (Web Design, Web Development, E-commerce, CRM & Dashboards, Branding, Maintenance/Optimization) with deliverables, tech tools, process flow, and inquiry trigger. |
| `/contact` | Public (P0) | **Inquiry Terminal:** Fully functional client & server validated form (name, email, company, budget range, service type, message), MongoDB storage, status notification, studio coordinates, direct contacts. |
| `/admin/login` | Admin (P1) | Seeded admin credential authentication, JWT session cookie issuing. |
| `/admin` | Admin (P1) | Real-time analytics dashboard: project inventory, inquiries counter, recent submissions. |
| `/admin/projects` | Admin (P1) | Full CRUD operations for portfolio items, publish toggle, feature toggle. |
| `/admin/enquiries`| Admin (P1) | Inquiry management interface with status updating (`NEW`, `READ`, `REPLIED`, `ARCHIVED`). |
| `not-found (404)`| Global (P0) | Branded dark-ember 404 experience with home recovery navigation. |

---

## 4. Database Schema (MongoDB + Mongoose)

### 4.1 `projects`
- `title`: `String` (required, trim)
- `slug`: `String` (required, unique, indexed)
- `industry`: `enum` (`['REAL_ESTATE', 'CAFE', 'CLOTHING', 'HEALTHCARE', 'CRM', 'ECOMMERCE', 'OTHER']`)
- `summary`: `String` (required)
- `problem`: `String` (required)
- `solution`: `String` (required)
- `result`: `String` (required)
- `coverImage`: `{ url: String, publicId?: String, alt?: String }`
- `gallery`: `[{ url: String, publicId?: String, caption?: String }]`
- `techStack`: `[String]` (e.g. Next.js, TypeScript, Tailwind, MongoDB)
- `liveUrl`: `String` (optional)
- `clientName`: `String` (optional)
- `year`: `Number` (default current year)
- `featured`: `Boolean` (default false, indexed)
- `isPublished`: `Boolean` (default true, indexed)
- `order`: `Number` (default 0)
- `timestamps`: `createdAt`, `updatedAt`

### 4.2 `enquiries`
- `name`: `String` (required)
- `email`: `String` (required, validated format)
- `company`: `String` (required)
- `budget`: `String` (required, e.g. `<$5k`, `$5k-$15k`, `$15k-$30k`, `$30k+` or INR scale)
- `service`: `String` (required)
- `message`: `String` (required)
- `status`: `enum` (`['NEW', 'READ', 'REPLIED', 'ARCHIVED']`, default `'NEW'`)
- `ip`: `String` (for rate limiting tracking)
- `timestamps`: `createdAt`, `updatedAt`

### 4.3 `users` (Admin)
- `name`: `String` (required)
- `email`: `String` (required, unique)
- `passwordHash`: `String` (required, bcrypt salt rounds >= 10)
- `role`: `enum` (`['ADMIN']`, default `'ADMIN'`)
- `timestamps`: `createdAt`, `updatedAt`

### 4.4 `newsletter`
- `email`: `String` (required, unique)
- `createdAt`: `Date`

---

## 5. API Architecture & Standard Responses

All endpoints are hosted under `/api/v1` with uniform response envelopes:
- **Success Format:**
  ```json
  {
    "success": true,
    "data": { ... },
    "message": "Operation completed successfully"
  }
  ```
- **Error Format:**
  ```json
  {
    "success": false,
    "error": {
      "code": "VALIDATION_ERROR",
      "message": "Invalid form fields provided",
      "details": [{ "field": "email", "message": "Valid email address required" }]
    }
  }
  ```
- **Paginated Collection Format:**
  ```json
  {
    "success": true,
    "data": {
      "items": [ ... ],
      "page": 1,
      "limit": 20,
      "total": 42,
      "totalPages": 3
    }
  }
  ```

---

## 6. Motion & Interaction Design Standards

1. **Hardware Acceleration:** Only animate `transform` and `opacity` properties to guarantee strict 60 FPS performance without layout thrashing.
2. **Scroll Triggers:** Use `whileInView` with `viewport: { once: true, margin: "-80px" }` for crisp, staggered element reveals.
3. **Hero Experience:** Staged kinetic text reveal with ember particle ambiance, floating glowing geometric flares, and dual call-to-actions.
4. **Reduced Motion:** Fully adhere to `prefers-reduced-motion: reduce` by zeroing out translation distances and reducing transition times.
