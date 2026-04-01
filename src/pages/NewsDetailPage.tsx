import { Link, useParams, Navigate } from "react-router-dom";
import { newsItems } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section, Breadcrumb } from "@/components/PageLayout";
import { ArrowLeft } from "lucide-react";

export default function NewsDetailPage() {
  const { id } = useParams();
  const item = newsItems.find((n) => n.id === id);

  if (!item || !item.content) return <Navigate to="/" replace />;

  const orgLabel =
    item.org === "skillceta"
      ? "SkillCeta"
      : item.org === "ppt"
      ? "Project People Talk"
      : "Personal";

  const orgColor =
    item.org === "skillceta"
      ? "text-sky-700 bg-sky-50"
      : item.org === "ppt"
      ? "text-rose-700 bg-rose-50"
      : "text-gold bg-amber-50";

  const dateStr = new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PageLayout>
      <Section className="pt-12 md:pt-16">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: item.title },
          ]}
        />

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${orgColor}`}
            >
              {orgLabel}
            </span>
            <span className="text-sm text-muted-foreground">{dateStr}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">
            {item.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <article className="prose prose-lg max-w-[70ch]">
            {item.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6 text-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </article>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:underline mt-12"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
        </ScrollReveal>
      </Section>
    </PageLayout>
  );
}
