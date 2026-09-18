import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import Expertise from "@/components/Expertise";
import SelectedProjects from "@/components/SelectedProjects";
import AboutKC3 from "@/components/AboutKC3";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStatement />
      <Expertise />
      <SelectedProjects />
      <AboutKC3 />
      <ContactCTA />
      <Footer />
    </main>
  );
}
