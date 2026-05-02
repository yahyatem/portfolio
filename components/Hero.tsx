"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import mePhoto from "../public/me.jpg";
import { easeSmooth, primaryGlowKeyframes } from "@/lib/motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
] as const;

/** Portrait card: 20px radius, glass + purple glow (see outer glow layers below) */
const glassFrame =
  "rounded-[20px] border border-white/[0.12] bg-[#0a0a10]/55 p-2 shadow-[0_0_48px_-14px_rgba(139,92,246,0.5),0_28px_56px_-28px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl";

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const glowLoop = {
  boxShadow: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:py-28"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <motion.div
          className="relative mx-auto w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: easeSmooth }}
        >
          {/* Soft purple gradient glow behind portrait */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(125%,30rem)] w-[min(105%,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-600/45 via-fuchsia-500/30 to-violet-700/25 blur-[72px] [animation:pulse-glow_5s_ease-in-out_infinite]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-tr from-violet-600/35 via-fuchsia-500/20 to-transparent blur-3xl [animation:pulse-glow_6.5s_ease-in-out_infinite_0.8s]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-3 -z-10 rounded-[24px] bg-violet-500/15 blur-2xl"
            aria-hidden
          />

          <motion.div
            className={`relative ${glassFrame}`}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 56px -10px rgba(139,92,246,0.55), 0 0 80px -20px rgba(192,38,211,0.35), 0 28px 56px -28px rgba(0,0,0,0.6)",
            }}
            transition={{ type: "spring", stiffness: 340, damping: 24 }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] sm:aspect-[4/5]">
              <Image
                src={mePhoto}
                alt="Yahya Temouch — portrait"
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 640px) min(100vw, 28rem), (max-width: 1024px) min(50vw, 36rem), min(520px, 42vw)"
                priority
                quality={85}
                placeholder="blur"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/55 via-transparent to-[#0b0b0f]/10" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-5" variants={heroItem}>
            <p className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-violet-200 shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
              Développeur Web
            </p>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Bonjour, je suis{" "}
              <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Yahya Temouch
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Je crée des sites web modernes, rapides et responsive qui aident les
              entreprises à se développer en ligne.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={heroItem}
          >
            <motion.span
              className="inline-block rounded-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              animate={{ boxShadow: [...primaryGlowKeyframes] }}
              transition={glowLoop}
            >
              <Link
                href="#projets"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:from-violet-500 hover:to-fuchsia-600"
              >
                Voir mes projets
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.span>
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition duration-300 hover:border-violet-400/45 hover:bg-white/[0.08]"
              >
                Me contacter
                <svg
                  className="h-4 w-4 text-zinc-400 transition group-hover:text-violet-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </motion.span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-2"
            variants={heroItem}
          >
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.5)]"
                aria-label={item.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
