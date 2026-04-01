// ═══════════════════════════════════════════════════════════════════
// BACKGROUND ELEMENTS — Floating decorative shapes for visual fun
// ═══════════════════════════════════════════════════════════════════

import { useEffect, useRef } from "react";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] animate-float-slow"
        style={{
          background: "radial-gradient(circle, hsl(220 60% 50%) 0%, transparent 70%)",
          top: "10%",
          left: "-5%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] animate-float-medium"
        style={{
          background: "radial-gradient(circle, hsl(350 60% 55%) 0%, transparent 70%)",
          top: "40%",
          right: "-8%",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.03] animate-float-fast"
        style={{
          background: "radial-gradient(circle, hsl(38 60% 55%) 0%, transparent 70%)",
          bottom: "15%",
          left: "20%",
        }}
      />
      {/* Subtle grid dots */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 30% 40%) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
