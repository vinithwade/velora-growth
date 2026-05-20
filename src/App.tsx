import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QualifyForm } from "./components/QualifyForm";
import { Stats } from "./components/Stats";
import { CaseStudies } from "./components/CaseStudies";
import { Problem } from "./components/Problem";
import { Positioning } from "./components/Positioning";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Guarantee } from "./components/Guarantee";
import { IdealClient } from "./components/IdealClient";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { TrustBar } from "./components/TrustSignals";
import { CtaStrip } from "./components/layout/CtaStrip";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Positioning />
        <Services />
        <Problem />
        <Process />
        <CtaStrip />
        <Guarantee />
        <IdealClient />
        <Stats />
        <CaseStudies />
        <QualifyForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
