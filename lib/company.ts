export const company = {
  name: "KC3 GmbH",
  short: "KC3",
  founded: 2024,
  tagline: "Immobilieninvestitionen. Bestand. Perspektive.",

  address: {
    street: "Spitzstraße 20",
    zip: "54344",
    city: "Kenn",
    country: "Deutschland",
    region: "Deutschland",
    mapsQuery: "KC3+GmbH+Spitzstraße+20+54344+Kenn",
  },

  contact: {
    email: "kontakt@kc3-gmbh.de",
  },

  management: {
    name: "Konstantin Cucka",
    role: "Inhaber",
  },

  legal: {
    court: "Amtsgericht Wittlich",
    hrb: "HRB 00000",
    vatId: "DE000000000",
  },

  scope: "Deutschlandweit",
  sectors: ["Wohnen", "Gewerbe", "Mischnutzung"],
} as const;

export type Expertise = {
  index: string;
  slug: string;
  title: string;
  intro: string;
  services: string[];
  detail: { label: string; value: string }[];
  image: string;
};

export const expertise: Expertise[] = [
  {
    index: "01",
    slug: "investitionen",
    title: "Immobilieninvestitionen",
    intro:
      "Die KC3 GmbH investiert eigenes Kapital in Wohn- und Gewerbeimmobilien. Alle Objekte werden auf eigene Rechnung erworben und dauerhaft im eigenen Bestand gehalten.",
    services: [
      "Ankauf von Bestandsobjekten auf eigene Rechnung",
      "Aufbau und Erweiterung eines eigenen Immobilienportfolios",
      "Langfristige Bestandshaltung und Werterhalt",
      "Kaufmännische und technische Steuerung des Portfolios",
    ],
    detail: [
      { label: "Anlageklasse", value: "Wohn- und Gewerbeimmobilien" },
      { label: "Kapital", value: "Ausschließlich Eigenkapital" },
      { label: "Rolle", value: "Eigentümer und Bestandshalter" },
    ],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=2000&auto=format&fit=crop",
  },
  {
    index: "02",
    slug: "vermietung",
    title: "Vermietung",
    intro:
      "Vermietung eigener Wohn- und Gewerbeobjekte an private und gewerbliche Nutzer. Die Bewirtschaftung erfolgt langfristig, stabil und aus Eigentümerhand.",
    services: [
      "Vermietung eigener Wohnobjekte",
      "Vermietung eigener Gewerbeflächen",
      "Objekt- und Mietverwaltung im eigenen Bestand",
      "Instandhaltung und laufender Werterhalt",
    ],
    detail: [
      { label: "Nutzung", value: "Wohnen und Gewerbe" },
      { label: "Bestand", value: "Ausschließlich eigene Objekte" },
      { label: "Horizont", value: "Langfristige Vermietung" },
    ],
    image: "/expertise/vermietung.png",
  },
  {
    index: "03",
    slug: "projektentwicklung",
    title: "Projektentwicklung",
    intro:
      "Ergänzend zur Bestandshaltung entwickelt die KC3 GmbH ausgewählte eigene Objekte und Grundstücke weiter. Auch hier immer auf eigene Rechnung und mit dem Ziel, die Objekte in den eigenen Bestand zu überführen.",
    services: [
      "Entwicklung eigener Grundstücke",
      "Revitalisierung eigener Bestandsobjekte",
      "Steuerung eigener Bauvorhaben",
      "Überführung in die eigene Bestandshaltung",
    ],
    detail: [
      { label: "Rolle", value: "Bauherr auf eigene Rechnung" },
      { label: "Ziel", value: "Übergang in den eigenen Bestand" },
      { label: "Umfang", value: "Ausgewählte Vorhaben, nachrangig" },
    ],
    image:
      "https://images.unsplash.com/photo-1590725175785-de1b1f5b7b2b?q=85&w=2000&auto=format&fit=crop",
  },
];

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.address.mapsQuery}`;
