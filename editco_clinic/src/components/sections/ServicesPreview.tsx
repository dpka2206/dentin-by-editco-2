import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES, HOME_SERVICE_SLUGS } from "@/content/dentinContent";
import img01 from "@/assets/img-01.jpg";
import img02 from "@/assets/img-02.jpg";
import img03 from "@/assets/img-03.jpg";
import img04 from "@/assets/img-04.webp";
import img05 from "@/assets/img-05.jpg";
import img06b from "@/assets/img-06(b).jpg";

const serviceImageMap: Record<string, string> = {
  "dental-scaling-polishing": img01,
  "root-canal-treatment": img02,
  "dental-implants": img03,
  "dental-extractions": img04,
  "wisdom-teeth": img05,
  "dental-braces": img06b,
};

const ServicesPreview = () => {
  const items = HOME_SERVICE_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean) as typeof SERVICES;

  return (
    <section id="services" className="bg-white">
      <div className="section-container space-y-14">
        <div className="max-w-[1000px] reveal space-y-6">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.95]">
            Everything Your Smile Needs — <span className="text-primary italic">Under One Roof</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed">
            From routine cleanings to advanced implants, we offer complete dental care with the latest technology and zero
            compromise on your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, i) => (
            <article
              key={service.slug}
              className="group flex flex-col bg-muted/30 rounded-[40px] border border-border overflow-hidden hover:border-primary/40 transition-all animate-on-scroll"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={serviceImageMap[service.slug] || img01}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <h3 className="text-xl font-black text-foreground leading-tight">{service.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">{service.summary}</p>
                <p className="text-sm font-bold text-primary/90">{service.benefit}</p>
                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <Button asChild size="lg" className="rounded-[24px] h-14 px-10 font-black text-base">
            <Link to="/services">
              View all services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
