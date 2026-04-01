// ═══════════════════════════════════════════════════════════════════
// CONTENT DATA — Edit this file to add writings, projects, events,
// news, and social posts. Each section is a simple array of objects.
// Just copy an existing entry, change the fields, and save.
// ═══════════════════════════════════════════════════════════════════

// ─── WRITINGS ────────────────────────────────────────────────────
// To add a new writing: copy any object below, give it a unique `id`,
// and fill in title, excerpt, tags, date (YYYY-MM-DD), and content.
// The content field supports \n\n for paragraph breaks.

export interface Writing {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  content: string;
}

export const writings: Writing[] = [
  {
    id: "teaching-raw-data",
    title: "On teaching students to touch raw data for the first time",
    excerpt: "What happens when you hand a spreadsheet to someone who's only ever seen polished graphs in textbooks — and ask them to find the story themselves.",
    tags: ["Essay", "Research pedagogy"],
    date: "2025-12-10",
    content: `There's a particular kind of silence that fills a classroom the first time you put a raw dataset in front of students. It's not the silence of confusion — it's the silence of confrontation. They've seen bar charts in textbooks, neat regression lines in lecture slides. But this is different. This is messy.\n\nI started doing this deliberately in my workshops at SkillCeta: handing students a CSV with missing values, inconsistent labels, and no readme. "Find something interesting," I'd say. The resistance is always the same — "But what are we supposed to find?" And that's exactly the point.\n\nResearch literacy isn't about knowing the right answer. It's about learning to sit with not knowing, to ask a question of the data rather than waiting for the data to answer a question you never asked.\n\nThe students who struggle most aren't the ones who lack technical skill. They're the ones who've been trained to believe that every problem has a single correct solution. Unlearning that is the real curriculum.`,
  },
  {
    id: "brain-scans-ethics",
    title: "Brain scans, spreadsheets, and the ethics of care",
    excerpt: "Reflections on working with biomedical AI — what it means to build diagnostic tools when the stakes are someone's life.",
    tags: ["Research reflection", "Biomedical AI"],
    date: "2025-11-22",
    content: `When I was building the CNN model for brain tumour classification, I kept thinking about the person on the other end of the MRI scan. Not as a "data point" or a "case" — as someone who woke up that morning, made tea, and then went to a hospital where a machine would look inside their skull.\n\nWe talk about accuracy rates — 94%, 97% — as if those numbers exist in a vacuum. But a 3% error rate means real people receiving wrong diagnoses. It means someone being told they're fine when they're not, or being terrified by a false positive.\n\nThe technical work matters. Building interpretable models matters. But what matters most is remembering that every pipeline we build, every threshold we set, carries the weight of care. If we forget that, we're just optimising numbers.`,
  },
  {
    id: "queer-in-research",
    title: "Being queer in research spaces that were never built for you",
    excerpt: "On navigating institutions, finding language for experience, and why representation in methodology matters as much as in outcomes.",
    tags: ["Memoir", "Queer life"],
    date: "2025-10-15",
    content: `Research spaces love to talk about "objectivity." But objectivity has a body — and usually, that body is cisgender, heterosexual, upper-caste, and male. When you don't fit that mold, you learn early that your presence in the room is itself a kind of data.\n\nI've sat in seminar rooms where the discussion of "gender" meant a single variable in a regression model. Where "sexuality" was a checkbox on a survey. Where the entire richness and complexity of queer life was flattened into a demographic category.\n\nProject People Talk exists because I needed a space where research and life weren't separate. Where asking "How do queer people navigate health systems?" wasn't an academic exercise but a survival question.\n\nThe methodology matters. Who asks the question shapes what gets found.`,
  },
  {
    id: "first-research-project",
    title: "Your first research project will be bad — and that's the whole point",
    excerpt: "A letter to students who are terrified of starting, and why the messy first attempt is more valuable than a perfect one.",
    tags: ["Methods note", "Education"],
    date: "2025-09-08",
    content: `Every student I've mentored has the same fear: "What if my project isn't good enough?" And every time, I say the same thing: "It won't be. And that's exactly why you should do it."\n\nYour first research project will have a vague question, a sample size that's too small, and analysis that misses half the story. That's not failure — that's learning. The point of a first project isn't to produce groundbreaking findings. It's to learn what it feels like to follow a question from curiosity to data to some kind of answer.\n\nThe students who grow the most aren't the ones who produce perfect reports. They're the ones who sit with the discomfort of not knowing, who revise their questions three times, who learn that "I don't know" is a perfectly valid research finding.`,
  },
  {
    id: "data-without-context",
    title: "Data without context is just numbers pretending to be truth",
    excerpt: "Why teaching statistics without teaching interpretation creates a generation of confident but clueless analysts.",
    tags: ["Essay", "Research literacy"],
    date: "2025-08-20",
    content: `I once watched a student present a correlation coefficient of 0.87 between ice cream sales and drowning deaths as evidence that ice cream causes drowning. They'd run the code correctly. The statistics were right. The interpretation was catastrophic.\n\nThis is what happens when we teach tools without teaching thinking. When we treat R or Python as the curriculum instead of what they are — instruments. You wouldn't hand someone a scalpel and call them a surgeon. But we hand students statistical software and call them "data literate."\n\nReal data literacy starts with questions: Who collected this? Why? What's missing? Whose experience does this not capture? These aren't add-ons to technical training — they are the training.`,
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────
// To add a project: copy an existing object, give it a unique `id`.
// `detailContent` is optional rich content shown on the detail page.
// `gallery` is an array of image URLs (can be external or local).
// `videoUrl` supports YouTube embed URLs.

export interface ProjectDetail {
  body: string;
  highlights?: string[];
  gallery?: string[];
  videoUrl?: string;
  papers?: { title: string; url: string }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  detail?: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "brain-tumour",
    name: "Enhancing Brain Tumor Detection with Transfer Learning",
    description: "Developed and assessed the effectiveness of five distinct pre-trained models — ResNet50, Xception, EfficientNetV2-S, ResNet152V2, and VGG16 — to enhance brain tumour classification from MRI scans. Focused on interpretability and clinical relevance.",
    role: "Lead researcher & engineer",
    tags: ["Biomedical AI", "Deep Learning", "Transfer Learning"],
    link: "https://github.com/Ash-Amarnath/Enhancing-the-Brain-Tumor-Detection-with-Transfer-Learning",
    linkLabel: "GitHub repo",
    detail: {
      body: `This project tackles one of the most pressing challenges in medical imaging: reliably classifying brain tumours from MRI scans using deep learning.\n\nThe models tested were ResNet50, Xception, EfficientNetV2-S, ResNet152V2, and VGG16. Each was evaluated not only on accuracy but on interpretability.\n\nA key focus was reducing false negatives while maintaining low false positive rates. The project explored data augmentation strategies, learning rate scheduling, and Grad-CAM for visual explanations.`,
      highlights: [
        "Achieved over 95% classification accuracy across multiple architectures",
        "Implemented Grad-CAM for visual interpretability of model decisions",
        "Compared five transfer learning approaches on the same benchmark",
        "Explored clinical deployment considerations and ethical implications",
      ],
      gallery: [
        "https://raw.githubusercontent.com/Ash-Amarnath/Enhancing-the-Brain-Tumor-Detection-with-Transfer-Learning/main/poster.png",
      ],
      papers: [
        { title: "View Research Poster", url: "https://github.com/Ash-Amarnath/Enhancing-the-Brain-Tumor-Detection-with-Transfer-Learning" },
      ],
    },
  },
  {
    id: "beta-rebound",
    name: "Post-Movement Beta Rebound in Sensorimotor Cortex",
    description: "Investigated post-movement beta rebound (PMBR) in sensorimotor cortex and how it endures one week after three days of motor practice. EEG-based analysis exploring neural plasticity and motor learning patterns.",
    role: "Researcher & data analyst",
    tags: ["EEG Analysis", "Neuroscience", "Motor Learning"],
    link: "https://github.com/Ash-Amarnath/Post-Movement-Beta-Rebound-in-Sensorimotor-Cortex-Endures-One-Week-After-Three-Days-of-Practice",
    linkLabel: "GitHub repo",
    detail: {
      body: `This research investigated the post-movement beta rebound — a brain rhythm that occurs after voluntary movement — and how it changes with motor practice.\n\nUsing EEG recordings, I analysed how the sensorimotor cortex responds to repeated motor tasks over three days, and whether those changes persist one week later.\n\nI built custom analysis pipelines in Python for EEG preprocessing, time-frequency decomposition, and statistical comparison across sessions.`,
      highlights: [
        "Built custom EEG analysis pipelines for time-frequency decomposition",
        "Tracked neural plasticity markers across multiple sessions",
        "Demonstrated persistent beta rebound changes after short-term practice",
        "Combined signal processing with cognitive neuroscience frameworks",
      ],
      gallery: [
        "https://raw.githubusercontent.com/Ash-Amarnath/Post-Movement-Beta-Rebound-in-Sensorimotor-Cortex-Endures-One-Week-After-Three-Days-of-Practice/main/poster.png",
      ],
    },
  },
  {
    id: "microbial-dynamics",
    name: "Microbial Community Dynamics in Response to Topical Treatments",
    description: "Research presented at the annual Disease Ecology Meeting at St. Michael's College, exploring how microbial communities respond to topical treatments.",
    role: "Lead researcher",
    tags: ["Microbiology", "Disease Ecology", "Data Analysis"],
    link: "https://github.com/Ash-Amarnath/Microbial-Community-Dynamics-in-Response-to-Topical-Treatments",
    linkLabel: "GitHub repo",
    detail: {
      body: `This research explored how microbial communities on the skin respond to different topical treatments.\n\nPresented at the annual Disease Ecology Meeting at St. Michael's College, the study combined microbiome sequencing data with ecological diversity indices.\n\nThe analysis involved processing 16S rRNA sequencing data, computing alpha and beta diversity metrics, and using multivariate statistics.`,
      highlights: [
        "Presented at the Disease Ecology Meeting, St. Michael's College",
        "Analysed 16S rRNA sequencing data with ecological frameworks",
        "Identified treatment-specific shifts in microbial community composition",
        "Combined microbiology with computational ecology methods",
      ],
      gallery: [
        "https://raw.githubusercontent.com/Ash-Amarnath/Microbial-Community-Dynamics-in-Response-to-Topical-Treatments/main/poster.png",
      ],
    },
  },
  {
    id: "medical-ar",
    name: "Medical Diagnosis with Augmented Reality",
    description: "Developed a presentation and prototype exploring how augmented reality can transform medical diagnosis.",
    role: "Researcher & developer",
    tags: ["Augmented Reality", "Healthcare", "Innovation"],
    link: "https://github.com/Ash-Amarnath/Meddical_Diagnosis_with_Augmented_Reality",
    linkLabel: "GitHub repo",
    detail: {
      body: `This project explored the potential of augmented reality (AR) in transforming how clinicians interact with diagnostic data.\n\nI developed a conceptual framework demonstrating how AR could be used in radiology, surgery planning, and real-time patient monitoring.`,
      highlights: [
        "Conceptualised AR overlays for clinical diagnostic workflows",
        "Reviewed existing AR applications across medical specialties",
        "Presented at institutional level with prototype demonstrations",
      ],
    },
  },
  {
    id: "eeg-analysis",
    name: "EEG & Flight Mission Physiological Data Analysis",
    description: "Built ETL pipelines and analysis workflows for physiological and EEG data from flight missions, exploring cognitive workload patterns.",
    role: "Data analyst & pipeline engineer",
    tags: ["EEG Analysis", "Physiological Data", "ETL"],
    detail: {
      body: `I built end-to-end data pipelines for processing physiological data collected during flight missions, including EEG, heart rate variability, galvanic skin response, and other biomarkers.\n\nThe goal was to identify patterns of cognitive workload and stress during different phases of flight.`,
      highlights: [
        "Built multi-modal ETL pipelines for physiological time-series data",
        "Processed EEG, HRV, and GSR data with different sampling rates",
        "Identified cognitive workload patterns across flight phases",
        "Developed reproducible analysis workflows in Python",
      ],
    },
  },
  {
    id: "skillceta-pilots",
    name: "SkillCeta — Early Pilots",
    description: "Designed and delivered data and research literacy sessions, mentoring, and micro-internships for students encountering research for the first time.",
    role: "Founder & lead instructor",
    tags: ["Education", "Research Literacy", "Mentoring"],
    link: "/skillceta",
    linkLabel: "Learn more",
    detail: {
      body: `SkillCeta began as a series of small pilot programs — tutoring sessions that grew into structured workshops.\n\nThe early pilots included one-on-one data science tutoring, group workshops on research question design, and micro-internship programs where students worked on real datasets under mentorship.`,
      highlights: [
        "Delivered data literacy workshops to 300+ students across multiple institutions",
        "Designed micro-internship programs with real-world datasets",
        "Helped 50+ students secure university admissions",
        "Facilitated over ₹10M in scholarship wins",
      ],
    },
  },
  {
    id: "community-education",
    name: "Community Education Work in Kerala",
    description: "Founded and supported community education programs for under-resourced students, integrating research thinking and data skills.",
    role: "Founder & educator",
    tags: ["Community Education", "Social Impact", "Kerala"],
    detail: {
      body: `Before SkillCeta had a name, the work started in Kerala — community education programs for students who didn't have access to research mentorship or data skills training.\n\nThese programs were designed to be accessible: no prerequisites, no expensive tools, no jargon.`,
      highlights: [
        "Created accessible education programs for under-resourced communities",
        "Focused on thinking skills over technical prerequisites",
        "Built programs that worked without expensive tools or software",
        "Laid the foundation for what became SkillCeta",
      ],
    },
  },
  // ── ADD NEW PROJECT: Copy this template ──
  // {
  //   id: "your-project-id",
  //   name: "Project Name",
  //   description: "Short description for the card.",
  //   role: "Your role",
  //   tags: ["Tag1", "Tag2"],
  //   link: "https://github.com/...",          // optional
  //   linkLabel: "GitHub repo",                 // optional
  //   detail: {                                 // optional — enables detail page
  //     body: "Long description...",
  //     highlights: ["Achievement 1", "Achievement 2"],
  //     gallery: ["https://image-url.png"],     // optional images
  //     videoUrl: "https://youtube.com/embed/", // optional YouTube embed
  //     papers: [{ title: "Paper", url: "..." }],
  //   },
  // },
];

// ─── EVENTS ──────────────────────────────────────────────────────
// To add an event: copy an existing object, set type to "upcoming"
// or "past", and assign org to "skillceta", "ppt", or "personal".
//
// Fields:
//   id: unique string
//   title: event name
//   date: YYYY-MM-DD format
//   location: where it happens
//   description: short summary
//   type: "upcoming" | "past"
//   org: "skillceta" | "ppt" | "personal"
//   image: optional image URL
//   link: optional link to event page/recording

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
  org: "skillceta" | "ppt" | "personal";
  image?: string;
  link?: string;
}

