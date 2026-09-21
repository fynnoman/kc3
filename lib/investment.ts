export type InvestmentKategorie = {
  anchor: string;
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  serviceName: string;
  serviceDescription: string;
};

export const investmentKategorien: InvestmentKategorie[] = [
  {
    anchor: "immobilie-verkaufen",
    eyebrow: "03.1 · Wohn- und Gewerbeimmobilien",
    title: "Immobilie an einen Bestandshalter verkaufen.",
    intro:
      "Die KC3 GmbH investiert in Wohn- und Gewerbeimmobilien deutschlandweit auf eigene Rechnung. Objekte werden langfristig im eigenen Portfolio gehalten und vermietet.",
    bullets: [
      "Investment auf eigene Rechnung, kein externer Investor",
      "Kein Maklervertrag, keine Provision für die Verkäuferseite",
      "Ein verbindlicher Ansprechpartner in der Gesellschaft",
      "Übernahme in den eigenen Bestand, keine Weiterveräußerung",
      "Wohn- und Gewerbeobjekte, vermietet oder unvermietet",
      "Deutschlandweit, Sitz in Kenn",
    ],
    serviceName: "Ankauf von Wohn- und Gewerbeimmobilien",
    serviceDescription:
      "Investment in Wohn- und Gewerbeimmobilien durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit, ohne Vermittlung.",
  },
  {
    anchor: "mehrfamilienhaus-verkaufen",
    eyebrow: "03.2 · Mehrfamilienhäuser",
    title: "Mehrfamilienhaus an einen Investor verkaufen.",
    intro:
      "KC3 investiert in Mehrfamilienhäuser und Zinshäuser deutschlandweit. Bestehende Mietverhältnisse werden nach § 566 BGB übernommen und der laufende Betrieb aus Eigentümerhand fortgeführt.",
    bullets: [
      "Mehrfamilienhäuser mit reiner Wohnnutzung",
      "Wohn- und Geschäftshäuser mit gemischter Nutzung",
      "Zinshäuser mit gewachsener Mieterstruktur",
      "Vermietete Bestandsobjekte, keine Aufteilung geplant",
      "Fortsetzung bestehender Mietverträge (§ 566 BGB)",
      "Direktes Investment ohne Bieterverfahren",
    ],
    serviceName: "Ankauf von Mehrfamilienhäusern",
    serviceDescription:
      "Investment in Mehrfamilienhäuser, Zinshäuser und Wohn- und Geschäftshäuser durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit.",
  },
  {
    anchor: "gewerbeimmobilie-verkaufen",
    eyebrow: "03.3 · Gewerbeimmobilien",
    title: "Gewerbeimmobilie an KC3 verkaufen.",
    intro:
      "KC3 investiert in Gewerbeimmobilien deutschlandweit und hält sie langfristig im eigenen Bestand. Ein direkter Ansprechpartner in der Käufergesellschaft, keine Vermittlungsstufe.",
    bullets: [
      "Bürogebäude und Business-Center",
      "Handelsimmobilien und Fachmärkte",
      "Logistik- und Lagerimmobilien",
      "Wohn- und Geschäftshäuser mit gewerblicher Nutzung",
      "Vermietete Gewerbeeinheiten und Mischnutzung",
      "Investment auf eigene Rechnung, keine Weiterveräußerung",
    ],
    serviceName: "Ankauf von Gewerbeimmobilien",
    serviceDescription:
      "Investment in Büro-, Handels-, Logistik- und Mischnutzungsobjekte durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit.",
  },
  {
    anchor: "grundstueck-verkaufen",
    eyebrow: "03.4 · Grundstücke",
    title: "Grundstück an einen Bestandshalter verkaufen.",
    intro:
      "KC3 investiert in ausgewählte Grundstücke deutschlandweit. Die Entwicklung dient der Überführung in den eigenen Bestand, nicht dem Weiterverkauf.",
    bullets: [
      "Wohngrundstücke für Mehrfamilienhäuser",
      "Gewerbegrundstücke für Büro, Handel und Logistik",
      "Gemischt nutzbare Areale (Wohnen und Gewerbe)",
      "Entwicklungsgrundstücke mit Bestandsobjekten",
      "Grundstücke mit Nachverdichtungspotenzial",
      "Baurecht nicht zwingend erforderlich",
    ],
    serviceName: "Ankauf von Grundstücken",
    serviceDescription:
      "Investment in Wohn-, Gewerbe- und Entwicklungsgrundstücke durch die KC3 GmbH auf eigene Rechnung zur Überführung in den eigenen Bestand, deutschlandweit.",
  },
];

export const investmentFaq = [
  {
    question: "Investiert die KC3 GmbH mit eigenem Kapital?",
    answer:
      "Ja. KC3 investiert ausschließlich mit Eigenkapital in Wohn- und Gewerbeimmobilien. Es gibt keine externen Investoren und keine Fondsstrukturen. Die Gesellschaft ist eigentümergeführt.",
  },
  {
    question: "Ist KC3 ein Makler?",
    answer:
      "Nein. KC3 tritt weder als Makler noch als Berater oder Dienstleister für Dritte auf. Objekte werden ausschließlich für das eigene Portfolio erworben.",
  },
  {
    question: "In welcher Region investiert KC3?",
    answer:
      "Deutschlandweit. Der Sitz der KC3 GmbH ist in Kenn, das Tätigkeitsgebiet umfasst das gesamte Bundesgebiet.",
  },
  {
    question: "In welche Objektarten investiert KC3?",
    answer:
      "Wohn- und Gewerbeimmobilien sowie ausgewählte Grundstücke. Vermietete Objekte, Mehrfamilienhäuser, Büro-, Handels-, Logistik- und Mischnutzungsobjekte passen ausdrücklich zum Modell.",
  },
  {
    question: "Werden auch vermietete Objekte übernommen?",
    answer:
      "Ja. Vermietete Wohn- und Gewerbeobjekte passen ausdrücklich zum Modell der KC3 GmbH, da Objekte für den langfristigen eigenen Bestand erworben und weitervermietet werden. Bestehende Mietverträge werden nach § 566 BGB übernommen.",
  },
  {
    question: "Wie sieht der Investitionshorizont aus?",
    answer:
      "Die KC3 GmbH ist als Bestandshalter aufgestellt. Objekte werden dauerhaft im eigenen Portfolio gehalten und vermietet, nicht kurzfristig weiterveräußert.",
  },
  {
    question: "Muss bei einem Grundstück Baurecht vorhanden sein?",
    answer:
      "Nicht zwingend. Auch Grundstücke ohne fertigen Bebauungsstand können relevant sein, sofern eine spätere Nutzung im Sinne einer langfristigen Bestandshaltung möglich ist.",
  },
  {
    question: "Wie kann ich der KC3 GmbH ein Objekt anbieten?",
    answer:
      "Objektangebote werden per E-Mail an die KC3 GmbH gerichtet. Adresse, Nutzung, Größe und, sofern vorhanden, Mietsituation reichen für eine Erstprüfung.",
  },
];
