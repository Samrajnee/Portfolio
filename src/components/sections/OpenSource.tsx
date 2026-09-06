import { openSourceContributions } from "@/data/openSource";

export function OpenSource() {
  const hasContributions = openSourceContributions.length > 0;

  return (
    <section
      id="open-source"
      className="px-6 md:px-12 max-w-6xl mx-auto py-20"
    >
      <h2 className="font-heading text-3xl text-ink">Open Source</h2>

      {hasContributions ? (
        <div className="mt-10 space-y-6">
          {openSourceContributions.map((item) => (
            <article
              key={item.id}
              className="border-t border-hairline pt-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-body text-base text-ink">
                  {item.project}
                </h3>

                {item.date && (
                  <span className="font-body text-sm text-muted whitespace-nowrap">
                    {item.date}
                  </span>
                )}
              </div>

              <p className="font-body text-sm text-ink mt-2 max-w-[68ch] leading-relaxed">
                {item.description}
              </p>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors mt-3 inline-block"
                >
                  View contribution
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-6 font-body text-base text-muted border-t border-hairline pt-6 max-w-[62ch]">
          No contributions listed yet.
        </p>
      )}
    </section>
  );
}