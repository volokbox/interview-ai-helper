import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
