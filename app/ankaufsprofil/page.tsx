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

const page = landingPages.find((p) => p.path === "/ankaufsprofil")!;

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
    question: "Was kauft die KC3 GmbH?",
    answer:
      "Wohn- und Gewerbeimmobilien sowie ausgewählte Grundstücke, die entwickelt und in den eigenen Bestand überführt werden. Der Ankauf erfolgt ausschließlich für das eigene Portfolio.",
  },
  {
    question: "Wo wird angekauft?",
    answer:
      "Deutschlandweit. Sitz der KC3 GmbH ist in Kenn.",
  },
  {
    question: "Wie finanziert KC3 die Ankäufe?",
    answer:
      "Ausschließlich mit Eigenkapital. Es gibt keine externen Investoren und keine Fondsstrukturen. KC3 ist eigentümergeführt.",
  },
  {
    question: "Wie sieht der Investitionshorizont aus?",
    answer:
      "Die KC3 GmbH ist als Bestandshalter aufgestellt. Objekte werden dauerhaft im eigenen Portfolio gehalten und vermietet, nicht kurzfristig weiterveräußert.",
  },
  {
    question: "Wie können Objekte angeboten werden?",
    answer:
      "Objektangebote werden per E-Mail an die KC3 GmbH gerichtet. Adresse, Nutzung, Größe und, sofern vorhanden, Mietsituation reichen für die Erstprüfung.",
  },
];

export default function AnkaufsprofilPage() {
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
        lead="Das Ankaufsprofil der KC3 GmbH bündelt, welche Objekte für das eigene Portfolio in Frage kommen. Ankauf, Bestand und Vermietung erfolgen ausschließlich auf eigene Rechnung."
      >
        <ContentSection
          eyebrow="01 · Rolle"
          title="Eigentümergeführte Investment- und Bestandsgesellschaft."
          intro="KC3 ist Käufer und Eigentümer, nicht Berater oder Vermittler. Die Gesellschaft agiert für das eigene Portfolio, ohne externe Investoren."
        >
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/80 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)" }}
          >
            Die KC3 GmbH kauft, hält und vermietet Wohn- und Gewerbeimmobilien
            deutschlandweit. Projektentwicklung ergänzt den Kern nachrangig und dient
            der Erweiterung des eigenen Bestands.
          </p>
        </ContentSection>

        <ContentSection
          eyebrow="02 · Objektarten"
          title="Was angekauft wird."
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
          eyebrow="03 · Region"
          title="Deutschlandweit."
          intro="Der Sitz der KC3 GmbH ist in Kenn. Ankäufe erfolgen bundesweit, ohne feste regionale Vorauswahl."
        >
          <BulletList
            items={[
              "Sitz der Gesellschaft in Kenn",
              "Ankauf und Bestandshaltung deutschlandweit",
              "Keine Fondsstruktur, keine externen Investoren",
              "Alle Entscheidungen aus Eigentümerhand",
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="04 · Strategie"
          title="Ankauf → Bestand → Vermietung."
        >
          <OrderedSteps
            items={[
              {
                title: "Ankauf",
                body: "Ausschließlich auf eigene Rechnung, ohne externe Investoren und ohne Vermittlungskette. Ansprechpartner ist die KC3 GmbH selbst.",
              },
              {
                title: "Bestandshaltung",
                body: "Die Objekte verbleiben dauerhaft im eigenen Portfolio. Kaufmännische und technische Steuerung erfolgen aus Eigentümerhand.",
              },
              {
                title: "Vermietung",
                body: "Wohn- und Gewerbeflächen werden langfristig an private und gewerbliche Nutzer vermietet.",
              },
              {
                title: "Ergänzende Projektentwicklung",
                body: "Ausgewählte eigene Grundstücke werden entwickelt und in den eigenen Bestand überführt.",
              },
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="05 · Häufige Fragen"
          title="Fragen zum Ankaufsprofil."
        >
          <FaqList items={faq} />
        </ContentSection>
      </LandingShell>
    </>
  );
}
