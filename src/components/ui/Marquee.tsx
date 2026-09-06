import { CSSProperties } from "react";

interface MarqueeProps {
  items: string[];
  speedSeconds?: number;
}

export function Marquee({ items, speedSeconds = 28 }: MarqueeProps) {
  const style = { "--marquee-duration": `${speedSeconds}s` } as CSSProperties;

  return (
    <div className="border-y border-hairline overflow-hidden motion-reduce:overflow-x-auto py-4">
      <div className="flex w-max gap-3 animate-marquee motion-reduce:animate-none" style={style}>
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} ariaHidden hideOnReducedMotion />
      </div>
    </div>
  );
}

function MarqueeTrack({ items, ariaHidden, hideOnReducedMotion }: { items: string[]; ariaHidden?: boolean; hideOnReducedMotion?: boolean }) {
  return (
    <div className={`flex shrink-0 gap-3 ${hideOnReducedMotion ? "motion-reduce:hidden" : ""}`} aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="font-body text-sm text-accent whitespace-nowrap border border-hairline rounded-md px-3 py-1.5">
          {item}
        </span>
      ))}
    </div>
  );
}