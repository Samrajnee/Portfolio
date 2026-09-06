import { Achievement } from "@/types";

export function AchievementEntry({ item }: { item: Achievement }) {
  return (
    <article className="border-t border-hairline pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-body text-base text-ink">{item.title}</h3>
        {item.date && <span className="font-body text-sm text-muted whitespace-nowrap">{item.date}</span>}
      </div>
      {item.organisation && <p className="font-body text-sm text-muted mt-1">{item.organisation}</p>}
      {item.description && <p className="font-body text-sm text-ink mt-2 max-w-[68ch] leading-relaxed">{item.description}</p>}
    </article>
  );
}