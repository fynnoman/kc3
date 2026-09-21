"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HERO_IMAGES = [
  "/hero/hero-1.webp",
  "/hero/hero-2.webp",
  "/hero/hero-3.webp",
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setActiveImage((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, []);

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
      >
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(0.15) contrast(1.02) brightness(0.9)",
              opacity: i === activeImage ? 1 : 0,
              transition: "opacity 1600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        ))}
      </div>

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
        style={{
          padding:
            "clamp(88px, 14vw, 140px) var(--page-padding) clamp(28px, 5vw, 48px)",
        }}
      >
        <div className="flex items-start justify-between gap-4 hero-marker">
          <span className="marker text-[var(--kc3-ivory)]/70">
            KC3 GmbH · Kenn, Deutschland
          </span>
          <span className="marker text-[var(--kc3-ivory)]/70 hidden md:inline">
            Deutschlandweit tätig
          </span>
        </div>

        <div className="max-w-[1400px]">
          <h1
            className="font-medium tracking-[-0.055em] md:tracking-[-0.065em] leading-[0.9] md:leading-[0.86]"
            style={{ fontSize: "clamp(2.8rem, 13vw, 12rem)" }}
          >
            <span className="reveal-line hero-line">
              <span>Immobilien.</span>
            </span>
            <span className="reveal-line hero-line">
              <span>Bestand.</span>
            </span>
            <span className="reveal-line hero-line">
              <span className="font-light">Perspektive.</span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="hairline text-[var(--kc3-ivory)] hero-meta" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <a
              href="#leistungen"
              className="hero-meta group transition-colors hover:text-[var(--kc3-ivory)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2">
                Tätigkeit
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                Immobilieninvestitionen
                <br />
                Vermietung eigener Objekte
              </div>
            </a>

            <a
              href="#unternehmen"
              className="hero-meta group transition-colors hover:text-[var(--kc3-ivory)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2">
                Unternehmen
              </div>
              <div
                className="tracking-[-0.02em] leading-[1.35]"
                style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)" }}
              >
                KC3 GmbH
                <br />
                Eigentümergeführt
              </div>
            </a>

            <a
              href="#kontakt"
              className="hero-meta group transition-colors hover:text-[var(--kc3-ivory)]"
            >
              <div className="marker text-[var(--kc3-ivory)]/60 mb-2">
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
