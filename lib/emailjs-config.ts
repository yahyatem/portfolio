/**
 * EmailJS — identifiants publics (exposés au navigateur).
 * Surcharge via `.env.local` / variables d’hébergement :
 * NEXT_PUBLIC_EMAILJS_SERVICE_ID
 * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *
 * Template EmailJS : utilisez {{name}}, {{email}}, {{subject}}, {{message}}
 */
const DEFAULT_SERVICE_ID = "service_rb9iu6n";
const DEFAULT_TEMPLATE_ID = "template_ja3rlmd";
const DEFAULT_PUBLIC_KEY = "3bJUVIqLXdrNtHROJ";

export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? DEFAULT_SERVICE_ID;

export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? DEFAULT_TEMPLATE_ID;

export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? DEFAULT_PUBLIC_KEY;
