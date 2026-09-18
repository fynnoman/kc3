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
          duration: 1.35,
          ease: "power4.out",
          stagger: 0.11,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".cta-meta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
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
      style={{ padding: "clamp(60px, 8vw, 120px) var(--page-padding)" }}
    >
      <div className="grid-lines" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="relative">
        <div className="marker text-[var(--kc3-ivory)]/60 cta-meta">
          05 · Kontakt
        </div>

        <h2
          className="font-medium tracking-[-0.065em] leading-[0.86] max-w-[14ch]"
          style={{ fontSize: "clamp(3.6rem, 11vw, 11rem)", marginTop: "-0.35em" }}
        >
          <span className="reveal-line cta-line block">
            <span>Lassen Sie</span>
          </span>
          <span className="reveal-line cta-line block">
            <span>uns über</span>
          </span>
          <span className="reveal-line cta-line block">
            <span className="font-editorial font-normal">Immobilien</span>
          </span>
          <span className="reveal-line cta-line block">
            <span>sprechen.</span>
          </span>
        </h2>

        <div className="hairline text-[var(--kc3-ivory)] mt-16 md:mt-24" />

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-14 items-start">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-10 max-w-xl cta-meta">
            <div className="marker text-[var(--kc3-ivory)]/60">
              Gespräch aufnehmen
            </div>
            <p
              className="tracking-[-0.02em] leading-[1.4] text-[var(--kc3-ivory)]/85"
              style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)" }}
            >
              Wir sprechen mit Eigentümern, Entwicklern, Kommunen und
              Vermittlern über konkrete Objekte in Rheinland-Pfalz und
              angrenzenden Regionen.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${company.contact.email}`}
                className="link-arrow font-medium tracking-[-0.03em] leading-none border-b border-[var(--kc3-ivory)]/40 hover:border-[var(--kc3-ivory)] pb-3 inline-flex self-start"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)" }}
              >
                Kontakt per E-Mail
                <span aria-hidden>↗</span>
              </a>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="link-arrow tracking-[-0.02em] leading-none border-b border-[var(--kc3-ivory)]/25 hover:border-[var(--kc3-ivory)]/70 pb-3 inline-flex self-start text-[var(--kc3-ivory)]/75"
                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
              >
                {company.contact.phone}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-10 cta-meta">
            <div>
              <div className="marker text-[var(--kc3-ivory)]/60 mb-3">
                Sprechzeiten
              </div>
              <ul className="flex flex-col gap-2">
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
              <div className="marker text-[var(--kc3-ivory)]/60 mb-3">
                Reaktionszeit
              </div>
              <p
                className="tracking-[-0.02em] leading-[1.45]"
                style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)" }}
              >
                {company.contact.responseTime}.
              </p>
            </div>

            <div>
              <div className="marker text-[var(--kc3-ivory)]/60 mb-3">
                Anfragen
              </div>
              <p
                className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-ivory)]/85"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                Für Objektangebote, Projektvorstellungen und weitere Anfragen
                bevorzugen wir den Weg per E-Mail.
              </p>
            </div>
          </div>
        </div>

        <div className="hairline text-[var(--kc3-ivory)] mt-16 md:mt-20" />

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 items-start">
          <div className="col-span-12 md:col-span-4 cta-meta">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Anschrift
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[-0.02em] leading-[1.55] block hover:text-[var(--kc3-accent)] transition-colors"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
            >
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </a>
          </div>

          <div className="col-span-12 md:col-span-4 cta-meta">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Kommunikation
            </div>
            <div
              className="tracking-[-0.02em] leading-[1.55]"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
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

          <div className="col-span-12 md:col-span-4 cta-meta">
            <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
              Rechtliches
            </div>
            <div
              className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-ivory)]/70 flex flex-col gap-2"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
            >
              <a
                href="/impressum"
                className="hover:text-[var(--kc3-ivory)] transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="hover:text-[var(--kc3-ivory)] transition-colors"
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