export const events: Event[] = [
  {
    id: "research-camp-apr",
    title: "Research & AI Literacy Camp — Spring 2026",
    date: "2026-04-15",
    location: "Ashoka University, Sonipat",
    description: "A 3-day intensive camp for undergrads on building their first research project, from question design to data analysis.",
    type: "upcoming",
    org: "skillceta",
  },
  {
    id: "ppt-workshop-may",
    title: "Queer Conversations: Bodies, Care, and Belonging",
    date: "2026-05-02",
    location: "Online (Zoom)",
    description: "A facilitated conversation on queer experiences in healthcare and institutional spaces. Open to all.",
    type: "upcoming",
    org: "ppt",
  },
  {
    id: "data-literacy-mar",
    title: "Data Literacy for Non-STEM Students",
    date: "2026-03-10",
    location: "Delhi University, North Campus",
    description: "A workshop introducing humanities and social science students to data thinking — no coding required.",
    type: "past",
    org: "skillceta",
  },
  {
    id: "ppt-panel-feb",
    title: "Gender in Institutions: A Panel Discussion",
    date: "2026-02-20",
    location: "Ashoka University",
    description: "A panel exploring how gender shapes experiences in classrooms, workplaces, and clinics.",
    type: "past",
    org: "ppt",
  },
  // ── PPT Past Events: Podcast Era ──
  {
    id: "ppt-podcast-launch",
    title: "Project People Talk Podcast — Launch",
    date: "2024-06-01",
    location: "Online (Spotify / YouTube)",
    description: "Launched the PPT podcast covering sex education, queer experiences, relationships, and mental health conversations.",
    type: "past",
    org: "ppt",
  },
  {
    id: "ppt-sex-ed-series",
    title: "Sex Education Series — Podcast Episodes",
    date: "2024-09-15",
    location: "Online (Podcast platforms)",
    description: "A series of podcast episodes dedicated to comprehensive sex education, covering consent, health, and awareness.",
    type: "past",
    org: "ppt",
  },
  {
    id: "ppt-kerala-research-start",
    title: "Sexual Violence Reporting Barriers — Research Launch",
    date: "2025-06-01",
    location: "Kerala, India",
    description: "Launched the research project studying reporting barriers of sexual violence among heterosexual and sexual minority people in Kerala.",
    type: "past",
    org: "ppt",
  },
  // ── SkillCeta Past Events ──
  {
    id: "sc-python-workshop",
    title: "Python for Research — Beginner Workshop",
    date: "2025-08-20",
    location: "Online (Zoom)",
    description: "A hands-on workshop introducing Python basics for data collection, cleaning, and simple analysis.",
    type: "past",
    org: "skillceta",
  },
  {
    id: "sc-sop-masterclass",
    title: "SOP & Application Masterclass",
    date: "2025-07-10",
    location: "Online (Google Meet)",
    description: "Guided session on writing compelling statements of purpose and building competitive academic profiles.",
    type: "past",
    org: "skillceta",
  },
  {
    id: "sc-data-viz-101",
    title: "Data Visualisation 101",
    date: "2025-06-05",
    location: "Christ University, Bangalore",
    description: "Workshop on turning raw data into compelling visual stories using free tools and clear design principles.",
    type: "past",
    org: "skillceta",
  },
  {
    id: "sc-first-research",
    title: "Your First Research Project — Bootcamp",
    date: "2025-04-15",
    location: "Online",
    description: "A 5-day intensive guiding students through question design, literature review, data collection, and presenting findings.",
    type: "past",
    org: "skillceta",
  },
  // ── SkillCeta Upcoming Events ──
  {
    id: "sc-ai-ethics-may",
    title: "AI Ethics & Responsible Research — Workshop",
    date: "2026-05-20",
    location: "Ashoka University, Sonipat",
    description: "Exploring ethical considerations in AI research — bias, fairness, transparency, and real-world impact.",
    type: "upcoming",
    org: "skillceta",
  },
  // ── PPT Upcoming Events ──
  {
    id: "ppt-consent-workshop",
    title: "Understanding Consent — Interactive Workshop",
    date: "2026-06-10",
    location: "Online (Zoom)",
    description: "An interactive session exploring consent, boundaries, and healthy communication in relationships.",
    type: "upcoming",
    org: "ppt",
  },
  {
    id: "ppt-queer-health-panel",
    title: "Queer Health Access — Panel Discussion",
    date: "2026-04-25",
    location: "Kerala, India",
    description: "A panel bringing together healthcare workers, activists, and researchers to discuss queer health access barriers.",
    type: "upcoming",
    org: "ppt",
  },
  // ── PPT Past Events ──
  {
    id: "ppt-mental-health-ep",
    title: "Mental Health & Queer Youth — Podcast Special",
    date: "2024-12-01",
    location: "Online (Podcast)",
    description: "A special episode exploring mental health challenges faced by queer youth in Indian educational institutions.",
    type: "past",
    org: "ppt",
  },
  {
    id: "ppt-relationship-talk",
    title: "Healthy Relationships — Campus Talk",
    date: "2025-02-14",
    location: "Ashoka University",
    description: "A Valentine's Day talk on building healthy relationships, communication, and recognising red flags.",
    type: "past",
    org: "ppt",
  },
];

