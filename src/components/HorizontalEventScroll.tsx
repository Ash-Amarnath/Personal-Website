import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { Event } from "@/data/content";

interface Props {
  items: Event[];
  title?: string;
  subtitle?: string;
  gradients?: string[];
  viewAllLink?: string;
}

const defaultGradients = [
  "from-sky-500 to-blue-600",
  "from-teal-500 to-emerald-600",
  "from-indigo-500 to-blue-700",
  "from-cyan-500 to-sky-600",
  "from-violet-500 to-indigo-600",
];

const warmGradients = [
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-fuchsia-500 to-rose-600",
  "from-red-400 to-rose-600",
  "from-orange-500 to-amber-600",
];

export function HorizontalEventScroll({ items, title = "Events", subtitle, gradients, viewAllLink }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval>>();

  // Determine gradient palette
  const palette = gradients || defaultGradients;

  useEffect(() => {
    if (isPaused || isDragging) { clearInterval(autoRef.current); return; }
    autoRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;
      if (sl + clientWidth >= scrollWidth - 10) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      else scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }, 3500);
    return () => clearInterval(autoRef.current);
  }, [isPaused, isDragging]);

  const scrollByDir = useCallback((dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0)); setScrollLeft(scrollRef.current?.scrollLeft || 0); };
  const onMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - (scrollRef.current?.offsetLeft || 0); scrollRef.current!.scrollLeft = scrollLeft - (x - startX); };
  const onMouseUp = () => setIsDragging(false);

  if (items.length === 0) return null;

  return (
    <div>
      <ScrollReveal>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-display tracking-tight">{title}</h3>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scrollByDir(-1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all" aria-label="Scroll left"><ChevronLeft size={16} /></button>
            <button onClick={() => scrollByDir(1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-all" aria-label="Scroll right"><ChevronRight size={16} /></button>
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
        {items.map((event, i) => {
          const gradient = palette[i % palette.length];
          const dateObj = new Date(event.date);
          const dateStr = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
          const isPast = event.type === "past";

          return (
            <div key={event.id} className="shrink-0">
              <div className={`relative min-w-[290px] max-w-[310px] h-[200px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-5 flex flex-col justify-between group hover:scale-[1.03] transition-transform duration-300 ${isPast ? "opacity-80 hover:opacity-100" : ""}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 animate-shimmer" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    {isPast ? (
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] bg-black/20 text-white/80 px-2 py-0.5 rounded-sm">Past</span>
                    ) : (
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] bg-white/20 text-white px-2 py-0.5 rounded-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                        Upcoming
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-display text-sm md:text-base leading-snug line-clamp-2 font-medium">{event.title}</h4>
                </div>
                <div className="relative z-10">
                  <p className="text-white/60 text-xs line-clamp-2 mb-2">{event.description}</p>
                  <div className="flex items-center gap-3 text-[10px] text-white/70">
                    <span className="flex items-center gap-1"><Calendar size={10} />{dateStr}</span>
                    <span className="flex items-center gap-1"><MapPin size={10} />{event.location}</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {viewAllLink && (
        <ScrollReveal delay={200}>
          <div className="mt-4 text-center">
            <a href={viewAllLink} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View all events <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
