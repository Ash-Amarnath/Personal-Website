import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { UserPlus, ExternalLink } from "lucide-react";

interface MembershipFormProps {
  org: "skillceta" | "ppt";
  accentClass?: string;
  accentBg?: string;
  /** Google Form URL for this org's membership registration */
  googleFormUrl?: string;
}

/**
 * Membership registration component.
 * 
 * HOW TO SET UP:
 * 1. Create a Google Form for each org (SkillCeta / PPT) with fields: Name, Email, Role, Message
 * 2. Pass the Google Form URL as the `googleFormUrl` prop
 * 3. Example: googleFormUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
 * 
 * If no Google Form URL is provided, falls back to a mailto link.
 */
export function MembershipForm({ org, accentClass = "text-gold", accentBg = "bg-gold", googleFormUrl }: MembershipFormProps) {
  const orgName = org === "skillceta" ? "SkillCeta" : "Project People Talk";
  const orgEmail = org === "skillceta" ? "skillceta@gmail.com" : "projectpeopletalk@gmail.com";

  const handleClick = () => {
    if (googleFormUrl) {
      window.open(googleFormUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${orgEmail}?subject=Membership Registration - ${orgName}`;
    }
  };

  return (
    <ScrollReveal>
      <div className="bg-card border border-border rounded-lg p-6 md:p-8 relative overflow-hidden group">
        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 ${accentBg} opacity-5 rounded-bl-full transition-all duration-700 group-hover:w-32 group-hover:h-32`} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg ${accentBg}/10`}>
              <UserPlus size={20} className={accentClass} />
            </div>
            <h3 className="text-primary">Join {orgName}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-lg">
            {org === "skillceta"
              ? "Register your interest as a student, educator, or institutional partner. We'll reach out with upcoming camps, workshops, and collaboration opportunities."
              : "Join our community of writers, researchers, and creators exploring gender, sexuality, and care. We'll keep you in the loop on conversations, events, and collaborations."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={handleClick} className="group/btn">
              <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              Register Interest
            </Button>
            <a
              href={`mailto:${orgEmail}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Or email us at {orgEmail}
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
