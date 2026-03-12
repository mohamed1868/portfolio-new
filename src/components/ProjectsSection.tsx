import { ExternalLink, Code2, Plus, FolderOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

interface ProjectData {
  title: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
}

const PROJECTS: ProjectData[] = [
  {
    title: "Restaurant",
    tech: ["React", "JavaScript", "Tailwind"],
    codeUrl: "https://github.com/mohamed1868/Restaurant/",
    demoUrl: "https://mohamed1868.github.io/Restaurant/",
  },
  {
    title: "Graduation-Project",
    tech: ["React", "JavaScript", "AntDesign"],
    codeUrl: "https://github.com/mohamed1868/Graduation-Project",
    demoUrl: "https://drive.google.com/drive/folders/1dnAoc-t1yQO1m8peSDDjAmJUY-8YKwFJ",
  },
  {
    title: "Memory Game",
    tech: ["Html", "Css", "JavaScript"],
    codeUrl: "https://github.com/mohamed1868/memory-game",
    demoUrl: "https://mohamed1868.github.io/memory-game/",
  },
  {
    title: "ToDo-List",
    tech: ["Html", "Css", "JavaScript"],
    codeUrl: "https://github.com/mohamed1868/ToDo-List",
    demoUrl: "https://mohamed1868.github.io/ToDo-List/",
  },
  {
    title: "web-1",
    tech: ["Html", "Css"],
    codeUrl: "https://github.com/mohamed1868/web-1-hosted",
    demoUrl: "https://mohamed1868.github.io/web-1-hosted/",
  },
  {
    title: "web-2",
    tech: ["Html", "Css"],
    codeUrl: "https://github.com/mohamed1868/web-host-2",
    demoUrl: "https://mohamed1868.github.io/web-host-2/",
  },
  {
    title: "web-3",
    tech: ["Html", "Css", "BootStrap"],
    codeUrl: "https://github.com/mohamed1868/wep-Bootstrip-/",
    demoUrl: "https://mohamed1868.github.io/wep-Bootstrip-//",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();



  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className={`section-heading gradient-text font-heading reveal ${isVisible ? "visible" : ""}`}>
          {t("projects")}
        </h2>

        {PROJECTS.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <div key={i} className={`card-glass p-6 group reveal ${isVisible ? `visible stagger-${Math.min(i + 1, 4)}` : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                    <FolderOpen size={16} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(`projectDescriptions.${project.title}`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="badge-skill badge-teal text-xs">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-xs inline-flex items-center gap-1.5 !px-4 !py-2">
                      <Code2 size={14} />
                      {t("viewCode")}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient text-xs inline-flex items-center gap-1.5 !px-4 !py-2">
                      <ExternalLink size={14} />
                      {t("launchDemo")}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`card-glass p-12 text-center reveal-scale ${isVisible ? "visible" : ""}`}>
            <div className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-primary)", animation: "pulse-glow 3s infinite" }}>
              <Plus size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{t("addProject")}</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {t("projectsNote")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
