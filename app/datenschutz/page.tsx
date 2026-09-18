import { company } from "@/lib/company";

export const metadata = {
  title: `Datenschutz — ${company.name}`,
};

export default function DatenschutzPage() {
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
          Datenschutz
        </h1>

        <div className="text-[1.05rem] leading-[1.65] space-y-8">
          <p>
            Der Schutz personenbezogener Daten ist der {company.name} ein
            wichtiges Anliegen. Diese Website erhebt und verarbeitet
            personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
            Bestimmungen (DSGVO, BDSG).
          </p>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">
              Verantwortlich
            </div>
            <p>
              {company.name}
              <br />
              {company.address.street}, {company.address.zip}{" "}
              {company.address.city}
              <br />
              {company.contact.email}
            </p>
          </section>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">
              Datenerhebung
            </div>
            <p>
              Beim Besuch dieser Website werden technische Zugriffsdaten in
              Serverlogfiles gespeichert. Eine Zusammenführung mit anderen
              Datenquellen findet nicht statt.
            </p>
          </section>

          <section>
            <div className="marker text-[var(--kc3-muted)] mb-2">
              Ihre Rechte
            </div>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Widerspruch und
              Datenübertragbarkeit. Anfragen richten Sie bitte an{" "}
              {company.contact.email}.
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
