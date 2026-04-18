import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/content/dentinContent";

const FaqsPage = () => {
  return (
    <main className="pt-28 pb-24">
      <section className="bg-white pb-10">
        <div className="section-container max-w-3xl space-y-6 reveal text-center">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            FAQs
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Got Questions? We&apos;ve Got <span className="text-primary italic">Answers.</span>
          </h1>
        </div>
      </section>

      <section className="section-container max-w-3xl">
        <Accordion type="single" collapsible className="w-full reveal">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-[15px] font-bold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default FaqsPage;
