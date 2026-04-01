import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section, Breadcrumb } from "@/components/PageLayout";
import { ArrowLeft, ExternalLink, Github, FileText, CheckCircle2 } from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/amarnath/projects" replace />;

  const detail = project.detail;
  const isExternal = project.link?.startsWith("http");

  return (
    <PageLayout>
      <Section className="pt-12 md:pt-16">
        <Breadcrumb
          items={[
            { label: "Amarnath", path: "/" },
            { label: "Projects", path: "/amarnath/projects" },
            { label: project.name },
          ]}
        />

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3">
            {project.name}
          </h1>
          <p className="text-sm text-gold font-medium mb-6">{project.role}</p>
        </ScrollReveal>

        {/* Links bar */}
        {(project.link || detail?.papers) && (
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.link && isExternal && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm font-medium text-primary hover:shadow-card-hover transition-all duration-300 active:scale-[0.97]"
                >
                  <Github size={16} />
                  {project.linkLabel || "View on GitHub"}
                  <ExternalLink size={12} />
                </a>
              )}
              {detail?.papers?.map((paper) => (
                <a
                  key={paper.url}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm font-medium text-primary hover:shadow-card-hover transition-all duration-300 active:scale-[0.97]"
                >
                  <FileText size={16} />
                  {paper.title}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Body content */}
        {detail?.body && (
          <ScrollReveal delay={150}>
            <article className="prose prose-lg max-w-[70ch] mb-12">
              {detail.body.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6 text-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </article>
          </ScrollReveal>
        )}

        {!detail && (
          <ScrollReveal delay={150}>
            <p className="text-foreground leading-relaxed max-w-[70ch] mb-12">
              {project.description}
            </p>
          </ScrollReveal>
        )}

        {/* Highlights */}
        {detail?.highlights && detail.highlights.length > 0 && (
          <ScrollReveal delay={200}>
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12 max-w-2xl">
              <h3 className="text-primary mb-4">Key highlights</h3>
              <ul className="space-y-3">
                {detail.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-gold mt-0.5 shrink-0"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Gallery */}
        {detail?.gallery && detail.gallery.length > 0 && (
          <ScrollReveal delay={250}>
            <h3 className="text-primary mb-4">Gallery</h3>
            <div className="grid gap-6 mb-12">
              {detail.gallery.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <img
                    src={img}
                    alt={`${project.name} — image ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Video */}
        {detail?.videoUrl && (
          <ScrollReveal delay={300}>
            <h3 className="text-primary mb-4">Video</h3>
            <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-card mb-12">
              <iframe
                src={detail.videoUrl}
                title={`${project.name} video`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </ScrollReveal>
        )}

        {/* Back link */}
        <ScrollReveal delay={350}>
          <Link
            to="/amarnath/projects"
            className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:underline mt-4"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
        </ScrollReveal>
      </Section>
    </PageLayout>
  );
}
