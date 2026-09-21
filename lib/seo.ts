import { company } from "@/lib/company";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kc3-gmbh.de"
).replace(/\/$/, "");

export const absoluteUrl = (path: string = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export type LandingPage = {
  path: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  breadcrumbLabel: string;
};

export const landingPages: LandingPage[] = [
  {
    path: "/immobilie-verkaufen",
    title: "Immobilie verkaufen",
    h1: "Immobilie direkt an KC3 verkaufen",
    metaTitle: "Immobilie verkaufen | Direktankauf durch KC3 GmbH",
    metaDescription:
      "Die KC3 GmbH kauft Wohn- und Gewerbeimmobilien deutschlandweit auf eigene Rechnung für den langfristigen eigenen Bestand. Kein Makler, keine Vermittlung, direkter Kontakt zum Käufer.",
    serviceName: "Direktankauf von Wohn- und Gewerbeimmobilien",
    breadcrumbLabel: "Immobilie verkaufen",
  },
  {
    path: "/mehrfamilienhaus-verkaufen",
    title: "Mehrfamilienhaus verkaufen",
    h1: "Mehrfamilienhaus direkt an einen Bestandshalter verkaufen",
    metaTitle: "Mehrfamilienhaus verkaufen | Direktankauf durch KC3 GmbH",
    metaDescription:
      "Die KC3 GmbH kauft Mehrfamilienhäuser deutschlandweit auf eigene Rechnung für den eigenen langfristigen Bestand. Ohne Makler, ohne Vermittlung, direkter Kontakt zum Eigentümer.",
    serviceName: "Direktankauf von Mehrfamilienhäusern",
    breadcrumbLabel: "Mehrfamilienhaus verkaufen",
  },
  {
    path: "/gewerbeimmobilie-verkaufen",
    title: "Gewerbeimmobilie verkaufen",
    h1: "Gewerbeimmobilie direkt an KC3 verkaufen",
    metaTitle: "Gewerbeimmobilie verkaufen | Direktankauf durch KC3 GmbH",
    metaDescription:
      "Die KC3 GmbH kauft Gewerbeimmobilien deutschlandweit auf eigene Rechnung für den eigenen Bestand. Kein Makler, keine Vermittlung, direkter Ansprechpartner als Käufer.",
    serviceName: "Direktankauf von Gewerbeimmobilien",
    breadcrumbLabel: "Gewerbeimmobilie verkaufen",
  },
  {
    path: "/grundstueck-verkaufen",
    title: "Grundstück verkaufen",
    h1: "Grundstück direkt an KC3 verkaufen",
    metaTitle: "Grundstück verkaufen | Direktankauf durch KC3 GmbH",
    metaDescription:
      "Die KC3 GmbH kauft ausgewählte Grundstücke deutschlandweit auf eigene Rechnung, um sie zu entwickeln und in den eigenen Bestand zu überführen. Direktkontakt ohne Vermittlung.",
    serviceName: "Direktankauf von Grundstücken",
    breadcrumbLabel: "Grundstück verkaufen",
  },
  {
    path: "/ankaufsprofil",
    title: "Ankaufsprofil",
    h1: "Ankaufsprofil der KC3 GmbH",
    metaTitle: "Ankaufsprofil | KC3 GmbH — Immobilieninvestitionen",
    metaDescription:
      "Was die KC3 GmbH kauft: Wohn- und Gewerbeimmobilien sowie ausgewählte Grundstücke, deutschlandweit, auf eigene Rechnung für den langfristigen eigenen Bestand.",
    serviceName: "Ankaufsprofil der KC3 GmbH",
    breadcrumbLabel: "Ankaufsprofil",
  },
];

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  alternateName: company.short,
  url: SITE_URL,
  foundingDate: String(company.founded),
  legalName: company.name,
  email: company.contact.email,
  founder: {
    "@type": "Person",
    name: company.management.name,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    postalCode: company.address.zip,
    addressLocality: company.address.city,
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  knowsAbout: [
    "Immobilieninvestitionen",
    "Vermietung von Wohnimmobilien",
    "Vermietung von Gewerbeimmobilien",
    "Immobilien-Bestandshaltung",
    "Projektentwicklung",
  ],
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbJsonLd = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const serviceJsonLd = (page: LandingPage) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: page.serviceName,
  serviceType: page.serviceName,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Deutschland" },
  url: absoluteUrl(page.path),
  description: page.metaDescription,
});

export const faqJsonLd = (
  items: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: it.answer,
    },
  })),
});
