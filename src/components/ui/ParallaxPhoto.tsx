"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 48]);

  return (
    <div
      ref={ref}
      className="rounded-2xl aspect-[4/5] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.2),0_8px_20px_rgba(26,26,24,0.15)]"
    >
      <motion.div style={{ y }} className="absolute -inset-y-6 inset-x-0">
        <Image src={src} alt={alt} fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute top-[8%] left-[8%] w-[35%] h-[20%] rounded-full bg-white/25 blur-lg" />
    </div>
  );
}