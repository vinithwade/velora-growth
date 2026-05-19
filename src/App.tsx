import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QualifyForm } from "./components/QualifyForm";
import { Stats } from "./components/Stats";
import { CaseStudies } from "./components/CaseStudies";
import { Mechanism } from "./components/Mechanism";
import { Filter } from "./components/Filter";
import { FAQ } from "./components/FAQ";
import { News } from "./components/News";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { TrustBar, TrustSection } from "./components/TrustSignals";
import { Testimonials } from "./components/Testimonials";
import { Process } from "./components/Process";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <QualifyForm />
        <Stats />
        <Testimonials />
        <CaseStudies />
        <TrustSection />
        <Mechanism />
        <Process />
        <Filter />
        <FAQ />
        <News />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
