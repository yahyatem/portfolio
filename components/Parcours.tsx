"use client";

import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/Stagger";

const glass =
  "rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_0_40px_-18px_rgba(139,92,246,0.45)] backdrop-blur-xl";

type Step = {
  period: string;
  title: string;
  highlights: readonly string[];
  icon: "school" | "chart" | "code" | "spark";
};

const steps: Step[] = [
  {
    period: "2022 — 2023",
    title: "Baccalauréat — Sciences physiques (option française)",
    highlights: [
      "Culture scientifique solide",
      "Rigueur et esprit d’analyse",
    ],
    icon: "school",
  },
  {
    period: "2023 — 2024",
    title: "Études universitaires en gestion",
    highlights: [
      "Bases en management et organisation",
      "Analyse et résolution de problèmes",
    ],
    icon: "chart",
  },
  {
    period: "2024 — 2026",
    title: "Technicien spécialisé en développement web (OFPPT)",
    highlights: [
      "Développement front-end & back-end",
      "HTML, CSS, JavaScript",
      "React.js pour des interfaces modernes",
      "PHP & Laravel côté serveur",
      "Bases MySQL & MongoDB",
      "Méthodes agiles et gestion de projet",
      "Fondamentaux de la sécurité web",
      "Projet de fin d’études et stage",
    ],
    icon: "code",
  },
  {
    period: "2024 — Aujourd’hui",
    title: "Autodidaxie & projets personnels",
    highlights: [
      "Veille et exploration des technologies actuelles",
      "Applications web concrètes et portfolio",
      "Amélioration continue",
    ],
    icon: "spark",
  },
];

function StepIcon({ type }: { type: Step["icon"] }) {
  const common =
    "h-5 w-5 text-violet-100 md:h-[1.35rem] md:w-[1.35rem]";
  switch (type) {
    case "school":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.75 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.75 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case "code":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 12-4.5-16.5" />
        </svg>
      );
    case "spark":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Parcours() {
  return (
    <section
      id="parcours"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="parcours-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-14 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-400/90">
            Formation &amp; expérience
          </p>
          <h2
            id="parcours-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            Parcours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Un fil chronologique : études, formation technique et apprentissage
            continu — les jalons qui ont façonné ma pratique du développement web.
          </p>
        </header>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[17px] top-6 bottom-8 z-0 w-px bg-gradient-to-b from-violet-500/75 via-fuchsia-500/45 to-violet-500/10 md:left-[21px]"
            aria-hidden
          />

          <Stagger className="relative z-10 space-y-8 md:space-y-10" stagger={0.1}>
            {steps.map((step) => (
              <StaggerItem key={step.period}>
                <motion.article
                  className="relative flex gap-5 pl-0 md:gap-8"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="relative z-10 flex w-9 shrink-0 flex-col items-center md:w-11">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/45 bg-[#0b0b0f] shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)] md:h-11 md:w-11">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 ring-[3px] ring-violet-500/20 md:h-3 md:w-3" />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pb-1">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300/95 md:text-sm">
                      {step.period}
                    </p>
                    <div
                      className={`${glass} group relative overflow-hidden p-5 transition duration-300 hover:border-violet-400/25 hover:shadow-[0_0_48px_-14px_rgba(139,92,246,0.5)] md:p-6`}
                    >
                      <div
                        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-600/12 blur-3xl transition group-hover:bg-violet-500/18"
                        aria-hidden
                      />
                      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-500/35 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/25 text-violet-100 shadow-[0_0_28px_-8px_rgba(139,92,246,0.5)] md:h-12 md:w-12">
                          <StepIcon type={step.icon} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold leading-snug text-white sm:text-lg md:text-xl">
                            {step.title}
                          </h3>
                          <ul className="mt-4 space-y-2.5 border-t border-white/5 pt-4 text-sm leading-relaxed text-zinc-400">
                            {step.highlights.map((line) => (
                              <li key={line} className="flex gap-3">
                                <span
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500"
                                  aria-hidden
                                />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
