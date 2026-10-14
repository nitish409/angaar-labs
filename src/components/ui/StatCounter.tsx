"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  isSample?: boolean;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  isSample = true,
  duration = 2,
  className,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const currentProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(start + (end - start) * currentProgress);

      setDisplayValue(currentVal);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplayValue(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col p-6 rounded-2xl bg-surface-card border border-border hover:border-ember/40 transition-all duration-300 shadow-card",
        className
      )}
    >
      {/* Sample Label Badge */}
      {isSample && (
        <div className="self-end mb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-ash-dark border border-border-subdued px-2 py-0.5 rounded-full">
            Illustrative Metric
          </span>
        </div>
      )}

      {/* Counter Digits */}
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-smoke tracking-tight flex items-baseline">
        {prefix && <span className="text-ember mr-1">{prefix}</span>}
        <span className="text-gradient-flame">{displayValue}</span>
        {suffix && <span className="text-ember ml-1">{suffix}</span>}
      </div>

      {/* Label */}
      <h4 className="mt-3 font-display text-lg font-bold text-smoke">
        {label}
      </h4>

      {/* Description */}
      {description && (
        <p className="mt-1.5 text-xs text-ash leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
