import { useI18n } from "../../contexts/I18nContext";

const FlagButton = ({ src, alt, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={alt}
    title={alt}
    className={[
      "w-6 h-6 rounded-full overflow-hidden ring-2 transition",
      active ? "ring-[#3DD9C1]" : "ring-transparent hover:ring-gray-300",
    ].join(" ")}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </button>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <FlagButton
        src="/brazil-flag.svg"
        alt="Português"
        active={language === "pt"}
        onClick={() => setLanguage("pt")}
      />
      <FlagButton
        src="/usa-flag.svg"
        alt="English"
        active={language === "en"}
        onClick={() => setLanguage("en")}
      />
    </div>
  );
};

export default LanguageSwitcher;
