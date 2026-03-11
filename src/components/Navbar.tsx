import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import logo from "../../public/favicon.ico";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type Lang = "en" | "ar";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") as Lang | null;
    const initialLang: Lang = savedLang === "ar" ? "ar" : "en";
    setLang(initialLang);
    i18n.changeLanguage(initialLang);
    document.documentElement.dir = i18n.dir(initialLang);
  }, [i18n]);

  const toggleLang = () => {
    const newLang: Lang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = i18n.dir(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navKeys = ["experience", "projects", "toolkit", "contact"] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <img
          src={logo}
          alt="logo"
          width={70}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        />

        {/* أزرار التصفح */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        {/* أزرار التحكم بالثيم واللغة */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleLang}
            className="p-2 rounded-full hover:bg-muted transition-colors flex items-center gap-1 text-xs font-medium"
            aria-label="Toggle language"
          >
            <Languages size={18} />
            <span className="hidden sm:inline">{t("switchLang")}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;