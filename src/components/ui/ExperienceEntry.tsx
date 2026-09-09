import { Experience } from "@/types";

export function ExperienceEntry({ item }: { item: Experience }) {
  if (item.roles && item.roles.length > 0) {
    return (
      <article className="border-t border-hairline pt-8">
        <div>
          <h3 className="font-heading text-xl text-ink">
            {item.organisation}
          </h3>

          {item.location && (
            <p className="font-body text-sm text-muted mt-1">
              {item.location}
            </p>
          )}
        </div>

        <div className="mt-6 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" />

          {item.roles.map((role) => (
            <div key={role.id} className="relative pl-7 pb-8 last:pb-0">
              <span className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-accent" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h4 className="font-heading text-lg text-ink">
                  {role.title}
                </h4>

                <span className="font-body text-sm text-muted whitespace-nowrap">
                  {role.startDate} to {role.endDate}
                </span>
              </div>

              <ul className="mt-3 space-y-2 font-body text-base text-ink leading-relaxed max-w-[68ch]">
                {role.bullets.map((line, j) => (
                  <li key={j} className="pl-4 border-l border-hairline">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.credentialUrl && (
          <div className="flex gap-4 mt-2">
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors"
            >
              View certificate
            </a>
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="border-t border-hairline pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div>
          <h3 className="font-heading text-xl text-ink">{item.role}</h3>

          <p className="font-body text-sm text-muted mt-1">
            {item.organisation}
            {item.location ? ` · ${item.location}` : ""}
          </p>
        </div>

        <span className="font-body text-sm text-muted whitespace-nowrap">
          {item.startDate} to {item.endDate}
        </span>
      </div>

      <ul className="mt-4 space-y-2 font-body text-base text-ink leading-relaxed max-w-[68ch]">
        {item.bullets.map((line, i) => (
          <li key={i} className="pl-4 border-l border-hairline">
            {line}
          </li>
        ))}
      </ul>

      {item.credentialUrl && (
        <div className="flex gap-4 mt-4">
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors"
          >
            View certificate
          </a>
        </div>
      )}
    </article>
  );
}