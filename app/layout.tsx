import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.yahyatemouch.life";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogDescription =
  "Je crée des sites web modernes, rapides et performants. Découvrez mon portfolio.";

/** Valeur du champ `content` du tag meta Search Console (méthode « balise HTML »). */
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yahya Temouch - Développeur Web",
  description: ogDescription,
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  openGraph: {
    title: "Yahya Temouch - Développeur Web",
    description: ogDescription,
    url: siteUrl,
    siteName: "Yahya Temouch",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Yahya Temouch — Développeur web, portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahya Temouch - Développeur Web",
    description: "Portfolio moderne avec projets, compétences et contact.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