// ─── NEWS ────────────────────────────────────────────────────────
// To add a news item: copy an existing object. If `content` is
// provided, clicking the item will open a detail view with that text.
// `link` can be an internal route or external URL.
// `mediaType` can be "article", "video", "interview", or "news" for
// displaying the right icon/badge.
//
// For YouTube videos: set link to the YouTube URL and mediaType to "video"
// For news articles: set link to the article URL and mediaType to "article"

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  image?: string;
  link?: string;
  org: "skillceta" | "ppt" | "personal";
  mediaType?: "article" | "video" | "interview" | "news";
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "SkillCeta partners with two Delhi schools for pilot research camps",
    date: "2026-03-15",
    excerpt: "The first institutional partnerships are underway — bringing research thinking into classrooms for Classes 11 and 12.",
    org: "skillceta",
    mediaType: "news",
    content: `SkillCeta has officially partnered with two schools in Delhi to run its first institutional research camps. These camps will bring structured research-thinking exercises to Classes 11 and 12, introducing students to the process of asking questions, designing small studies, and presenting findings.\n\nThe partnership model is designed to be lightweight — schools provide the students and space, SkillCeta provides the curriculum, facilitators, and mentorship. Each camp runs for 3 days and culminates in student-led presentations.\n\nThis marks a significant step from individual tutoring to institutional programming, and the feedback from these pilots will shape how SkillCeta scales in the coming year.`,
  },
  {
    id: "news-2",
    title: "Project People Talk featured in Ashoka University's student spotlight",
    date: "2026-03-01",
    excerpt: "PPT's Instagram series on queer everyday life was highlighted as an example of research-driven storytelling.",
    org: "ppt",
    mediaType: "article",
    content: `Project People Talk was featured in Ashoka University's student spotlight series for its unique approach to combining research methods with personal storytelling.\n\nThe feature highlighted PPT's Instagram series on "queer everyday life" — short posts that draw from both lived experience and research literature to explore themes like friendship, housing, healthcare access, and institutional navigation.`,
  },
  {
    id: "news-3",
    title: "Ash presents at the Disease Ecology Meeting, St. Michael's College",
    date: "2026-02-18",
    excerpt: "Presented research on microbial community dynamics and topical treatments at the annual meeting.",
    org: "personal",
    mediaType: "interview",
    content: `At the annual Disease Ecology Meeting at St. Michael's College, I presented my research on how microbial communities respond to topical treatments.\n\nThe presentation covered the methodology — 16S rRNA sequencing combined with ecological diversity analysis — and the key findings about how different treatments reshape skin microbial ecosystems.`,
    link: "/amarnath/projects/microbial-dynamics",
  },
  {
    id: "news-4",
    title: "New writing: 'On teaching students to touch raw data for the first time'",
    date: "2025-12-10",
    excerpt: "A reflection on what happens when you hand messy data to students who've only seen polished graphs.",
    org: "personal",
    mediaType: "article",
    link: "/amarnath/writings/teaching-raw-data",
  },
  {
    id: "news-5",
    title: "SkillCeta launches online research methods bootcamp for undergrads",
    date: "2026-01-20",
    excerpt: "A 2-week intensive online bootcamp covering research design, data collection, and analysis basics.",
    org: "skillceta",
    mediaType: "news",
    content: "SkillCeta's first fully online bootcamp ran for 2 weeks in January 2026, covering research design, survey methods, basic data analysis with Python, and presentation skills. Over 80 students participated from 15 different colleges across India.",
  },
  {
    id: "news-6",
    title: "Ash publishes essay on data literacy gaps in Indian higher education",
    date: "2025-11-05",
    excerpt: "An exploration of why Indian universities still struggle to teach students how to work with real data.",
    org: "personal",
    mediaType: "article",
    link: "/amarnath/writings/data-without-context",
  },
  {
    id: "news-7",
    title: "PPT podcast episode on navigating queer healthcare in Kerala",
    date: "2025-10-28",
    excerpt: "A candid conversation about the barriers queer people face when seeking healthcare in smaller cities.",
    org: "ppt",
    mediaType: "video",
  },
  {
    id: "news-8",
    title: "SkillCeta workshop at Christ University, Bangalore",
    date: "2025-09-15",
    excerpt: "A one-day workshop on 'Building Your First Research Question' for 120+ postgraduate students.",
    org: "skillceta",
    mediaType: "news",
  },
];

