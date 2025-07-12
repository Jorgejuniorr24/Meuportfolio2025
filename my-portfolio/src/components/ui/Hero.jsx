import Button from "./Button";
import SocialIcons from "./SocialIcons";
import profilePic from "../../assets/images/Jorge-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-screen pt-40 pb-12 px-6 flex items-center bg-gray-50 text-[#445964]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Esquerda */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-base font-normal">Hello, it’s me</p>

          <h1 className="text-4xl font-bold">Jorge Oliveira</h1>

          <h2 className="text-2xl font-bold leading-tight">
            And I’m a Front-End<br />Developer
          </h2>

          <p className="text-base font-normal max-w-lg mx-auto lg:mx-0">
            Each well-crafted application is a testament to how technology can
            positively transform lives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#about"
              className="px-3 py-1.5 rounded-md bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-gray-800 transition text-center"
            >
              About Me
            </a>
            <a
              href="/curriculo.pdf"
              download
              className="px-3 py-1.5 rounded-md bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-gray-800 transition text-center"
            >
              Download Resume
            </a>
          </div>

          <SocialIcons />
        </div>

        {/* Coluna Direita */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-gray-200 shadow-xl overflow-hidden">
            <img
              src={profilePic}
              alt="Jorge Oliveira"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
