"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BulletList,
  ContentSection,
  FaqList,
} from "@/components/LandingSections";
import { investmentFaq, investmentKategorien } from "@/lib/investment";

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".investment-title > span > span",
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.3,
          ease: "power4.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".investment-copy",
        { opacity: 0, y: 24 },
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
    <div id="investment" ref={root}>
      <section
        className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)] overflow-hidden"
        style={{ padding: "clamp(60px, 8vw, 120px) var(--page-padding) 0" }}
      >
        <div className="marker text-[var(--kc3-muted)] investment-copy">
          03 · Investmentansatz
        </div>

        <h2
          className="investment-title font-medium tracking-[-0.05em] md:tracking-[-0.06em] leading-[0.88] md:leading-[0.86]"
          style={{ fontSize: "clamp(2.8rem, 11vw, 10rem)", marginTop: "-0.2em" }}
        >
          <span className="reveal-line block">
            <span>Kapital in Substanz.</span>
          </span>
          <span className="reveal-line block">
            <span className="font-light">Auf lange Sicht.</span>
          </span>
        </h2>

        <div className="hairline text-[var(--kc3-black)] mt-10 md:mt-20 investment-copy" />

        <div className="mt-8 md:mt-16 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 md:gap-y-14 items-start pb-16 md:pb-24">
          <div className="investment-copy col-span-12 md:col-span-6 flex flex-col gap-8 max-w-xl">
            <div className="marker text-[var(--kc3-muted)]">Ansatz</div>
            <p
              className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-black)]/85"
              style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)" }}
            >
              Die KC3 GmbH investiert eigenes Kapital in Wohn- und
              Gewerbeimmobilien deutschlandweit. Erwerb, Bestand und Vermietung
              erfolgen aus einer Hand.
            </p>
            <p
              className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/70"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
            >
              Kein externer Investor, keine Fondsstruktur, keine kurzfristige
              Verwertung. Ein direkter, verbindlicher Ansprechpartner in der
              Gesellschaft.
            </p>
          </div>

          <div className="investment-copy col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8">
            <div className="marker text-[var(--kc3-muted)]">Horizont</div>
            <p
              className="tracking-[-0.02em] leading-[1.45]"
              style={{ fontSize: "clamp(1.1rem, 1.35vw, 1.35rem)" }}
            >
              Substanzwerte statt spekulativer{" "}
              <span className="font-light">Renditelogik.</span>
            </p>
            <p className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-black)]/70">
              Ziel ist der stetige Aufbau eines eigenen, deutschlandweiten
              Immobilienportfolios aus Wohn- und Gewerbeobjekten über
              Konjunkturzyklen hinweg.
            </p>
          </div>
        </div>
      </section>

      {investmentKategorien.map((k) => (
        <div key={k.anchor} id={k.anchor} className="scroll-mt-24">
          <ContentSection
            eyebrow={k.eyebrow}
            title={k.title}
            intro={k.intro}
          >
            <BulletList items={k.bullets} />
          </ContentSection>
        </div>
      ))}

      <ContentSection
        eyebrow="03.5 · Häufige Fragen"
        title="Fragen zum Investmentansatz."
      >
        <FaqList items={investmentFaq} />
      </ContentSection>
    </div>
  );
}
