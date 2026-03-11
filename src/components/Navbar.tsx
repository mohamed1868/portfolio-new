import { Moon, Sun, Languages } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { useTheme } from "@/hooks/useTheme";
import logo from "../../public/favicon.ico"

const Navbar = () => {
  const { t, toggleLang, isRTL } = useI18n();
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <img src={logo} alt="logo" width={70} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer"/>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {(["experience", "projects", "toolkit", "contact"] as const).map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

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
            <span className="hidden sm:inline">{t.switchLang}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;