import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAND } from "@/content/dentinContent";
import { MagneticWrapper } from "@/components/ui/MagneticButton";

const SmileCta = () => {
  return (
    <section id="cta" className="bg-white">
      <div className="section-container">
        <div className="bg-foreground text-white rounded-[60px] p-12 lg:p-24 shadow-premium relative overflow-hidden reveal mb-10 lg:mb-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-10">
            <Badge className="bg-white/5 text-white border-white/10 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
              Book today
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95]">
              Ready to Transform <span className="text-primary italic">Your Smile?</span>
            </h2>
            <p className="text-white/70 text-lg lg:text-xl font-medium leading-relaxed">
              Book your appointment today — no long waits, no guesswork. Just great dental care from a team that genuinely cares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <MagneticWrapper>
                <Link
                  to="/contact-us#booking"
                  className="inline-flex w-full sm:w-auto justify-center bg-primary text-white h-16 px-10 rounded-[24px] font-black text-lg shadow-2xl shadow-primary/30 items-center gap-2 active:scale-95"
                >
                  Book Your Appointment <ArrowRight size={20} />
                </Link>
              </MagneticWrapper>
              
              <MagneticWrapper>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="inline-flex w-full sm:w-auto justify-center bg-white text-foreground h-16 px-10 rounded-[24px] font-black text-lg items-center gap-2 active:scale-95"
                >
                  <Phone size={20} className="text-primary" />
                  Call Us: {BRAND.phoneDisplay}
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileCta;
