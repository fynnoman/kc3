import { company } from "@/lib/company";

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)]"
      style={{
        padding: "clamp(48px, 6vw, 80px) var(--page-padding)",
      }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="marker text-[var(--kc3-ivory)]/60 mb-3">Kontakt</div>
          <a
            href={`mailto:${company.contact.email}`}
            className="font-medium tracking-[-0.04em] leading-[1] border-b border-[var(--kc3-ivory)]/30 hover:border-[var(--kc3-navy)] hover:text-[var(--kc3-navy)] pb-2 transition-colors inline-block break-all"
            style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.6rem)" }}
          >
            {company.contact.email}
          </a>
        </div>
        <div className="marker text-[var(--kc3-ivory)]/50">
          {company.name} · {company.address.city}
        </div>
      </div>
    </section>
  );
}
