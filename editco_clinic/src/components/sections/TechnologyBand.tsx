import { Cpu, ScanLine, Camera, Zap, Crown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TECHNOLOGY_ITEMS } from "@/content/dentinContent";

const icons = [ScanLine, Camera, Zap, Cpu, Crown, Sparkles];

const TechnologyBand = () => {
  return (
    <section id="technology" className="bg-foreground text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[160px] opacity-40 -z-0" />
      <div className="section-container relative z-10 space-y-14">
        <div className="max-w-[900px] reveal space-y-6">
          <Badge className="bg-primary/20 text-primary-light border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Technology
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            Where Advanced Technology Meets <span className="text-primary italic">Gentle Care</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 font-medium max-w-3xl leading-relaxed">
            We invest in the best dental technology so your treatments are faster, more accurate, and more comfortable than ever
            before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECHNOLOGY_ITEMS.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="animate-on-scroll rounded-[36px] border border-white/10 bg-white/[0.06] backdrop-blur-sm p-8 lg:p-10 flex gap-6 hover:bg-white/[0.09] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary-light" />
                </div>
                <div className="space-y-3 min-w-0">
                  <h3 className="text-lg font-black text-white leading-tight">{item.title}</h3>
                  <p className="text-[15px] text-white/65 leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyBand;
