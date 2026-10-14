"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  ShoppingBag,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import ServiceCard from "@/components/ui/ServiceCard";
import Marquee from "@/components/ui/Marquee";
import StatCounter from "@/components/ui/StatCounter";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { SAMPLE_PROJECTS, INDUSTRIES_LIST } from "@/content/projects";

export default function HomePage() {
  const featuredProjects = SAMPLE_PROJECTS.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-32">
      {/* ========================================================
          PHASE 1 FOUNDATION & SYSTEM TESTBED
          ======================================================== */}
      
      {/* Hero Atmosphere / Preview Shell */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto w-full text-center overflow-hidden">
        {/* Ambient Ember Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-ember/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-flame/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Status Badge */}
          <Reveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/90 border border-ember/30 text-xs font-semibold uppercase tracking-widest text-ash mb-8 shadow-ember-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse shadow-[0_0_8px_#F2660A]" />
              <span>Phase 1 Verified Foundation • The Angaar Labs</span>
            </div>
          </Reveal>

          {/* Staggered Heading */}
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-smoke tracking-tight max-w-5xl leading-[1.05]">
              We build digital experiences that{" "}
              <span className="text-gradient-flame">ignite growth.</span>
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal direction="up" delay={0.3}>
            <p className="mt-6 md:mt-8 text-ash text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              A bespoke web engineering studio blending fiery &ldquo;Angaari&rdquo; aesthetics, 60fps purposeful motion, and rock-solid full-stack architectures.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal direction="up" delay={0.4}>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Start a project
              </Button>
              <Button
                href="/work"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Infinite Industry Marquee Verification */}
      <section className="py-6 border-y border-border-subdued bg-charcoal-900/60 backdrop-blur-sm">
        <div className="mb-2 text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ash-dark">
            Industries We Supercharge
          </span>
        </div>
        <Marquee items={INDUSTRIES_LIST} speed="normal" />
      </section>

      {/* Component Primitive Verification Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Design System Primitives"
          title="Engineered with"
          gradientText="Fiery Precision"
          description="Every component is built on our 8-pt token scale, hardware-accelerated transforms, and dark charcoal ember aesthetics."
        />

        {/* Buttons Showcase */}
        <div className="p-8 rounded-3xl bg-surface-card border border-border mb-16 shadow-card">
          <h3 className="text-xs font-mono uppercase tracking-widest text-ash-dark mb-6">
            Button Variants & Interactive States:
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary Ember Fill</Button>
            <Button variant="secondary">Secondary Outline</Button>
            <Button variant="spark">Gold Spark Accent</Button>
            <Button variant="ghost">Ghost State</Button>
            <Button variant="link">Text Link</Button>
            <Button variant="primary" isLoading>
              Loading State
            </Button>
          </div>
        </div>

        {/* Services Card Grid Verification */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ember">
                Foundational Component
              </span>
              <h3 className="font-display text-2xl font-bold text-smoke mt-1">
                ServiceCard Previews
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold text-ash hover:text-ember flex items-center gap-1"
            >
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Palette}
              title="Web Design & UI/UX"
              description="High-fidelity visual systems, responsive wireframes, and fluid interaction prototypes tuned for maximum brand equity."
              deliverables={[
                "Bespoke Design Systems & Tokens",
                "Figma Prototypes & Handoff",
                "Mobile-First Responsive Layouts",
              ]}
              index={0}
            />
            <ServiceCard
              icon={Code2}
              title="Full-Stack Engineering"
              description="Next.js App Router, TypeScript, and MongoDB web applications architected for instantaneous loading and effortless scaling."
              deliverables={[
                "Server-Side Rendering & Edge APIs",
                "MongoDB Database Modeling",
                "Robust Zod Request Validation",
              ]}
              index={1}
            />
            <ServiceCard
              icon={ShoppingBag}
              title="Modern E-Commerce"
              description="Conversion-focused headless online storefronts engineered with Stripe, zero layout shifts, and frictionless checkouts."
              deliverables={[
                "Headless Commerce & Dynamic Carts",
                "Stripe Checkout & Subscriptions",
                "Automated Inventory Synching",
              ]}
              index={2}
            />
          </div>
        </div>

        {/* Project Card Verification */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ember">
                Foundational Component
              </span>
              <h3 className="font-display text-2xl font-bold text-smoke mt-1">
                ProjectCard Previews (Explicitly Labelled Concept Samples)
              </h3>
            </div>
            <Link
              href="/work"
              className="text-xs font-semibold text-ash hover:text-ember flex items-center gap-1"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                slug={project.slug}
                industry={project.industry}
                industryLabel={project.industryLabel}
                summary={project.summary}
                coverImage={project.coverImage}
                techStack={project.techStack}
                year={project.year}
                featured={project.featured}
                isSample={project.isSample}
              />
            ))}
          </div>
        </div>

        {/* Stat Counter & Testimonial Verification */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCounter
              value={99}
              suffix="%"
              label="Lighthouse Speed Target"
              description="Engineered for high performance, sub-second TTFB, and zero cumulative layout shifts."
              isSample={true}
            />
            <StatCounter
              value={60}
              suffix=" FPS"
              label="Motion Rendering"
              description="Hardware-accelerated CSS and Framer Motion transforms honoring reduced motion."
              isSample={true}
            />
            <StatCounter
              value={7}
              suffix="+"
              label="Core Industries"
              description="Specialized digital craftsmanship across retail, real estate, hospitality, and CRM."
              isSample={false}
            />
            <StatCounter
              value={100}
              suffix="%"
              label="TypeScript & Strict Validation"
              description="Type-safe end-to-end architectures with Zod schemas and genuine database persistence."
              isSample={false}
            />
          </div>

          <div className="lg:col-span-1">
            <TestimonialCard
              quote="The Angaar Labs completely re-engineered our digital presence. The visual impact, speed, and motion are in a league of their own."
              author="Aarav Sharma"
              role="Founder & Creative Director"
              company="Apex Atelier"
              industry="Luxury Fashion"
              isSample={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
