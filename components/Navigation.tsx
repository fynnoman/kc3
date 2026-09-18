"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Unternehmen", href: "#unternehmen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "bg-[rgba(242,240,234,0.86)] backdrop-blur-md border-b border-[color:var(--kc3-border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "22px var(--page-padding)" }}
        >
          <a
            href="#top"
            className={`marker leading-none transition-colors ${
              scrolled || open ? "text-[var(--kc3-black)]" : "text-[var(--kc3-ivory)]"
            }`}
          >
            KC3
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`marker transition-colors ${
                  scrolled
                    ? "text-[var(--kc3-black)]/70 hover:text-[var(--kc3-black)]"
                    : "text-[var(--kc3-ivory)]/70 hover:text-[var(--kc3-ivory)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`marker flex items-center gap-3 md:hidden transition-colors ${
              scrolled || open ? "text-[var(--kc3-black)]" : "text-[var(--kc3-ivory)]"
            }`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            <span className="relative w-6 h-[2px] bg-current" />
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[var(--kc3-black)] text-[var(--kc3-ivory)] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="relative h-full flex flex-col justify-between"
          style={{ padding: "120px var(--page-padding) 48px" }}
        >
          <div className="grid-lines" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <ul className="relative z-10 flex flex-col gap-6 md:gap-4">
            {[...links].map((l, i) => (
              <li key={l.href} className="border-b border-white/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-6 py-6 group"
                >
                  <span className="marker text-[var(--kc3-muted)] w-8">
                    0{i + 1}
                  </span>
                  <span
                    className="font-medium tracking-[-0.04em] leading-none transition-transform duration-700 group-hover:-translate-x-1"
                    style={{ fontSize: "clamp(2.4rem, 8vw, 6.4rem)" }}
                  >
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="marker text-[var(--kc3-muted)]">
              KC3 GmbH · Kenn, Deutschland
            </div>
            <div className="marker text-[var(--kc3-muted)]">
              Immobilien · Entwicklung
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
