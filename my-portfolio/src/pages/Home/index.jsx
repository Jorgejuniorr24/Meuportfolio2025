import Hero from "../../components/ui/Hero";
import AboutMe from "../About";
import Portfolio from "../Portfolio";
import ServicesPage from "../Services";
import ContactPage from "../Contact"; // 👈 mover pra cima

const Home = () => {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#0B1120] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="pb-8">
        <Portfolio />
      </section>

      {/* Services Section */}
      <section id="services" className="-mt-6">
        <ServicesPage />
      </section>

      {/* Contact Section */}
      <section id="contact" className="-mt-6">
        <ContactPage />
      </section>
    </div>
  );
};

export default Home;
