"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { navbarVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      document
        .getElementById(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16",
        "border-b border-transparent",
        "transition-[border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      )}
      variants={navbarVariants}
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <nav className="flex h-full items-center justify-between px-6 lg:px-12">
        {/* ── Logo ─────────────────────────────── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={cn(
            "font-mono text-lg tracking-[0.35em] font-medium",
            "text-platinum select-none",
            "transition-opacity duration-300 hover:opacity-80"
          )}
        >
          FM
        </a>

        {/* ── Desktop links ────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-light tracking-wide",
                  "text-titanium hover:text-platinum",
                  "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ─────────────────── */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "md:hidden relative z-50 p-2 -mr-2",
            "text-titanium hover:text-platinum",
            "transition-colors duration-300"
          )}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile panel ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "md:hidden overflow-hidden",
              "bg-[rgba(10,10,10,0.92)] backdrop-blur-2xl",
              "border-b border-white/[0.08]"
            )}
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "block py-3 text-base font-light tracking-wide",
                      "text-titanium hover:text-platinum",
                      "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
