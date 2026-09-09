"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const container = containerRef.current;
      const imageWrap = imageWrapRef.current;
      if (!container || !imageWrap) return;

      const rect = container.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      const offset = progress * 48;
      imageWrap.style.transform = `translateY(${offset}px)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl aspect-[4/5] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.2),0_8px_20px_rgba(26,26,24,0.15)]"
    >
      <div ref={imageWrapRef} className="absolute -inset-y-6 inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] left-[8%] w-[35%] h-[20%] rounded-full bg-white/25 blur-lg"
      />
    </div>
  );
}