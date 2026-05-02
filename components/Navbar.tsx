"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { purpleGlowKeyframes } from "@/lib/motion";
import { navLinks } from "@/lib/site";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

function getInitialSection(): string {
  if (typeof window === "undefined") return sectionIds[0];
  const hash = window.location.hash.slice(1);
  return sectionIds.includes(hash) ? hash : sectionIds[0];
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(sectionIds[0]);

  const updateActiveFromScroll = useCallback(() => {
    const trigger = window.scrollY + window.innerHeight * 0.28;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= trigger + 96) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    setActive(getInitialSection());
    const onHash = () => setActive(getInitialSection());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateActiveFromScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveFromScroll]);

  const linkClass = (id: string) => {
    const isActive = active === id;
    return [
      "relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
      isActive
        ? "text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:shadow-[0_0_14px_2px_rgba(139,92,246,0.55)]"
        : "text-zinc-400 hover:text-white",
    ].join(" ");
  };

  const mobileLinkClass = (id: string) => {
    const isActive = active === id;
    return [
      "block rounded-xl px-4 py-3 text-sm font-medium transition",
      isActive
        ? "border border-violet-500/35 bg-violet-500/10 text-white shadow-[0_0_20px_-6px_rgba(139,92,246,0.45)]"
        : "text-zinc-300 hover:bg-white/5 hover:text-white",
    ].join(" ");
  };

  const ctaClass =
    "inline-flex w-full shrink-0 items-center justify-center rounded-xl border-2 border-violet-500/90 bg-transparent px-4 py-2 text-sm font-semibold text-violet-100 transition duration-300 hover:border-fuchsia-400/90 hover:text-white";

  const ctaGlowTransition = {
    boxShadow: {
      duration: 2.7,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0b0f]/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#0b0b0f]/55">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-6 md:py-4">
        <Link
          href="#accueil"
          className="group flex min-w-0 shrink-0 items-baseline gap-1.5 font-semibold tracking-tight transition-opacity duration-300 hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-lg text-transparent md:text-xl">
            YT.
          </span>
          <span className="truncate text-sm font-medium text-zinc-100 md:text-base">
            Yahya Temouch
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 md:flex md:gap-0 lg:gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(id)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <motion.span
            className="hidden sm:inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: [...purpleGlowKeyframes] }}
            transition={ctaGlowTransition}
          >
            <Link
              href="#contact"
              className={ctaClass}
              onClick={() => setOpen(false)}
            >
              Me contacter
            </Link>
          </motion.span>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-zinc-200 shadow-[0_0_24px_-12px_rgba(139,92,246,0.25)] backdrop-blur-md transition hover:border-violet-500/40 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`border-t border-white/[0.06] bg-[#0b0b0f]/85 backdrop-blur-xl md:hidden ${open ? "max-h-[min(28rem,70vh)] opacity-100" : "max-h-0 overflow-hidden opacity-0"} transition-all duration-300 ease-out`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 pb-5">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={mobileLinkClass(id)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <motion.span
            className="mt-2 block w-full sm:hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ boxShadow: [...purpleGlowKeyframes] }}
            transition={ctaGlowTransition}
          >
            <Link
              href="#contact"
              className={`${ctaClass} justify-center`}
              onClick={() => setOpen(false)}
            >
              Me contacter
            </Link>
          </motion.span>
        </nav>
      </div>
    </header>
  );
}
