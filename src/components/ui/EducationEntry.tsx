import { EducationEntry as EducationEntryType } from "@/types";

export function EducationEntry({ item }: { item: EducationEntryType }) {
  return (
    <article className="border-t border-hairline pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div>
          <h3 className="font-heading text-xl text-ink">{item.degree}</h3>
          <p className="font-body text-sm text-muted mt-1">{item.institution}{item.location ? ` · ${item.location}` : ""}</p>
        </div>
        <span className="font-body text-sm text-muted whitespace-nowrap">
          {item.startDate ? `${item.startDate} to ${item.endDate}` : item.endDate}
        </span>
      </div>

      {(item.credentials?.length || item.coursework?.length || item.activities?.length) ? (
        <div className="mt-4 space-y-3">
          {item.credentials && item.credentials.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {item.credentials.map((c) => (
                <span key={c} className="font-body text-xs text-accent border border-accent px-2.5 py-1">{c}</span>
              ))}
            </div>
          )}
          {item.coursework && item.coursework.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {item.coursework.map((c) => (
                <span key={c} className="font-body text-xs text-muted border border-hairline px-2.5 py-1">{c}</span>
              ))}
            </div>
          )}
          {item.activities && item.activities.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {item.activities.map((a) => (
                <span key={a} className="font-body text-xs text-muted border border-hairline px-2.5 py-1">{a}</span>
              ))}
            </div>
          )}
        </div>
      ) : (
        item.detail && <p className="font-body text-sm text-ink mt-3 max-w-[68ch] leading-relaxed">{item.detail}</p>
      )}
    </article>
  );
}