"use client";

import Image from "next/image";
import { useState } from "react";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { simpleIconUrl } from "@/lib/simple-icons";

type TechItem = {
  name: string;
  slug: string;
};

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  goal: string;
  featured?: boolean;
  liveUrl?: string;
  image: string;
  features: readonly string[];
  technologies: readonly TechItem[];
};

const projects: Project[] = [
  {
    slug: "snackfquick",
    title: "SnackFquick",
    subtitle: "Restaurant Web Application",
    description:
      "Commande en ligne pour restaurant : panier, suivi, admin produits — interface rapide et entièrement responsive.",
    role: "Développement front-end et architecture avec une approche Backend-as-a-Service.",
    goal: "Fluidifier l'expérience de commande en ligne et simplifier la gestion opérationnelle.",
    featured: true,
    liveUrl: "https://snackfquick.com/",
    image: "/projects/snackfquick.png",
    features: [
      "Système de panier",
      "Suivi de commande",
      "Geolocation API pour la livraison",
      "WhatsApp API pour envoyer les commandes",
      "Dashboard admin pour le CRUD produits",
      "Mises à jour en temps réel avec Supabase",
    ],
    technologies: [
      { name: "React", slug: "react" },
      { name: "Vite", slug: "vite" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Framer", slug: "framer" },
      { name: "Supabase", slug: "supabase" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    slug: "solar-smart-integration",
    title: "Solar Smart Integration",
    subtitle: "Projet de stage",
    description:
      "Application solaire avec suivi des données, dashboard clair et assistant IA pour de meilleures décisions énergétiques.",
    role: "Développement full-stack avec intégration OpenAI.",
    goal: "Offrir un pilotage énergétique plus intelligent via un dashboard clair.",
    image: "/projects/solar-smart.png",
    features: [
      "Monitoring intelligent de l'énergie solaire",
      "Assistant IA avec OpenAI API",
      "Dashboard responsive",
      "Gestion de données optimisée",
      "Interface moderne admin / utilisateur",
    ],
    technologies: [
      { name: "Laravel", slug: "laravel" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "MySQL", slug: "mysql" },
      { name: "JavaScript", slug: "javascript" },
      { name: "OpenAI", slug: "openai" },
    ],
  },
  {
    slug: "parfumerie-pk",
    title: "Parfumerie PK",
    subtitle: "E-commerce Web Application",
    description:
      "Boutique en ligne : catalogue, panier, favoris, offres et back-office — stack Next.js & Supabase.",
    role: "Développement full-stack avec Next.js et Supabase.",
    goal: "Construire une base e-commerce robuste, sécurisée et évolutive.",
    image: "/projects/parfumerie-pk.png",
    features: [
      "CRUD produits, catégories, marques et offres",
      "Panier dynamique",
      "Système de favoris",
      "Filtrage par catégorie et marque",
      "Offres dynamiques configurables par l'admin",
      "Upload images avec Supabase Storage",
      "Authentification admin / utilisateurs",
      "Row Level Security (RLS)",
    ],
    technologies: [
      { name: "Next.js", slug: "nextdotjs" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Supabase", slug: "supabase" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "GitHub", slug: "github" },
    ],
  },
];

const cardSurface =
  "rounded-2xl border border-violet-500/20 bg-[#0c0c12]/90 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.9),0_0_0_1px_rgba(139,92,246,0.12),0_0_40px_-20px_rgba(139,92,246,0.22)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-400/45 hover:shadow-[0_28px_60px_-32px_rgba(0,0,0,0.85),0_0_0_1px_rgba(167,139,250,0.35),0_0_56px_-18px_rgba(139,92,246,0.55)]";

function TechBadge({ tech }: { tech: TechItem }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.04] py-1 pl-1.5 pr-2.5 ring-1 ring-inset ring-white/[0.04]">
      {/* eslint-disable-next-line @next/next/no-img-element -- Simple Icons SVG */}
      <img
        src={simpleIconUrl(tech.slug)}
        alt=""
        width={14}
        height={14}
        className="h-3.5 w-3.5 shrink-0 object-contain brightness-0 invert opacity-90"
      />
      <span className="text-[11px] font-medium tracking-tight text-zinc-300">
        {tech.name}
      </span>
    </span>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H6.75A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25V10.5M10.5 13.5l9-9M14.25 4.5h5.25v5.25"
      />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 12-4.5-13.5"
      />
    </svg>
  );
}

function ChevronIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg
      className={`${className ?? ""} transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function LayoutPreviewIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM9 3.75v16.5M3.75 9h16.5"
      />
    </svg>
  );
}

function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-violet-950/95 via-[#100818] to-fuchsia-950/80 px-4 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/35 bg-violet-500/15 text-violet-200 shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]">
        <LayoutPreviewIcon className="h-5 w-5" />
      </div>
      <p className="max-w-[14rem] text-sm font-semibold leading-snug text-white">
        {title}
      </p>
      <p className="text-[11px] text-violet-300/70">Aperçu à venir</p>
    </div>
  );
}

function ProjectPreviewImage({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-t-2xl border-b border-white/10 md:h-[220px]">
      {broken ? (
        <ImagePlaceholder title={title} />
      ) : (
        <>
          <Image
            src={src}
            alt={`Aperçu du projet ${title}`}
            fill
            className="object-cover brightness-[1.08] contrast-[1.06] saturate-[1.03] transition duration-500 ease-out will-change-transform group-hover:scale-[1.06] group-hover:brightness-[1.12] group-hover:contrast-[1.08]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
            onError={() => setBroken(true)}
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-violet-600/25 via-fuchsia-500/10 to-transparent" />
        </>
      )}
    </div>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section id="projets" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-12 text-center md:mb-14">
          <div
            className="pointer-events-none absolute -top-8 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[80px]"
            aria-hidden
          />
          <p className="relative mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Portfolio
          </p>
          <h2 className="relative text-3xl font-bold tracking-tight text-white md:text-4xl">
            Mes{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Sélection de réalisations freelance — UX soignée, stack moderne,
            livrables orientés impact.
          </p>
        </div>

        <Stagger className="grid gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8">
          {projects.map((project) => {
            const isOpen = openProject === project.slug;
            const isFeatured = Boolean(project.featured);
            return (
              <StaggerItem key={project.slug} className="h-full">
                <article
                  className={`group relative flex h-full min-h-0 flex-col overflow-hidden ${cardSurface} ${
                    isFeatured
                      ? "border-violet-400/40 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.88),0_0_0_1px_rgba(192,38,211,0.25),0_0_56px_-18px_rgba(139,92,246,0.45)]"
                      : ""
                  }`}
                >
                  <ProjectPreviewImage title={project.title} src={project.image} />
                  <div
                    className={`pointer-events-none absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r ${
                      isFeatured
                        ? "from-fuchsia-400 via-violet-400 to-fuchsia-500"
                        : "from-violet-500/90 via-fuchsia-500/70 to-transparent"
                    }`}
                    aria-hidden
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-400/95">
                          {project.subtitle}
                        </p>
                      </div>
                      {isFeatured ? (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-fuchsia-400/35 bg-fuchsia-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-200">
                          <SparkIcon className="h-3 w-3" />
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={`${project.slug}-${tech.slug}`} tech={tech} />
                      ))}
                    </div>

                    <div className="mt-6 mt-auto border-t border-white/10 pt-5">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet-500/40 bg-gradient-to-r from-violet-600/25 to-fuchsia-600/20 px-4 py-3 text-sm font-semibold text-violet-50 shadow-[0_0_28px_-10px_rgba(139,92,246,0.55)] transition hover:border-violet-400/60 hover:from-violet-500/35 hover:to-fuchsia-500/25"
                        >
                          <ExternalLinkIcon className="h-4 w-4 opacity-90" />
                          Voir le projet
                          <ArrowRightIcon className="h-4 w-4 opacity-80 transition-transform group-hover/btn:translate-x-0.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenProject((prev) =>
                              prev === project.slug ? null : project.slug,
                            )
                          }
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.05] px-4 py-3 text-sm font-semibold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:border-violet-400/45 hover:bg-violet-500/10"
                          aria-expanded={isOpen}
                        >
                          <CodeIcon className="h-4 w-4" />
                          Découvrir le projet
                          <ChevronIcon className="h-4 w-4 text-zinc-500" open={isOpen} />
                        </button>
                      )}
                    </div>
                  </div>

                  {!project.liveUrl ? (
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 bg-[#0a0a10]/85 p-6 backdrop-blur-md">
                          <div className="grid gap-5">
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/90">
                                Objectif
                              </p>
                              <p className="text-sm leading-relaxed text-zinc-300">
                                {project.goal}
                              </p>
                            </div>
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/90">
                                Rôle
                              </p>
                              <p className="text-sm leading-relaxed text-zinc-300">
                                {project.role}
                              </p>
                            </div>
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/90">
                                Features
                              </p>
                              <ul className="space-y-2">
                                {project.features.map((feature) => (
                                  <li key={feature} className="flex gap-2.5 text-sm text-zinc-300">
                                    <span
                                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500"
                                      aria-hidden
                                    />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/90">
                                Stack
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <TechBadge
                                    key={`${project.slug}-detail-${tech.slug}`}
                                    tech={tech}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
