// ═══════════════════════════════════════════════════════════════════
// CONNECT HUB — All social media, messaging, location, and profiles
// ═══════════════════════════════════════════════════════════════════

import { ScrollReveal } from "./ScrollReveal";
import {
  Instagram, Linkedin, Mail, MessageCircle, MapPin,
  Github, ExternalLink,
} from "lucide-react";

const whatsappNumber = "919876543210";
const whatsappMessage = encodeURIComponent("Hi Ash! I found your portfolio and would love to connect.");

interface SocialConnectProps {
  variant?: "full" | "compact";
  /** Show SkillCeta map instead of Ashoka */
  showSkillcetaMap?: boolean;
}

const connectItems = [
  { href: "mailto:ash_amar@outlook.com", icon: Mail, label: "ash_amar@outlook.com", desc: "Personal email", gradient: "from-blue-500 to-blue-700" },
  { href: "https://www.linkedin.com/in/amarnath-amarnath/", icon: Linkedin, label: "LinkedIn", desc: "500+ connections · 2,100+ followers", external: true, gradient: "from-[#0A66C2] to-[#004182]" },
  { href: "https://www.instagram.com/_ash_garo_/", icon: Instagram, label: "@_ash_garo_", desc: "Personal Instagram", external: true, gradient: "from-purple-500 to-pink-500" },
  { href: "https://www.instagram.com/skillceta/", icon: Instagram, label: "@skillceta", desc: "SkillCeta on Instagram", external: true, gradient: "from-sky-400 to-blue-600" },
  { href: "https://www.instagram.com/_project_people_talk_/", icon: Instagram, label: "@_project_people_talk_", desc: "Project People Talk", external: true, gradient: "from-rose-400 to-amber-500" },
  { href: "https://github.com/Ash-Amarnath", icon: Github, label: "Ash-Amarnath", desc: "Research code & projects", external: true, gradient: "from-gray-700 to-gray-900" },
  { href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, icon: MessageCircle, label: "WhatsApp", desc: "Quick message", external: true, gradient: "from-[#25D366] to-[#128C7E]" },
  { href: "mailto:skillceta@gmail.com", icon: Mail, label: "skillceta@gmail.com", desc: "SkillCeta inquiries", gradient: "from-sky-500 to-cyan-600" },
  { href: "mailto:projectpeopletalk@gmail.com", icon: Mail, label: "projectpeopletalk@gmail.com", desc: "PPT collaborations", gradient: "from-rose-500 to-orange-500" },
];

export function SocialConnect({ variant = "full", showSkillcetaMap = false }: SocialConnectProps) {
  return (
    <div>
      {/* Colored Connect Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {connectItems.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 50}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative group block rounded-xl overflow-hidden h-24 active:scale-[0.97] transition-transform duration-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-85 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
              </div>
              <div className="relative z-10 h-full flex items-center gap-4 px-5">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-bold text-white block truncate">{item.label}</span>
                  <span className="text-xs text-white/70">{item.desc}</span>
                </div>
                {item.external && (
                  <ExternalLink size={12} className="absolute top-3 right-3 text-white/40 group-hover:text-white/80 transition-colors" />
                )}
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* Google Maps */}
      {variant === "full" && (
        <ScrollReveal delay={300}>
          {showSkillcetaMap ? (
            /* SkillCeta map */
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <MapPin size={14} className="text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">SkillCeta · Kerala & Online</span>
                <a href="https://maps.app.goo.gl/BC3tvzibpTKVZNgv9" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-secondary hover:underline inline-flex items-center gap-1">Open <ExternalLink size={10} /></a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8!2d76.27!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKerala%2C%20India!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="280" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="SkillCeta — Kerala" className="w-full"
              />
            </div>
          ) : (
            /* Ashoka University map (default for Amarnath) */
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <MapPin size={14} className="text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Ashoka University, Sonipat</span>
                <a href="https://maps.app.goo.gl/BC3tvzibpTKVZNgv9" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-secondary hover:underline inline-flex items-center gap-1">Open <ExternalLink size={10} /></a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0440355!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e90a6bffff%3A0x6c76bf8a3b68de05!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="280" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Ashoka University" className="w-full"
              />
            </div>
          )}
        </ScrollReveal>
      )}
    </div>
  );
}
