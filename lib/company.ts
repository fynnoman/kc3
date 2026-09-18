export const company = {
  name: "KC3 GmbH",
  short: "KC3",
  founded: 2024,
  tagline: "Immobilien. Entwicklung. Perspektiven.",

  address: {
    street: "Trierer Straße 12",
    zip: "54344",
    city: "Kenn",
    country: "Deutschland",
    region: "Rheinland-Pfalz",
    mapsQuery: "KC3+GmbH+Trierer+Straße+12+54344+Kenn",
  },

  contact: {
    phone: "+49 6502 93 84 20",
    email: "kontakt@kc3-gmbh.de",
    responseTime: "Rückmeldung innerhalb von zwei Werktagen",
    hours: [
      { days: "Montag – Freitag", time: "09:00 – 18:00 Uhr" },
      { days: "Samstag – Sonntag", time: "Nach Vereinbarung" },
    ],
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

  regions: ["Kenn", "Trier", "Konz", "Rheinland-Pfalz"],
  sectors: ["Wohnen", "Gewerbe", "Mischnutzung"],

  principles: [
    {
      n: "I",
      title: "Substanz",
      body: "Erwerb von Objekten mit belastbarer Standort- und Bauqualität. Kein spekulativer Zwischenhandel.",
    },
    {
      n: "II",
      title: "Steuerung",
      body: "Entwicklung, Vermietung und Verwaltung aus einer Hand — vom Ankauf bis in die Nutzungsphase.",
    },
    {
      n: "III",
      title: "Perspektive",
      body: "Investitionshorizonte von zehn Jahren und länger. Wertentwicklung entsteht über Zyklen hinweg.",
    },
  ],
} as const;

export type Project = {
  index: string;
  name: string;
  location: string;
  year: string;
  type: string;
  status: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Wohnimmobilie Kenn",
    location: "Kenn · Rheinland-Pfalz",
    year: "2025",
    type: "Mehrfamilienobjekt",
    status: "In Entwicklung",
  },
  {
    index: "02",
    name: "Gewerbeobjekt Moselufer",
    location: "Trier · Rheinland-Pfalz",
    year: "2024",
    type: "Revitalisierung Gewerbe",
    status: "Im Bestand",
  },
  {
    index: "03",
    name: "Grundstück Konz-Nord",
    location: "Konz · Rheinland-Pfalz",
    year: "2026",
    type: "Grundstücksentwicklung",
    status: "In Vorbereitung",
  },
];

export type Expertise = {
  index: string;
  slug: string;
  title: string;
  intro: string;
  services: string[];
  detail: { label: string; value: string }[];
  cta: { label: string; href: string };
  image: string;
};

export const expertise: Expertise[] = [
  {
    index: "01",
    slug: "immobilien",
    title: "Immobilien",
    intro:
      "Ankauf, Bestandshaltung und Verwaltung von Wohn- und Gewerbeimmobilien. Unser Kapital bleibt in den Objekten, die wir erwerben — mit dem Anspruch, Substanz zu erkennen und über Jahrzehnte aufzubauen.",
    services: [
      "Ankauf einzelner Bestandsobjekte",
      "Aufbau und Erweiterung von Immobilienportfolios",
      "Kaufmännische und technische Verwaltung",
      "Vermietung, Instandhaltung und Werterhalt",
    ],
    detail: [
      { label: "Objekttypen", value: "Wohn- und Gewerbeimmobilien" },
      { label: "Region", value: "Rheinland-Pfalz und angrenzend" },
      { label: "Haltedauer", value: "10 Jahre und länger" },
    ],
    cta: {
      label: "Objekt anbieten",
      href: "mailto:kontakt@kc3-gmbh.de?subject=Objektangebot",
    },
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=2000&auto=format&fit=crop",
  },
  {
    index: "02",
    slug: "projektentwicklung",
    title: "Projektentwicklung",
    intro:
      "Entwicklung und Revitalisierung von Immobilien und Grundstücken. Wir begleiten Vorhaben von der ersten Standortanalyse über Konzeption und Realisierung bis in die langfristige Nutzung.",
    services: [
      "Grundstücksentwicklung und Nutzungskonzepte",
      "Revitalisierung von Bestandsobjekten",
      "Baubetreuung und Projektsteuerung",
      "Übergabe in die eigene Bestandshaltung",
    ],
    detail: [
      { label: "Vorhaben", value: "Wohnen · Gewerbe · Mischnutzung" },
      { label: "Region", value: "Rheinland-Pfalz und angrenzend" },
      {
        label: "Phasen",
        value: "Analyse · Konzeption · Realisierung · Übergabe",
      },
    ],
    cta: {
      label: "Projekt vorstellen",
      href: "mailto:kontakt@kc3-gmbh.de?subject=Projektvorstellung",
    },
    image:
      "https://images.unsplash.com/photo-1590725175785-de1b1f5b7b2b?q=85&w=2000&auto=format&fit=crop",
  },
];

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.address.mapsQuery}`;
