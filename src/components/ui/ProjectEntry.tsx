import Image from "next/image";
import { Project } from "@/types";

export function ProjectEntry({ project }: { project: Project }) {
  const hasDistinctLiveUrl = project.liveUrl !== project.githubUrl;

  return (
    <article className="border border-hairline">
      <div className="relative aspect-video bg-background border-b border-hairline">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-hairline/20">
            <span className="font-body text-xs text-muted">
              Preview coming soon
            </span>
          </div>
        )}

        {project.stage && (
          <span className="absolute top-3 right-3 font-body text-xs text-accent bg-background border border-accent px-2 py-0.5">
            {project.stage === "live" ? "Live" : "In progress"}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="font-heading text-2xl md:text-3xl text-ink">
            {project.title}
          </h3>

          <span className="font-body text-sm text-muted">
            {project.period}
          </span>
        </div>

        {project.status && (
          <p className="font-body text-sm text-muted mt-2">
            {project.status}
          </p>
        )}

        <ul className="mt-6 space-y-3 font-body text-base text-ink leading-relaxed max-w-[68ch]">
          {project.description.map((line, i) => (
            <li key={i} className="pl-4 border-l border-hairline">
              {line}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-body text-xs text-muted border border-hairline px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors"
            >
              {hasDistinctLiveUrl ? "View code" : "View repository"}
            </a>
          )}

          {hasDistinctLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors"
            >
              View live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
