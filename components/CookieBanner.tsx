"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kc3-cookie-ack";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Hinweis zu Cookies"
      className="fixed inset-x-0 bottom-0 z-50"
      style={{ padding: "clamp(12px, 2vw, 20px)" }}
    >
      <div
        className="mx-auto max-w-5xl bg-[var(--kc3-black)] text-[var(--kc3-ivory)] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        style={{ padding: "clamp(16px, 2vw, 24px)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div
            className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-ivory)]/85"
            style={{ fontSize: "clamp(0.9rem, 1vw, 0.98rem)" }}
          >
            Diese Website verwendet ausschließlich technisch notwendige
            Cookies. Es findet keine Analyse und kein Tracking statt. Details
            unter{" "}
            <a
              href="/datenschutz"
              className="underline underline-offset-4 hover:text-[var(--kc3-ivory)]"
            >
              Datenschutz
            </a>
            .
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="marker border border-white/30 hover:border-white/70 transition-colors shrink-0"
            style={{
              padding: "12px 20px",
              letterSpacing: "0.18em",
              fontSize: "0.72rem",
            }}
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
