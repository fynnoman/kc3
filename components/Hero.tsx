"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".hero-line > span, .hero-meta, .hero-marker", {
          y: 0,
          opacity: 1,
        });
        gsap.set(".hero-media", { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-media",
        {
          clipPath: "inset(45% 22% 45% 22%)",
          scale: 1.12,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.8,
        }
      )
        .fromTo(
          ".hero-marker",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.08 },
          "-=1.2"
        )
        .fromTo(
          ".hero-line > span",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.3, stagger: 0.11 },
          "-=1.1"
        )
        .fromTo(
          ".hero-meta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.06 },
          "-=0.8"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-[var(--kc3-black)] text-[var(--kc3-ivory)]"
    >
      <div
        aria-hidden
        className="hero-media absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=85&w=2400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.2) contrast(1.02) brightness(0.92)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,19,18,0.25) 0%, rgba(17,19,18,0.05) 40%, rgba(17,19,18,0.55) 100%)",
        }}
      />

      <div className="grain" aria-hidden />

      <div className="grid-lines" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div
        className="relative z-10 h-full flex flex-col justify-between"
        style={{ padding: "120px var(--page-padding) 48px" }}
      >
        <div className="flex items-start justify-between hero-marker">
          <span className="marker text-[var(--kc3-ivory)]/70">
            Kenn · Rheinland-Pfalz
          </span>
          <span className="marker text-[var(--kc3-ivory)]/70 hidden md:inline">
            Gegründet 2024 · GmbH
          </span>
        </div>

        <div className="max-w-[1400px]">
          <h1
            className="font-medium tracking-[-0.065em] leading-[0.86]"
            style={{ fontSize: "clamp(3.6rem, 12vw, 12rem)" }}
          >
            <span className="reveal-line hero-line">
              <span>Immobilien.</span>
            </span>
            <span className="reveal-line hero-line">
              <span>Entwicklung.</span>
            </span>
            <span className="reveal-line hero-line">
              <span className="font-editorial font-normal">Perspektiven.</span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="hairline text-[var(--kc3-ivory)] hero-meta" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <a
              href="#leistungen"
              className="hero-meta group transition-colors hover:text-[var(--kc3-accent)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2 group-hover:text-[var(--kc3-accent)] transition-colors">
                Leistungen
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                Immobilien
                <br />
                Projektentwicklung
              </div>
            </a>

            <div className="hero-meta">
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2">
                Regionen
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                Rheinland-Pfalz
                <br />
                Kenn · Trier · Konz
              </div>
            </div>

            <a
              href="#unternehmen"
              className="hero-meta group transition-colors hover:text-[var(--kc3-accent)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2 group-hover:text-[var(--kc3-accent)] transition-colors">
                Unternehmen
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                KC3 GmbH
                <br />
                Kenn, Deutschland
              </div>
            </a>

            <a
              href="#kontakt"
              className="hero-meta group transition-colors hover:text-[var(--kc3-accent)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2 group-hover:text-[var(--kc3-accent)] transition-colors">
                Kontakt
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                Nach unten scrollen
                <br />
                <span className="marker">Weiterlesen ↓</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
