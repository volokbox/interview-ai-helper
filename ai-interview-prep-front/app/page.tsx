import Hero from "./components/hero";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Cta from "./components/cta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cta />
    </div>
  );
}
