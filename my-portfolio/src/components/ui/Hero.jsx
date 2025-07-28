import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import profilePic from "../../assets/images/Jorge-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-screen pt-40 pb-12 px-6 flex items-center bg-gray-50 text-[#1F2937]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Esquerda */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-2xl font-bold text-gray-900">Hello, it’s me</p>
          <h1 className="text-4xl font-bold text-gray-900">Jorge Oliveira</h1>

          <h2 className="text-2xl font-semibold leading-tight text-gray-800">
            And I’m a{" "}
            <span className="text-blue-900">
              <Typewriter
                words={[
                  "Front-End Developer",
                  "Back-End Developer",
                  "FullStack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-base font-normal text-gray-600 max-w-lg mx-auto lg:mx-0 mt-5">
            Each well-crafted application is a testament to how technology can
            positively transform lives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
            <a
              href="#about"
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-gray-800 transition text-center"
            >
              About Me
            </a>
            <a
              href="/curriculo.pdf"
              download
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-gray-800 transition text-center"
            >
              Download Resume
            </a>
          </div>

          <SocialIcons />
        </div>

        {/* Coluna Direita */}
        <div className="flex justify-center -mt-6">
          <div className="w-[20.5rem] h-[20.5rem] md:w-[26.25rem] md:h-[26.25rem] rounded-full border-4 border-gray-200 shadow-xl overflow-hidden">
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
