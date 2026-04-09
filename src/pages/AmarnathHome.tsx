// ═══════════════════════════════════════════════════════════════════
// AMARNATH (ASH) HOME PAGE
// ═══════════════════════════════════════════════════════════════════

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageLayout, Section } from "@/components/PageLayout";
import { HorizontalCardScroll } from "@/components/HorizontalCardScroll";
import { HorizontalWritingsScroll } from "@/components/HorizontalWritingsScroll";
import { SocialConnect } from "@/components/SocialConnect";
import { CylinderScroll } from "@/components/CylinderScroll";
import { FloatingElement } from "@/components/ParallaxSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { writings, newsItems, mediaLinks } from "@/data/content";
import {
  Mail, FileText, ArrowRight, Youtube,
  ExternalLink, MessageCircle, Brain, Users, BookOpen,
  GraduationCap, Heart, Lightbulb, Code
} from "lucide-react";
import profileImg from "@/assets/ash-profile.jpg";

const themes = [
  "Research literacy",
  "AI & computations",
  "Gender & sexuality",
  "Workshops & mentoring",
  "Study abroad",
];

const keyAreas = [
  { icon: BookOpen, title: "Research Methods & Pedagogy", desc: "Teaching students to ask better questions, design studies, and work with messy data.", color: "text-blue-600" },
  { icon: Brain, title: "AI & Biomedical Data", desc: "Brain tumour detection, EEG analysis, physiological data pipelines, and health AI.", color: "text-purple-600" },
  { icon: Lightbulb, title: "Workshop Design & Facilitation", desc: "Creating intensive camps and workshop series that make research accessible.", color: "text-amber-600" },
  { icon: Heart, title: "Gender, Sexuality & Mental Health", desc: "Research and writing on queer life, care, and institutional experiences.", color: "text-rose-600" },
  { icon: Code, title: "Program Design for First Projects", desc: "Mentoring students through their very first independent research project.", color: "text-emerald-600" },
  { icon: GraduationCap, title: "Study Abroad & Scholarships", desc: "50+ admissions, ₹10M+ in scholarships. University applications & academic profiles.", color: "text-sky-600" },
];

