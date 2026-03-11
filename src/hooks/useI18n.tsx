import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { Lang, translations } from "@/lib/i18n";

interface I18nContextType {
  lang: Lang;
  t: (typeof translations)["en"] | (typeof translations)["ar"];
  toggleLang: () => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], toggleLang, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
