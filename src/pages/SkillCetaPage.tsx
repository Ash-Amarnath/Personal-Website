// ═══════════════════════════════════════════════════════════════════
// SKILLCETA PAGE
//
// TO UPDATE STATS: Change the `end` values in the AnimatedCounter
// components in the "Impact numbers" section below.
//
// TO ADD A NEW OFFERING: Add an object to the `offerings` array.
//
// TO ADD EVENTS: Add events in src/data/content.ts with org: "skillceta"
//
// TO UPDATE INSTAGRAM POSTS: Edit instagramPosts in src/data/content.ts
//
// TO CHANGE GOOGLE FORM: Update the googleFormUrl prop in MembershipForm
// ═══════════════════════════════════════════════════════════════════

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section } from "@/components/PageLayout";
import { EventCard } from "@/components/EventCard";
import { InstagramFeed } from "@/components/InstagramFeed";
import { MembershipForm } from "@/components/MembershipForm";
import { HorizontalCardScroll } from "@/components/HorizontalCardScroll";
import { HorizontalEventScroll } from "@/components/HorizontalEventScroll";
import { SocialConnect } from "@/components/SocialConnect";
import { FloatingElement } from "@/components/ParallaxSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { events, instagramPosts, newsItems } from "@/data/content";
import skillcetaLogo from "@/assets/skillceta-icon.png";
import { Users, BookOpen, Lightbulb, Building2, Instagram, GraduationCap, Globe, ArrowRight, Sparkles, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// ── WHO IT'S FOR — Visual cards with icons ──
const audiences = [
  {
    icon: GraduationCap,
    label: "Students",
    desc: "Classes 11–12, undergrads, postgrads, and early researchers across all disciplines",
  },
  {
    icon: Lightbulb,
    label: "Curious minds",
    desc: "Anyone — students, professionals, career-changers — who wants to learn research thinking and data skills",
  },
  {
    icon: Building2,
    label: "Schools & colleges",
    desc: "Institutions that want to embed research culture, host camps, or co-design programs",
  },
  {
    icon: Heart,
    label: "NGOs & organisations",
    desc: "Education, health, and social impact orgs wanting research & data workshops for their teams",
  },
];

// ── WHAT SKILLCETA OFFERS ──
const offerings = [
  {
    icon: Lightbulb,
    title: "Research & AI Camps",
    desc: "Short, intensive camps in schools or colleges that walk students through the full arc from question to simple analysis to sharing findings.",
  },
  {
    icon: BookOpen,
    title: "Workshops & Mini-series",
    desc: "2–6 session formats on research basics, data literacy, and computational thinking for non-technical students.",
  },
  {
    icon: Users,
    title: "Mentored Student Projects",
    desc: "Guiding small groups or individuals through their first self-driven research or data project — supporting applications, portfolios, and genuine learning.",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    desc: "Co-designing longer-term tracks or integrating SkillCeta modules into existing courses, clubs, or campus programs.",
  },
  {
    icon: Globe,
    title: "Study Abroad & Admissions",
    desc: "Guidance on university applications, scholarship strategies, SOP writing, and building competitive academic profiles. 50+ students placed, ₹10M+ in scholarships secured.",
  },
];

const skillcetaEvents = events.filter((e) => e.org === "skillceta");
const skillcetaPosts = instagramPosts.filter((p) => p.org === "skillceta");
const skillcetaNews = newsItems.filter((n) => n.org === "skillceta");

// Split events into upcoming and past
const upcomingEvents = skillcetaEvents.filter((e) => e.type === "upcoming");
const pastEvents = skillcetaEvents.filter((e) => e.type === "past");
// Past events are shown with a limit; add more in content.ts

export default function SkillCetaPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <Section className="pt-20 md:pt-28 sc-hero relative overflow-hidden">
        <FloatingElement className="absolute top-16 right-[8%] hidden lg:block" speed={0.07}>
          <div className="w-16 h-16 rounded-full bg-sky-200/20 border border-sky-200/30" />
        </FloatingElement>

        <div className="flex items-start gap-6 mb-8 relative z-10">
          <ScrollReveal direction="left">
            <img
              src={skillcetaLogo}
              alt="SkillCeta"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-balance sc-text-primary">SkillCeta</h1>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <p className="text-foreground mb-6 max-w-3xl">
            SkillCeta is my research + AI literacy initiative for Indian students. It started as study-abroad guidance and data-science tutoring, and is now evolving into a hub that brings research thinking and computations into schools and colleges. The aim is simple: help students learn to ask questions, work with data, and design projects they can truly call their own.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-3">
            <p className="text-sm text-muted-foreground">
              Open to all backgrounds · Students, professionals, and institutions welcome
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/skillceta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm font-medium text-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            >
              <Instagram size={16} className="text-sky-600" />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Impact Numbers — Updated stats ── */}
      <Section className="py-10 md:py-14 border-y border-border bg-sky-50/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* UPDATE THESE NUMBERS as your impact grows */}
          <ScrollReveal><AnimatedCounter end={300} suffix="+" label="Students taught" /></ScrollReveal>
          <ScrollReveal delay={100}><AnimatedCounter end={50} suffix="+" label="Admissions secured" /></ScrollReveal>
          <ScrollReveal delay={200}><AnimatedCounter end={10} suffix="M+" label="₹ in scholarships" prefix="₹" /></ScrollReveal>
          <ScrollReveal delay={300}><AnimatedCounter end={12} suffix="+" label="Workshops delivered" /></ScrollReveal>
        </div>
      </Section>

      {/* Recent Posts moved down — see below Events section */}

      {/* ── Why SkillCeta Exists — Visual storytelling ── */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-10">Why SkillCeta exists</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "The gap",
              text: "Many Indian students, even at the master's level, have no genuine research exposure and mostly copy or repeat existing projects.",
              color: "text-sky-600",
              bg: "bg-sky-50",
            },
            {
              icon: Sparkles,
              title: "The missing piece",
              text: "High-school and undergrad spaces rarely teach students how to handle data, read research, or defend their own ideas.",
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
            {
              icon: Building2,
              title: "The need",
              text: "Institutions want 'research culture' but often lack practical, hand-holding programs to build it from scratch.",
              color: "text-rose-600",
              bg: "bg-rose-50",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <div className={`${item.bg} border border-border rounded-xl p-6 md:p-8 h-full relative overflow-hidden group hover:shadow-card-hover transition-all duration-300`}>
                <div className="absolute top-0 left-0 w-0 h-1 bg-sky-400 group-hover:w-full transition-all duration-700" />
                <item.icon size={28} className={`${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── Who It's For — Visual cards ── */}
      <Section className="sc-section-alt border-y border-border">
        <ScrollReveal>
          <h2 className="mb-3">Who it's for</h2>
          <p className="text-muted-foreground mb-10 text-sm">No restrictions. No prerequisites. Just curiosity.</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <ScrollReveal key={a.label} delay={i * 80} direction="scale">
              <div className="bg-card border border-border rounded-xl p-5 text-center h-full group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors duration-300">
                    <a.icon size={22} className="text-sky-700" />
                  </div>
                  <h4 className="font-body font-semibold text-primary mb-2 text-sm">{a.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── What SkillCeta Offers (including Study Abroad) ── */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-10">What SkillCeta offers</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <ScrollReveal key={o.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full active:scale-[0.98] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-500" />
                <o.icon size={24} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-primary mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:skillceta@gmail.com?subject=SkillCeta for my institution">
                Talk to Ash about SkillCeta
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="mailto:skillceta@gmail.com?subject=Study Abroad Guidance">
                Study abroad inquiry
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Events — Horizontal scroll carousels ── */}
      <Section className="sc-section-alt border-y border-border">
        <ScrollReveal>
          <h2 className="mb-8">Events</h2>
        </ScrollReveal>

        {upcomingEvents.length > 0 && (
          <div className="mb-10">
            <HorizontalEventScroll
              items={upcomingEvents}
              title="Upcoming Events"
              subtitle="Register now — limited seats"
            />
          </div>
        )}

        {pastEvents.length > 0 && (
          <HorizontalEventScroll
            items={pastEvents}
            title="Past Events"
            subtitle="What we've done so far"
          />
        )}
      </Section>

      {/* ── SkillCeta Updates — Horizontal Card Scroll ── */}
      {skillcetaNews.length > 0 && (
        <Section>
          <HorizontalCardScroll
            items={skillcetaNews}
            title="SkillCeta Updates"
            subtitle="Latest news and announcements"
          />
        </Section>
      )}

      {/* ── Recent Posts — moved down near the end ── */}
      {skillcetaPosts.length > 0 && (
        <Section className="sc-section-alt border-b border-border">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2>Recent posts</h2>
              <a
                href="https://www.instagram.com/skillceta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                View all <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
          <InstagramFeed
            posts={skillcetaPosts}
            accentClass="text-sky-600"
            accountUrl="https://www.instagram.com/skillceta/"
            accountLabel="Follow SkillCeta on Instagram"
          />
        </Section>
      )}

      {/* ── Connect & Map — SkillCeta location ── */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-4">Find SkillCeta</h2>
          <p className="text-muted-foreground mb-8 text-sm">Kerala-based, operating online and across India.</p>
        </ScrollReveal>
        <SocialConnect variant="full" showSkillcetaMap={true} />
      </Section>

      {/* ── Membership ── */}
      <Section className="sc-section-alt border-t border-border">
        <MembershipForm
          org="skillceta"
          accentClass="text-sky-600"
          accentBg="bg-sky-500"
          googleFormUrl="https://docs.google.com/forms/d/e/YOUR_SKILLCETA_FORM_ID/viewform"
        />
      </Section>
    </PageLayout>
  );
}
