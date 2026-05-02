"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ScaleHover, Stagger, StaggerItem } from "@/components/Stagger";

const categories = [
  "Tous",
  "Sites Vitrines",
  "E-commerce",
  "Applications Web",
] as const;

type Category = (typeof categories)[number];

type Project = {
  title: string;
  desc: string;
  category: Exclude<Category, "Tous">;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "Site E-commerce",
    desc: "Boutique en ligne avec panier, tunnel d’achat et gestion des commandes.",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
  {
    title: "Gestion des Étudiants (CRUD)",
    desc: "Application web pour enregistrer, modifier et suivre les étudiants.",
    category: "Applications Web",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
  {
    title: "Site Vitrine Restaurant",
    desc: "Site moderne pour établissement avec présentation du menu et réservation.",
    category: "Sites Vitrines",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
  {
    title: "Gestion de Tâches",
    desc: "Organisez vos tâches avec listes, priorités et suivi des statuts.",
    category: "Applications Web",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
  {
    title: "Application Météo",
    desc: "Consultez la météo en temps réel avec recherche par ville.",
    category: "Applications Web",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032db4?w=900&q=80",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
  {
    title: "Blog Personnel",
    desc: "Blog responsive pour publier articles et tutoriels avec une lecture agréable.",
    category: "Sites Vitrines",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80",
    tags: ["HTML", "CSS", "PHP", "Bootstrap"],
    liveUrl: "https://example.org",
    repoUrl: "https://github.com",
  },
];

const glass =
  "rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_0_40px_-16px_rgba(139,92,246,0.35)] backdrop-blur-xl";

function ExternalLinkIcon({ className }: { className?: string }) {
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
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M8.25 15L21 2.25M15 2.25h6v6"
      />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Category>("Tous");

  const filtered = useMemo(() => {
    if (filter === "Tous") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projets" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-10 text-center md:mb-12">
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
            Voici quelques projets que j&apos;ai réalisés avec passion pour créer
            des solutions modernes et efficaces.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_28px_-6px_rgba(139,92,246,0.6)]"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:border-violet-500/30 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.title}>
              <ScaleHover scale={1.02}>
                <article
                  className={`group flex h-full flex-col overflow-hidden transition duration-300 ease-out ${glass} hover:border-violet-500/25 hover:shadow-[0_0_52px_-14px_rgba(139,92,246,0.45)]`}
                >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 ease-out will-change-transform group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/90 via-[#0b0b0f]/25 to-transparent transition duration-300 group-hover:from-[#0b0b0f]/80" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-violet-200 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-violet-100">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 shrink-0 rounded-lg border border-white/10 bg-white/5 p-1.5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-violet-200"
                    aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-zinc-900/80 px-2 py-0.5 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-violet-500/35 bg-violet-500/10 px-3 py-2.5 text-sm font-medium text-violet-100 transition hover:border-violet-400/50 hover:bg-violet-500/20 sm:flex-initial"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Voir le site
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10 sm:flex-initial"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Code source
                  </a>
                </div>
              </div>
                </article>
              </ScaleHover>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
