import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import Expertise from "@/components/Expertise";
import AnkaufSection from "@/components/AnkaufSection";
import AboutKC3 from "@/components/AboutKC3";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { ankaufFaq, ankaufKategorien } from "@/lib/ankauf";

export default function Home() {
  const structured = [
    faqJsonLd(ankaufFaq),
    ...ankaufKategorien.map((k) =>
      serviceJsonLd({
        name: k.serviceName,
        description: k.serviceDescription,
        anchor: k.anchor,
      })
    ),
  ];

  return (
    <main>
      <JsonLd data={structured} />
      <Hero />
      <IntroStatement />
      <Expertise />
      <AnkaufSection />
      <AboutKC3 />
      <ContactCTA />
      <Footer />
    </main>
  );
}
