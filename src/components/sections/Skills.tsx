import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Skills</h2>
      <div className="mt-10 space-y-6">
        {skills.map((group) => (
          <div key={group.category} className="border-t border-hairline pt-6 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2">
            <h3 className="md:col-span-3 font-body text-sm text-muted">{group.category}</h3>
            <p className="md:col-span-9 font-body text-base text-ink leading-relaxed">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}