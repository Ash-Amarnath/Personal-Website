import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/data/content";

interface EventCardProps {
  event: Event;
  accent?: string;
}

export function EventCard({ event, accent = "bg-gold" }: EventCardProps) {
  const isPast = event.type === "past";
  const dateObj = new Date(event.date);

  return (
    <div className={`relative bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group event-card-lift ${isPast ? "opacity-75 hover:opacity-100" : ""}`}>
      <div className={`absolute top-0 left-0 w-1 h-full ${accent} transition-all duration-300 group-hover:w-1.5`} />
      
      {/* Optional event image placeholder — uncomment and add image URL to event data
      {event.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      */}
      
      <div className="p-5 pl-6">
        <div className="flex items-center gap-2 mb-2">
          {isPast ? (
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-sm">Past</span>
          ) : (
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm animate-pulse-soft">Upcoming</span>
          )}
        </div>
        <h4 className="font-body font-semibold text-primary text-sm leading-snug mb-2 group-hover:text-secondary transition-colors duration-200">{event.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{event.description}</p>
        
        {/* Media attachments placeholder — add images/docs to events
        {event.attachments && event.attachments.length > 0 && (
          <div className="flex gap-2 mb-3">
            {event.attachments.map((a, i) => (
              <a key={i} href={a.url} target="_blank" className="text-xs text-secondary hover:underline">
                📎 {a.label}
              </a>
            ))}
          </div>
        )}
        */}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
