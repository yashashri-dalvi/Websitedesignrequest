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

export default function App() {
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
