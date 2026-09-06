import { education } from "@/data/education";
import { EducationEntry } from "@/components/ui/EducationEntry";

export function Education() {
  return (
    <section id="education" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Education</h2>
      <div className="mt-10 space-y-8">
        {education.map((item) => <EducationEntry key={item.id} item={item} />)}
      </div>
    </section>
  );
}