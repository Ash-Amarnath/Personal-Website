// ═══════════════════════════════════════════════════════════════════
// CYLINDER SCROLL — Auto-rotating vertical carousel
//
// Displays items in a cylindrical wheel that auto-scrolls on loop.
// The center item is highlighted and scaled up; items above/below
// fade and shrink to create a 3D cylinder illusion.
// ═══════════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";

interface CylinderItem {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  color: string;
}

interface CylinderScrollProps {
  items: CylinderItem[];
  /** ms between auto-rotations */
  interval?: number;
}

export function CylinderScroll({ items, interval = 3000 }: CylinderScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const n = items.length;

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % n);
  }, [n]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(advance, interval);
    return () => clearInterval(timerRef.current);
  }, [advance, interval, isPaused]);

  // Show 5 visible slots: -2, -1, 0 (center), +1, +2
  const getOffset = (idx: number) => {
    let diff = idx - activeIndex;
    // Wrap around
    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;
    return diff;
  };

  return (
    <div
      className="relative h-[340px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade overlays top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="relative h-full flex items-center justify-center">
        {items.map((item, idx) => {
          const offset = getOffset(idx);
          if (Math.abs(offset) > 2) return null;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7;
          const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.25;
          const translateY = offset * 72;
          const rotateX = offset * -15;

          return (
            <div
              key={item.title}
              className="absolute left-0 right-0 px-2 transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: `translateY(${translateY}px) scale(${scale}) perspective(600px) rotateX(${rotateX}deg)`,
                opacity,
                zIndex: isCenter ? 5 : 3 - Math.abs(offset),
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <div
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-500 ${
                  isCenter
                    ? "bg-card border-secondary/30 shadow-lg shadow-secondary/10"
                    : "bg-card/50 border-border/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 ${
                    isCenter ? "scale-110" : ""
                  } ${item.color} bg-muted`}
                >
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <h4 className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
                    isCenter ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {item.title}
                  </h4>
                  {isCenter && (
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-1 animate-fade-in">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-4 bg-secondary" : "w-1 bg-foreground/15"
            }`}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
