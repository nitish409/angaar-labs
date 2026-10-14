"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientText?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  gradientText,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-ember/30 text-xs font-semibold uppercase tracking-widest text-ash mb-4 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-ember animate-pulse shadow-[0_0_8px_#F2660A]" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-smoke leading-[1.15]"
      >
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-flame block sm:inline">
            {gradientText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={cn(
            "mt-4 text-ash text-base md:text-lg leading-relaxed",
            isCenter && "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
