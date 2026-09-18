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
            05 · Kontakt
          </span>
          <span className="marker text-[var(--kc3-ivory)]/40 text-right">
            {company.address.city} · {company.address.region}
          </span>
        </div>

        <div className="hairline text-[var(--kc3-ivory)] mt-6 cta-fade" />

        <h2
          className="font-medium tracking-[-0.06em] leading-[0.88]"
          style={{
            fontSize: "clamp(3rem, 9vw, 9rem)",
            marginTop: "clamp(24px, 3vw, 48px)",
          }}
        >
          <span className="reveal-line cta-line block">
            <span>Lassen Sie uns</span>
          </span>
          <span className="reveal-line cta-line block">
            <span>
              über <span className="font-editorial font-normal">Immobilien</span>{" "}
              sprechen.
            </span>
          </span>
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-12 items-start">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-8 cta-fade">
            <p
              className="tracking-[-0.02em] leading-[1.45] text-[var(--kc3-ivory)]/80 max-w-xl"
              style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)" }}
            >
              Wir sprechen mit Eigentümern, Entwicklern, Kommunen und
              Vermittlern über konkrete Objekte in Rheinland-Pfalz und
              angrenzenden Regionen.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${company.contact.email}`}
                className="link-arrow inline-flex items-baseline gap-3 self-start font-medium tracking-[-0.03em] leading-[1] border-b border-[var(--kc3-ivory)]/40 hover:border-[var(--kc3-ivory)] pb-3"
                style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)" }}
              >
                Kontakt per E-Mail
                <span aria-hidden className="text-[0.6em]">
                  ↗
                </span>
              </a>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="link-arrow inline-flex items-baseline gap-3 self-start tracking-[-0.02em] leading-[1] text-[var(--kc3-ivory)]/75 hover:text-[var(--kc3-ivory)] pb-2"
                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
              >
                {company.contact.phone}
                <span aria-hidden className="text-[0.7em]">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 cta-fade">
            <div>
              <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
                Sprechzeiten
              </div>
              <ul className="flex flex-col gap-1.5">
                {company.contact.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-6 tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
                  >
                    <span className="text-[var(--kc3-ivory)]/70">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
                Reaktionszeit
              </div>
              <p
                className="tracking-[-0.02em] leading-[1.45]"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                {company.contact.responseTime}.
              </p>
            </div>
          </div>
        </div>

        <div className="hairline text-[var(--kc3-ivory)] mt-14 md:mt-20 cta-fade" />

        <div className="mt-8 md:mt-10 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10">
          <div className="col-span-12 md:col-span-4 cta-fade">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Anschrift
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[-0.02em] leading-[1.55] block hover:text-[var(--kc3-accent)] transition-colors"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
            >
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </a>
          </div>

          <div className="col-span-6 md:col-span-4 cta-fade">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Kommunikation
            </div>
            <div
              className="tracking-[-0.02em] leading-[1.55]"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
            >
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-[var(--kc3-ivory)] transition-colors block"
              >
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="hover:text-[var(--kc3-ivory)] transition-colors block"
              >
                {company.contact.email}
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 cta-fade">
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
