import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAND, REVIEWS } from "@/content/dentinContent";
import { cn } from "@/lib/utils";

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i <= count ? "fill-amber-400 text-amber-400" : "text-muted-foreground/25")}
        />
      ))}
    </span>
  );
}

const ReviewsPreview = () => {
  return (
    <section id="reviews" className="bg-muted/30">
      <div className="section-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-6 reveal">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-foreground tracking-tight leading-[1.05]">
            Real Patients. Real Smiles. <span className="text-primary italic">Real Results.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what our patients say.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.author}
              className="animate-on-scroll rounded-[36px] border border-border bg-white p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="font-black text-foreground">{r.author}</p>
                <Stars count={r.rating} />
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{r.text}</p>
            </blockquote>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <a
            href={BRAND.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-widest text-primary hover:underline underline-offset-4"
          >
            Read More Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreview;
