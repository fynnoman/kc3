import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import Expertise from "@/components/Expertise";
import InvestmentSection from "@/components/InvestmentSection";
import AboutKC3 from "@/components/AboutKC3";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { investmentFaq, investmentKategorien } from "@/lib/investment";

export default function Home() {
  const structured = [
    faqJsonLd(investmentFaq),
    ...investmentKategorien.map((k) =>
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
      <InvestmentSection />
      <AboutKC3 />
      <ContactCTA />
      <Footer />
    </main>
  );
}
