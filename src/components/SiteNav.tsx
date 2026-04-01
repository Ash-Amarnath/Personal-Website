import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import profileImg from "@/assets/ash-profile.jpg";

const navItems = [
  { label: "Amarnath", path: "/" },
  { label: "SkillCeta", path: "/skillceta" },
  { label: "Project People Talk", path: "/project-people-talk" },
];

export function SiteNav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" || location.pathname.startsWith("/amarnath");
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-card"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={profileImg}
            alt="Ash"
            className="w-9 h-9 rounded-full object-cover border-2 border-gold/40 group-hover:border-gold group-hover:scale-105 transition-all duration-300"
          />
          <span className="font-display text-xl font-medium text-primary">Ash</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm font-medium transition-all duration-200 relative pb-1 hover:translate-y-[-1px] ${
                isActive(item.path)
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:animate-fade-in"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary active:scale-95 transition-transform"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block font-body text-sm font-medium py-2 transition-all duration-200 ${
                isActive(item.path) ? "text-primary" : "text-muted-foreground"
              }`}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.3s ${i * 60}ms, transform 0.3s ${i * 60}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
