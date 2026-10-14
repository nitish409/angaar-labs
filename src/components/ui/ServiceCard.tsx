"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  deliverables: string[];
  href?: string;
  index?: number;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  deliverables,
  href = "/services",
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col justify-between p-7 md:p-8 rounded-2xl bg-surface-card border border-border hover:border-ember/60 transition-all duration-300 shadow-card hover:shadow-ember",
        className
      )}
    >
      {/* Top Header with Icon */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-surface-elevated border border-ember/25 flex items-center justify-center text-ember group-hover:bg-ember group-hover:text-white group-hover:shadow-[0_0_20px_rgba(242,102,10,0.5)] transition-all duration-300">
            <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-mono text-xs font-semibold text-ash-dark">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold text-smoke group-hover:text-ember transition-colors duration-200">
          {title}
        </h3>

        <p className="mt-3 text-ash text-sm leading-relaxed">
          {description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-6 space-y-2.5">
          <p className="text-xs font-semibold tracking-wider uppercase text-ash-dark font-mono">
            Key Deliverables:
          </p>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-smoke-muted">
                <Check className="w-4 h-4 text-ember shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-8 pt-5 border-t border-border-subdued">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ash group-hover:text-ember transition-colors"
        >
          <span>Explore Architecture</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
