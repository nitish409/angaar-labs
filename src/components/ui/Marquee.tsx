"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[] | { text: string; icon?: React.ReactNode }[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  // Speed classes
  const durationClass = {
    slow: "duration-[50s]",
    normal: "duration-[35s]",
    fast: "duration-[20s]",
  }[speed];

  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 select-none flex",
        className
      )}
    >
      {/* Gradient edge masks for smooth cinematic fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container (duplicated for infinite seamless loop) */}
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-6 md:gap-10",
          animationClass,
          durationClass,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={`track1-${idx}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-elevated/40 border border-border-subdued hover:border-ember/40 text-smoke-muted font-display text-sm md:text-base font-medium tracking-wide whitespace-nowrap transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_8px_#F2660A]" />
            <span>{typeof item === "string" ? item : item.text}</span>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-6 md:gap-10",
          animationClass,
          durationClass,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={`track2-${idx}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-elevated/40 border border-border-subdued hover:border-ember/40 text-smoke-muted font-display text-sm md:text-base font-medium tracking-wide whitespace-nowrap transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_8px_#F2660A]" />
            <span>{typeof item === "string" ? item : item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
