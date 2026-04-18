import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/content/dentinContent";

const PREVIEW_COUNT = 5;

const FaqsPreview = () => {
  const subset = FAQS.slice(0, PREVIEW_COUNT);

  return (
    <section id="faqs" className="bg-white">
      <div className="section-container space-y-10 max-w-4xl">
        <div className="text-center space-y-6 reveal">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            FAQs
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Got Questions? We&apos;ve Got <span className="text-primary italic">Answers.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full reveal">
          {subset.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-[15px] font-bold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm font-bold">
          <Link to="/faqs" className="text-primary hover:underline underline-offset-4">
            View all FAQs →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FaqsPreview;
