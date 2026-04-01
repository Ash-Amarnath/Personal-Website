// ═══════════════════════════════════════════════════════════════════
// NEWSPAPER SECTION — Open newspaper with page-flip on corner & swipe
//
// Displays news items as an open double-page newspaper spread.
// Users can:
//   1. Click the bottom-right corner fold to flip to next page
//   2. Swipe left/right on touch devices
//   3. Use dot navigation
// ═══════════════════════════════════════════════════════════════════

import { useState, useCallback, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Youtube, FileText, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { NewsItem } from "@/data/content";

interface NewspaperSectionProps {
  items: NewsItem[];
  title?: string;
  viewMoreLink?: string;
  storiesPerPage?: number;
}

const STORIES_PER_PAGE = 4;

export function NewspaperSection({
  items,
  title = "What's Happening",
  viewMoreLink,
  storiesPerPage = STORIES_PER_PAGE,
}: NewspaperSectionProps) {
  const totalPages = Math.max(1, Math.ceil(items.length / storiesPerPage));
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState<"idle" | "flipping-next" | "flipping-prev">("idle");
  const touchStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pageItems = useMemo(
    () => items.slice(currentPage * storiesPerPage, (currentPage + 1) * storiesPerPage),
    [items, currentPage, storiesPerPage]
  );

  const flipTo = useCallback(
    (direction: "next" | "prev") => {
      if (flipState !== "idle") return;
      const next = direction === "next"
        ? Math.min(currentPage + 1, totalPages - 1)
        : Math.max(currentPage - 1, 0);
      if (next === currentPage) return;

      setFlipState(direction === "next" ? "flipping-next" : "flipping-prev");
      setTimeout(() => {
        setCurrentPage(next);
        setFlipState("idle");
      }, 600);
    },
    [currentPage, totalPages, flipState]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 60) {
      flipTo(delta > 0 ? "next" : "prev");
    }
  };

  const todayStr = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div>
      {/* ── Newspaper Masthead ── */}
      <ScrollReveal>
        <div className="text-center mb-6">
          <div className="h-[3px] bg-foreground mb-[3px]" />
          <div className="h-[1px] bg-foreground/40 mb-4" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-body mb-2">
            {todayStr} · Updates from Ash's world
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-center">
            {title}
          </h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body mt-2 mb-4">
            Research · Education · Community · Gender & Sexuality
          </p>
          <div className="h-[1px] bg-foreground/40 mb-[3px]" />
          <div className="h-[3px] bg-foreground" />
        </div>
      </ScrollReveal>

      {/* ── Page indicator ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">
            Page {currentPage + 1} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => flipTo("prev")}
              disabled={currentPage === 0 || flipState !== "idle"}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => flipTo("next")}
              disabled={currentPage === totalPages - 1 || flipState !== "idle"}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* ── Open Newspaper Spread ── */}
      <div
        ref={containerRef}
        className="newspaper-perspective select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`newspaper-spread ${
            flipState === "flipping-next"
              ? "animate-page-flip-out"
              : flipState === "flipping-prev"
              ? "animate-page-flip-in"
              : ""
          }`}
        >
          {/* Newspaper paper texture */}
          <div className="newspaper-paper">
            {/* Spine / center fold line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden md:block z-20" />
            {/* Subtle spine shadow */}
            <div className="absolute top-0 left-1/2 -translate-x-[6px] w-3 h-full bg-gradient-to-r from-transparent via-black/[0.03] to-transparent hidden md:block z-10" />

            {/* Two-page spread layout */}
            <div className="grid md:grid-cols-2 min-h-[420px]">
              {/* LEFT PAGE */}
              <div className="p-5 md:p-8 md:pr-6 relative">
                {/* Page number */}
                <span className="absolute top-3 left-4 text-[9px] text-foreground/30 font-body">
                  {currentPage * 2 + 1}
                </span>
                {pageItems[0] && <NewsStory item={pageItems[0]} variant="lead" />}
                {pageItems[1] && (
                  <>
                    <div className="h-[1px] bg-foreground/10 my-4" />
                    <NewsStory item={pageItems[1]} variant="column" />
                  </>
                )}
              </div>

              {/* RIGHT PAGE */}
              <div className="p-5 md:p-8 md:pl-6 border-t md:border-t-0 md:border-l border-foreground/[0.06] relative">
                <span className="absolute top-3 right-4 text-[9px] text-foreground/30 font-body">
                  {currentPage * 2 + 2}
                </span>
                {pageItems[2] && <NewsStory item={pageItems[2]} variant="column" />}
                {pageItems[3] && (
                  <>
                    <div className="h-[1px] bg-foreground/10 my-4" />
                    <NewsStory item={pageItems[3]} variant="column" />
                  </>
                )}

                {/* ── Corner fold — click to flip ── */}
                {currentPage < totalPages - 1 && (
                  <button
                    onClick={() => flipTo("next")}
                    className="absolute bottom-0 right-0 w-16 h-16 group cursor-pointer z-30"
                    aria-label="Flip to next page"
                  >
                    {/* Fold triangle */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-[hsl(38,30%,82%)] group-hover:border-b-[hsl(38,40%,74%)] transition-colors duration-300 shadow-md" />
                    {/* Fold underside */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-[hsl(40,30%,90%)] opacity-60" />
                    {/* Arrow hint */}
                    <ArrowRight size={10} className="absolute bottom-2 right-2 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Paper aging texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M5 0h1L0 5V4zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Swipe hint on mobile ── */}
      {totalPages > 1 && (
        <p className="text-[10px] text-center text-muted-foreground/50 mt-2 md:hidden font-body">
          ← Swipe to turn pages →
        </p>
      )}

      {/* ── Page dots ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== currentPage && flipState === "idle") {
                  setFlipState(i > currentPage ? "flipping-next" : "flipping-prev");
                  setTimeout(() => {
                    setCurrentPage(i);
                    setFlipState("idle");
                  }, 600);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentPage ? "bg-foreground w-6" : "bg-foreground/20 hover:bg-foreground/40 w-2"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── View all updates ── */}
      {viewMoreLink && (
        <ScrollReveal delay={200}>
          <div className="mt-8 text-center">
            <div className="h-[1px] bg-foreground/10 mb-6" />
            <Link
              to={viewMoreLink}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              View all updates
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

// ── Individual News Story ──
function NewsStory({ item, variant }: { item: NewsItem; variant: "lead" | "column" }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  const orgLabel = item.org === "skillceta" ? "SkillCeta" : item.org === "ppt" ? "Project People Talk" : "Personal";

  const MediaIcon = item.mediaType === "video" ? Youtube
    : item.mediaType === "interview" ? Mic
    : item.mediaType === "article" ? FileText
    : Newspaper;

  const detailLink = item.content ? `/news/${item.id}` : item.link;
  const isExternal = detailLink?.startsWith("http");

  const inner = (
    <div className="group">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <MediaIcon size={11} className="text-muted-foreground" />
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{orgLabel}</span>
        <span className="text-[10px] text-muted-foreground/60">·</span>
        <span className="text-[10px] text-muted-foreground font-body">{dateStr}</span>
      </div>
      <h3 className={`font-display leading-snug text-foreground group-hover:text-secondary transition-colors duration-200 mb-2 ${
        variant === "lead" ? "text-xl md:text-2xl lg:text-3xl font-medium" : "text-sm md:text-base"
      }`}>
        {item.title}
      </h3>
      <p className={`text-muted-foreground leading-relaxed ${
        variant === "lead" ? "text-sm md:text-base" : "text-xs line-clamp-3"
      }`}>
        {item.excerpt}
      </p>
      {detailLink && (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary mt-2 group-hover:underline uppercase tracking-wider">
          Read more <ArrowRight size={9} />
        </span>
      )}
    </div>
  );

  if (!detailLink) return <div>{inner}</div>;
  if (isExternal) return <a href={detailLink} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <Link to={detailLink}>{inner}</Link>;
}
