// src/contexts/I18nContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import pt from "../locales/pt/translation.json";
import en from "../locales/en/translation.json";
import PropTypes from "prop-types";

const I18nContext = createContext(null);

const MESSAGES = { pt, en };

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState("pt"); // default direto

  // Carrega do localStorage após montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang");
      const initial = saved === "en" || saved === "pt" ? saved : "pt";
      setLanguage(initial);
    }
  }, []);

  // Atualiza localStorage quando o idioma mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  const t = useMemo(() => {
    const dict = MESSAGES[language] || MESSAGES.pt;
    return (path) => {
      try {
        const keys = path.split(".");
        let result = dict;

        for (const key of keys) {
          if (result && typeof result === "object" && key in result) {
            result = result[key];
          } else {
            console.warn(`Translation key not found: ${path}`);
            return path;
          }
        }

        return result;
      } catch (error) {
        console.error(`Error translating ${path}:`, error);
        return path;
      }
    };
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t, messages: MESSAGES[language] }),
    [language, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
