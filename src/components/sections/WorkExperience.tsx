import { experience } from "@/data/experience";
import { ExperienceEntry } from "@/components/ui/ExperienceEntry";

export function WorkExperience() {
  return (
    <section id="experience" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Work Experience</h2>
      <div className="mt-10 space-y-10">
        {experience.map((item) => <ExperienceEntry key={item.id} item={item} />)}
      </div>
    </section>
  );
}