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

const TestimonialsPage = () => {
  return (
    <main className="pt-28">
      <section className="bg-white pb-12">
        <div className="section-container max-w-4xl space-y-6 reveal text-center">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Testimonials
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            20,000+ Smiles. <span className="text-primary italic">Here Are Some of Their Stories.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            We let our patients do the talking. Real people, real experiences, real results.
          </p>
        </div>
      </section>

      <section className="bg-muted/30 pb-24">
        <div className="section-container max-w-4xl space-y-8">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.author}
              className="animate-on-scroll rounded-[36px] border border-border bg-white p-10 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="font-black text-lg">{r.author}</p>
                <Stars count={r.rating} />
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{r.text}</p>
            </blockquote>
          ))}

          <div className="text-center pt-4 reveal">
            <a
              href={BRAND.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-black uppercase tracking-widest text-primary hover:underline underline-offset-4"
            >
              Leave Us a Review on Google →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
