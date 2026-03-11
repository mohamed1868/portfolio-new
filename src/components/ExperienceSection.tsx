import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className={`section-heading gradient-text font-heading reveal ${isVisible ? "visible" : ""}`}>
          {t("experience")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Work */}
          <div className={`card-glass p-6 md:p-8 reveal ${isVisible ? "visible stagger-1" : ""}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                <Briefcase size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">{t("expTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("expCompany")}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="badge-skill badge-blue text-xs inline-flex items-center gap-1">
                <Calendar size={12} /> {t("expDate")}
              </span>
              <span className="badge-skill badge-teal text-xs inline-flex items-center gap-1">
                <MapPin size={12} /> Cairo, Egypt
              </span>
            </div>

<ul className="space-y-3">
  {(t("expPoints", { returnObjects: true }) as string[]).map((point, i) => (
    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
      <span className="timeline-dot mt-1.5 flex-shrink-0" />
      {point}
    </li>
  ))}
</ul>
          </div>

          {/* Education */}
          <div className={`card-glass p-6 md:p-8 reveal ${isVisible ? "visible stagger-2" : ""}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl" style={{ background: "var(--gradient-secondary)" }}>
                <GraduationCap size={22} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">{t("education")}</h3>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-base">{t("eduDegree")}</p>
              <p className="text-sm text-muted-foreground">{t("eduUniversity")}</p>
              <span className="badge-skill badge-teal text-xs">{t("eduGrade")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;