// ═══════════════════════════════════════════════════════════════════
// NEWS SECTION — Creative newspaper-style layout for "What's Happening"
//
// TO ADD NEWS: Add items to newsItems in src/data/content.ts
// Items with `content` field become clickable with a detail page.
// Items with `link` field link to external URLs or internal routes.
// ═══════════════════════════════════════════════════════════════════

import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Youtube, FileText, Mic, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { NewsItem } from "@/data/content";

interface NewsSectionProps {
  items: NewsItem[];
  title?: string;
  viewMoreLink?: string;
  maxItems?: number;
}

export function NewsSection({ items, title = "What's Happening", viewMoreLink, maxItems }: NewsSectionProps) {
  const displayItems = maxItems ? items.slice(0, maxItems) : items;
  const hasMore = maxItems ? items.length > maxItems : false;

  return (
    <div>
      {/* ── Newspaper Header ── */}
      <ScrollReveal>
        <div className="text-center mb-8 relative">
          {/* Top rule */}
          <div className="h-[3px] bg-primary mb-3" />
          <div className="h-[1px] bg-primary/40 mb-4" />
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <Newspaper size={18} className="text-gold" />
            <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase">{title}</h2>
            <Newspaper size={18} className="text-gold" />
          </div>
          
          <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-body">
            Updates from Ash's world · Research · Education · Community
          </p>
          
          {/* Bottom rule */}
          <div className="h-[1px] bg-primary/40 mt-4" />
          <div className="h-[3px] bg-primary mt-1" />
        </div>
      </ScrollReveal>

      {/* ── Newspaper Grid Layout ── */}
      <div className="grid md:grid-cols-12 gap-[1px] bg-border">
        {/* Lead story — large left column */}
        {displayItems[0] && (
          <ScrollReveal className="md:col-span-7 bg-card">
            <NewsCard item={displayItems[0]} variant="headline" />
          </ScrollReveal>
        )}

        {/* Sidebar — stacked stories */}
        <div className="md:col-span-5 grid gap-[1px] bg-border">
          {displayItems.slice(1, 3).map((item, i) => (
            <ScrollReveal key={item.id} delay={(i + 1) * 80} className="bg-card">
              <NewsCard item={item} variant="sidebar" />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row — equal columns like newspaper below-the-fold */}
        {displayItems.length > 3 && (
          <>
            {displayItems.slice(3, 6).map((item, i) => (
              <ScrollReveal key={item.id} delay={(i + 3) * 80} className="md:col-span-4 bg-card">
                <NewsCard item={item} variant="compact" />
              </ScrollReveal>
            ))}
          </>
        )}
      </div>

      {/* ── View More Button ── */}
      {(hasMore || viewMoreLink) && (
        <ScrollReveal delay={200}>
          <div className="mt-8 text-center">
            <div className="h-[1px] bg-border mb-6" />
            <Link
              to={viewMoreLink || "/amarnath/writings"}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              View all updates
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            {hasMore && (
              <p className="text-xs text-muted-foreground mt-3">
                Showing {displayItems.length} of {items.length} stories
              </p>
            )}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

// ── News Card with multiple variants ──
function NewsCard({ item, variant = "compact" }: { item: NewsItem; variant?: "headline" | "sidebar" | "compact" }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const orgLabel = item.org === "skillceta" ? "SkillCeta" : item.org === "ppt" ? "Project People Talk" : "Personal";
  const orgColor = item.org === "skillceta" ? "text-sky-700 bg-sky-50" : item.org === "ppt" ? "text-rose-700 bg-rose-50" : "text-gold bg-amber-50";

  const MediaIcon = item.mediaType === "video" ? Youtube
    : item.mediaType === "interview" ? Mic
    : item.mediaType === "article" ? FileText
    : null;

  const detailLink = item.content ? `/news/${item.id}` : item.link;
  const isClickable = !!detailLink;

  const content = (
    <div className={`h-full flex flex-col ${isClickable ? "group cursor-pointer" : ""} ${
      variant === "headline" ? "p-6 md:p-8" : variant === "sidebar" ? "p-5" : "p-4 md:p-5"
    }`}>
      {/* Org badge + date row */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-[10px] uppercase tracking-[0.15em] font-bold px-2 py-0.5 ${orgColor}`}>
          {orgLabel}
        </span>
        {MediaIcon && (
          <span className="text-muted-foreground">
            <MediaIcon size={12} />
          </span>
        )}
        <span className="text-[11px] text-muted-foreground font-body">{dateStr}</span>
      </div>

      {/* Title */}
      <h3 className={`text-primary leading-snug mb-2 group-hover:text-secondary transition-colors duration-200 flex-1 font-display ${
        variant === "headline" ? "text-xl md:text-2xl" : variant === "sidebar" ? "text-sm md:text-base" : "text-sm"
      }`}>
        {item.title}
      </h3>

      {/* Excerpt — show more text for headline */}
      <p className={`text-muted-foreground leading-relaxed ${
        variant === "headline" ? "text-sm md:text-base" : "text-xs line-clamp-2"
      }`}>
        {item.excerpt}
      </p>

      {/* Read more link */}
      {isClickable && (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary mt-3 group-hover:underline uppercase tracking-wider">
          Read more <ArrowRight size={10} />
        </span>
      )}

      {/* Decorative bottom border on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500" />
    </div>
  );

  const wrapperClass = "block h-full relative overflow-hidden";

  if (detailLink) {
    const isExternal = detailLink.startsWith("http");
    if (isExternal) {
      return <a href={detailLink} target="_blank" rel="noopener noreferrer" className={wrapperClass}>{content}</a>;
    }
    return <Link to={detailLink} className={wrapperClass}>{content}</Link>;
  }
  return <div className={wrapperClass}>{content}</div>;
}
