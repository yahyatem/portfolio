"use client";

import type { ReactNode } from "react";
import { ScaleHover, Stagger, StaggerItem } from "@/components/Stagger";

type StatItem = {
  value: string;
  label: string;
  icon: ReactNode;
};

const stats: StatItem[] = [
  {
    value: "1+",
    label: "Année d'expérience",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Projets réalisés",
    icon: (
      <svg
        className="h-7 w-7"
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
    ),
  },
  {
    value: "5+",
    label: "Clients satisfaits",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Passionné",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const glass =
  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-[0_0_40px_-16px_rgba(139,92,246,0.35)] backdrop-blur-xl transition duration-300 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-violet-500/0 before:via-fuchsia-500/0 before:to-violet-600/0 before:opacity-0 before:transition before:duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_52px_-12px_rgba(139,92,246,0.55)] hover:before:opacity-100 hover:before:from-violet-500/[0.07] hover:before:via-fuchsia-500/[0.05] hover:before:to-transparent";

const iconWrap =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-gradient-to-br from-violet-600/35 to-fuchsia-600/25 text-violet-100 shadow-[0_0_28px_-8px_rgba(139,92,246,0.55)] transition duration-300 group-hover:border-violet-400/45 group-hover:shadow-[0_0_36px_-6px_rgba(192,38,211,0.45)]";

export function Stats() {
  return (
    <section className="relative px-4 py-12 md:px-6 md:py-16" aria-label="Chiffres clés">
      <Stagger className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StaggerItem key={item.label}>
            <ScaleHover scale={1.03}>
              <div className={glass}>
                <div className="relative flex items-center gap-4">
                  <div className={iconWrap} aria-hidden>
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="bg-gradient-to-br from-white via-violet-100 to-violet-300/90 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition duration-300 group-hover:scale-[1.03] md:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-zinc-400 transition duration-300 group-hover:text-zinc-300">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </ScaleHover>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
