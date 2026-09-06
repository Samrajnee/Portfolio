"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#achievements", label: "Achievements" },
  { href: "#open-source", label: "Open Source" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-hairline">
      <div className="px-6 md:px-12 max-w-6xl mx-auto flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg text-ink">{profile.name.split(" ")[0]}</a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm text-muted hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.resumeUrl} download className="hidden md:inline-block font-body text-sm text-accent border border-accent px-4 py-1.5 shadow-sm hover:border-ink hover:text-ink transition-colors">
            Resume
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 border border-hairline"
          >
            <span className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-hairline bg-background px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-body text-base text-ink">
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} download onClick={() => setOpen(false)} className="font-body text-sm text-accent border border-accent px-4 py-2.5 shadow-sm text-center mt-2">
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}