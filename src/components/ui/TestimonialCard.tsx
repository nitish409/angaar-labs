"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry?: string;
  rating?: number;
  avatarUrl?: string;
  isSample?: boolean;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  industry,
  rating = 5,
  avatarUrl,
  isSample = true,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-surface-card/90 border border-border hover:border-ember/40 backdrop-blur-md transition-all duration-300 shadow-card",
        className
      )}
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-ember/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Top bar with rating and sample badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 text-spark">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-spark" />
            ))}
          </div>

          {isSample && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-surface-elevated border border-border-subdued text-ash-light">
              Sample Testimonial
            </span>
          )}
        </div>

        {/* Large Quote Icon */}
        <Quote className="w-10 h-10 text-ember/30 mb-4 rotate-180" />

        {/* Quote Content */}
        <p className="font-display text-lg sm:text-xl text-smoke leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="mt-8 pt-6 border-t border-border-subdued flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-elevated border border-ember/30 shrink-0">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={author}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display font-bold text-ember text-base">
              {author.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-display font-bold text-smoke text-base">
            {author}
          </h4>
          <p className="text-xs text-ash">
            {role}, <span className="text-smoke-muted font-medium">{company}</span>
            {industry && ` (${industry})`}
          </p>
        </div>
      </div>
    </div>
  );
}
