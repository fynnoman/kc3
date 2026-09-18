"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company, mapsUrl } from "@/lib/company";

gsap.registerPlugin(ScrollTrigger);

export default function AboutKC3() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title > span > span",
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.3,
          ease: "power4.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
          },
        }
      );

      gsap.fromTo(
        ".about-copy > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 55%",
          },
        }
      );

      gsap.fromTo(
        ".about-image",
        { clipPath: "inset(30% 20% 30% 20%)", scale: 1.12 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="unternehmen"
      ref={root}
      className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)] overflow-hidden"
      style={{ padding: "clamp(60px, 8vw, 120px) var(--page-padding)" }}
    >
      <div className="marker text-[var(--kc3-muted)]">
        04 · Unternehmen
      </div>

      <h2
        className="about-title font-medium tracking-[-0.06em] leading-[0.86]"
        style={{ fontSize: "clamp(4rem, 12vw, 12rem)", marginTop: "-0.35em" }}
      >
        <span className="reveal-line block">
          <span>Über</span>
        </span>
        <span className="reveal-line block">
          <span className="font-editorial font-normal">KC3.</span>
        </span>
      </h2>

      <div className="hairline text-[var(--kc3-black)] mt-16 md:mt-24" />

      <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-14 items-start">
        <div className="about-copy col-span-12 md:col-span-6 flex flex-col gap-10 max-w-xl">
          <div className="marker text-[var(--kc3-muted)]">Selbstverständnis</div>
          <p
            className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-black)]/85"
            style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)" }}
          >
            Die KC3 GmbH handelt als langfristiger Eigentümer. Jedes Objekt
            bleibt nach der Entwicklung in eigener Verantwortung und in eigenem
            Bestand.
          </p>
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/70"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
          >
            Alle Entscheidungen — von der Standortanalyse über den Ankauf bis
            zur laufenden Verwaltung — treffen wir aus Eigentümerperspektive.
            Wir arbeiten ohne externe Investoren und ohne kurzfristige
            Verwertungslogik.
          </p>
        </div>

        <div className="about-copy col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-10">
          <div className="marker text-[var(--kc3-muted)]">Anspruch</div>
          <p
            className="tracking-[-0.02em] leading-[1.45]"
            style={{ fontSize: "clamp(1.1rem, 1.35vw, 1.35rem)" }}
          >
            Die KC3 GmbH entwickelt und verwaltet Immobilien mit einem klaren
            Anspruch:{" "}
            <span className="font-editorial font-normal">
              Qualität, Substanz und nachhaltige Wertentwicklung.
            </span>
          </p>
          <p className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-black)]/70">
            Wir begleiten Projekte von der ersten Idee über die Entwicklung bis
            zur langfristigen Nutzung — mit dem Blick auf Standort, Substanz
            und Perspektive.
          </p>
        </div>
      </div>

      <div className="hairline text-[var(--kc3-black)] mt-16 md:mt-20" />

      <dl className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="about-copy flex flex-col gap-2">
          <dt className="marker text-[var(--kc3-muted)]">Geschäftssitz</dt>
          <dd>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[-0.02em] leading-[1.5] block hover:text-[var(--kc3-accent)] transition-colors"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
            >
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </a>
          </dd>
        </div>
        <div className="about-copy flex flex-col gap-2">
          <dt className="marker text-[var(--kc3-muted)]">Rechtsform</dt>
          <dd
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
          >
            GmbH
            <br />
            <span className="text-[var(--kc3-muted)]">Eigentümergeführt</span>
          </dd>
        </div>
        <div className="about-copy flex flex-col gap-2">
          <dt className="marker text-[var(--kc3-muted)]">Gegründet</dt>
          <dd
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
          >
            {company.founded}
            <br />
            <span className="text-[var(--kc3-muted)]">Kenn, Deutschland</span>
          </dd>
        </div>
        <div className="about-copy flex flex-col gap-2">
          <dt className="marker text-[var(--kc3-muted)]">Investitionsansatz</dt>
          <dd
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
          >
            Langfristiger Bestand
            <br />
            <span className="text-[var(--kc3-muted)]">Horizont 10+ Jahre</span>
          </dd>
        </div>
      </dl>

      <div className="mt-20 md:mt-32 relative w-full h-[52vh] md:h-[72vh] overflow-hidden">
        <div
          className="about-image absolute inset-0 will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=85&w=2400&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(0.2) contrast(1.05)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,19,18,0) 60%, rgba(17,19,18,0.35) 100%)",
          }}
        />
        <div className="absolute bottom-6 left-6 marker text-[var(--kc3-ivory)]/85">
          Substanz · Architektur · Perspektive
        </div>
        <div className="absolute bottom-6 right-6 marker text-[var(--kc3-ivory)]/60">
          KC3 · Portfolio
        </div>
      </div>
    </section>
  );
}
