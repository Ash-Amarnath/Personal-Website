// ═══════════════════════════════════════════════════════════════════
// HORIZONTAL CARD SCROLL — Auto-scrolling horizontal carousel
//
// Displays news/update items as colorful cards that scroll
// horizontally. Users can also drag/swipe or use arrows.
// ═══════════════════════════════════════════════════════════════════

import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Youtube, FileText, Mic, Newspaper } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { NewsItem } from "@/data/content";

interface HorizontalCardScrollProps {
  items: NewsItem[];
  title?: string;
  subtitle?: string;
  viewMoreLink?: string;
  /** Auto-scroll speed in ms */
  autoScrollSpeed?: number;
}

// Gradient palettes for cards
const cardGradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-violet-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-cyan-600",
  "from-fuchsia-500 to-purple-600",
  "from-lime-500 to-green-600",
];

const orgLabels: Record<string, string> = {
  skillceta: "SkillCeta",
  ppt: "Project People Talk",
  personal: "Personal",
};

export function HorizontalCardScroll({
  items,
  title = "What's Happening",
  subtitle,
  viewMoreLink,
  autoScrollSpeed = 3000,
}: HorizontalCardScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval>>();

  // Auto-scroll
  useEffect(() => {
    if (isPaused || isDragging) {
      clearInterval(autoRef.current);
      return;
    }
    autoRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;
      if (sl + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, autoScrollSpeed);
    return () => clearInterval(autoRef.current);
  }, [isPaused, isDragging, autoScrollSpeed]);

  const scrollBy = useCallback((dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }, []);

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollRef.current!.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <div>
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight">{title}</h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Scrollable card track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {items.map((item, i) => {
          const gradient = cardGradients[i % cardGradients.length];
          return (
            <NewsCard key={item.id} item={item} gradient={gradient} index={i} />
          );
        })}
      </div>

      {/* View all */}
      {viewMoreLink && (
        <ScrollReveal delay={200}>
          <div className="mt-6 text-center">
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

function NewsCard({ item, gradient, index }: { item: NewsItem; gradient: string; index: number }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const MediaIcon = item.mediaType === "video" ? Youtube
    : item.mediaType === "interview" ? Mic
    : item.mediaType === "article" ? FileText
    : Newspaper;

  const detailLink = item.content ? `/news/${item.id}` : item.link;
  const isExternal = detailLink?.startsWith("http");

  const inner = (
    <div
      className={`relative min-w-[300px] max-w-[320px] h-[220px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between group hover:scale-[1.03] transition-transform duration-300 shrink-0`}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <MediaIcon size={13} className="text-white/80" />
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
            {orgLabels[item.org] || item.org}
          </span>
          <span className="text-[10px] text-white/50">·</span>
          <span className="text-[10px] text-white/60">{dateStr}</span>
        </div>
        <h3 className="text-white font-display text-base md:text-lg leading-snug line-clamp-3 font-medium">
          {item.title}
        </h3>
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <p className="text-white/70 text-xs line-clamp-1 max-w-[200px]">{item.excerpt}</p>
        {detailLink && (
          <ArrowRight size={16} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0" />
        )}
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5 pointer-events-none" />
    </div>
  );

  if (!detailLink) return inner;
  if (isExternal) return <a href={detailLink} target="_blank" rel="noopener noreferrer" className="shrink-0">{inner}</a>;
  return <Link to={detailLink} className="shrink-0">{inner}</Link>;
}
