import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { Marquee } from "@/components/ui/Marquee";
import { ParallaxPhoto } from "@/components/ui/ParallaxPhoto";

const marqueeItems = skills.flatMap((group) => group.items);

export function Hero() {
  return (
    <section className="pt-20 md:pt-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start px-6 md:px-12 max-w-6xl mx-auto">
        <div className="md:col-span-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">{profile.name}</h1>
          <p className="font-body text-lg md:text-xl text-muted mt-4 max-w-[46ch]">{profile.role} based in {profile.location}.</p>
          <p className="font-body text-base text-ink mt-6 max-w-[62ch] leading-relaxed">{profile.summary}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={profile.resumeUrl} download className="font-body text-sm border border-accent px-5 py-2.5 text-accent shadow-sm hover:border-ink hover:text-ink transition-colors">
              Download resume
            </a>
            <a href={`mailto:${profile.email}`} className="font-body text-sm text-accent px-5 py-2.5 border border-accent shadow-sm hover:border-ink hover:text-ink transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <ParallaxPhoto src={profile.photoUrl} alt={profile.name} />
        </div>
      </div>

      <div className="mt-16">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}