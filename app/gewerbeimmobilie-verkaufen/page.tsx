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

const page = landingPages.find(
  (p) => p.path === "/gewerbeimmobilie-verkaufen"
)!;

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
    question: "Welche Gewerbeimmobilien kauft KC3 an?",
    answer:
      "Gewerbeimmobilien im weiteren Sinn: Büro-, Handels-, Logistik- und Mischnutzungsobjekte. Der Fokus liegt auf Objekten, die langfristig im eigenen Bestand vermietet werden können.",
  },
  {
    question: "Kauft KC3 auch vermietete Gewerbeobjekte?",
    answer:
      "Ja. Vermietete Gewerbeimmobilien passen ausdrücklich zum Modell der KC3 GmbH, da Objekte für den langfristigen eigenen Bestand angekauft und weitervermietet werden.",
  },
  {
    question: "Ist die KC3 GmbH ein Gewerbemakler?",
    answer:
      "Nein. KC3 tritt als Käufer auf eigene Rechnung auf. Es findet keine Vermittlung oder Beratung für Dritte statt.",
  },
  {
    question: "Wo kauft KC3 Gewerbeimmobilien an?",
    answer:
      "Deutschlandweit. Der Sitz der Gesellschaft ist in Kenn, das Tätigkeitsgebiet umfasst das gesamte Bundesgebiet.",
  },
  {
    question: "Was passiert mit dem Gewerbeobjekt nach dem Ankauf?",
    answer:
      "Das Objekt geht in den eigenen Bestand der KC3 GmbH über und wird als Eigentümer weiter vermietet.",
  },
];

export default function GewerbeimmobilieVerkaufenPage() {
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
        lead="KC3 kauft Gewerbeimmobilien deutschlandweit auf eigene Rechnung und hält sie langfristig im eigenen Bestand. Kein Gewerbemakler, kein Vermittler, direkter Kontakt zum Käufer."
      >
        <ContentSection
          eyebrow="01 · Positionierung"
          title="Käufer und Bestandshalter aus einer Hand."
          intro="Die KC3 GmbH investiert eigenes Kapital in Gewerbeobjekte und bleibt nach dem Ankauf dauerhaft Eigentümerin."
        >
          <p
            className="tracking-[-0.02em] leading-[1.55] text-[var(--kc3-black)]/80 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)" }}
          >
            Verkäufer sprechen bei KC3 nicht mit einem Vermittler, sondern direkt mit
            der Käufergesellschaft. Der Ablauf ist auf einen klaren, zügigen
            Direktankauf ausgelegt, ohne breit gestreute Vermarktung.
          </p>
        </ContentSection>

        <ContentSection
          eyebrow="02 · Objektarten"
          title="Was KC3 im Gewerbebereich ankauft."
          intro="Der Anspruch: Objekte mit belastbarer Standort- und Nutzungslogik, die langfristig vermietbar bleiben."
        >
          <BulletList
            items={[
              "Bürogebäude und Business-Center",
              "Handelsimmobilien und Fachmärkte",
              "Logistik- und Lagerimmobilien",
              "Wohn- und Geschäftshäuser mit gewerblicher Nutzung",
              "Gemischt genutzte Bestandsobjekte",
              "Vermietete Gewerbeeinheiten",
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="03 · Ablauf"
          title="Vom Angebot bis zur Übernahme."
        >
          <OrderedSteps
            items={[
              {
                title: "Angebot per E-Mail",
                body: "Adresse, Nutzung, Flächen und, sofern vorhanden, Mietsituation reichen für die Erstprüfung. Unterlagen können direkt an die KC3 GmbH gesendet werden.",
              },
              {
                title: "Prüfung durch KC3",
                body: "Standort, Nutzung und Mietsituation werden aus Eigentümerperspektive bewertet. Für die Verkäuferseite entstehen keine Kosten.",
              },
              {
                title: "Direktankauf und Übernahme",
                body: "Bei Passung erfolgt der Ankauf auf eigene Rechnung. Das Objekt geht in den eigenen Bestand der KC3 GmbH über und wird weiter vermietet.",
              },
            ]}
          />
        </ContentSection>

        <ContentSection
          eyebrow="04 · Häufige Fragen"
          title="Fragen zum Verkauf einer Gewerbeimmobilie."
        >
          <FaqList items={faq} />
        </ContentSection>
      </LandingShell>
    </>
  );
}
