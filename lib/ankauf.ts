export type AnkaufKategorie = {
  anchor: string;
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  serviceName: string;
  serviceDescription: string;
};

export const ankaufKategorien: AnkaufKategorie[] = [
  {
    anchor: "immobilie-verkaufen",
    eyebrow: "03.1 · Immobilie verkaufen",
    title: "Immobilie direkt an KC3 verkaufen.",
    intro:
      "Die KC3 GmbH kauft Wohn- und Gewerbeimmobilien deutschlandweit auf eigene Rechnung für den langfristigen eigenen Bestand. Direkter Kontakt zum Käufer, kein Maklervertrag, keine Weitervermittlung.",
    bullets: [
      "Direktankauf durch die KC3 GmbH ohne Zwischenhändler",
      "Kein Maklervertrag und keine Provision für die Verkäuferseite",
      "Ein verbindlicher Ansprechpartner in der Gesellschaft",
      "Übernahme in den eigenen Bestand, keine Weiterveräußerung",
      "Wohn- und Gewerbeobjekte, vermietet oder unvermietet",
      "Deutschlandweit, Sitz in Kenn",
    ],
    serviceName: "Direktankauf von Wohn- und Gewerbeimmobilien",
    serviceDescription:
      "Direktankauf von Wohn- und Gewerbeimmobilien durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit, ohne Vermittlung.",
  },
  {
    anchor: "mehrfamilienhaus-verkaufen",
    eyebrow: "03.2 · Mehrfamilienhaus verkaufen",
    title: "Mehrfamilienhaus direkt an einen Bestandshalter verkaufen.",
    intro:
      "KC3 kauft Mehrfamilienhäuser und Zinshäuser deutschlandweit auf eigene Rechnung. Bestehende Mietverträge werden nach § 566 BGB übernommen und der laufende Betrieb aus Eigentümerhand fortgeführt.",
    bullets: [
      "Mehrfamilienhäuser mit reiner Wohnnutzung",
      "Wohn- und Geschäftshäuser mit gemischter Nutzung",
      "Zinshäuser mit gewachsener Mieterstruktur",
      "Vermietete Bestandsobjekte, keine Aufteilung geplant",
      "Fortsetzung bestehender Mietverträge (§ 566 BGB)",
      "Verkauf ohne Bieterverfahren und ohne Vermittlungskette",
    ],
    serviceName: "Direktankauf von Mehrfamilienhäusern",
    serviceDescription:
      "Direktankauf von Mehrfamilienhäusern, Zinshäusern und Wohn- und Geschäftshäusern durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit.",
  },
  {
    anchor: "gewerbeimmobilie-verkaufen",
    eyebrow: "03.3 · Gewerbeimmobilie verkaufen",
    title: "Gewerbeimmobilie direkt an KC3 verkaufen.",
    intro:
      "KC3 kauft Gewerbeimmobilien deutschlandweit auf eigene Rechnung und hält sie langfristig im eigenen Bestand. Kein Gewerbemakler, kein Vermittler, direkter Kontakt zur Käufergesellschaft.",
    bullets: [
      "Bürogebäude und Business-Center",
      "Handelsimmobilien und Fachmärkte",
      "Logistik- und Lagerimmobilien",
      "Wohn- und Geschäftshäuser mit gewerblicher Nutzung",
      "Vermietete Gewerbeeinheiten und Mischnutzung",
      "Ankauf auf eigene Rechnung, keine Weiterveräußerung",
    ],
    serviceName: "Direktankauf von Gewerbeimmobilien",
    serviceDescription:
      "Direktankauf von Büro-, Handels-, Logistik- und Mischnutzungsobjekten durch die KC3 GmbH auf eigene Rechnung für den langfristigen eigenen Bestand, deutschlandweit.",
  },
  {
    anchor: "grundstueck-verkaufen",
    eyebrow: "03.4 · Grundstück verkaufen",
    title: "Grundstück direkt an KC3 verkaufen.",
    intro:
      "KC3 kauft ausgewählte Grundstücke deutschlandweit auf eigene Rechnung. Die Entwicklung dient der Überführung in den eigenen Bestand, nicht dem Weiterverkauf.",
    bullets: [
      "Wohngrundstücke für Mehrfamilienhäuser",
      "Gewerbegrundstücke für Büro, Handel und Logistik",
      "Gemischt nutzbare Areale (Wohnen und Gewerbe)",
      "Entwicklungsgrundstücke mit Bestandsobjekten",
      "Grundstücke mit Nachverdichtungspotenzial",
      "Baurecht nicht zwingend erforderlich",
    ],
    serviceName: "Direktankauf von Grundstücken",
    serviceDescription:
      "Direktankauf von Wohn-, Gewerbe- und Entwicklungsgrundstücken durch die KC3 GmbH auf eigene Rechnung zur Überführung in den eigenen Bestand, deutschlandweit.",
  },
];

export const ablauf = [
  {
    title: "Objekt anbieten",
    body: "Eckdaten des Objekts werden per E-Mail an die KC3 GmbH übermittelt. Adresse, Nutzung, Größe und, sofern vorhanden, Mietsituation reichen für eine erste Einschätzung.",
  },
  {
    title: "Prüfung durch KC3",
    body: "Standort, Substanz und Mietsituation werden aus Eigentümerperspektive bewertet. Die Rückmeldung erfolgt direkt durch die KC3 GmbH. Für die Verkäuferseite entstehen keine Kosten.",
  },
  {
    title: "Direktankauf und Übernahme",
    body: "Bei Passung erfolgt der Ankauf auf eigene Rechnung. Das Objekt geht in den langfristigen Bestand der KC3 GmbH über und wird als Eigentümer weitergeführt.",
  },
];

export const ankaufFaq = [
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
    question: "In welcher Region kauft KC3 an?",
    answer:
      "Deutschlandweit. Der Sitz der KC3 GmbH ist in Kenn, das Tätigkeitsgebiet umfasst das gesamte Bundesgebiet.",
  },
  {
    question: "Welche Objektarten werden angekauft?",
    answer:
      "Wohn- und Gewerbeimmobilien sowie ausgewählte Grundstücke. Vermietete Objekte, Mehrfamilienhäuser, Büro-, Handels-, Logistik- und Mischnutzungsobjekte passen ausdrücklich zum Modell.",
  },
  {
    question: "Kauft KC3 auch vermietete Objekte?",
    answer:
      "Ja. Vermietete Wohn- und Gewerbeobjekte passen ausdrücklich zum Modell der KC3 GmbH, da Objekte für den langfristigen eigenen Bestand angekauft und weitervermietet werden. Bestehende Mietverträge werden nach § 566 BGB übernommen.",
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
    question: "Muss bei einem Grundstück Baurecht vorhanden sein?",
    answer:
      "Nicht zwingend. Auch Grundstücke ohne fertigen Bebauungsstand können relevant sein, sofern eine spätere Nutzung im Sinne einer langfristigen Bestandshaltung möglich ist.",
  },
  {
    question: "Wie kann ich der KC3 GmbH ein Objekt anbieten?",
    answer:
      "Objektangebote werden per E-Mail an die KC3 GmbH gerichtet. Adresse, Nutzung, Größe und, sofern vorhanden, Mietsituation reichen für die Erstprüfung.",
  },
];
