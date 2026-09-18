"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/company";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedProjects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-title > span > span",
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".sp-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".sp-list",
            start: "top 75%",
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projekte"
      ref={root}
      className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)] border-t border-[color:var(--kc3-border)]"
      style={{ padding: "var(--section-space) var(--page-padding)" }}
    >
      <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] items-end mb-10 md:mb-24">
        <div className="col-span-12 md:col-span-8">
          <div className="marker text-[var(--kc3-muted)] mb-4 md:mb-8">
            03 · Referenzen
          </div>
          <h2
            className="sp-title font-medium tracking-[-0.045em] md:tracking-[-0.055em] leading-[0.96] md:leading-[0.92]"
            style={{ fontSize: "clamp(2.2rem, 7.5vw, 7.5rem)" }}
          >
            <span className="reveal-line block">
              <span>Ausgewählte</span>
            </span>
            <span className="reveal-line block">
              <span className="font-editorial font-normal">Projekte.</span>
            </span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 mt-10 md:mt-0 flex flex-col gap-6">
          <div className="hairline text-[var(--kc3-black)]" />
          <p
            className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-black)]/70 max-w-sm"
            style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.05rem)" }}
          >
            Ein Auszug aus laufenden Vorhaben und Bestandsobjekten in
            Rheinland-Pfalz. Vom Einzelobjekt bis zur Grundstücksentwicklung —
            begleitet in Ankauf, Realisierung und Verwaltung.
          </p>
          <div className="flex items-center justify-between marker text-[var(--kc3-muted)]">
            <span>
              {String(projects.length).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <span>Stand · 2026</span>
          </div>
        </div>
      </div>

      <div className="sp-list">
        <div className="hairline text-[var(--kc3-black)]" />
        {projects.map((p) => (
          <a
            key={p.index}
            href="#kontakt"
            className="sp-row grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-3 items-baseline py-6 md:py-10 border-b border-[color:var(--kc3-border)] group cursor-pointer"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="marker text-[var(--kc3-muted)]">{p.index}</span>
            </div>

            <div className="col-span-10 md:col-span-4">
              <h3
                className="font-medium tracking-[-0.03em] leading-[1.05] md:leading-[1] transition-transform duration-700 group-hover:-translate-x-1"
                style={{ fontSize: "clamp(1.35rem, 3.6vw, 3rem)" }}
              >
                {p.name}
              </h3>
            </div>

            <div className="col-span-6 md:col-span-3 mt-2 md:mt-0">
              <div className="marker text-[var(--kc3-muted)] mb-1">
                Standort
              </div>
              <div
                className="tracking-[-0.01em]"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
              >
                {p.location}
              </div>
            </div>

            <div className="col-span-6 md:col-span-2 mt-2 md:mt-0">
              <div className="marker text-[var(--kc3-muted)] mb-1">
                Kategorie
              </div>
              <div
                className="tracking-[-0.01em]"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
              >
                {p.type}
              </div>
            </div>

            <div className="col-span-6 md:col-span-1 mt-2 md:mt-0">
              <div className="marker text-[var(--kc3-muted)] mb-1">Status</div>
              <div
                className="tracking-[-0.01em]"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
              >
                {p.status}
              </div>
            </div>

            <div className="col-span-6 md:col-span-1 mt-2 md:mt-0 text-right">
              <div className="marker text-[var(--kc3-muted)] mb-1">Jahr</div>
              <div
                className="tracking-[-0.01em] flex items-baseline justify-end gap-2"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
              >
                {p.year}
                <span
                  aria-hidden
                  className="text-[var(--kc3-muted)] transition-transform duration-500 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div
        className="mt-14 tracking-[-0.02em] leading-[1.5] text-[var(--kc3-black)]/70 max-w-lg"
        style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
      >
        Weitere Objekte und laufende Vorhaben stellen wir auf Anfrage vor.
      </div>
    </section>
  );
}
