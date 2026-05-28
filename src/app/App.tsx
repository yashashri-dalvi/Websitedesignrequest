import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { AIOperatingSystem } from "./components/AIOperatingSystem";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { WorkflowShowcase } from "./components/WorkflowShowcase";
import { ComplianceSection } from "./components/ComplianceSection";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const path = window.location.pathname;

  if (path === "/blog") {
    return <ComingSoonPage type="Blog" />;
  }

  if (path === "/careers") {
    return <ComingSoonPage type="Careers" />;
  }

  if (path === "/contact") {
    return <ContactPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <AIOperatingSystem />
      <FeaturesGrid />
      <WorkflowShowcase />
      <ComplianceSection />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}