export default function AmarnathHome() {
  const latestWritings = writings.slice(0, 3);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <Section className="pt-16 md:pt-24 pb-12 md:pb-16 relative overflow-hidden">
        <FloatingElement className="absolute top-20 right-[10%] hidden lg:block" speed={0.06}>
          <div className="w-20 h-20 rounded-full bg-gold/5 border border-gold/10" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 left-[5%] hidden lg:block" speed={0.1}>
          <div className="w-12 h-12 rounded-lg bg-secondary/5 border border-secondary/10 rotate-12" />
        </FloatingElement>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start relative z-10">
          <div className="md:col-span-4 lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="relative group">
                <img src={profileImg} alt="Amarnath (Ash)" className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-card border-4 border-background group-hover:shadow-card-hover transition-shadow duration-500" />
                <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-lg bg-gold/15 -z-10 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:bg-gold/25" />
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-secondary/10 -z-10 transition-all duration-700 group-hover:scale-150 group-hover:bg-secondary/15" />
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <ScrollReveal delay={100}><h1 className="text-balance mb-4">Amarnath <span className="text-muted-foreground font-normal">(Ash)</span></h1></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-display text-lg md:text-xl text-muted-foreground italic mb-6 max-w-2xl">"Teaching with clarity · Leading with integrity · Researching with vision"</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-foreground mb-6 max-w-2xl">I’ve always been drawn to research and teaching, and to building with purpose — turning curiosity into work that creates meaningful impact. Across Norwich University, Ashoka University, and projects like SkillCeta and Project People Talk, my work has grown through classrooms, conversations, and communities, shaped by a desire to make learning more open, thoughtful, and human. I care about work that brings people together, asks better questions, and creates space for ideas to become something useful in the world.</p>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="flex flex-wrap gap-2 mb-8">
                {themes.map((t, i) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium font-body bg-muted text-muted-foreground rounded-sm border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default" style={{ animation: `fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${400 + i * 80}ms forwards`, opacity: 0 }}>{t}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild><Link to="/amarnath/writings">Read my writings</Link></Button>
                <Button variant="hero-outline" size="lg" asChild><Link to="/amarnath/projects">View projects & research</Link></Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── Impact Stats ── */}
      <Section className="py-10 md:py-14 border-y border-border bg-muted/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollReveal delay={0}><AnimatedCounter end={500} suffix="+" label="Students mentored" /></ScrollReveal>
          <ScrollReveal delay={100}><AnimatedCounter end={10} suffix="" label="Research projects" /></ScrollReveal>
          <ScrollReveal delay={200}><AnimatedCounter end={2} suffix="" label="Organisations founded" /></ScrollReveal>
          <ScrollReveal delay={300}><AnimatedCounter end={2} suffix="" label="Published writings" /></ScrollReveal>
        </div>
      </Section>

      {/* ── What's Happening — Horizontal Card Scroll ── */}
      <Section>
        <HorizontalCardScroll
          items={newsItems}
          title="What's Happening"
          subtitle="Updates from Ash's world · Research · Education · Community . Leadership"
          viewMoreLink="/amarnath/writings"
        />
      </Section>

      {/* ── Media / YouTube / Interviews ── */}
      {mediaLinks.length > 0 && (
        <Section>
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8"><h2>Interviews & Media</h2></div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {mediaLinks.map((m, i) => (
              <ScrollReveal key={m.id} delay={i * 80}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-lg p-5 h-full hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
                  {m.thumbnail && <img src={m.thumbnail} alt={m.title} className="w-full aspect-video object-cover rounded-md mb-3" loading="lazy" />}
                  <div className="flex items-center gap-2 mb-2">
                    {m.type === "youtube" && <Youtube size={14} className="text-red-600" />}
                    {m.type === "article" && <FileText size={14} className="text-secondary" />}
                    {m.type === "podcast" && <MessageCircle size={14} className="text-purple-600" />}
                    {m.type === "interview" && <ExternalLink size={14} className="text-gold" />}
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{m.type}</span>
                  </div>
                  <h3 className="text-sm text-primary group-hover:text-secondary transition-colors duration-200">{m.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── About + Key Areas ── */}
      <Section>
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <ScrollReveal><h2 className="mb-6">About Ash</h2></ScrollReveal>
            <ScrollReveal delay={100}><p className="mb-4">I've worked on biomedical AI — including brain tumour classification with CNNs and EEG / physiological data analysis — and I've taught Python, statistics, and data skills to students who are often meeting "data" for the first time.</p></ScrollReveal>
            <ScrollReveal delay={200}><p className="mb-4">I care about research as a habit: asking better questions, reading critically, and turning messy data into insight that can actually help people.</p></ScrollReveal>
            <ScrollReveal delay={300}><p>My work now lives through three channels: <strong>my own writings</strong>, <Link to="/skillceta" className="text-secondary hover:underline font-medium">SkillCeta</Link> (research + AI literacy for students and institutions), and <Link to="/project-people-talk" className="text-secondary hover:underline font-medium">Project People Talk</Link> (a research‑shaped space about gender, sexuality, and everyday life).</p></ScrollReveal>
          </div>

          {/* Key Areas — faster interval */}
          <div className="md:col-span-2">
            <ScrollReveal delay={100} direction="right"><h3 className="mb-4 text-primary font-display">Key Areas</h3></ScrollReveal>
            <CylinderScroll items={keyAreas} interval={1800} />
          </div>
        </div>
      </Section>

      {/* ── Latest writings — Horizontal Scroll ── */}
      <Section className="bg-card border-y border-border">
        <HorizontalWritingsScroll
          items={writings}
          title="Latest Writings"
          subtitle="Essays, reflections, and research notes"
          viewAllLink="/amarnath/writings"
        />
      </Section>

      {/* ── Connect ── */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-4">Connect</h2>
          <p className="text-muted-foreground mb-8 text-sm max-w-2xl">Whether you want to collaborate on research, invite me to speak, explore SkillCeta for your institution, or just say hello — reach out through any channel.</p>
        </ScrollReveal>
        <SocialConnect variant="full" />
        <ScrollReveal delay={500}>
          <div className="mt-10 bg-muted/50 border border-border rounded-lg p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-muted-foreground" />
              <div>
                <span className="text-sm font-medium text-primary block">CV / Resume</span>
                <span className="text-xs text-muted-foreground">Coming soon — or email ash_amar@outlook.com to request</span>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild><a href="mailto:ash_amar@outlook.com?subject=Requesting CV">Request</a></Button>
          </div>
        </ScrollReveal>
      </Section>
    </PageLayout>
  );
}
