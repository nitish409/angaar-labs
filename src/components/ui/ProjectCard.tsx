"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id?: string;
  title: string;
  slug: string;
  industry: string;
  industryLabel?: string;
  summary: string;
  coverImage: {
    url: string;
    alt?: string;
  };
  techStack?: string[];
  year?: number | string;
  featured?: boolean;
  isSample?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  slug,
  industry,
  industryLabel,
  summary,
  coverImage,
  techStack = [],
  year = "2026",
  featured = false,
  isSample = true,
  className,
}: ProjectCardProps) {
  const displayIndustry = industryLabel || industry.replace("_", " ");

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-surface-card border border-border overflow-hidden hover:border-ember/50 transition-all duration-300 shadow-card hover:shadow-ember",
        className
      )}
    >
      {/* Visual Cover Container */}
      <Link href={`/work/${slug}`} className="relative w-full aspect-[16/10] overflow-hidden block bg-charcoal-850">
        <Image
          src={coverImage.url}
          alt={coverImage.alt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Warm Ember Duotone / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal/80 backdrop-blur-md border border-ember/30 text-smoke">
            <span className="w-1.5 h-1.5 rounded-full bg-ember shadow-[0_0_6px_#F2660A]" />
            {displayIndustry}
          </span>

          {isSample && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase bg-surface-elevated/90 border border-ash-dark/40 text-ash-light backdrop-blur-md">
              Concept — Sample
            </span>
          )}
        </div>

        {/* View Project Floating Arrow */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ember/90 text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-ember">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>

      {/* Content Body */}
      <div className="flex-1 p-6 md:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-ash mb-2 font-mono">
            <span>{year}</span>
            {featured && (
              <span className="text-ember font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-ember" /> Featured Flagship
              </span>
            )}
          </div>

          <Link href={`/work/${slug}`} className="block">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-smoke group-hover:text-ember transition-colors duration-200 line-clamp-1">
              {title}
            </h3>
          </Link>

          <p className="mt-2.5 text-ash text-sm line-clamp-2 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Tech Stack Chips & Link */}
        <div className="mt-6 pt-5 border-t border-border-subdued flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-surface-subdued border border-border-subdued text-[11px] font-medium text-ash"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 text-[11px] text-ash-dark font-medium">
                +{techStack.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/work/${slug}`}
            className="text-xs font-semibold text-ember hover:text-flame flex items-center gap-1 shrink-0 transition-colors"
          >
            Study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
