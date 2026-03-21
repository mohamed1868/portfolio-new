import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Heart,
  Send,
  MapPin,
  Copy,
  Check,
  User,
  Building2,
  FileText,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("mohamedsayed20500@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      access_key: "84be3961-95a8-432f-a781-9eaad46bfc24",
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      message: form.details,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setFormSent(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          details: "",
        });

        setTimeout(() => setFormSent(false), 3000);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: t("network_error"),
        description: t("check_your_connection"),
      });
    }
  };

  const socials = [
    { href: "https://github.com/mohamed1868", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/mohamed-sayed-b38936338",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "tel:+201145694211", icon: Phone, label: "+201145694211" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t("contact_me")}
          </span>
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 max-w-md mx-auto reveal ${isVisible ? "visible stagger-1" : ""}`}
        >
          {t("contact_subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Contact Form */}
          <div className={`reveal ${isVisible ? "visible stagger-2" : ""}`}>
            <form
              onSubmit={handleSubmit}
              className="card-glass rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div className="relative">
                <User
                  size={16}
                  className="absolute top-3.5 start-3.5 text-muted-foreground"
                />
                <input
                  type="text"
                  required
                  placeholder={t("form_name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute top-3.5 start-3.5 text-muted-foreground"
                />
                <input
                  type="email"
                  required
                  placeholder={t("form_email")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <Phone
                  size={16}
                  className="absolute top-3.5 start-3.5 text-muted-foreground"
                />
                <input
                  type="tel"
                  placeholder={t("form_phone")}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <Building2
                  size={16}
                  className="absolute top-3.5 start-3.5 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder={t("form_company")}
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <FileText
                  size={16}
                  className="absolute top-3.5 start-3.5 text-muted-foreground"
                />
                <textarea
                  required
                  rows={4}
                  placeholder={t("form_details")}
                  value={form.details}
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <Send size={16} />
                {formSent ? t("form_success") : t("form_send")}
              </button>
            </form>
          </div>

          {/* Email card + info */}
          <div
            className={`flex flex-col gap-6 reveal ${isVisible ? "visible stagger-3" : ""}`}
          >
            <div className="card-glass rounded-2xl p-6 md:p-8 text-center flex-1 flex flex-col items-center justify-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Mail size={24} className="text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-medium">
                Email
              </p>
              <a
                href="mailto:mohamedsayed20500@gmail.com"
                className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors break-all"
              >
                mohamedsayed20500@gmail.com
              </a>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="mailto:mohamedsayed20500@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
                >
                  <Send size={14} />
                  {t("send_email")}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-sm"
                >
                  {copied ? (
                    <Check size={14} className="text-accent" />
                  ) : (
                    <Copy size={14} />
                  )}
                  {copied ? t("copied") : t("copy_email")}
                </button>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <MapPin size={16} />
                <span className="text-sm">{t("location")}</span>
              </div>
              <div className="flex justify-center gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group/link flex flex-col items-center gap-1.5"
                  >
                    <div className="p-3 rounded-xl card-glass hover:scale-110 hover:shadow-lg transition-all duration-300">
                      <Icon
                        size={20}
                        className="text-muted-foreground group-hover/link:text-primary transition-colors"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
