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

const page = landingPages.find((p) => p.path === "/mehrfamilienhaus-verkaufen")!;

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
    question: "Kauft KC3 auch vermietete Mehrfamilienhäuser?",
    answer:
      "Ja. Vermietete Wohnobjekte passen ausdrücklich zum Modell der KC3 GmbH, da Objekte für den langfristigen eigenen Bestand angekauft und weitervermietet werden.",
  },
  {
    question: "Welche Größenordnung ist relevant?",
    answer:
      "Angekauft werden Mehrfamilienhäuser unterschiedlicher Größenordnungen. Eine erste Einordnung erfolgt nach Übermittlung der Eckdaten.",
  },
  {
    question: "Wo kauft KC3 Mehrfamilienhäuser an?",
    answer:
      "Deutschlandweit. Der Sitz der KC3 GmbH ist in Kenn, das Tätigkeitsgebiet umfasst das gesamte Bundesgebiet.",
  },
  {
    question: "Wird ein Makler eingeschaltet?",
    answer:
      "Nein. KC3 tritt als Käufer auf, nicht als Makler. Der Kontakt läuft direkt zwischen Eigentümer und der KC3 GmbH.",
  },
  {
    question: "Was passiert mit dem Objekt nach dem Ankauf?",
    answer:
      "Das Mehrfamilienhaus wird in den eigenen Bestand der KC3 GmbH überführt und langfristig vermietet. Es gibt keine geplante Weiterveräußerung.",
  },
];

export default function MehrfamilienhausVerkaufenPage() {
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
        lead="KC3 kauft Mehrfamilienhäuser deutschlandweit auf eigene Rechnung, führt sie in den eigenen Bestand über und vermietet sie langfristig. Kein Makler, keine Weitervermittlung."
      >
        <ContentSection
          eyebrow="01 · Bestandshalter statt Vermittler"
          title="Verkauf direkt an einen langfristigen Eigentümer."
          intro="Die KC3 GmbH ist Käufer und Bestandshalter in Personalunion. Nach dem Ankauf verbleibt das Objekt dauerhaft in eigener Verantwortung."
        >
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/80 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)" }}
          >
            Der Verkauf an KC3 richtet sich an Eigentümer, die ihr Mehrfamilienhaus
            nicht in einen Vermarktungsprozess mit mehreren Interessenten geben, sondern
            direkt an einen Bestandshalter veräußern möchten. Es gibt keine
            Vermittlungskette und keine Provision auf der Verkäuferseite.
          </p>
          <div className="mt-10">
            <div className="marker text-[var(--kc3-muted)] mb-4">
              Für welche Objekte relevant
            </div>
            <BulletList
              items={[
                "Mehrfamilienhäuser mit reiner Wohnnutzung",
                "Wohn- und Geschäftshäuser mit gemischter Nutzung",
                "Vermietete Bestandsobjekte",
                "Zinshäuser mit gewachsener Mieterstruktur",
              ]}
            />
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="02 · Umgang mit Mietverhältnissen"
          title="Bestehende Mietverhältnisse bleiben bestehen."
          intro="Die KC3 GmbH plant den weiteren Betrieb als Eigentümer und Vermieter. Bestehende Mietverträge werden im gesetzlichen Rahmen fortgeführt."
        >
          <BulletList
            items={[
              "Übernahme bestehender Mietverträge nach § 566 BGB",
              "Fortsetzung des laufenden Betriebs aus Eigentümerhand",
              "Kaufmännische und technische Bewirtschaftung im eigenen Bestand",
              "Keine Zerlegung oder Aufteilung zum Zweck der Verwertung",
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="03 · Ablauf des Ankaufs"
          title="Vom ersten Kontakt bis zur Übernahme."
        >
          <OrderedSteps
            items={[
              {
                title: "Kurzer Anriss per E-Mail",
                body: "Adresse, Wohn- und Nutzflächen, Anzahl der Einheiten sowie, sofern vorhanden, aktuelle Mietsituation reichen für die Erstprüfung.",
              },
              {
                title: "Prüfung durch KC3",
                body: "Standort, Substanz und Mietsituation werden aus Eigentümerperspektive bewertet. Die Rückmeldung erfolgt direkt durch die KC3 GmbH.",
              },
              {
                title: "Direkter Ankauf",
                body: "Bei Passung erfolgt der Ankauf des Mehrfamilienhauses auf eigene Rechnung. Das Objekt geht in den langfristigen KC3-Bestand über.",
              },
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="04 · Häufige Fragen"
          title="Fragen zum Verkauf eines Mehrfamilienhauses."
        >
          <FaqList items={faq} />
        </ContentSection>
      </LandingShell>
    </>
  );
}
