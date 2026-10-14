"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Flame } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/story" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-charcoal/90 backdrop-blur-xl border-b border-border-subdued py-3.5 shadow-card"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-border-subdued/80">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                    isActive
                      ? "text-smoke"
                      : "text-ash hover:text-smoke"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-surface-elevated rounded-full border border-ember/30 -z-10 shadow-[0_0_12px_rgba(242,102,10,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="hidden sm:inline-flex"
            >
              Start a project
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-surface-card border border-border-subdued flex items-center justify-center text-smoke focus:outline-none focus:ring-2 focus:ring-ember"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-ember" />
              ) : (
                <Menu className="w-5 h-5 text-smoke" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-charcoal/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-6 md:hidden overflow-y-auto"
          >
            {/* Background Ember Glow */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-ember/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-flame/10 rounded-full blur-3xl pointer-events-none" />

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 my-auto">
              <span className="text-xs uppercase font-mono tracking-widest text-ash-dark mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between text-2xl font-display font-bold py-2 border-b border-border-subdued/50 transition-colors",
                        isActive
                          ? "text-ember pl-2 border-ember/40"
                          : "text-smoke hover:text-ember"
                      )}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight
                        className={cn(
                          "w-5 h-5 transition-transform",
                          isActive ? "text-ember" : "text-ash-dark"
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-8 border-t border-border-subdued space-y-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full text-center justify-center"
                rightIcon={<ArrowUpRight className="w-5 h-5" />}
              >
                Start a project
              </Button>

              <div className="flex items-center justify-between text-xs text-ash-dark pt-2">
                <span>The Angaar Labs Studio</span>
                <span className="flex items-center gap-1 text-ember">
                  <Flame className="w-3.5 h-3.5 fill-ember" /> Built to ignite
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
