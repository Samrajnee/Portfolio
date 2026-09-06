import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline mt-20">
      <div className="px-6 md:px-12 max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <p className="font-heading text-xl text-ink">{profile.name}</p>
          <p className="font-body text-sm text-muted mt-2 max-w-[46ch]">
            {profile.role} based in {profile.location}.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-body text-sm text-muted">Contact</p>

          <div className="mt-2 space-y-1">
            <a
              href={`mailto:${profile.email}`}
              className="font-body text-sm text-accent block hover:text-ink transition-colors"
            >
              {profile.email}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent block hover:text-ink transition-colors"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent block hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-body text-sm text-muted">Resume</p>

          <a
            href={profile.resumeUrl}
            download
            className="font-body text-sm text-accent block mt-2 hover:text-ink transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="px-6 md:px-12 max-w-6xl mx-auto py-6 flex flex-wrap items-center justify-between gap-2">
          <p className="font-body text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>

          <p className="font-body text-xs text-muted">
            Built with Next.js · TailwindCSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}