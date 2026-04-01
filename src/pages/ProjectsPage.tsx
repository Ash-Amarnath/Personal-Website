import { Link } from "react-router-dom";
import { projects } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section, Breadcrumb } from "@/components/PageLayout";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Section className="pt-12 md:pt-16">
        <Breadcrumb items={[
          { label: "Amarnath", path: "/" },
          { label: "Projects & Research" },
        ]} />
        <ScrollReveal>
          <h1 className="mb-4">Projects & Research</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A growing archive of research work, tools, and education projects — from biomedical AI to community classrooms.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80} direction={i % 2 === 0 ? "up" : "right"}>
              <Link
                to={`/amarnath/projects/${p.id}`}
                className="block bg-card border border-border rounded-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full group cursor-pointer active:scale-[0.98]"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
                <h3 className="text-primary mb-2 group-hover:text-secondary transition-colors duration-200">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{p.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-xs font-medium text-gold">{p.role}</span>
                  <span className="text-secondary text-xs font-medium group-hover:underline flex items-center gap-1">
                    View details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Ash-Amarnath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
            >
              <Github size={16} />
              See all repositories on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>
      </Section>
    </PageLayout>
  );
}
