import { projects } from "@/data/projects";
import { ProjectEntry } from "@/components/ui/ProjectEntry";

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 max-w-6xl mx-auto py-20">
      <h2 className="font-heading text-3xl text-ink">Projects</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`h-full ${project.featured ? "md:col-span-2" : ""}`}
          >
            <ProjectEntry project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}