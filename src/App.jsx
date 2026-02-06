import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflows from "./components/Workflows";
import Impact from "./components/Impact";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark-primaryBg">
      <Navbar />
      <Hero />
      <Workflows />
      <Impact />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
