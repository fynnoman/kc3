"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BulletList,
  ContentSection,
  FaqList,
  OrderedSteps,
} from "@/components/LandingSections";
import { ablauf, ankaufFaq, ankaufKategorien } from "@/lib/ankauf";

gsap.registerPlugin(ScrollTrigger);

export default function AnkaufSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ankauf-title > span > span",
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
        ".ankauf-copy",
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
    <div id="ankauf" ref={root}>
      <section
        className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)] overflow-hidden"
        style={{ padding: "clamp(60px, 8vw, 120px) var(--page-padding) 0" }}
      >
        <div className="marker text-[var(--kc3-muted)] ankauf-copy">
          03 · Ankauf
        </div>

        <h2
          className="ankauf-title font-medium tracking-[-0.05em] md:tracking-[-0.06em] leading-[0.88] md:leading-[0.86]"
          style={{ fontSize: "clamp(2.8rem, 11vw, 10rem)", marginTop: "-0.2em" }}
        >
          <span className="reveal-line block">
            <span>Direktankauf.</span>
          </span>
          <span className="reveal-line block">
            <span className="font-light">Auf eigene Rechnung.</span>
          </span>
        </h2>

        <div className="hairline text-[var(--kc3-black)] mt-10 md:mt-20 ankauf-copy" />

        <div className="mt-8 md:mt-16 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 md:gap-y-14 items-start pb-16 md:pb-24">
          <div className="ankauf-copy col-span-12 md:col-span-6 flex flex-col gap-8 max-w-xl">
            <div className="marker text-[var(--kc3-muted)]">Rolle</div>
            <p
              className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-black)]/85"
              style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)" }}
            >
              KC3 ist Käufer und Bestandshalter in Personalunion. Wohn- und
              Gewerbeimmobilien werden deutschlandweit auf eigene Rechnung
              erworben, in den eigenen Bestand überführt und langfristig
              vermietet.
            </p>
            <p
              className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/70"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
            >
              Es gibt keinen Maklervertrag, keine Provision und keine
              Weiterveräußerung. Ansprechpartner ist die KC3 GmbH selbst.
            </p>
          </div>

          <div className="ankauf-copy col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8">
            <div className="marker text-[var(--kc3-muted)]">Prinzip</div>
            <p
              className="tracking-[-0.02em] leading-[1.45]"
              style={{ fontSize: "clamp(1.1rem, 1.35vw, 1.35rem)" }}
            >
              Ankauf, Bestand und Vermietung{" "}
              <span className="font-light">aus einer Hand.</span>
            </p>
            <p className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-black)]/70">
              Eigenkapital, kein externer Investor. Kein Bieterverfahren, keine
              breit gestreute Vermarktung. Ein direkter, verbindlicher
              Ansprechpartner für die Verkäuferseite.
            </p>
          </div>
        </div>
      </section>

      {ankaufKategorien.map((k) => (
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
        eyebrow="03.5 · Ablauf"
        title="Vom Angebot bis zur Übernahme."
        intro="Der Prozess bleibt schlank. Kein Bieterverfahren, keine Vermittlungsstufe, ein Ansprechpartner."
      >
        <OrderedSteps items={ablauf} />
      </ContentSection>

      <ContentSection
        eyebrow="03.6 · Häufige Fragen"
        title="Fragen zum Direktankauf."
      >
        <FaqList items={ankaufFaq} />
      </ContentSection>
    </div>
  );
}
