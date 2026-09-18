"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company } from "@/lib/company";

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

  const line1 = "Wir entwickeln Immobilien";
  const line2 = "nicht für den Moment.";
  const line3 = "Sondern für ihren";
  const line4 = "langfristigen Wert.";

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
        <div className="col-span-12 md:col-span-2 mb-16 md:mb-0 flex flex-col justify-between gap-16 sticky md:top-32 self-start">
          <div className="marker text-[var(--kc3-muted)]">01 · Selbstverständnis</div>
          <div className="hidden md:block">
            <div className="marker text-[var(--kc3-muted)] mb-3">Kapitel</div>
            <a
              href="#leistungen"
              className="font-editorial font-normal leading-[1.05] text-[var(--kc3-black)]/70 hover:text-[var(--kc3-black)] transition-colors block"
              style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)" }}
            >
              Zu den
              <br />
              Leistungen →
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2
            className="font-medium tracking-[-0.055em] leading-[0.94]"
            style={{ fontSize: "clamp(2.6rem, 6.4vw, 7rem)" }}
          >
            <span className="block">{renderWords(line1)}</span>
            <span className="block">{renderWords(line2)}</span>
            <span className="block mt-6 md:mt-10">
              <span className="font-editorial font-normal">
                {renderWords(line3)}
              </span>
            </span>
            <span className="block">{renderWords(line4)}</span>
          </h2>

          <div className="mt-24 md:mt-40 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-16">
            <div className="col-span-12 md:col-span-5">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <p
                className="tracking-[-0.02em] leading-[1.4] text-[var(--kc3-black)]/85"
                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
              >
                Die KC3 GmbH mit Sitz in Kenn steht für nachhaltige
                Immobilieninvestitionen, professionelle Projektentwicklung und
                die Wertsteigerung bestehender Immobilien.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="hairline text-[var(--kc3-black)] mb-8" />
              <div className="marker text-[var(--kc3-muted)] mb-8">
                Grundsätze
              </div>
              <ul className="flex flex-col gap-8">
                {company.principles.map((p) => (
                  <li key={p.n} className="grid grid-cols-12 gap-4">
                    <span className="col-span-2 md:col-span-1 marker text-[var(--kc3-muted)] pt-1">
                      {p.n}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <div
                        className="font-medium tracking-[-0.02em] mb-1"
                        style={{ fontSize: "clamp(1.15rem, 1.4vw, 1.35rem)" }}
                      >
                        {p.title}
                      </div>
                      <div
                        className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-black)]/70"
                        style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
                      >
                        {p.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
