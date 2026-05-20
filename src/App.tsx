import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QualifyForm } from "./components/QualifyForm";
import { Problem } from "./components/Problem";
import { Positioning } from "./components/Positioning";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Guarantee } from "./components/Guarantee";
import { Transparency } from "./components/Transparency";
import { IdealClient } from "./components/IdealClient";
import { AuditFocus } from "./components/AuditFocus";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Problem />
        <Services />
        <Process />
        <Guarantee />
        <Transparency />
        <IdealClient />
        <AuditFocus />
        <QualifyForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
