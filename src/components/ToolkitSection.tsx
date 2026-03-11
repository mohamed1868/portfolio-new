import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2,
  Layout,
  Palette,
  Wrench,
  Server,
  Brain,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ToolkitGroup {
  key:
    | "languages"
    | "frameworks"
    | "ui"
    | "tools"
    | "platforms"
    | "cs"
    | "soft";
  items: string[];
  badgeClass: string;
  icon: LucideIcon;
  iconBg: string;
}

const TOOLKIT_DATA: ToolkitGroup[] = [
  {
    key: "languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Sass"],
    badgeClass: "",
    icon: Code2,
    iconBg: "var(--gradient-primary)",
  },
  {
    key: "frameworks",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Redux Persist",
      "React Router",
      "React Query",
      "Zod",
      "i18next",
    ],
    badgeClass: "badge-teal",
    icon: Layout,
    iconBg: "var(--gradient-secondary)",
  },
  {
    key: "ui",
    items: ["MUI", "Ant Design", "Bootstrap", "Tailwind CSS", "Swiper"],
    badgeClass: "badge-pink",
    icon: Palette,
    iconBg: "var(--gradient-accent)",
  },
  {
    key: "tools",
    items: ["Git", "GitHub", "GitLab", "RESTful APIs"],
    badgeClass: "badge-orange",
    icon: Wrench,
    iconBg: "linear-gradient(135deg, hsl(var(--orange)), hsl(var(--yellow)))",
  },
  {
    key: "platforms",
    items: ["ERPNext (JS/UI)", "Jinja"],
    badgeClass: "badge-blue",
    icon: Server,
    iconBg: "linear-gradient(135deg, hsl(var(--blue)), hsl(var(--primary)))",
  },
  {
    key: "cs",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Functional Programming",
      "Design Patterns",
    ],
    badgeClass: "badge-blue",
    icon: Brain,
    iconBg: "var(--gradient-primary)",
  },
  {
    key: "soft",
    items: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Time Management",
    ],
    badgeClass: "",
    icon: Users,
    iconBg: "var(--gradient-accent)",
  },
];

const ToolkitSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="toolkit" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <h2
          className={`section-heading gradient-text font-heading reveal ${isVisible ? "visible" : ""}`}
        >
          {t("toolkit")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLKIT_DATA.map((group, i) => {
            const Icon = group.icon;
            return (
              <div
                key={group.key}
                className={`card-glass p-6 reveal ${isVisible ? `visible stagger-${Math.min(i + 1, 6)}` : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: group.iconBg }}
                  >
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-muted-foreground">
                    {t(`categories.${group.key}`)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`badge-skill ${group.badgeClass}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
