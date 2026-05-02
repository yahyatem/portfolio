"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScaleHover } from "@/components/Stagger";

const glass =
  "rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_0_45px_-18px_rgba(139,92,246,0.4)] backdrop-blur-xl";

export function About() {
  return (
    <section
      id="a-propos"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
              À propos
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
              De passion à profession
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400 md:text-xl">
              Tout a commencé par la curiosité : comprendre comment les sites
              prenaient vie derrière l’écran. Au fil des tutoriels, des erreurs
              et des petites victoires, cette passion s’est transformée en métier.
              Aujourd’hui, j’aide des entreprises et des créateurs à poser une
              présence web claire, soignée et efficace — du premier prototypage
              jusqu’au déploiement.
            </p>
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-violet-500/80 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 shadow-[0_0_28px_-6px_rgba(139,92,246,0.55)] transition duration-300 hover:border-fuchsia-400/70 hover:bg-violet-500/20 hover:shadow-[0_0_36px_-4px_rgba(192,38,211,0.45)]"
              >
                En savoir plus
              </Link>
            </motion.span>
          </div>

          <ScaleHover scale={1.02}>
            <div className={`relative ${glass} p-8 transition duration-500 hover:shadow-[0_0_55px_-12px_rgba(192,38,211,0.35)]`}>
            <div
              className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/30 text-violet-100 shadow-[0_0_28px_-8px_rgba(139,92,246,0.55)]"
              aria-hidden
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22 12l-4.75 5.25m-10.5 0L2 12l4.75-5.25"
                />
              </svg>
            </div>
            <blockquote className="relative border-l-2 border-violet-500/50 pl-6">
              <p className="text-lg font-medium leading-relaxed text-zinc-200 md:text-xl">
                « Le code, ce n’est pas seulement de la logique : c’est donner
                forme à une idée et la rendre accessible à tous. »
              </p>
              <footer className="mt-4 text-sm text-zinc-500">
                — Yahya Temouch
              </footer>
            </blockquote>
            </div>
          </ScaleHover>
        </div>
      </div>
    </section>
  );
}
