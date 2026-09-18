import { company } from "@/lib/company";

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
        <div className="col-span-12 md:col-span-3">
          <div
            className="font-medium tracking-[-0.05em] leading-none"
            style={{ fontSize: "clamp(1.6rem, 2vw, 1.9rem)" }}
          >
            {company.short}
          </div>
          <div className="marker text-[var(--kc3-ivory)]/50 mt-3">
            {company.tagline}
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
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

        <div className="col-span-6 md:col-span-3">
          <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Direkt</div>
          <div
            className="tracking-[-0.02em] leading-[1.5]"
            style={{ fontSize: "clamp(0.95rem, 1vw, 1rem)" }}
          >
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="hover:text-[var(--kc3-ivory)] block"
            >
              {company.contact.phone}
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="hover:text-[var(--kc3-ivory)] block"
            >
              {company.contact.email}
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="marker text-[var(--kc3-ivory)]/50 mb-3">
            Navigation
          </div>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Leistungen", href: "#leistungen" },
              { label: "Projekte", href: "#projekte" },
              { label: "Unternehmen", href: "#unternehmen" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="tracking-[-0.02em] text-[var(--kc3-ivory)]/80 hover:text-[var(--kc3-ivory)] transition-colors"
                  style={{ fontSize: "clamp(0.95rem, 1vw, 1rem)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
          {company.address.region}
        </div>
      </div>
    </footer>
  );
}
