"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/emailjs-config";
import { primaryGlowKeyframes } from "@/lib/motion";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const glass =
  "rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_0_45px_-18px_rgba(139,92,246,0.38)] backdrop-blur-xl";

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm text-zinc-100 outline-none ring-violet-500/40 transition placeholder:text-zinc-500 focus:border-violet-500/40 focus:ring-2";

const faqItems = [
  {
    q: "Quels types de projets réalises-tu ?",
    a: "Sites vitrines, boutiques en ligne, applications web (CRUD, tableaux de bord), intégrations simples et missions de maintenance. Chaque projet est adapté à vos objectifs et à votre budget.",
  },
  {
    q: "Quels sont tes délais de livraison ?",
    a: "Cela dépend de la complexité : une vitrine peut prendre quelques semaines, un e-commerce ou une app plus structurée plusieurs semaines à quelques mois. Un planning clair est défini dès le départ.",
  },
  {
    q: "Comment se déroule la collaboration ?",
    a: "Échange initial sur vos besoins, proposition détaillée, validation des maquettes ou du périmètre, développement avec points d’étape, tests puis mise en ligne et accompagnement si besoin.",
  },
] as const;

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-zinc-500">
      {children}
    </span>
  );
}

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const emailRaw = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !emailRaw || !subject || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!emailRegex.test(emailRaw)) {
      setError("Adresse e-mail invalide.");
      return;
    }

    setIsSending(true);
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email: emailRaw,
          subject,
          message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSuccess(true);
      form.reset();
      window.setTimeout(() => setSuccess(false), 8000);
    } catch (err) {
      console.error("[EmailJS]", err);
      setError("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-12 text-center md:mb-16">
          <p className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
            Contactez-moi
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Discutons de{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              votre projet
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Une idée, une question ou un devis ? Écrivez-moi : je réponds dans les
            meilleurs délais pour avancer ensemble.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className={`${glass} p-6 md:p-8`}>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Envoyez-moi un message
            </h3>
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              aria-busy={isSending}
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Nom
                  </label>
                  <div className="relative">
                    <FieldIcon>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </FieldIcon>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={`${inputBase} pl-10 pr-4`}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FieldIcon>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </FieldIcon>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={`${inputBase} pl-10 pr-4`}
                      placeholder="Votre email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  Sujet
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </FieldIcon>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    minLength={2}
                    className={`${inputBase} pl-10 pr-4`}
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium text-zinc-400"
                >
                  Message
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-3 text-zinc-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </span>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputBase} resize-y min-h-[140px] pl-10 pr-4 pt-3`}
                    placeholder="Votre message…"
                  />
                </div>
              </div>
              <motion.button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-75"
                whileHover={isSending ? undefined : { scale: 1.02 }}
                whileTap={isSending ? undefined : { scale: 0.98 }}
                animate={
                  isSending
                    ? undefined
                    : { boxShadow: [...primaryGlowKeyframes] }
                }
                transition={{
                  boxShadow: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {isSending ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi...
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    Envoyer
                  </>
                )}
              </motion.button>
              {error ? (
                <p
                  role="alert"
                  className="text-sm leading-relaxed text-rose-300 [animation:fade-in_0.35s_ease-out]"
                >
                  {error}
                </p>
              ) : null}
              {success ? (
                <p className="text-sm leading-relaxed text-emerald-400/95 [animation:fade-in_0.4s_ease-out]">
                  Message envoyé avec succès ✅
                </p>
              ) : null}
            </form>
          </div>

          <aside className={`${glass} flex flex-col gap-6 p-6 md:p-8`}>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Informations de contact
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Choisissez le canal qui vous convient le mieux.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/15 text-violet-200">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Email
                  </p>
                  <a
                    href="mailto:yahyatemouch10@gmail.com"
                    className="font-medium text-zinc-100 transition hover:text-violet-300"
                  >
                    yahyatemouch10@gmail.com
                  </a>
                </div>
                <span className="hidden shrink-0 text-xs text-violet-400/90 sm:inline">
                  Réponse rapide
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-200">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Téléphone
                  </p>
                  <a
                    href="tel:+212609560141"
                    className="font-medium text-zinc-100 transition hover:text-fuchsia-300"
                  >
                    +212609560141
                  </a>
                </div>
                <span className="hidden shrink-0 text-xs text-zinc-500 sm:inline">
                  Lun–Ven
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/212609560141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-100 transition hover:text-emerald-300"
                  >
                    +212609560141
                  </a>
                </div>
                <span className="hidden shrink-0 text-xs text-emerald-400/90 sm:inline">
                  Disponible
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-white/5 text-violet-200">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Localisation
                  </p>
                  <a
                    href="https://maps.google.com/?q=F%C3%A8s%2C%20Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-100 transition hover:text-violet-300"
                  >
                    Fès, Morocco
                  </a>
                  <p className="text-xs text-zinc-500">
                    Freelance Web Developer — Available for projects
                  </p>
                </div>
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Réseaux sociaux
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://github.com/yahyatem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:text-violet-200"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yahya-temouch-73936232a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:text-violet-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/yayatem_10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:text-violet-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d12] shadow-[0_0_50px_-20px_rgba(139,92,246,0.35)] md:mt-20">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            aria-hidden
          />
          <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 px-6 py-12 md:min-h-[280px]">
            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-violet-500 bg-violet-600/40 text-white shadow-[0_0_40px_-4px_rgba(139,92,246,0.9)]">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-500/60 blur-sm" />
            </div>
            <p className="text-center text-sm font-medium text-zinc-300">
              Fès, Morocco
            </p>
          </div>
        </div>

        {/* FAQ + CTA */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <div className={`${glass} p-6 md:p-8`}>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Questions fréquentes
            </h3>
            <div className="flex flex-col gap-2">
              {faqItems.map((item, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={item.q}
                    className="rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-zinc-200 transition hover:text-white"
                      onClick={() =>
                        setOpenFaq((v) => (v === index ? null : index))
                      }
                      aria-expanded={open}
                    >
                      {item.q}
                      <svg
                        className={`h-5 w-5 shrink-0 text-violet-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-white/10 px-4 pb-4 pt-0 text-sm leading-relaxed text-zinc-400">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-600/25 via-[#12121a] to-fuchsia-600/20 p-8 shadow-[0_0_50px_-18px_rgba(139,92,246,0.45)] md:p-10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/40 bg-violet-500/20 text-violet-100">
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                Transformons votre idée en une solution web moderne et
                performante. Un premier échange suffit pour cadrer vos besoins.
              </p>
              <motion.button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3.5 text-sm font-semibold text-white sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                animate={{ boxShadow: [...primaryGlowKeyframes] }}
                transition={{
                  boxShadow: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.setTimeout(
                    () => document.getElementById("contact-name")?.focus(),
                    400,
                  );
                }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Discutons maintenant
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
