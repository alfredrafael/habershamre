"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Ribbon({
  ribbonImage = "",
  ribbonText = "",
  ribbonSubtext = "",
}: {
  ribbonImage: string;
  ribbonText: string;
  ribbonSubtext?: string;
}) {
  const bgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const mql = window.matchMedia("(min-width: 768px)"); // disable parallax on mobile
    let raf = 0;
    const speed = 0.25; // smaller = subtler
    const maxShift = 40; // clamp so image never scrolls past its scaled overscan

    const onScroll = () => {
      if (!mql.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.parentElement!.getBoundingClientRect();
        const y = Math.max(-maxShift, Math.min(maxShift, rect.top * speed));
        el.style.transform = `translate3d(0, ${y}px, 0) scale(1.15)`;
      });
    };

    const onMqlChange = () => {
      cancelAnimationFrame(raf);
      el.style.transform = mql.matches ? el.style.transform : "";
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mql.addEventListener("change", onMqlChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      mql.removeEventListener("change", onMqlChange);
    };
  }, []);

  return (
    <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute -inset-1 z-0">
        <Image
          ref={bgRef}
          src={ribbonImage}
          alt={ribbonText}
          fill
          className="object-cover will-change-transform"
        />
        {/* <div className="absolute inset-0 bg-black/40" /> */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-balance font-serif text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {ribbonText}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 lg:text-xl">
            {ribbonSubtext}
          </p>
        </div>
      </div>
    </section>
  );
}
