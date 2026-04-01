// ═══════════════════════════════════════════════════════════════════
// FLUID CURSOR — Interactive blob that follows the user's cursor
//
// Creates a soft, water-like glow effect that trails the mouse.
// Rendered as a fixed overlay with pointer-events: none.
// ═══════════════════════════════════════════════════════════════════

import { useEffect, useRef } from "react";

export function FluidCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp for fluid feel
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${pos.current.x - 150}px, ${pos.current.y - 150}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[1] opacity-30 mix-blend-soft-light hidden md:block"
      style={{
        background:
          "radial-gradient(circle, hsl(220 60% 50% / 0.4) 0%, hsl(220 60% 50% / 0.1) 40%, transparent 70%)",
        willChange: "transform",
        filter: "blur(30px)",
      }}
    />
  );
}