// ─── INSTAGRAM / SOCIAL POSTS ────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════
// HOW TO ADD REAL INSTAGRAM POSTS:
//
// 1. Go to your Instagram post
// 2. Copy the post URL (e.g., https://www.instagram.com/p/ABC123/)
// 3. For the image: right-click the post image → Copy image address
//    OR take a screenshot and host it somewhere
// 4. Update the entries below with:
//    - caption: Your actual post caption
//    - date: When you posted it (YYYY-MM-DD)
//    - link: Direct link to the specific post
//    - image: URL to the post image (optional but recommended)
//
// AUTOMATIC INSTAGRAM INTEGRATION:
// For truly automatic integration, you'd need Instagram's API which
// requires a Meta developer account + app review. This is complex
// and Instagram has limited their API significantly.
//
// ALTERNATIVE: Use an Instagram embed widget service like:
// - Elfsight (free tier available)
// - SnapWidget (free tier available)
// - Curator.io (free tier available)
// These can be embedded as iframes — see InstagramFeed component.
//
// Instagram accounts:
//   SkillCeta: https://www.instagram.com/skillceta/
//   PPT: https://www.instagram.com/_project_people_talk_/
//   Personal: https://www.instagram.com/_ash_garo_/
// ═══════════════════════════════════════════════════════════════════

