"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expertise } from "@/lib/company";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-panel").forEach((panel) => {
        const img = panel.querySelector<HTMLElement>(".exp-image");
        const lines = panel.querySelectorAll<HTMLElement>(".exp-line > span");
        const body = panel.querySelector<HTMLElement>(".exp-body");
        const meta = panel.querySelectorAll<HTMLElement>(".exp-meta");
        const list = panel.querySelectorAll<HTMLElement>(".exp-service");

        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "inset(20% 30% 20% 30%)", scale: 1.15 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 75%",
                end: "top 20%",
                scrub: 1,
              },
            }
          );
        }

        gsap.fromTo(
          lines,
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
            },
          }
        );

        if (body) {
          gsap.fromTo(
            body,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 60%",
              },
            }
          );
        }

        if (list.length) {
          gsap.fromTo(
            list,
            { opacity: 0, x: -16 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: panel,
                start: "top 55%",
              },
            }
          );
        }

        if (meta.length) {
          gsap.fromTo(
            meta,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: panel,
                start: "top 55%",
              },
            }
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leistungen"
      ref={root}
      className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)]"
    >
      <div
        className="border-b border-white/10"
        style={{ padding: "clamp(80px, 10vw, 160px) var(--page-padding) 40px" }}
      >
        <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-12 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="marker text-[var(--kc3-ivory)]/60 mb-4">
              02 · Leistungen
            </div>
            <h3
              className="font-medium tracking-[-0.05em] leading-[0.94] max-w-[16ch]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4.4rem)" }}
            >
              Zwei Geschäftsbereiche.{" "}
              <span className="font-editorial font-normal text-[var(--kc3-ivory)]/75">
                Ein Anspruch.
              </span>
            </h3>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <div className="hairline text-[var(--kc3-ivory)]" />
            <p
              className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-ivory)]/80 max-w-sm"
              style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.05rem)" }}
            >
              Die KC3 GmbH bündelt Ankauf, Entwicklung und Verwaltung von
              Immobilien unter einem Dach. Alle Entscheidungen erfolgen aus
              Eigentümerperspektive.
            </p>
            <div className="marker text-[var(--kc3-ivory)]/50">
              Ankauf · Entwicklung · Bestand
            </div>
          </div>
        </div>
      </div>

      {expertise.map((item) => (
        <article
          key={item.index}
          className="exp-panel relative border-b border-white/10 overflow-hidden"
        >
          <div className="grid-lines" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <div
            className="relative grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 md:gap-y-16 items-stretch md:min-h-[100svh]"
            style={{ padding: "clamp(56px, 8vw, 120px) var(--page-padding)" }}
          >
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col justify-between gap-10 md:gap-14">
              <div className="flex items-start justify-between exp-meta">
                <div className="marker text-[var(--kc3-ivory)]/50">
                  {item.index} / {String(expertise.length).padStart(2, "0")}
                </div>
                <div className="marker text-[var(--kc3-ivory)]/40">
                  {item.slug === "immobilien" ? "Bestand" : "Entwicklung"}
                </div>
              </div>

              <h2
                className="font-medium tracking-[-0.05em] md:tracking-[-0.06em] leading-[0.92] md:leading-[0.88]"
                style={{ fontSize: "clamp(2.6rem, 9vw, 8.4rem)" }}
              >
                <span className="reveal-line exp-line">
                  <span>{item.title}</span>
                </span>
              </h2>

              <div className="flex flex-col gap-10 max-w-xl">
                <p
                  className="exp-body tracking-[-0.02em] leading-[1.5] text-[var(--kc3-ivory)]/85"
                  style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)" }}
                >
                  {item.intro}
                </p>

                <div>
                  <div className="hairline text-[var(--kc3-ivory)] mb-6 exp-meta" />
                  <div className="marker text-[var(--kc3-ivory)]/60 mb-5 exp-meta">
                    Leistungen im Detail
                  </div>
                  <ul className="flex flex-col">
                    {item.services.map((s, i) => (
                      <li
                        key={i}
                        className="exp-service flex items-baseline gap-4 py-3 border-b border-white/10"
                      >
                        <span className="marker text-[var(--kc3-ivory)]/40 w-8 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="tracking-[-0.02em] leading-[1.45]"
                          style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
                        >
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={item.cta.href}
                  className="link-arrow inline-flex items-center gap-3 font-medium tracking-[-0.02em] leading-none border-b border-[var(--kc3-ivory)]/40 hover:border-[var(--kc3-ivory)] pb-3 self-start exp-meta"
                  style={{ fontSize: "clamp(1.05rem, 1.35vw, 1.35rem)" }}
                >
                  {item.cta.label}
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 order-1 md:order-2 md:pl-8 flex flex-col gap-6 md:gap-8">
              <div className="relative w-full flex-1 min-h-[44vh] md:min-h-[62vh]">
                <div
                  className="exp-image absolute inset-0 will-change-transform"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(0.15) contrast(1) brightness(1.08)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17,19,18,0) 0%, rgba(17,19,18,0.2) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 marker text-[var(--kc3-ivory)]/80 exp-meta">
                  {item.title}
                </div>
                <div className="absolute bottom-6 right-6 marker text-[var(--kc3-ivory)]/60 exp-meta">
                  KC3 · {item.index}
                </div>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 exp-meta">
                {item.detail.map((d) => (
                  <div key={d.label} className="flex flex-col gap-2">
                    <dt className="marker text-[var(--kc3-ivory)]/50">
                      {d.label}
                    </dt>
                    <dd
                      className="tracking-[-0.02em] leading-[1.4]"
                      style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
                    >
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
