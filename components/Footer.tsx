import Link from "next/link";
import { company } from "@/lib/company";
import { landingPages } from "@/lib/seo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)] border-t border-white/10"
      style={{
        padding: "clamp(40px, 6vw, 56px) var(--page-padding) clamp(32px, 4vw, 40px)",
      }}
    >
      <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 items-start">
        <div className="col-span-12 md:col-span-4">
          <div className="inline-flex items-baseline gap-2 leading-none">
            <span
              className="font-medium tracking-[-0.05em]"
              style={{ fontSize: "clamp(1.6rem, 2vw, 1.9rem)" }}
            >
              {company.short}
            </span>
            <span
              className="marker"
              style={{
                color: "var(--kc3-navy)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
              }}
            >
              GmbH
            </span>
          </div>
          <div className="marker text-[var(--kc3-ivory)]/50 mt-3">
            {company.tagline}
          </div>
        </div>

        <div className="col-span-6 md:col-span-4">
          <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Sitz</div>
          <div
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(0.95rem, 1vw, 1rem)" }}
          >
            {company.name}
            <br />
            {company.address.street}
            <br />
            {company.address.zip} {company.address.city}
          </div>
        </div>

        <div className="col-span-6 md:col-span-4">
          <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Kontakt</div>
          <div
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(0.95rem, 1vw, 1rem)" }}
          >
            <a
              href={`mailto:${company.contact.email}`}
              className="hover:text-[var(--kc3-ivory)] block break-all"
            >
              {company.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-6">
        <div className="col-span-12 md:col-span-4">
          <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Ankauf</div>
          <p
            className="tracking-[-0.02em] leading-[1.5] text-[var(--kc3-ivory)]/70 max-w-xs"
            style={{ fontSize: "clamp(0.9rem, 0.95vw, 0.95rem)" }}
          >
            Direktankauf durch die KC3 GmbH auf eigene Rechnung. Deutschlandweit,
            ohne Vermittlung.
          </p>
        </div>
        <ul className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {landingPages.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="tracking-[-0.02em] text-[var(--kc3-ivory)]/80 hover:text-[var(--kc3-ivory)] transition-colors"
                style={{ fontSize: "clamp(0.95rem, 1vw, 1rem)" }}
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 md:mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
        <div className="marker text-[var(--kc3-ivory)]/60">
          © {year} {company.name}
        </div>
        <div className="flex gap-8">
          <a
            href="/impressum"
            className="marker text-[var(--kc3-ivory)]/60 hover:text-[var(--kc3-ivory)] transition-colors"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="marker text-[var(--kc3-ivory)]/60 hover:text-[var(--kc3-ivory)] transition-colors"
          >
            Datenschutz
          </a>
        </div>
        <div className="marker text-[var(--kc3-ivory)]/40">
          Deutschlandweit
        </div>
      </div>
    </footer>
  );
}