export interface InstagramPost {
  id: string;
  caption: string;
  date: string;
  image?: string;
  link: string;
  org: "skillceta" | "ppt";
}

export const instagramPosts: InstagramPost[] = [
  // ─── Project People Talk posts ─────────────────────────────
  // UPDATE THESE with your real post URLs and captions
  {
    id: "ppt-1",
    caption: "What does it mean to 'do research' when no one ever taught you how? A thread on research as privilege.",
    date: "2026-03-18",
    link: "https://www.instagram.com/_project_people_talk_/",
    // image: "https://your-image-url.jpg",  // ← Add real post image URL here
    org: "ppt",
  },
  {
    id: "ppt-2",
    caption: "Queer friendships aren't just support systems — they're knowledge systems. They teach us what institutions refuse to.",
    date: "2026-03-12",
    link: "https://www.instagram.com/_project_people_talk_/",
    org: "ppt",
  },
  {
    id: "ppt-3",
    caption: "Care is data. Illness is data. But who gets to decide what counts as evidence? Reflecting on bodies in medical research.",
    date: "2026-03-02",
    link: "https://www.instagram.com/_project_people_talk_/",
    org: "ppt",
  },
  {
    id: "ppt-4",
    caption: "The first time someone calls you 'resilient' when what you needed was rest. On misreading survival as strength.",
    date: "2026-02-22",
    link: "https://www.instagram.com/_project_people_talk_/",
    org: "ppt",
  },
  // ─── SkillCeta posts ───────────────────────────────────────
  {
    id: "sc-1",
    caption: "Your first dataset doesn't need to be big. It needs to be yours. Starting small is starting right.",
    date: "2026-03-08",
    link: "https://www.instagram.com/skillceta/",
    org: "skillceta",
  },
  {
    id: "sc-2",
    caption: "Research isn't just for STEM students. If you can ask a question and follow it with curiosity, you're already a researcher.",
    date: "2026-02-28",
    link: "https://www.instagram.com/skillceta/",
    org: "skillceta",
  },
  {
    id: "sc-3",
    caption: "Behind every 'I can't do data' is a student who was never shown how. That's what we're here to change.",
    date: "2026-02-18",
    link: "https://www.instagram.com/skillceta/",
    org: "skillceta",
  },
  {
    id: "sc-4",
    caption: "What if your school taught you to question data before it taught you to calculate it? That's the SkillCeta approach.",
    date: "2026-02-08",
    link: "https://www.instagram.com/skillceta/",
    org: "skillceta",
  },
];

// ─── YOUTUBE / MEDIA LINKS ───────────────────────────────────────
// Add YouTube interviews, talks, or any media appearances here.
// These show up in the "What's happening" section and Connect section.
//
// HOW TO ADD:
// 1. Copy the template below
// 2. For YouTube: use the embed URL format: https://www.youtube.com/embed/VIDEO_ID
// 3. For regular links: just paste the URL
//
// ═══════════════════════════════════════════════════════════════════

export interface MediaLink {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "youtube" | "article" | "podcast" | "interview";
  date: string;
  thumbnail?: string;
}

export const mediaLinks: MediaLink[] = [
  // ── ADD YOUR YOUTUBE VIDEOS / INTERVIEWS HERE ──
  // {
  //   id: "media-1",
  //   title: "Interview Title",
  //   description: "Short description of the interview/video.",
  //   url: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   type: "youtube",      // or "article", "podcast", "interview"
  //   date: "2026-01-15",
  //   thumbnail: "",        // optional thumbnail image URL
  // },
];
