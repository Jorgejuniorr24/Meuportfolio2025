import { Github, Linkedin, ArrowUp } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import PropTypes from "prop-types";

const SocialLink = ({ icon: Icon, url, color, ariaLabel }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group p-3 rounded-xl bg-gray-800 transition-all duration-300 transform 
                hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 ${color}`}
    aria-label={ariaLabel}
  >
    <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
  </a>
);

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Jorgejuniorr24",
      color: "hover:text-gray-300 hover:bg-gray-800 dark:text-[#60A5FA]",
      ariaLabel: t("footer.social.github"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dev-jorge-oliveira/",
      color: "hover:text-blue-400 hover:bg-blue-950 dark:text-[#60A5FA]",
      ariaLabel: t("footer.social.linkedin"),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative">
        {/* Seção principal */}
        <div
          className="px-4 py-8 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0C0B16" }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3">
              {t("footer.callToAction.title")}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              {t("footer.callToAction.description")}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                         rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 
                         transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span>{t("footer.callToAction.button")}</span>
              <ArrowUp className="ml-2 w-4 h-4 rotate-45 transition-transform group-hover:rotate-90" />
            </a>

            {/* Redes sociais */}
            <div className="pt-4">
              <h3 className="text-base font-semibold text-white mb-4">
                {t("footer.social.title")}
              </h3>
              <div className="flex justify-center space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink key={social.name} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-center items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Jorge Oliveira. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

export default Footer;
