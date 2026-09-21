import { company } from "@/lib/company";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kc3-gmbh.de"
).replace(/\/$/, "");

export const absoluteUrl = (path: string = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

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

export const serviceJsonLd = ({
  name,
  description,
  anchor,
}: {
  name: string;
  description: string;
  anchor: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Deutschland" },
  url: `${SITE_URL}/#${anchor}`,
  description,
});
