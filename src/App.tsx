import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteNav } from "@/components/SiteNav";
import { FluidCursor } from "@/components/FluidCursor";
import { BackgroundElements } from "@/components/BackgroundElements";
import { SiteFooter } from "@/components/SiteFooter";
import AmarnathHome from "./pages/AmarnathHome";
import WritingsPage from "./pages/WritingsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import SkillCetaPage from "./pages/SkillCetaPage";
import ProjectPeopleTalkPage from "./pages/ProjectPeopleTalkPage";
import NotFound from "./pages/NotFound.tsx";
import { AIChatbot } from "./components/AIChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackgroundElements />
        <SiteNav />
        <Routes>
          <Route path="/" element={<AmarnathHome />} />
          <Route path="/amarnath/writings" element={<WritingsPage />} />
          <Route path="/amarnath/writings/:id" element={<WritingsPage />} />
          <Route path="/amarnath/projects" element={<ProjectsPage />} />
          <Route path="/amarnath/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/skillceta" element={<SkillCetaPage />} />
          <Route path="/project-people-talk" element={<ProjectPeopleTalkPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
        <AIChatbot />
        <FluidCursor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
