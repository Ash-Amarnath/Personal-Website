import { Link, useParams } from "react-router-dom";
import { writings } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section, Breadcrumb } from "@/components/PageLayout";
import { ArrowLeft } from "lucide-react";

function WritingDetail() {
  const { id } = useParams();
  const writing = writings.find((w) => w.id === id);

  if (!writing) {
    return (
      <Section>
        <p>Writing not found.</p>
        <Link to="/amarnath/writings" className="text-secondary hover:underline">Back to writings</Link>
      </Section>
    );
  }

  return (
    <PageLayout>
      <Section className="pt-12 md:pt-16">
        <Breadcrumb items={[
          { label: "Amarnath", path: "/" },
          { label: "Writings", path: "/amarnath/writings" },
          { label: writing.title },
        ]} />
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-4">
            {writing.tags.map((t) => (
              <span key={t} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">{writing.title}</h1>
          <p className="text-sm text-muted-foreground mb-10">{new Date(writing.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <article className="prose prose-lg max-w-[70ch]">
            {writing.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6 text-foreground leading-relaxed">{para}</p>
            ))}
          </article>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Link to="/amarnath/writings" className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:underline mt-12">
            <ArrowLeft size={14} /> Back to all writings
          </Link>
        </ScrollReveal>
      </Section>
    </PageLayout>
  );
}

export default function WritingsPage() {
  const { id } = useParams();
  if (id) return <WritingDetail />;

  return (
    <PageLayout>
      <Section className="pt-12 md:pt-16">
        <Breadcrumb items={[
          { label: "Amarnath", path: "/" },
          { label: "Writings" },
        ]} />
        <ScrollReveal>
          <h1 className="mb-4">Writings</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Essays, reflections, and research notes — on teaching, building, being queer, and learning to think with data.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {writings.map((w, i) => (
            <ScrollReveal key={w.id} delay={i * 60}>
              <Link
                to={`/amarnath/writings/${w.id}`}
                className="block bg-card border border-border rounded-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {w.tags.map((t) => (
                    <span key={t} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-auto">
                    {new Date(w.date).toLocaleDateString("en-IN", { year: "numeric", month: "short" })}
                  </span>
                </div>
                <h3 className="text-primary mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
