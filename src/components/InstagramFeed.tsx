import { Instagram, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { InstagramPost } from "@/data/content";

interface InstagramFeedProps {
  posts: InstagramPost[];
  accentClass?: string;
  accountUrl?: string;
  accountLabel?: string;
}

/**
 * Instagram feed component.
 * 
 * To display real posts with images, update the `instagramPosts` array
 * in src/data/content.ts with:
 *   - `image`: URL to the post image (upload to media-uploads bucket or use external URL)
 *   - `link`: Direct link to the specific Instagram post
 *   - `caption`: The post caption text
 * 
 * For automatic Instagram integration, you'd need Instagram Basic Display API
 * or Instagram Graph API (requires Meta developer account + app review).
 * For now, manually update posts in content.ts when you make new ones.
 */
export function InstagramFeed({
  posts,
  accentClass = "text-gold",
  accountUrl,
  accountLabel,
}: InstagramFeedProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 80} direction={i % 3 === 0 ? "up" : i % 3 === 1 ? "scale" : "fade"}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-lg overflow-hidden h-full hover:shadow-card-hover transition-all duration-300 relative active:scale-[0.97]"
            >
              {/* Post image — uncomment when images are added to content.ts
              {post.image && (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              */}

              {/* Decorative gradient line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Instagram size={14} className={accentClass} />
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                </div>
                <p className="text-xs text-foreground leading-relaxed line-clamp-4 mb-3">
                  "{post.caption}"
                </p>
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary inline-flex items-center gap-1 transition-colors">
                  View on Instagram <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
      {accountUrl && (
        <ScrollReveal delay={400}>
          <div className="mt-6 text-center">
            <a
              href={accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline group"
            >
              <Instagram size={16} />
              {accountLabel || "Follow on Instagram"} <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
