import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0C0A09",
          950: "#070605",
          900: "#0C0A09",
          850: "#120F0D",
          800: "#1A1614",
          700: "#241E1B",
          600: "#2F2723",
        },
        surface: {
          DEFAULT: "#1A1614",
          card: "#181412",
          elevated: "#231C18",
          subdued: "#13100E",
          hover: "#2A221E",
        },
        ember: {
          DEFAULT: "#F2660A",
          50: "#FFF5ED",
          100: "#FFE7D3",
          200: "#FFCBA7",
          300: "#FFAA71",
          400: "#FF8A3D",
          500: "#F2660A",
          600: "#D45005",
          700: "#A93A04",
          800: "#7C2D12",
          900: "#4D1B0A",
          glow: "#7C2D12",
        },
        flame: {
          DEFAULT: "#FF8A1E",
          hover: "#FF9C3B",
        },
        spark: {
          DEFAULT: "#FACC15",
          hover: "#FDE047",
        },
        ash: {
          DEFAULT: "#A8A29E",
          dark: "#78716C",
          light: "#D6D3D1",
        },
        smoke: {
          DEFAULT: "#F5F5F4",
          muted: "#E7E5E4",
        },
        border: {
          subdued: "#27211D",
          DEFAULT: "#332A24",
          glow: "rgba(242, 102, 10, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 25px -4px rgba(242, 102, 10, 0.4)",
        "ember-lg": "0 0 50px -8px rgba(242, 102, 10, 0.55)",
        "ember-sm": "0 0 15px -2px rgba(242, 102, 10, 0.35)",
        "ember-inner": "inset 0 0 20px 0 rgba(242, 102, 10, 0.15)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "ember-radial": "radial-gradient(circle at 50% 0%, rgba(242, 102, 10, 0.18), transparent 70%)",
        "ember-conic": "conic-gradient(from 180deg at 50% 50%, #F2660A 0deg, #FF8A1E 120deg, #FACC15 240deg, #F2660A 360deg)",
        "flame-gradient": "linear-gradient(135deg, #F2660A 0%, #FF8A1E 50%, #FACC15 100%)",
        "surface-gradient": "linear-gradient(180deg, rgba(26, 22, 20, 0.8) 0%, rgba(18, 15, 13, 0.95) 100%)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "glow-breathe": "glowBreathe 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        glowBreathe: {
          "0%, 100%": {
            boxShadow: "0 0 20px -3px rgba(242, 102, 10, 0.35)",
          },
          "50%": {
            boxShadow: "0 0 40px 0px rgba(242, 102, 10, 0.65)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
