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

  const headingPart1 = "Immobilieninvestitionen in Wohn- und Gewerbeimmobilien";
  const headingPart2 =
    "sowie die Projektentwicklung von Neubau- und Renovierungsprojekten.";

  const renderWords = (text: string) =>
    text.split(" ").map((w, i) => (
      <span key={i} className="intro-word inline-block mr-[0.2em]">
        {w}
      </span>
    ));

  return (
    <section
      id="selbstverstaendnis"
      ref={root}
      className="relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)]"
      style={{ padding: "var(--section-space) var(--page-padding)" }}
    >
      <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)]">
        <div className="col-span-12 md:col-span-2 mb-8 md:mb-0 flex flex-col justify-between gap-16 md:sticky md:top-32 self-start">
          <div className="marker text-[var(--kc3-muted)]">01 · Selbstverständnis</div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2
            className="font-medium tracking-[-0.035em] md:tracking-[-0.045em] leading-[1.05] md:leading-[1]"
            style={{ fontSize: "clamp(1.75rem, 4.8vw, 4.6rem)" }}
          >
            <span className="block">{renderWords(headingPart1)}</span>
            <span className="block font-light mt-6 md:mt-10">
              {renderWords(headingPart2)}
            </span>
          </h2>

          <div className="mt-14 md:mt-40 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-12 md:gap-y-16">
            <div className="col-span-12 md:col-span-6">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <p
                className="tracking-[-0.02em] leading-[1.4] text-[var(--kc3-black)]/85"
                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
              >
                Die KC3 GmbH ist auf Immobilieninvestitionen,
                Projektentwicklung und die langfristige Bestandshaltung
                von Wohn- und Gewerbeimmobilien spezialisiert.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <p
                className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/70"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                Satzungszweck sind Immobilieninvestitionen, insbesondere
                Erwerb, Verwaltung und Veräußerung von Immobilien und
                sonstigem Anlagevermögen. Eingetragen beim Amtsgericht
                Wittlich unter HRB 47043.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
