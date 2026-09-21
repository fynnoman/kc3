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

const page = landingPages.find((p) => p.path === "/grundstueck-verkaufen")!;

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
    question: "Kauft die KC3 GmbH Grundstücke direkt an?",
    answer:
      "Ja. Die KC3 GmbH kauft ausgewählte Grundstücke auf eigene Rechnung, entwickelt sie weiter und überführt die entstehenden Objekte in den eigenen Bestand.",
  },
  {
    question: "Welche Grundstücksarten sind relevant?",
    answer:
      "Wohn- und Gewerbegrundstücke sowie Bestandsobjekte mit Entwicklungspotenzial. Der Fokus liegt auf Grundstücken, deren Bebauung sich langfristig im eigenen Bestand halten lässt.",
  },
  {
    question: "Wo kauft KC3 Grundstücke an?",
    answer:
      "Deutschlandweit. Sitz der KC3 GmbH ist in Kenn.",
  },
  {
    question: "Ist KC3 ein Grundstücksmakler?",
    answer:
      "Nein. KC3 kauft ausschließlich für das eigene Portfolio. Es findet keine Vermittlung, kein Weiterverkauf und keine Beratung für Dritte statt.",
  },
  {
    question: "Muss Baurecht vorhanden sein?",
    answer:
      "Nicht zwingend. Auch Grundstücke ohne fertigen Bebauungsstand können relevant sein, sofern eine spätere Nutzung im Sinne einer langfristigen Bestandshaltung möglich ist.",
  },
];

export default function GrundstueckVerkaufenPage() {
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
        lead="KC3 kauft ausgewählte Grundstücke deutschlandweit auf eigene Rechnung. Die Entwicklung dient der Überführung in den eigenen Bestand, nicht dem Weiterverkauf."
      >
        <ContentSection
          eyebrow="01 · Rolle von KC3"
          title="Bauherr auf eigene Rechnung, nicht Zwischenhändler."
          intro="Grundstücke werden nicht zum Wiederverkauf angekauft, sondern mit dem Ziel, sie in einen langfristig gehaltenen Bestand zu überführen."
        >
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/80 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)" }}
          >
            Die Projektentwicklung ergänzt den Kern des Geschäftsmodells der KC3 GmbH.
            Sie ist bewusst nachrangig und dient dazu, das eigene Wohn- und
            Gewerbeportfolio zu erweitern.
          </p>
        </ContentSection>

        <ContentSection
          eyebrow="02 · Was KC3 kauft"
          title="Relevante Grundstücksarten."
        >
          <BulletList
            items={[
              "Wohngrundstücke für Mehrfamilienhäuser",
              "Gewerbegrundstücke für Büro, Handel und Logistik",
              "Gemischt nutzbare Areale (Wohnen und Gewerbe)",
              "Entwicklungsgrundstücke mit Bestandsobjekten",
              "Grundstücke mit Nachverdichtungspotenzial",
              "Bestandsobjekte mit Entwicklungspotenzial",
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="03 · Ablauf"
          title="So läuft der Grundstücksankauf."
        >
          <OrderedSteps
            items={[
              {
                title: "Grundstück anbieten",
                body: "Lage, Fläche, bestehende Nutzung und, falls vorhanden, planungsrechtliche Situation reichen für eine erste Einschätzung.",
              },
              {
                title: "Prüfung durch KC3",
                body: "Standort und Entwicklungsperspektive werden aus Eigentümerperspektive bewertet. Die Rückmeldung erfolgt direkt durch die KC3 GmbH.",
              },
              {
                title: "Ankauf und Überführung in den Bestand",
                body: "Bei Passung erfolgt der Ankauf auf eigene Rechnung. Die entstehende Immobilie wird anschließend im eigenen Bestand vermietet.",
              },
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="04 · Häufige Fragen"
          title="Fragen zum Verkauf eines Grundstücks."
        >
          <FaqList items={faq} />
        </ContentSection>
      </LandingShell>
    </>
  );
}
