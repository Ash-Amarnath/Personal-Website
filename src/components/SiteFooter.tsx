import { Mail, Linkedin, Instagram } from "lucide-react";

const prompts = [
  "We're a school/college interested in a SkillCeta camp.",
  "We're a queer or gender collective interested in a Project People Talk collaboration.",
  "I'm a student who wants support with my first research project.",
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Philosophy */}
          <div>
            <h3 className="text-primary-foreground text-lg font-display font-medium mb-4">Reach out</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-none">
              Whether you're an educator, a student, a researcher, or someone building community — I'd love to hear from you. Let's talk about research, teaching, and the questions that matter.
            </p>
          </div>

          {/* Example prompts */}
          <div>
            <h3 className="text-primary-foreground text-lg font-display font-medium mb-4">What to write about</h3>
            <ul className="space-y-2">
              {prompts.map((p, i) => (
                <li key={i} className="text-primary-foreground/70 text-sm leading-relaxed">
                  "{p}"
                </li>
              ))}
            </ul>
          </div>

          {/* Links — updated emails */}
          <div>
            <h3 className="text-primary-foreground text-lg font-display font-medium mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:ash_amar@outlook.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
              >
                <Mail size={16} />
                ash_amar@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/amarnath-amarnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/_ash_garo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Amarnath. Built with care.
        </div>
      </div>
    </footer>
  );
}
