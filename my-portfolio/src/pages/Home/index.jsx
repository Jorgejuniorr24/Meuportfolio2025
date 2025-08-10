import Hero from "../../components/ui/Hero";
import AboutMe from "../About";
import Portfolio from "../Portfolio";
import ServicesPage from "../Services";
import ContactPage from "../Contact";

const Home = () => {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#0B1120] text-gray-900 dark:text-white">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="portfolio" className="pb-8">
        <Portfolio />
      </section>

      <section id="services" className="-mt-6">
        <ServicesPage />
      </section>

      <section id="contact" className="-mt-6">
        <ContactPage />
      </section>
    </div>
  );
};

export default Home;
