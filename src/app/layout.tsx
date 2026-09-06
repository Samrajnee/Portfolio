import type { Metadata } from "next";
import { fraunces, plexSans } from "@/lib/fonts";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = "https://samrajnee-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} - ${profile.role}`, template: `%s - ${profile.name}` },
  description: profile.summary,
  keywords: ["Samrajnee Bhattacharjee", "Computer Science Engineer", "Full-Stack Developer", "Software Engineer", "MAKAUT", "Kolkata", "CampusChain"],
  authors: [{ name: profile.name, url: profile.github }],
  category: "technology",
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: siteUrl, siteName: `${profile.name} - Portfolio`, title: `${profile.name} - ${profile.role}`, description: profile.summary, locale: "en_US" },
  twitter: { card: "summary_large_image", title: `${profile.name} - ${profile.role}`, description: profile.summary },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body className="bg-background text-ink font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}