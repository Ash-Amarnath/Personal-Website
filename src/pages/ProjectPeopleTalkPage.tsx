// ═══════════════════════════════════════════════════════════════════
// PROJECT PEOPLE TALK PAGE
//
// TO UPDATE INSTAGRAM POSTS: Edit instagramPosts in src/data/content.ts
// TO ADD EVENTS: Add events in src/data/content.ts with org: "ppt"
// TO ADD NEWS: Add newsItems in src/data/content.ts with org: "ppt"
// TO CHANGE GOOGLE FORM: Update the googleFormUrl prop in MembershipForm
// ═══════════════════════════════════════════════════════════════════

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section } from "@/components/PageLayout";
import { EventCard } from "@/components/EventCard";
import { HorizontalEventScroll } from "@/components/HorizontalEventScroll";
import { InstagramFeed } from "@/components/InstagramFeed";
import { MembershipForm } from "@/components/MembershipForm";
import { NewsSection } from "@/components/NewsSection";
import { FloatingElement } from "@/components/ParallaxSection";
import { events, instagramPosts, newsItems } from "@/data/content";
import pptLogo from "@/assets/ppt-logo.jpg";
import { Instagram, Linkedin, ExternalLink, Mic, Search, BookOpen, ArrowRight, Shield } from "lucide-react";

// ── Themes PPT explores ──
const themes = [
  {
    icon: BookOpen,
    title: "Queer everyday life",
    desc: "Small pieces on friendship, love, housing, and navigating institutions as a queer person in India.",
  },
  {
    icon: Shield,
    title: "Bodies, illness, and care",
    desc: "Reflections and data around how people experience health systems — who gets care, who doesn't, and why.",
  },
  {
    icon: Search,
    title: "Institutional life",
    desc: "How classrooms, offices, and clinics shape identity and safety — and what changes when we notice.",
  },
  {
    icon: Mic,
    title: "Sex education & awareness",
    desc: "Comprehensive conversations about consent, health, relationships, and breaking taboos through honest dialogue.",
  },
];

const collabItems = [
  "Organising conversations, panels, or workshops on gender and sexuality",
  "Co-creating zines, campaigns, or research-backed storytelling projects",
  "Integrating these perspectives into campus or organisational programming",
  "Participating in our ongoing research on sexual violence reporting barriers",
];

const pptEvents = events.filter((e) => e.org === "ppt");
const pptPosts = instagramPosts.filter((p) => p.org === "ppt");
const pptNews = newsItems.filter((n) => n.org === "ppt");

const upcomingEvents = pptEvents.filter((e) => e.type === "upcoming");
const pastEvents = pptEvents.filter((e) => e.type === "past");

