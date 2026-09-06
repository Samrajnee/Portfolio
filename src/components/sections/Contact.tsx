import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 max-w-6xl mx-auto py-24">
      <div className="border-t border-hairline pt-12">
        <h2 className="font-heading text-3xl md:text-4xl text-ink">Get in touch</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="font-body text-sm text-accent border border-accent px-5 py-2.5 shadow-sm hover:border-ink hover:text-ink transition-colors">
            {profile.email}
          </a>
          {profile.phone && (
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="font-body text-sm text-accent border border-accent px-5 py-2.5 shadow-sm hover:border-ink hover:text-ink transition-colors">
              {profile.phone}
            </a>
          )}
        </div>

        <div className="mt-6 flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}