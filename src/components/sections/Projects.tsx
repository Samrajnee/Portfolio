import { projects } from "@/data/projects";
import { ProjectEntry } from "@/components/ui/ProjectEntry";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Projects</h2>
      <div className="mt-10 space-y-16">
        {featured.map((project) => <ProjectEntry key={project.id} project={project} />)}
      </div>
      {rest.length > 0 && (
        <div className="mt-16 space-y-10">
          {rest.map((project) => <ProjectEntry key={project.id} project={project} />)}
        </div>
      )}
    </section>
  );
}