import { useI18n } from "../../contexts/I18nContext";
import brFlag from "../../assets/flags/br.svg";
import usFlag from "../../assets/flags/us.svg";

const FlagButton = ({ src, alt, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={alt}
    title={alt}
    className={[
      "relative group",
      "w-10 h-6 rounded-lg overflow-hidden", // Proporção mais próxima das bandeiras reais
      "border-2 transition-all duration-200 ease-in-out",
      "shadow-sm hover:shadow-md",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      active
        ? "border-[#3DD9C1] ring-2 ring-[#3DD9C1]/20 shadow-lg scale-105"
        : "border-gray-200 hover:border-gray-300 focus:ring-[#3DD9C1]",
    ].join(" ")}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
    />
    {/* Overlay sutil para feedback visual */}
    <div
      className={[
        "absolute inset-0 transition-opacity duration-200",
        active
          ? "bg-gradient-to-br from-[#3DD9C1]/10 to-transparent"
          : "bg-black/0 group-hover:bg-black/5",
      ].join(" ")}
    />
  </button>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-3">
      <FlagButton
        src={brFlag}
        alt="Português (Brasil)"
        active={language === "pt"}
        onClick={() => setLanguage("pt")}
      />
      <FlagButton
        src={usFlag}
        alt="English (US)"
        active={language === "en"}
        onClick={() => setLanguage("en")}
      />
    </div>
  );
};

export default LanguageSwitcher;
