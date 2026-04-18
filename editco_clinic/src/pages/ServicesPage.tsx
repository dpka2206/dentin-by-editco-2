import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/content/dentinContent";
import img01 from "@/assets/img-01.jpg";
import img02 from "@/assets/img-02.jpg";
import img03 from "@/assets/img-03.jpg";
import img04 from "@/assets/img-04.webp";
import img05 from "@/assets/img-05.jpg";
import img06 from "@/assets/img-06.webp";
import img06b from "@/assets/img-06(b).jpg";
import img07 from "@/assets/img-07.webp";
import img08 from "@/assets/img-08.webp";
import img09 from "@/assets/img-09.webp";
import img10 from "@/assets/img-10.jpg";
import img11 from "@/assets/img-11.webp";
import img12 from "@/assets/img-12.jpg";
import img13 from "@/assets/img-13.webp";
import img14 from "@/assets/img-14.webp";
import showcase03 from "@/assets/showcase-03.jpg";

const serviceImageMap: Record<string, string> = {
  "dental-scaling-polishing": img01,
  "root-canal-treatment": img02,
  "dental-implants": img03,
  "dental-extractions": img04,
  "wisdom-teeth": img05,
  "dental-braces": img06b,
  "invisible-aligners": img06,
  "dental-opg-xray": img07,
  "teeth-whitening": img08,
  "cavity-fillings": img09,
  "lost-tooth-bridges": img10,
  "gum-surgeries": img11,
  "broken-teeth-management": img12,
  "paediatric-dentistry": img13,
  "dental-laser-treatment": img14,
  "intra-oral-3d-scanner": showcase03,
};

const ServicesPage = () => {
  return (
    <main className="pt-28">
      <section className="bg-white pb-16">
        <div className="section-container max-w-4xl space-y-6 reveal">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            Complete Dental Care for Your <span className="text-primary italic">Whole Family</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            From routine check-ups to complex surgeries — 30+ dental services, all under one roof. Every treatment is delivered
            with precision, care, and your comfort in mind.
          </p>
        </div>
      </section>

      <section className="bg-muted/20">
        <div className="section-container space-y-16">
          {SERVICES.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start animate-on-scroll rounded-[48px] border border-border bg-white p-8 lg:p-12 shadow-sm"
            >
              <div className="lg:col-span-5 rounded-[36px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[280px]">
                <img src={serviceImageMap[service.slug] || img01} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">{service.title}</h2>
                <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed whitespace-pre-line">
                  {service.full}
                </div>
                <p className="text-sm font-black text-primary uppercase tracking-wide">Key benefit: {service.benefit}</p>
                <Button asChild className="rounded-2xl font-black">
                  <Link to="/contact-us#booking">
                    Book appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
