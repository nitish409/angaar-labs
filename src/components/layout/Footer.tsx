"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Flame, CheckCircle2 } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

// Custom Brand SVGs for Social Links
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    try {
      await fetch("/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      setSubscribed(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal border-t border-border mt-20 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-ember/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-border-subdued">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="lg" />
            <p className="text-ash text-sm leading-relaxed max-w-sm">
              We architect high-impact digital experiences and web products that ignite business momentum. Bespoke design, uncompromising engineering.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-smoke font-mono block mb-2">
                Join our newsletter
              </span>
              <p className="text-xs text-ash mb-3">
                Insights on web performance, design engineering, and digital growth.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-ember font-medium p-3 rounded-xl bg-surface-elevated border border-ember/30">
                  <CheckCircle2 className="w-4 h-4 text-spark" />
                  <span>Thank you for subscribing to The Angaar Dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-surface-card border border-border focus:border-ember focus:ring-1 focus:ring-ember rounded-xl px-4 py-2.5 text-xs text-smoke placeholder:text-ash-dark outline-none transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={loading}
                    className="shrink-0"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-smoke font-mono">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ash hover:text-ember transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-ash hover:text-ember transition-colors">
                  Portfolio / Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ash hover:text-ember transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-ash hover:text-ember transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ash hover:text-ember transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Nav */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-smoke font-mono">
              Specialties
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Web Design & UI/UX
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Next.js Web Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Custom CRMs & Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Brand Identity Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ash hover:text-ember transition-colors">
                  Speed & SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact / Coordinates */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-smoke font-mono">
              Connect
            </span>
            <ul className="space-y-3 text-sm text-ash">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ember shrink-0" />
                <a href="mailto:hello@angaarlabs.com" className="hover:text-ember transition-colors">
                  hello@angaarlabs.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ember shrink-0 mt-0.5" />
                <span>Global Remote Studio (HQ: New Delhi, India)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-ember shrink-0" />
                <span className="text-xs text-smoke-muted">Accepting selected Q4 projects</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-card border border-border-subdued flex items-center justify-center text-ash hover:text-ember hover:border-ember/40 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-card border border-border-subdued flex items-center justify-center text-ash hover:text-ember hover:border-ember/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-card border border-border-subdued flex items-center justify-center text-ash hover:text-ember hover:border-ember/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-card border border-border-subdued flex items-center justify-center text-ash hover:text-ember hover:border-ember/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ash-dark">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Angaar Labs. All rights reserved.</span>
            <span className="text-border">|</span>
            <span className="text-smoke-muted font-medium">Made with Angaari fire</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/admin/login" className="hover:text-ash transition-colors">
              Studio CMS
            </Link>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-card border border-border-subdued hover:border-ember/50 text-smoke-muted hover:text-ember transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-ember" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
