import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Consultation } from "./components/Consultation";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { QuoteForm } from "./components/QuoteForm";
import { Testimonials } from "./components/Testimonials";
import { ClientLogos } from "./components/ClientLogos";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white text-[#243344] font-['Roboto'] selection:bg-[#f4c03b] selection:text-[#243344]">
      {/* 1. Header and nav */}
      <Header />

      <main>
        {/* 2. Hero section */}
        <Hero />

        {/* 3. Features */}
        <Features />

        {/* 4. About Section */}
        <About />

        {/* 5. Construction services */}
        <Services />

        {/* 6. Free consultation banner */}
        <Consultation />

        {/* 7. Construction process */}
        <Process />

        {/* 8. Latest projects portfolio */}
        <Projects />

        {/* 9. Request a free quote form */}
        <QuoteForm />

        {/* 10. Customer testimonials */}
        <Testimonials />

        {/* 11. Client logos */}
        <ClientLogos />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
