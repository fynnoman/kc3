import Link from "next/link";
import Footer from "@/components/Footer";
import { company, mapsUrl } from "@/lib/company";
import { landingPages, type LandingPage } from "@/lib/seo";

type Props = {
  page: LandingPage;
  lead: string;
  children: React.ReactNode;
  activePath: string;
};

export default function LandingShell({ page, lead, children, activePath }: Props) {
  const related = landingPages.filter((p) => p.path !== activePath);

  return (
    <main>
      <section
        className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)] overflow-hidden"
        style={{
          padding:
            "clamp(120px, 16vw, 200px) var(--page-padding) clamp(56px, 8vw, 96px)",
        }}
      >
        <div className="grid-lines" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <nav
          aria-label="Breadcrumb"
          className="relative marker text-[var(--kc3-ivory)]/50 mb-8 md:mb-12 flex flex-wrap items-center gap-2"
        >
          <Link href="/" className="hover:text-[var(--kc3-ivory)] transition-colors">
            KC3
          </Link>
          <span aria-hidden>·</span>
          <span className="text-[var(--kc3-ivory)]/80">{page.breadcrumbLabel}</span>
        </nav>

        <div className="relative grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10 items-end">
          <div className="col-span-12 md:col-span-9">
            <div className="marker text-[var(--kc3-ivory)]/60 mb-6">
              Ankauf · Deutschlandweit
            </div>
            <h1
              className="font-medium tracking-[-0.045em] md:tracking-[-0.055em] leading-[1] md:leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 7vw, 6.4rem)" }}
            >
              {page.h1}
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="hairline text-[var(--kc3-ivory)] mb-6" />
            <p
              className="tracking-[-0.01em] leading-[1.55] text-[var(--kc3-ivory)]/80"
              style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.05rem)" }}
            >
              {lead}
            </p>
          </div>
        </div>
      </section>

      {children}

      <section
        className="relative bg-[var(--kc3-black)] text-[var(--kc3-ivory)] overflow-hidden"
        style={{ padding: "clamp(64px, 8vw, 112px) var(--page-padding)" }}
      >
        <div className="grid-lines" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="relative grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <div className="marker text-[var(--kc3-ivory)]/60 mb-6">
              Objekt anbieten
            </div>
            <h2
              className="font-medium tracking-[-0.04em] md:tracking-[-0.05em] leading-[1] md:leading-[0.94]"
              style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
            >
              Direkter Kontakt zum Käufer.
            </h2>
            <p
              className="mt-6 tracking-[-0.02em] leading-[1.5] text-[var(--kc3-ivory)]/80 max-w-xl"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
            >
              Objekte werden ausschließlich per E-Mail an die KC3 GmbH herangetragen.
              Unterlagen und Eckdaten können direkt an die unten stehende Adresse
              gesendet werden.
            </p>
            <a
              href={`mailto:${company.contact.email}?subject=${encodeURIComponent(
                `${page.title} · Objektangebot`
              )}`}
              className="mt-10 inline-block font-medium tracking-[-0.04em] leading-[1] break-all border-b border-[var(--kc3-ivory)]/30 hover:border-[var(--kc3-navy)] hover:text-[var(--kc3-navy)] pb-4 md:pb-6 transition-colors"
              style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.6rem)" }}
            >
              {company.contact.email}
            </a>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-8">
            <div>
              <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Sitz</div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[-0.02em] leading-[1.55] block hover:text-[var(--kc3-navy)] transition-colors"
                style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
              >
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </a>
            </div>
            <div>
              <div className="marker text-[var(--kc3-ivory)]/50 mb-3">Rolle</div>
              <p
                className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-ivory)]/80"
                style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
              >
                Käufer und Bestandshalter auf eigene Rechnung. Kein Makler, keine
                Vermittlung.
              </p>
            </div>
          </div>
        </div>

        <div className="relative hairline text-[var(--kc3-ivory)] mt-16 md:mt-24" />

        <div className="relative mt-10 md:mt-14 grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <div className="marker text-[var(--kc3-ivory)]/50">Weitere Ankaufseiten</div>
          </div>
          <ul className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {related.map((p) => (
              <li key={p.path}>
                <Link
                  href={p.path}
                  className="group flex items-baseline justify-between gap-4 py-3 border-b border-white/10 tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
                >
                  <span className="text-[var(--kc3-ivory)]/85 group-hover:text-[var(--kc3-ivory)] transition-colors">
                    {p.title}
                  </span>
                  <span
                    aria-hidden
                    className="marker text-[var(--kc3-ivory)]/40 group-hover:text-[var(--kc3-ivory)]/70 transition-colors"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
