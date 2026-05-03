"use client";

import { ScaleHover, Stagger, StaggerItem } from "@/components/Stagger";
import { simpleIconUrl } from "@/lib/simple-icons";

type LevelKey = "advanced" | "intermediate" | "learning";

type SkillItem = {
  name: string;
  slug: string;
  level?: LevelKey;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: readonly SkillItem[];
};

const levelLabel: Record<LevelKey, string> = {
  advanced: "Avancé",
  intermediate: "Intermédiaire",
  learning: "En cours",
};

const levelBadgeClass: Record<LevelKey, string> = {
  advanced:
    "border-violet-400/35 bg-violet-500/15 text-[10px] font-semibold uppercase tracking-wide text-violet-200",
  intermediate:
    "border-fuchsia-400/30 bg-fuchsia-500/12 text-[10px] font-semibold uppercase tracking-wide text-fuchsia-100/90",
  learning:
    "border-amber-400/35 bg-amber-500/12 text-[10px] font-semibold uppercase tracking-wide text-amber-100/95",
};

const categories: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", slug: "html5", level: "advanced" },
      { name: "CSS", slug: "css3", level: "advanced" },
      { name: "JavaScript", slug: "javascript", level: "advanced" },
      { name: "TypeScript", slug: "typescript", level: "intermediate" },
      { name: "React", slug: "react", level: "advanced" },
      { name: "Next.js", slug: "nextdotjs", level: "intermediate" },
      { name: "Tailwind CSS", slug: "tailwindcss", level: "advanced" },
      { name: "Bootstrap", slug: "bootstrap", level: "intermediate" },
      { name: "Framer Motion", slug: "framer", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "PHP", slug: "php", level: "advanced" },
      { name: "Laravel", slug: "laravel", level: "advanced" },
      { name: "MySQL", slug: "mysql", level: "advanced" },
      { name: "PostgreSQL", slug: "postgresql", level: "intermediate" },
      { name: "Supabase", slug: "supabase", level: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Outils & DevOps",
    skills: [
      { name: "Git", slug: "git", level: "advanced" },
      { name: "GitHub", slug: "github", level: "advanced" },
      { name: "VS Code", slug: "visualstudiocode", level: "advanced" },
      { name: "Cursor", slug: "cursor", level: "advanced" },
    ],
  },
  {
    id: "learning",
    title: "En apprentissage",
    skills: [
      { name: "Node.js", slug: "nodedotjs", level: "learning" },
      { name: "Express", slug: "express", level: "learning" },
      { name: "MongoDB", slug: "mongodb", level: "learning" },
      {
        name: "React / Next.js avancé",
        slug: "react",
        level: "learning",
      },
    ],
  },
] as const;

const categoryPanel =
  "rounded-3xl border border-white/10 bg-[#0c0c12]/85 shadow-[0_0_45px_-22px_rgba(139,92,246,0.45)] backdrop-blur-xl";

/** Cursor IDE — pas dans Simple Icons v11 ; pictogramme code éditeur */
function CursorIdeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 15.75L21 12l-4.5-3.75m-9 0L3 12l4.5 3.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5l-3 15"
      />
    </svg>
  );
}

function SkillLogo({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const invert =
    slug === "github" || slug === "visualstudiocode";
  return (
    <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
      {slug === "cursor" ? (
        <CursorIdeIcon className="h-7 w-7 text-violet-300/95" />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element -- Simple Icons SVG */
        <img
          src={simpleIconUrl(slug)}
          alt=""
          width={28}
          height={28}
          className={`h-7 w-7 object-contain ${invert ? "brightness-0 invert opacity-90" : "brightness-0 invert opacity-85"}`}
        />
      )}
      <span className="sr-only">{name}</span>
    </div>
  );
}

function SkillCard({ item }: { item: SkillItem }) {
  return (
    <ScaleHover scale={1.045}>
      <div className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center shadow-[0_0_28px_-18px_rgba(139,92,246,0.35)] transition duration-300 hover:border-violet-400/35 hover:bg-violet-500/[0.07] hover:shadow-[0_0_42px_-14px_rgba(139,92,246,0.55)]">
        <SkillLogo slug={item.slug} name={item.name} />
        <p className="text-xs font-semibold leading-snug text-zinc-100 group-hover:text-white">
          {item.name}
        </p>
        {item.level ? (
          <span
            className={`mt-2.5 inline-flex rounded-full border px-2 py-0.5 ${levelBadgeClass[item.level]}`}
          >
            {levelLabel[item.level]}
          </span>
        ) : null}
      </div>
    </ScaleHover>
  );
}

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-12 text-center md:mb-16">
          <div
            className="pointer-events-none absolute -top-10 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-violet-600/18 blur-[90px]"
            aria-hidden
          />
          <p className="relative mb-3 text-sm font-medium uppercase tracking-[0.22em] text-violet-400/90">
            Compétences
          </p>
          <h2 className="relative text-3xl font-bold tracking-tight text-white md:text-4xl">
            Technologies &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Une stack orientée livraison : interfaces soignées avec React / Next,
            backends Laravel &amp; bases SQL, Supabase quand il faut aller vite,
            et une montée en puissance côté Node pour les prochains projets.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className={`${categoryPanel} p-6 md:p-8`}>
              <div className="mb-6 flex flex-col gap-1 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-500">
                  {cat.id === "learning"
                    ? "Approfondissement continu — veille et pratique projet."
                    : "Icônes officielles — niveaux indicatifs basés sur la pratique."}
                </p>
              </div>

              <Stagger
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                stagger={0.06}
              >
                {cat.skills.map((skill) => (
                  <StaggerItem key={`${cat.id}-${skill.slug}-${skill.name}`}>
                    <SkillCard item={skill} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
