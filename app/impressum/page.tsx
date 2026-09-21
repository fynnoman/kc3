import { company } from "@/lib/company";

export const metadata = {
  title: `Impressum — ${company.name}`,
};

export default function ImpressumPage() {
  return (
    <main
      className="min-h-[100svh] bg-[var(--kc3-ivory)] text-[var(--kc3-black)]"
      style={{ padding: "clamp(140px, 14vw, 200px) var(--page-padding) 120px" }}
    >
      <div className="max-w-3xl">
        <div className="marker text-[var(--kc3-muted)] mb-8">Rechtliches</div>
        <h1
          className="font-medium tracking-[-0.05em] leading-[0.94] mb-16"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.6rem)" }}
        >
          Impressum
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[1.05rem] leading-[1.6]">
          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">Anbieter</div>
            <p>
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>
          </section>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">
              Vertretungsberechtigt
            </div>
            <p>{company.management.name}</p>
          </section>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">Kontakt</div>
            <p>E-Mail: {company.contact.email}</p>
          </section>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">Register</div>
            <p>
              {company.legal.court}
              <br />
              {company.legal.hrb}
              <br />
              USt-IdNr.: {company.legal.vatId}
            </p>
          </section>
        </div>

        <a
          href="/"
          className="marker text-[var(--kc3-black)]/70 hover:text-[var(--kc3-black)] mt-20 inline-block"
        >
          ← Zurück
        </a>
      </div>
    </main>
  );
}
