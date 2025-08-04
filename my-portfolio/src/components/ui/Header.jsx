import { HiHome, HiUser, HiBriefcase, HiCog, HiMail } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#0B1120]/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white transition-colors"
        >
          JorgeOliveira
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "#home", label: "Home", Icon: HiHome },
            { href: "#about", label: "About", Icon: HiUser },
            { href: "#portfolio", label: "Portfolio", Icon: HiBriefcase },
            { href: "#services", label: "Services", Icon: HiCog },
            { href: "#contact", label: "Contact", Icon: HiMail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#445964] dark:hover:text-[#3DD9C1] transition-colors duration-300"
            >
              <Icon className="w-5 h-5" /> {label}
            </a>
          ))}
        </nav>

        {/* Idioma + Botão de Tema */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
