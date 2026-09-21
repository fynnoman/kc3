import type { Metadata } from "next";
import LandingShell from "@/components/LandingShell";
import JsonLd from "@/components/JsonLd";
import {
  BulletList,
  ContentSection,
  FaqList,
  OrderedSteps,
} from "@/components/LandingSections";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  landingPages,
  serviceJsonLd,
} from "@/lib/seo";

const page = landingPages.find((p) => p.path === "/immobilie-verkaufen")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.path },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl(page.path),
    type: "website",
    locale: "de_DE",
  },
};

const faq = [
  {
    question: "Kauft die KC3 GmbH Immobilien selbst an?",
    answer:
      "Ja. Die KC3 GmbH kauft Wohn- und Gewerbeimmobilien auf eigene Rechnung und hält sie langfristig im eigenen Bestand. Es handelt sich nicht um eine Vermittlung, sondern um einen Direktankauf durch die Gesellschaft.",
  },
  {
    question: "Ist KC3 ein Makler?",
    answer:
      "Nein. KC3 tritt weder als Makler noch als Berater oder Dienstleister für Dritte auf. Objekte werden ausschließlich für das eigene Portfolio erworben.",
  },
  {
    question: "In welcher Region kauft KC3 Immobilien an?",
    answer:
      "Die KC3 GmbH ist deutschlandweit tätig. Der Sitz der Gesellschaft ist in Kenn.",
  },
  {
    question: "Welche Objektarten werden angekauft?",
    answer:
      "Wohn- und Gewerbeimmobilien. Ergänzend werden ausgewählte Grundstücke erworben, um sie zu entwickeln und in den eigenen Bestand zu überführen.",
  },
  {
    question: "Wie kann ich der KC3 GmbH ein Objekt anbieten?",
    answer:
      "Objektangebote werden per E-Mail an die KC3 GmbH gerichtet. Eckdaten und Unterlagen können direkt an die auf dieser Seite genannte Adresse gesendet werden.",
  },
];

export default function ImmobilieVerkaufenPage() {
  const structured = [
    breadcrumbJsonLd([
      { name: "Start", path: "/" },
      { name: page.breadcrumbLabel, path: page.path },
    ]),
    serviceJsonLd(page),
    faqJsonLd(faq),
  ];

  return (
    <>
      <JsonLd data={structured} />
      <LandingShell
        page={page}
        activePath={page.path}
        lead="Die KC3 GmbH ist Käufer, nicht Vermittler. Wohn- und Gewerbeimmobilien werden deutschlandweit auf eigene Rechnung erworben und dauerhaft im eigenen Bestand gehalten."
      >
        <ContentSection
          eyebrow="01 · Positionierung"
          title="Direktankauf statt Vermittlung."
          intro="Der Verkauf einer Immobilie an KC3 verläuft ohne Zwischenhändler. Die Gesellschaft handelt als Eigentümer und Bestandshalter aus einer Hand."
        >
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/80 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)" }}
          >
            KC3 kauft Immobilien für das eigene Portfolio, nicht für Kundenaufträge.
            Es gibt keine Maklerprovision, keine Vermittlungskette und keine Weitergabe
            des Objekts an Dritte. Ansprechpartner ist die KC3 GmbH selbst.
          </p>
          <div className="mt-10">
            <div className="marker text-[var(--kc3-muted)] mb-4">
              Was das für Eigentümer bedeutet
            </div>
            <BulletList
              items={[
                "Direkter Kontakt zum Käufer",
                "Kein Maklervertrag, keine Provision",
                "Verbindlicher Ansprechpartner in der KC3 GmbH",
                "Ankauf auf eigene Rechnung, keine Weitervermittlung",
              ]}
            />
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="02 · Was KC3 kauft"
          title="Wohn- und Gewerbeimmobilien für den eigenen Bestand."
          intro="Der Fokus liegt auf Objekten, die langfristig gehalten und vermietet werden können. Ergänzend werden ausgewählte Grundstücke angekauft."
        >
          <BulletList
            items={[
              "Mehrfamilienhäuser und Zinshäuser",
              "Wohn- und Geschäftshäuser",
              "Gewerbeimmobilien (Büro, Handel, Logistik, Mischnutzung)",
              "Vermietete Wohn- und Gewerbeobjekte",
              "Ausgewählte Grundstücke für die eigene Entwicklung",
              "Bestandsobjekte mit Entwicklungspotenzial",
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="03 · Ablauf"
          title="So läuft der Direktankauf."
          intro="Der Prozess bleibt schlank. Kein Bieterverfahren, keine Vermittlungsstufe, ein Ansprechpartner."
        >
          <OrderedSteps
            items={[
              {
                title: "Objekt anbieten",
                body: "Eckdaten des Objekts werden per E-Mail an die KC3 GmbH übermittelt. Adresse, Nutzung, Größe und, sofern vorhanden, Mietsituation reichen für eine erste Einschätzung.",
              },
              {
                title: "Prüfung durch KC3",
                body: "Die KC3 GmbH prüft das Objekt aus Eigentümerperspektive und meldet sich direkt zurück. Es entstehen keine Kosten für die Verkäuferseite.",
              },
              {
                title: "Direktankauf",
                body: "Bei Passung erfolgt der Ankauf auf eigene Rechnung der KC3 GmbH. Die Immobilie geht in den langfristigen Bestand über und wird von KC3 als Eigentümer weitergeführt.",
              },
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="04 · Häufige Fragen"
          title="Fragen zum Direktverkauf an KC3."
        >
          <FaqList items={faq} />
        </ContentSection>
      </LandingShell>
    </>
  );
}
