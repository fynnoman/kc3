import * as React from "react";

export function ContentSection({
  eyebrow,
  title,
  intro,
  children,
  tone = "ivory",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  tone?: "ivory" | "black";
}) {
  const isDark = tone === "black";
  return (
    <section
      className={
        isDark
          ? "relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)] border-t border-white/10"
          : "relative bg-[var(--kc3-ivory)] text-[var(--kc3-black)] border-t border-[color:var(--kc3-border)]"
      }
      style={{ padding: "clamp(56px, 8vw, 112px) var(--page-padding)" }}
    >
      <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 items-start">
        <div className="col-span-12 md:col-span-4">
          {eyebrow && (
            <div
              className={
                "marker mb-4 " +
                (isDark ? "text-[var(--kc3-ivory)]/60" : "text-[var(--kc3-muted)]")
              }
            >
              {eyebrow}
            </div>
          )}
          <h2
            className="font-medium tracking-[-0.04em] md:tracking-[-0.05em] leading-[1.02] md:leading-[0.96]"
            style={{ fontSize: "clamp(1.7rem, 4.6vw, 3.4rem)" }}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={
                "mt-6 tracking-[-0.02em] leading-[1.5] max-w-md " +
                (isDark
                  ? "text-[var(--kc3-ivory)]/75"
                  : "text-[var(--kc3-black)]/75")
              }
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.15rem)" }}
            >
              {intro}
            </p>
          )}
        </div>
        <div className="col-span-12 md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export function OrderedSteps({
  items,
  tone = "ivory",
}: {
  items: { title: string; body: string }[];
  tone?: "ivory" | "black";
}) {
  const isDark = tone === "black";
  return (
    <ol className="flex flex-col">
      {items.map((it, i) => (
        <li
          key={it.title}
          className={
            "grid grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 " +
            (isDark ? "border-b border-white/10" : "border-b border-[color:var(--kc3-border)]")
          }
        >
          <div className="col-span-2 md:col-span-1">
            <span
              className={
                "marker " +
                (isDark ? "text-[var(--kc3-ivory)]/50" : "text-[var(--kc3-muted)]")
              }
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="col-span-10 md:col-span-11">
            <div
              className="font-medium tracking-[-0.02em] mb-2"
              style={{ fontSize: "clamp(1.1rem, 1.35vw, 1.3rem)" }}
            >
              {it.title}
            </div>
            <p
              className={
                "tracking-[-0.02em] leading-[1.55] max-w-2xl " +
                (isDark
                  ? "text-[var(--kc3-ivory)]/70"
                  : "text-[var(--kc3-black)]/70")
              }
              style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.05rem)" }}
            >
              {it.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BulletList({
  items,
  tone = "ivory",
}: {
  items: string[];
  tone?: "ivory" | "black";
}) {
  const isDark = tone === "black";
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {items.map((it, i) => (
        <li
          key={i}
          className={
            "flex items-baseline gap-3 tracking-[-0.02em] leading-[1.5] py-3 " +
            (isDark
              ? "border-b border-white/10 text-[var(--kc3-ivory)]/85"
              : "border-b border-[color:var(--kc3-border)] text-[var(--kc3-black)]/85")
          }
          style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
        >
          <span
            aria-hidden
            className={
              "marker " +
              (isDark ? "text-[var(--kc3-ivory)]/40" : "text-[var(--kc3-muted)]")
            }
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({
  items,
  tone = "ivory",
}: {
  items: { question: string; answer: string }[];
  tone?: "ivory" | "black";
}) {
  const isDark = tone === "black";
  return (
    <dl className="flex flex-col">
      {items.map((it) => (
        <div
          key={it.question}
          className={
            "py-6 md:py-8 " +
            (isDark ? "border-b border-white/10" : "border-b border-[color:var(--kc3-border)]")
          }
        >
          <dt
            className="font-medium tracking-[-0.02em] mb-3"
            style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)" }}
          >
            {it.question}
          </dt>
          <dd
            className={
              "tracking-[-0.02em] leading-[1.6] max-w-2xl " +
              (isDark
                ? "text-[var(--kc3-ivory)]/70"
                : "text-[var(--kc3-black)]/70")
            }
            style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.05rem)" }}
          >
            {it.answer}
          </dd>
        </div>
      ))}
    </dl>
  );
}
