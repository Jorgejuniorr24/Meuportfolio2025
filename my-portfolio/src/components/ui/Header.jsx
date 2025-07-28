import { HiHome, HiUser, HiBriefcase, HiCog, HiMail } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold  text-gray-900">
          JorgeOliveira
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="flex items-center gap-1 text-gray-700 hover:text-[#445964] transition-colors duration-300"
          >
            <HiHome className="w-5 h-5" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-1 text-gray-700 hover:text-[#445964] transition-colors duration-300"
          >
            <HiUser className="w-5 h-5" /> About
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-1 text-gray-700 hover:text-[#445964] transition-colors duration-300"
          >
            <HiBriefcase className="w-5 h-5" /> Portfolio
          </a>
          <a
            href="#services"
            className="flex items-center gap-1 text-gray-700 hover:text-[#445964] transition-colors duration-300"
          >
            <HiCog className="w-5 h-5" /> Services
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-gray-700 hover:text-[#445964] transition-colors duration-300"
          >
            <HiMail className="w-5 h-5" /> Contact
          </a>
        </nav>

        {/* Idioma */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
