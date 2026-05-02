"use client";

import { ScaleHover, Stagger, StaggerItem } from "@/components/Stagger";

const progressSkills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 75 },
  { name: "PHP", percent: 80 },
  { name: "MySQL", percent: 70 },
  { name: "Bootstrap", percent: 85 },
  { name: "Git & GitHub", percent: 80 },
] as const;

const approachCards = [
  {
    title: "Apprentissage continu",
    description:
      "Veille régulière, documentation et formations pour rester à jour sur les bonnes pratiques et les évolutions du web.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 6.75l7.5 3.75L12 14.25 4.5 10.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5V15c0 0 2.25 2.25 7.5 2.25S19.5 15 19.5 15v-4.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 15.75v2.25l2.25 1.125 2.25-1.125V15.75"
        />
      </svg>
    ),
  },
  {
    title: "Projets réels",
    description:
      "Sites et applications concrets : contraintes réelles, livraison, retours clients et itérations pour solidifier la pratique.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zM12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5zM12 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
        />
      </svg>
    ),
  },
  {
    title: "Qualité & performance",
    description:
      "Code structuré, SEO de base, accessibilité et temps de chargement pris en compte pour une expérience utilisateur fiable.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228M18.75 4.236c.412.064.825.128 1.235.195a6.003 6.003 0 0 1-4.35 5.472m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
        />
      </svg>
    ),
  },
] as const;

/** Simple Icons sur jsDelivr (SVG monochrome brand) */
const techStack = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css3" },
  { name: "JavaScript", slug: "javascript" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
] as const;

const si = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/${slug}.svg`;

const glassPanel =
  "rounded-3xl border border-white/10 bg-[#111111]/80 shadow-[0_0_45px_-18px_rgba(139,92,246,0.35)] backdrop-blur-xl";

const cardInner =
  "rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]";

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Compétences
          </p>
          <h2 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Mes Compétences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Les technologies, outils et compétences que j&apos;utilise pour
            créer des solutions modernes et efficaces.
          </p>
        </div>

        <div
          className={`grid gap-10 p-6 md:gap-12 md:p-10 lg:grid-cols-2 ${glassPanel}`}
        >
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/25 text-violet-100 shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22 12l-4.75 5.25m-10.5 0L2 12l4.75-5.25"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Mes compétences techniques
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  Niveaux indicatifs basés sur la pratique et les projets
                  réalisés.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {progressSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-zinc-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-violet-300/90">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_-2px_rgba(139,92,246,0.75)] transition-[width] duration-1000 ease-out"
                      style={{
                        width: `${skill.percent}%`,
                        transitionDelay: `${index * 70}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/25 text-violet-100 shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.082 3.997 1.15 5.307c.269 1.241-1.036 2.182-2.118 1.65l-4.963-2.598-4.963 2.598c-1.082.532-2.387-.409-2.118-1.65l1.15-5.307-4.082-3.997c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  À propos de mes compétences
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  Une approche orientée résultats et apprentissage continu.
                </p>
              </div>
            </div>

            <Stagger className="flex flex-col gap-4">
              {approachCards.map((card) => (
                <StaggerItem key={card.title}>
                  <ScaleHover scale={1.01}>
                    <div className={cardInner}>
                      <div className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10 text-violet-300">
                          {card.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-white">{card.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScaleHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-xl font-semibold text-white md:text-2xl">
              Technologies &amp; outils
            </h3>
            <p className="text-sm text-zinc-500">
              Les outils avec lesquels je travaille au quotidien.
            </p>
          </div>

          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.slug}>
                <ScaleHover scale={1.06}>
                  <div className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-[#111111]/70 px-3 py-5 text-center shadow-[0_0_30px_-18px_rgba(139,92,246,0.25)] backdrop-blur-sm transition duration-300 hover:border-violet-500/35 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.4)]">
                    <div className="relative mb-3 flex h-14 w-14 items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element -- SVG externes (Simple Icons) */}
                      <img
                        src={si(tech.slug)}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className={`h-10 w-10 object-contain ${tech.slug === "github" ? "brightness-0 invert opacity-90" : ""}`}
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 transition group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
