export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  industry: "REAL_ESTATE" | "CAFE" | "CLOTHING" | "HEALTHCARE" | "CRM" | "ECOMMERCE" | "OTHER";
  industryLabel: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  coverImage: {
    url: string;
    alt: string;
  };
  gallery: {
    url: string;
    caption: string;
  }[];
  techStack: string[];
  liveUrl?: string;
  clientName?: string;
  year: number;
  featured: boolean;
  isPublished: boolean;
  order: number;
  isSample: boolean;
}

export const SAMPLE_PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    title: "Aura Haute Couture",
    slug: "aura-haute-couture",
    industry: "CLOTHING",
    industryLabel: "Apparel & Fashion",
    summary:
      "A cinematic, editorial e-commerce platform engineered with Next.js and headless commerce, featuring 3D garment lookbooks and instantaneous sub-50ms page transitions.",
    problem:
      "A luxury fashion atelier faced 4.8s page load times on legacy Shopify theme, resulting in a 68% cart abandonment rate and brand erosion.",
    solution:
      "Architected a custom headless Next.js frontend with Tailwind CSS, Framer Motion fluid lookbooks, and high-performance WebP dynamic image pipeline with global edge caching.",
    result:
      "Page load dropped to 0.65s (sub-second FCP), mobile conversions increased by 42% in concept benchmarking, and Lighthouse performance reached 98.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      alt: "Aura Haute Couture E-commerce Concept",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
        caption: "Editorial Product Detail View with Micro-Interactions",
      },
      {
        url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
        caption: "Fluid Lookbook Stagger & Touch Gallery",
      },
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"],
    clientName: "Aura Atelier (Sample Concept)",
    year: 2026,
    featured: true,
    isPublished: true,
    order: 1,
    isSample: true,
  },
  {
    id: "proj-2",
    title: "Apex Horizon Realty",
    slug: "apex-horizon-realty",
    industry: "REAL_ESTATE",
    industryLabel: "Real Estate & Architecture",
    summary:
      "Ultra-luxury architectural portal offering interactive floorplan navigators, spatial video showcases, and a bespoke CRM for high-net-worth property acquisitions.",
    problem:
      "Commercial and luxury estate brokers struggled to showcase multi-million-dollar listings using generic IDX templates that lacked elegance and lead segmentation.",
    solution:
      "Engineered an obsidian-themed property platform with interactive SVG spatial maps, dynamic neighborhood insights, and encrypted VIP client enquiry pipelines.",
    result:
      "Achieved 3.2x higher engagement on property tours and captured qualified inquiries with zero bounce on key penthouse showcases.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      alt: "Apex Horizon Luxury Real Estate Platform",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        caption: "Interactive Master Suite Virtual Panorama View",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        caption: "Architectural Specification & Schedule Matrix",
      },
    ],
    techStack: ["Next.js", "React Three Fiber", "Tailwind CSS", "MongoDB", "Node.js"],
    clientName: "Apex Horizon Group (Sample Concept)",
    year: 2026,
    featured: true,
    isPublished: true,
    order: 2,
    isSample: true,
  },
  {
    id: "proj-3",
    title: "Roast & Relish Gastronomy",
    slug: "roast-relish-gastronomy",
    industry: "CAFE",
    industryLabel: "Cafe & Hospitality",
    summary:
      "Sensory digital experience for an artisanal coffee roastery and fine bistro featuring real-time table reservations, digital tasting notes, and bean subscription engine.",
    problem:
      "A fast-growing specialty cafe lost revenue to 3rd party food-delivery commissions and lacked a unified brand identity across their 4 metropolitan locations.",
    solution:
      "Developed a dark ember web presence featuring mouthwatering visual rhythm, zero-commission direct ordering, and subscription management for monthly single-origin beans.",
    result:
      "Over 40% of delivery traffic migrated to their direct portal, saving thousands in platform commissions while delighting patrons.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      alt: "Roast and Relish Specialty Cafe Platform",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
        caption: "Interactive Roast Profile & Tasting Notes Wheel",
      },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Mongoose", "Razorpay", "Framer Motion"],
    clientName: "Roast & Relish (Sample Concept)",
    year: 2025,
    featured: true,
    isPublished: true,
    order: 3,
    isSample: true,
  },
  {
    id: "proj-4",
    title: "PulseFlow SaaS CRM",
    slug: "pulseflow-saas-crm",
    industry: "CRM",
    industryLabel: "Enterprise CRM & SaaS",
    summary:
      "Next-generation pipeline command center and lead attribution platform built with sub-second data streaming, custom KPI widgets, and role-based permissions.",
    problem:
      "B2B sales teams were overwhelmed by clunky enterprise legacy dashboards with 10-second reload times and confusing navigation hierarchies.",
    solution:
      "Designed a bespoke dark glass dashboard with keyboard shortcuts, real-time WebSocket updates, and intuitive pipeline kanbans.",
    result:
      "Reduced rep admin time by 35% in usability evaluations, delivering a 60fps buttery smooth interface for high-velocity teams.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "PulseFlow Enterprise CRM Dashboard",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        caption: "Real-time Sales Velocity Analytics View",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Chart.js"],
    clientName: "PulseFlow Technologies (Sample Concept)",
    year: 2026,
    featured: true,
    isPublished: true,
    order: 4,
    isSample: true,
  },
  {
    id: "proj-5",
    title: "Lumina Integrative Health",
    slug: "lumina-integrative-health",
    industry: "HEALTHCARE",
    industryLabel: "Modern Healthcare",
    summary:
      "Patient-centric medical collective portal with encrypted doctor-patient messaging, seamless appointment scheduling, and calm, accessible visual rhythm.",
    problem:
      "A high-profile wellness and medical collective had an outdated clinical website that caused confusion among elderly patients and high phone-support burdens.",
    solution:
      "Re-engineered an accessible, WCAG AAA compliant platform with simplified booking workflows and patient health portals.",
    result:
      "Appointment booking completion rates jumped by 54% while customer support calls decreased by 30%.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      alt: "Lumina Integrative Health Web Platform",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Doctor Directory & Frictionless Consultation Scheduler",
      },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Zod", "Node.js", "Accessibility Focus"],
    clientName: "Lumina Health (Sample Concept)",
    year: 2025,
    featured: false,
    isPublished: true,
    order: 5,
    isSample: true,
  },
  {
    id: "proj-6",
    title: "Verve Artisan Goods",
    slug: "verve-artisan-goods",
    industry: "ECOMMERCE",
    industryLabel: "Modern E-Commerce",
    summary:
      "Direct-to-consumer lifestyle commerce hub featuring dynamic bundle builders, sticky mobile cart flows, and rich micro-interactions.",
    problem:
      "Low mobile average order value ($38) due to multi-step checkout friction and poor product bundling capabilities.",
    solution:
      "Constructed a high-speed headless checkout experience with smart upsell flyouts and dynamic bundle discounts.",
    result:
      "Average order value increased to $64 and mobile bounce rate dropped by 28%.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      alt: "Verve Artisan Goods E-Commerce Platform",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        caption: "Mobile Sticky Cart & Instantaneous Checkout Drawers",
      },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Stripe Checkout", "Framer Motion"],
    clientName: "Verve Goods Co. (Sample Concept)",
    year: 2026,
    featured: false,
    isPublished: true,
    order: 6,
    isSample: true,
  },
];

export const INDUSTRIES_LIST = [
  "Real Estate & Architecture",
  "Cafes & Fine Dining",
  "Apparel & Fashion Brands",
  "Healthcare & Medical Clinics",
  "Enterprise CRMs & SaaS",
  "High-Conversion E-Commerce",
  "Custom Web Applications",
  "Fintech & Venture Studios",
];
