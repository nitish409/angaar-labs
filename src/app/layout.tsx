import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "The Angaar Labs | High-Impact Digital Experiences & Web Engineering",
    template: "%s | The Angaar Labs",
  },
  description:
    "The Angaar Labs is a premier web engineering and digital design studio. We architect high-performance websites, CRMs, e-commerce platforms, and bespoke web apps that ignite business growth.",
  keywords: [
    "The Angaar Labs",
    "Web Development Studio",
    "Next.js Agency",
    "High Performance Web",
    "UI/UX Design",
    "Custom Web Applications",
    "E-commerce Development",
  ],
  authors: [{ name: "The Angaar Labs Studio" }],
  creator: "The Angaar Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angaarlabs.com",
    siteName: "The Angaar Labs",
    title: "The Angaar Labs | We Build Digital Experiences That Ignite Growth",
    description:
      "Premier web engineering and digital design studio. Fiery aesthetics, uncompromising performance, 60fps motion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Angaar Labs Flagship Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Angaar Labs | Digital Experiences That Ignite Growth",
    description: "Premier web engineering and digital design studio.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-charcoal text-smoke font-sans selection:bg-ember/30 selection:text-white min-h-screen flex flex-col antialiased relative">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
