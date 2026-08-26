import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CampusLife from "../components/CampusLife";
import HowItWorks from "../components/HowItWorks";
import TuSustainability from "../components/TuSustainability";
import ImpactPreview from "../components/ImpactPreview";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="carbon-calc-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <CampusLife />
        <HowItWorks />
        <TuSustainability />
        <ImpactPreview />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default Home;