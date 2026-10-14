import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({
  className,
  size = "md",
  showText = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-lg",
        className
      )}
      aria-label="The Angaar Labs - Home"
    >
      {/* Fiery Ember Emblem */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-ember/30 group-hover:border-ember group-hover:shadow-[0_0_20px_rgba(242,102,10,0.45)] transition-all duration-300",
          iconSizes[size]
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5 transition-transform duration-300 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="angaar-fire" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FACC15" />
              <stop offset="0.45" stopColor="#FF8A1E" />
              <stop offset="1" stopColor="#F2660A" />
            </linearGradient>
            <radialGradient id="angaar-core" cx="16" cy="22" r="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF5ED" />
              <stop offset="0.5" stopColor="#FACC15" />
              <stop offset="1" stopColor="#F2660A" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Outer Ember Flame */}
          <path
            d="M16 2C16 2 22 9 22 17C22 22.5 18 27 16 27C14 27 10 22.5 10 17C10 9 16 2 16 2Z"
            fill="url(#angaar-fire)"
          />
          {/* Inner Spark Flame */}
          <path
            d="M16 11C16 11 19.5 15.5 19.5 20.5C19.5 24 17 26.5 16 26.5C15 26.5 12.5 24 12.5 20.5C12.5 15.5 16 11 16 11Z"
            fill="url(#angaar-core)"
          />
          {/* Flame Wing Accents */}
          <path
            d="M8 19C8 19 6 15 10 13C10 15.5 10.5 17 11 18C9.5 18.5 8 19 8 19Z"
            fill="#FF8A1E"
            opacity="0.8"
          />
          <path
            d="M24 19C24 19 26 15 22 13C22 15.5 21.5 17 21 18C22.5 18.5 24 19 24 19Z"
            fill="#FACC15"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-extrabold tracking-tight text-smoke group-hover:text-white flex items-center leading-none",
              textSizes[size]
            )}
          >
            ANGAAR<span className="text-ember ml-1 font-bold">LABS</span>
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-ash-dark leading-tight mt-0.5">
            Digital Studio
          </span>
        </div>
      )}
    </Link>
  );
}
