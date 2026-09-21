"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company, mapsUrl } from "@/lib/company";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-line > span",
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".cta-fade",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kontakt"
      ref={root}
      className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)] overflow-hidden"
      style={{
        padding: "clamp(64px, 7vw, 96px) var(--page-padding)",
      }}
    >
      <div className="grid-lines" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="relative">
        <div className="flex items-baseline justify-between gap-6 cta-fade">
          <span className="marker text-[var(--kc3-ivory)]/60">
            04 · Kontakt
          </span>
          <span className="marker text-[var(--kc3-ivory)]/40 text-right">
            {company.address.city} · Deutschlandweit
          </span>
        </div>

        <div className="hairline text-[var(--kc3-ivory)] mt-6 cta-fade" />

        <h2
          className="font-medium tracking-[-0.05em] md:tracking-[-0.06em] leading-[1] md:leading-[0.88]"
          style={{
            fontSize: "clamp(2.4rem, 8.5vw, 9rem)",
            marginTop: "clamp(18px, 3vw, 48px)",
          }}
        >
          <span className="reveal-line cta-line block">
            <span>Kontakt</span>
          </span>
          <span className="reveal-line cta-line block">
            <span className="font-light">per E-Mail.</span>
          </span>
        </h2>

        <div className="mt-16 md:mt-24 flex flex-col gap-10 cta-fade">
          <div className="marker text-[var(--kc3-ivory)]/50">
            Schriftverkehr
          </div>
          <a
            href={`mailto:${company.contact.email}`}
            className="self-start font-medium tracking-[-0.04em] leading-[1] break-all border-b border-[var(--kc3-ivory)]/30 hover:border-[var(--kc3-navy)] hover:text-[var(--kc3-navy)] pb-4 md:pb-6 transition-colors"
            style={{ fontSize: "clamp(1.6rem, 5.6vw, 5rem)" }}
          >
            {company.contact.email}
          </a>
        </div>

        <div className="hairline text-[var(--kc3-ivory)] mt-16 md:mt-24 cta-fade" />

        <div className="mt-8 md:mt-10 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10">
          <div className="col-span-12 md:col-span-6 cta-fade">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Anschrift
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[-0.02em] leading-[1.55] block hover:text-[var(--kc3-navy)] transition-colors"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
            >
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </a>
          </div>

          <div className="col-span-6 md:col-span-6 cta-fade">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Rechtliches
            </div>
            <div
              className="tracking-[-0.02em] leading-[1.55] flex flex-col gap-1"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
            >
              <a
                href="/impressum"
                className="text-[var(--kc3-ivory)]/75 hover:text-[var(--kc3-ivory)] transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-[var(--kc3-ivory)]/75 hover:text-[var(--kc3-ivory)] transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
