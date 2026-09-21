"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroStatement() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".intro-word");
      gsap.fromTo(
        words,
        { color: "rgba(17, 19, 18, 0.2)" },
        {
          color: "rgba(17, 19, 18, 1)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "60% 40%",
            scrub: 1,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const line1 = "Wir investieren";
  const line2 = "in Immobilien.";
  const line3 = "Und halten sie";
  const line4 = "im eigenen Bestand.";

  const renderWords = (text: string) =>
    text.split(" ").map((w, i) => (
      <span key={i} className="intro-word inline-block mr-[0.2em]">
        {w}
      </span>
    ));

  return (
    <section
      ref={root}
      className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)]"
      style={{ padding: "var(--section-space) var(--page-padding)" }}
    >
      <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)]">
        <div className="col-span-12 md:col-span-2 mb-8 md:mb-0 flex flex-col justify-between gap-16 md:sticky md:top-32 self-start">
          <div className="marker text-[var(--kc3-muted)]">01 · Selbstverständnis</div>
          <div className="hidden md:block">
            <div className="marker text-[var(--kc3-muted)] mb-3">Kapitel</div>
            <a
              href="#leistungen"
              className="font-light tracking-[-0.02em] leading-[1.15] text-[var(--kc3-black)]/70 hover:text-[var(--kc3-black)] transition-colors block"
              style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}
            >
              Zu den
              <br />
              Leistungen →
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2
            className="font-medium tracking-[-0.045em] md:tracking-[-0.055em] leading-[1] md:leading-[0.94]"
            style={{ fontSize: "clamp(2.1rem, 6.8vw, 7rem)" }}
          >
            <span className="block">{renderWords(line1)}</span>
            <span className="block">{renderWords(line2)}</span>
            <span className="block mt-6 md:mt-10">
              <span className="font-light">{renderWords(line3)}</span>
            </span>
            <span className="block font-light">{renderWords(line4)}</span>
          </h2>

          <div className="mt-14 md:mt-40 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-12 md:gap-y-16">
            <div className="col-span-12 md:col-span-6">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <p
                className="tracking-[-0.02em] leading-[1.4] text-[var(--kc3-black)]/85"
                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
              >
                Die KC3 GmbH mit Sitz in Kenn ist eine deutschlandweit tätige
                Investment- und Bestandsgesellschaft für Wohn- und
                Gewerbeimmobilien. Sämtliche Objekte werden auf eigene Rechnung
                erworben, langfristig gehalten und vermietet.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <p
                className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/70"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                KC3 tritt weder als Dienstleister noch als Berater für Dritte
                auf. Investition, Erwerb und Vermietung erfolgen ausschließlich
                für das eigene Portfolio. Projektentwicklung ergänzt diesen Kern
                nachrangig und dient der Erweiterung des eigenen Bestands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
