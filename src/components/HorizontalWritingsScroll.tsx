import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Feather } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { Writing } from "@/data/content";

interface Props {
  items: Writing[];
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
}

const cardGradients = [
  "from-slate-700 to-slate-900",
  "from-stone-600 to-stone-800",
  "from-zinc-700 to-zinc-900",
  "from-neutral-600 to-neutral-800",
  "from-gray-700 to-gray-900",
];

export function HorizontalWritingsScroll({ items, title = "Latest Writings", subtitle, viewAllLink }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isPaused || isDragging) { clearInterval(autoRef.current); return; }
    autoRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;
      if (sl + clientWidth >= scrollWidth - 10) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      else scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, [isPaused, isDragging]);

  const scrollBy = useCallback((dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 370, behavior: "smooth" });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0)); setScrollLeft(scrollRef.current?.scrollLeft || 0); };
  const onMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - (scrollRef.current?.offsetLeft || 0); scrollRef.current!.scrollLeft = scrollLeft - (x - startX); };
  const onMouseUp = () => setIsDragging(false);

  return (
    <div>
      <ScrollReveal>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scrollBy(-1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all" aria-label="Scroll left"><ChevronLeft size={18} /></button>
            <button onClick={() => scrollBy(1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all" aria-label="Scroll right"><ChevronRight size={18} /></button>
          </div>
        </div>
      </ScrollReveal>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {items.map((w, i) => {
          const gradient = cardGradients[i % cardGradients.length];
          const dateStr = new Date(w.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
          return (
            <Link key={w.id} to={`/amarnath/writings/${w.id}`} className="shrink-0">
              <div className={`relative min-w-[330px] max-w-[350px] h-[240px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between group hover:scale-[1.03] transition-transform duration-300`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer" />
                </div>
                {/* Decorative quote marks */}
                <div className="absolute top-4 right-5 text-white/10 text-6xl font-serif pointer-events-none">"</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Feather size={13} className="text-white/60" />
                    <div className="flex flex-wrap gap-1.5">
                      {w.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/70 bg-white/10 px-2 py-0.5 rounded-sm">{t}</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-white/50 ml-auto">{dateStr}</span>
                  </div>
                  <h3 className="text-white font-display text-base leading-snug line-clamp-3 font-medium">{w.title}</h3>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <p className="text-white/60 text-xs line-clamp-2 max-w-[240px]">{w.excerpt}</p>
                  <ArrowRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
              </div>
            </Link>
          );
        })}
      </div>

      {viewAllLink && (
        <ScrollReveal delay={200}>
          <div className="mt-6 text-center">
            <Link to={viewAllLink} className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 group">
              View all writings
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
