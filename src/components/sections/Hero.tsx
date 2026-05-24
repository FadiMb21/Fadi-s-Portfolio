"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GradientOrb from "@/components/effects/GradientOrb";
import GlassCard from "@/components/shared/GlassCard";
import { heroKeywords } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  keywordVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const stats = [
  { value: "8+", label: "Branches" },
  { value: "10+", label: "AI Classes" },
  { value: "4", label: "Languages" },
] as const;

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % heroKeywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      document
        .getElementById(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* ── Background ──────────────────────────── */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <GradientOrb
        className="top-[10%] left-[15%]"
        size={520}
        color="rgba(160, 160, 160, 0.05)"
        delay={0}
      />
      <GradientOrb
        className="bottom-[5%] right-[10%]"
        size={440}
        color="rgba(200, 200, 200, 0.04)"
        delay={4}
      />

      {/* ── Content ─────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 sm:px-8 py-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={staggerItem}
          className={cn(
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
            "font-extralight tracking-tight leading-[1.1]",
            "gradient-text"
          )}
        >
          Fadi Moghrabi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className={cn(
            "max-w-2xl text-base sm:text-lg",
            "text-titanium font-light tracking-wide leading-relaxed"
          )}
        >
          Data Analyst &bull; AI Application Developer &bull; Government &amp;
          Security Studies
        </motion.p>

        {/* ── Rotating keywords ─────────────────── */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-brushed-steel uppercase tracking-[0.2em]">
            Currently focused on
          </span>

          <div className="relative h-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={heroKeywords[keywordIndex]}
                variants={keywordVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute text-lg sm:text-xl font-light tracking-wide text-platinum"
              >
                {heroKeywords[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── CTA Buttons ───────────────────────── */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-light tracking-wide",
              "bg-platinum/10 border border-platinum/20 text-platinum",
              "hover:bg-platinum/20",
              "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            )}
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-light tracking-wide",
              "border border-white/10 text-silver",
              "hover:border-white/20",
              "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            )}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* ── Floating stat cards ────────────────── */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center justify-center gap-4 pt-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-float"
              style={{ animationDelay: `${i * 1.5}s` }}
            >
              <GlassCard
                hover
                padding="sm"
                className="flex flex-col items-center gap-1 min-w-[110px]"
              >
                <span className="text-xl font-light text-platinum">
                  {stat.value}
                </span>
                <span className="text-xs font-light tracking-wide text-titanium">
                  {stat.label}
                </span>
              </GlassCard>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-titanium/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
