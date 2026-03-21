import { Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { ref ,isVisible } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <footer ref={ref} className=" mx-auto px-4 relative z-10">
      <div className="border-t border-border pt-8">
        <p
          className={`mb-5 text-sm text-muted-foreground flex items-center justify-center gap-1.5 reveal ${isVisible ? "visible stagger-4" : ""}`}
        >
          Built with <Heart size={14} className="text-accent" /> by {t("name")}
          ©{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
