import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TYPING_TITLES = [
  "React Developer",
  "TypeScript Expert",
  "Next.js Builder",
  "UI Engineer",
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TITLES[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % TYPING_TITLES.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div
        className="floating-blob w-[500px] h-[500px] -top-32 -left-32"
        style={{
          background: "hsl(var(--primary))",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="floating-blob w-[400px] h-[400px] top-1/4 -right-24"
        style={{
          background: "hsl(var(--accent))",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />
      <div
        className="floating-blob w-[300px] h-[300px] bottom-20 left-1/4"
        style={{
          background: "hsl(var(--secondary))",
          animation: "float 7s ease-in-out infinite 1s",
        }}
      />

      {/* Spinning geometric decoration */}
      <div className="absolute top-32 right-10 md:right-32 w-48 h-48 md:w-72 md:h-72 opacity-10 animate-spin-slow pointer-events-none">
        <div className="w-full h-full border-2 border-primary rounded-3xl rotate-45" />
        <div className="absolute inset-4 border-2 border-accent rounded-3xl rotate-12" />
        <div className="absolute inset-8 border-2 border-secondary rounded-3xl -rotate-12" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-medium text-muted-foreground">
                {t("location")}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-[1.1]">
              <span className="gradient-text">{t("name")}</span>
            </h1>

            {/* Typing title */}
            <div className="flex items-center gap-2 mb-4 h-10">
              <Terminal size={20} className="text-primary" />
              <span className="text-lg md:text-xl font-heading font-semibold text-foreground">
                {TYPING_TITLES[titleIndex].substring(0, charIndex)}
                <span className="inline-block w-0.5 h-5 bg-primary animate-pulse ml-0.5" />
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {t("heroSubtitle")}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              <a
                href="https://docs.google.com/document/d/1uejhWTYK7S7zvzGSaC8XzyMu421cAUnv/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient inline-flex items-center gap-2"
              >
                <FileText size={16} />
                {t("viewCV")}
              </a>
              <a
                href="mailto:mohamedsayed20500@gmail.com"
                className="btn-outline-glow inline-flex items-center gap-2"
              >
                <Mail size={16} />
                {t("contactMe")}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                {
                  href: "https://github.com/mohamed1868",
                  icon: Github,
                  label: "GitHub",
                  targetBlank: true,
                },
                {
                  href: "https://www.linkedin.com/in/mohamed-sayed-b38936338",
                  icon: Linkedin,
                  label: "LinkedIn",
                  targetBlank: true,
                },
                {
                  href: "mailto:mohamedsayed20500@gmail.com",
                  icon: Mail,
                  label: "Email",
                  targetBlank: false,
                },
                {
                  href: "https://wa.me/201145694211",
                  icon: Phone,
                  label: "WhatsApp",
                  targetBlank: true,
                },
              ].map(({ href, icon: Icon, label, targetBlank }) => (
                <a
                  key={label}
                  href={href}
                  target={targetBlank ? "_blank" : undefined}
                  rel={targetBlank ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl card-glass hover:scale-110 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — visual code card */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Main code card */}
              <div className="card-glass p-6 rounded-2xl backdrop-blur-sm animate-hero-float">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(var(--accent))" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(var(--yellow))" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(var(--teal))" }}
                  />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">
                    portfolio.tsx
                  </span>
                </div>
                <pre className="text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-muted-foreground">{"// "}</span>
                    <span style={{ color: "hsl(var(--teal))" }}>
                      Mohamed Sayed
                    </span>
                    {"\n"}
                    <span style={{ color: "hsl(var(--accent))" }}>
                      const
                    </span>{" "}
                    <span className="text-foreground">developer</span> = {"{\n"}
                    <span style={{ color: "hsl(var(--primary))" }}>skills</span>
                    : [
                    <span style={{ color: "hsl(var(--teal))" }}>"React"</span>,{" "}
                    <span style={{ color: "hsl(var(--teal))" }}>"Next.js"</span>
                    ,{"\n"}
                    <span style={{ color: "hsl(var(--teal))" }}>
                      "TypeScript"
                    </span>
                    ],{"\n"}
                    <span style={{ color: "hsl(var(--primary))" }}>
                      passion
                    </span>
                    :{" "}
                    <span style={{ color: "hsl(var(--teal))" }}>
                      "Building UIs"
                    </span>
                    ,{"\n"}
                    <span style={{ color: "hsl(var(--primary))" }}>
                      available
                    </span>
                    :{" "}
                    <span style={{ color: "hsl(var(--secondary))" }}>true</span>
                    {"\n"}
                  </code>
                </pre>
              </div>

              {/* Floating stats cards */}
              <div
                className="absolute -top-4 -right-4 card-glass px-4 py-2 rounded-xl"
                style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="text-primary" />
                  <span className="text-xs font-semibold">15+ Skills</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 card-glass px-4 py-2 rounded-xl"
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-xs font-semibold">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