export default function ProjectPeopleTalkPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <Section className="pt-20 md:pt-28 ppt-hero relative overflow-hidden">
        <FloatingElement className="absolute top-20 right-[12%] hidden lg:block" speed={0.06}>
          <div className="w-14 h-14 rounded-full bg-rose-200/20 border border-rose-200/30" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 left-[8%] hidden lg:block" speed={0.09}>
          <div className="w-10 h-10 rounded-lg bg-amber-200/15 border border-amber-200/20 rotate-45" />
        </FloatingElement>

        <div className="flex items-start gap-6 mb-8 relative z-10">
          <ScrollReveal direction="left">
            <img src={pptLogo} alt="Project People Talk" className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-balance ppt-text-primary">Project People Talk</h1>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <p className="text-foreground mb-6 max-w-3xl">
            Project People Talk is a slow, research-shaped space about gender, sexuality, relationships, care, and mental health. It lives through writing, conversations, visuals, and reels — drawing from both research methods and lived experience.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            PPT started as a podcast initiative covering sex education, queer experiences, and mental health conversations. Over the past year, it has evolved from podcasting into hands-on research — currently studying the reporting barriers of sexual violence in Kerala, India.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/_project_people_talk_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm font-medium text-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            >
              <Instagram size={16} className="text-rose-600" />
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/project-people-talk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 text-sm font-medium text-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Recent Posts — early visibility ── */}
      <Section className="ppt-section-alt border-y border-border">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2>Recent posts</h2>
            <a
              href="https://www.instagram.com/_project_people_talk_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              View all <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
        <InstagramFeed
          posts={pptPosts}
          accentClass="text-rose-600"
          accountUrl="https://www.instagram.com/_project_people_talk_/"
          accountLabel="Follow Project People Talk on Instagram"
        />
      </Section>

      {/* ── Journey: From Podcast to Research ── */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-10">Our journey</h2>
        </ScrollReveal>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 via-amber-400 to-rose-400 opacity-30" />

          {[
            {
              year: "2024",
              title: "The Podcast Era",
              desc: "PPT launched as a podcast covering sex education, queer experiences, relationships, and mental health. Over the course of a year, we produced episodes that broke taboos and started honest conversations about topics often ignored in Indian spaces.",
              icon: Mic,
              color: "bg-rose-100 text-rose-700",
            },
            {
              year: "2025",
              title: "Evolution to Research",
              desc: "Recognising that conversation alone wasn't enough, PPT evolved into hands-on research. We began studying the reporting barriers of sexual violence — understanding why survivors don't report and how these barriers differ across sexual orientations.",
              icon: Search,
              color: "bg-amber-100 text-amber-700",
            },
            {
              year: "2025–Now",
              title: "Kerala Research Project",
              desc: "Our current major project examines the reporting barriers of sexual violence among heterosexual and sexual minority people in Kerala, India. This research explores institutional barriers, social stigma, and the gaps in support systems.",
              icon: Shield,
              color: "bg-sky-100 text-sky-700",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 150}>
              <div className="flex gap-6 md:gap-8 mb-10 relative">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${item.color} flex items-center justify-center shrink-0 z-10 shadow-sm`}>
                  <item.icon size={22} />
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-primary mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── Themes ── */}
      <Section className="ppt-section-alt border-y border-border">
        <ScrollReveal>
          <h2 className="mb-10">Themes we explore</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {themes.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-xl p-5 h-full relative overflow-hidden group hover:shadow-card-hover transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center mb-3 group-hover:bg-rose-100 transition-colors duration-300">
                  <t.icon size={18} className="text-rose-600" />
                </div>
                <h3 className="text-primary mb-2 pt-1 text-base">{t.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                <a
                  href="https://www.instagram.com/_project_people_talk_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 text-[11px] font-medium hover:underline inline-flex items-center gap-1 group/link"
                >
                  Explore <ExternalLink size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── Current Research Highlight ── */}
      <Section>
        <ScrollReveal>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-200/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-rose-600 mb-3 block">Current Research</span>
              <h2 className="mb-4 text-2xl md:text-3xl">Reporting Barriers of Sexual Violence in Kerala</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl text-sm md:text-base leading-relaxed">
                This ongoing research examines why survivors of sexual violence — both heterosexual and sexual minority individuals — face barriers to reporting in Kerala, India. We explore institutional gaps, social stigma, fear of re-victimisation, and how these barriers differ across sexual orientations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:projectpeopletalk@gmail.com?subject=Research Collaboration — Sexual Violence Reporting Barriers">
                    Get involved in this research
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Events — Horizontal scroll carousels ── */}
      <Section className="ppt-section-alt border-y border-border">
        <ScrollReveal>
          <h2 className="mb-8">Events</h2>
        </ScrollReveal>

        {upcomingEvents.length > 0 && (
          <div className="mb-10">
            <HorizontalEventScroll
              items={upcomingEvents}
              title="Upcoming Events"
              subtitle="Join the conversation"
              gradients={["from-rose-500 to-pink-600", "from-amber-500 to-orange-600", "from-fuchsia-500 to-rose-600", "from-red-400 to-rose-600"]}
            />
          </div>
        )}

        {pastEvents.length > 0 && (
          <HorizontalEventScroll
            items={pastEvents}
            title="Past Events"
            subtitle="Our journey so far"
            gradients={["from-rose-400 to-pink-500", "from-amber-400 to-orange-500", "from-fuchsia-400 to-rose-500", "from-red-300 to-rose-500"]}
          />
        )}
      </Section>

      {/* ── News / Updates ── */}
      {pptNews.length > 0 && (
        <Section>
          <NewsSection items={pptNews} title="PPT Updates" />
        </Section>
      )}

      {/* ── Collaboration ── */}
      <Section className="ppt-section-alt border-y border-border">
        <ScrollReveal>
          <h2 className="mb-6">Collaborate with us</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-foreground mb-6 max-w-3xl">
            Project People Talk is open to conversations, co-creation, and collaboration. If you're building space for honest dialogue about gender, sexuality, or care — we'd love to work together.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <ul className="space-y-3 mb-8">
            {collabItems.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground group">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                {c}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:projectpeopletalk@gmail.com?subject=Collaboration with Project People Talk">
              Invite Project People Talk to your space
            </a>
          </Button>
        </ScrollReveal>
      </Section>

      {/* ── Membership ── */}
      <Section>
        {/* TODO: Replace YOUR_PPT_FORM_ID with your real Google Form ID */}
        <MembershipForm org="ppt" accentClass="text-rose-600" accentBg="bg-rose-500" googleFormUrl="https://docs.google.com/forms/d/e/YOUR_PPT_FORM_ID/viewform" />
      </Section>
    </PageLayout>
  );
}
