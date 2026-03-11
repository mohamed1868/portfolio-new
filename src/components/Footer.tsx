import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <div className={`flex justify-center gap-4 mb-8 reveal ${isVisible ? "visible" : ""}`}>
          {[
            { href: "https://github.com/mohamed1868", icon: Github },
            { href: "https://www.linkedin.com/in/mohamed-sayed-b38936338", icon: Linkedin },
            { href: "mailto:mohamedsayed20500@gmail.com", icon: Mail },
            { href: "tel:+201145694211", icon: Phone },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-4 rounded-2xl card-glass hover:scale-110 transition-all"
            >
              <Icon size={20} className="text-muted-foreground" />
            </a>
          ))}
        </div>
        <p className={`text-sm text-muted-foreground flex items-center justify-center gap-1.5 reveal ${isVisible ? "visible stagger-1" : ""}`}>
          Built with <Heart size={14} className="text-accent" /> by Mohamed Sayed © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;