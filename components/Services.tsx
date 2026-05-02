"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ScaleHover, Stagger, StaggerItem } from "@/components/Stagger";

type Service = {
  num: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
};

const iconWrap =
  "flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/35 bg-gradient-to-br from-violet-600/45 to-fuchsia-600/30 text-violet-100 shadow-[0_0_28px_-8px_rgba(139,92,246,0.55)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_36px_-6px_rgba(192,38,211,0.45)]";

const services: Service[] = [
  {
    num: "01",
    title: "Création de sites web",
    description:
      "Je crée des sites web modernes, responsive et optimisés pour tous les appareils.",
    features: [
      "Sites vitrines",
      "Sites professionnels",
      "Design responsive",
    ],
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
          d="M9 17.25V18.2574C9 19.053 8.68393 19.8161 8.12132 20.3787L7.5 21H16.5L15.8787 20.3787C15.3161 19.8161 15 19.053 15 18.2574V17.25M21 5.25V15C21 16.2426 19.9926 17.25 18.75 17.25H5.25C4.00736 17.25 3 16.2426 3 15V5.25M21 5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sites e-commerce",
    description:
      "Des boutiques en ligne performantes pour développer votre activité en ligne.",
    features: [
      "Boutiques personnalisées",
      "Panier et paiement sécurisé",
      "Gestion des produits",
    ],
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
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3H15.75m-12.75 0h9.75m-9.75 0a3 3 0 01-3-3V7.5a3 3 0 013-3h12M7.5 14.25V11.25m0 0h9.75m-9.75 0L9 8.25m1.5 3h9.75M9 8.25v-.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V8.25m-6 0h6"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Développement web",
    description:
      "Développement d'applications web dynamiques et sur mesure.",
    features: [
      "Applications web (PHP / MySQL)",
      "Systèmes de gestion (CRUD)",
      "Intégration d'API",
    ],
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
    num: "04",
    title: "Design responsive",
    description:
      "Je transforme vos idées en interfaces modernes et adaptées à tous les écrans.",
    features: [
      "UI/UX moderne",
      "Compatibilité mobile",
      "Expérience utilisateur optimale",
    ],
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
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Optimisation & performance",
    description:
      "J'optimise la vitesse et les performances de votre site pour de meilleurs résultats.",
    features: [
      "Vitesse de chargement",
      "SEO technique",
      "Performance et sécurité",
    ],
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
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Maintenance & support",
    description:
      "Je prends en charge la maintenance et l'évolution de votre site web.",
    features: [
      "Corrections de bugs",
      "Mises à jour régulières",
      "Support et accompagnement",
    ],
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
          d="M21.75 6.75C21.75 9.23528 19.7353 11.25 17.25 11.25C17.1206 11.25 16.9925 11.2445 16.8659 11.2338C15.7904 11.1429 14.6016 11.3052 13.9155 12.1383L6.76432 20.8219C6.28037 21.4096 5.55897 21.75 4.79769 21.75C3.39064 21.75 2.25 20.6094 2.25 19.2023C2.25 18.441 2.59044 17.7196 3.1781 17.2357L11.8617 10.0845C12.6948 9.39841 12.8571 8.20956 12.7662 7.13411C12.7555 7.00749 12.75 6.87938 12.75 6.75C12.75 4.26472 14.7647 2.25 17.25 2.25C17.9103 2.25 18.5375 2.39223 19.1024 2.64774L15.8262 5.92397C16.0823 7.03963 16.9605 7.91785 18.0762 8.17397L21.3524 4.89779C21.6078 5.46268 21.75 6.08973 21.75 6.75Z"
        />
      </svg>
    ),
  },
];

const glass =
  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_-18px_rgba(139,92,246,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-500/30 hover:shadow-[0_0_52px_-12px_rgba(139,92,246,0.45)]";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2.5 text-sm text-zinc-400">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-violet-500/15 text-violet-400">
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-12 text-center md:mb-16">
          <div
            className="pointer-events-none absolute -top-10 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[90px]"
            aria-hidden
          />
          <p className="relative mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Services
          </p>
          <h2 className="relative text-3xl font-bold tracking-tight text-white md:text-4xl">
            Mes{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            J&apos;aide les entreprises et les particuliers à créer des solutions
            web modernes, rapides et adaptées à leurs besoins.
          </p>
        </div>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.num}>
              <ScaleHover scale={1.015}>
                <article className={glass}>
              <span
                className="pointer-events-none absolute right-4 top-3 select-none font-bold text-[4.5rem] leading-none text-white/[0.06] tabular-nums transition duration-300 group-hover:text-violet-500/[0.12] md:right-5 md:text-[5rem]"
                aria-hidden
              >
                {service.num}
              </span>

              <div className="relative flex flex-col gap-4">
                <div className={iconWrap}>{service.icon}</div>

                <div>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-violet-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {service.features.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition hover:text-fuchsia-300"
                >
                  En savoir plus
                  <span aria-hidden className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
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
