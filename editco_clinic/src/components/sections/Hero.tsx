import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { BRAND } from "@/content/dentinContent";

const Hero = () => {
  return (
    <section className="bg-transparent min-h-screen flex flex-col relative overflow-hidden">
      <div className="flex-1 flex flex-col lg:flex-row items-center section-container !pt-36 lg:!pt-28">
        <div className="w-full lg:w-3/5 space-y-10 pr-0 lg:pr-16 reveal-stagger">
          <div className="space-y-6">
            <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
              Hyderabad · Since 2010
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-[88px] leading-[0.92] font-black text-foreground tracking-[-0.05em]">
              Experience Truly <br />
              <span className="text-primary italic font-medium">Painless</span> Dental Care
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl leading-snug">
              Advanced treatments. Gentle hands. A smile you&apos;ll love.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
              From your very first visit, we make sure you feel completely at ease. No fear, no pain — just expert care
              backed by 15+ years of experience and the latest dental technology in Hyderabad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/contact-us#booking"
              className="bg-primary text-white h-16 sm:h-20 px-8 sm:px-10 rounded-[24px] font-black text-lg sm:text-xl hover:scale-[1.02] transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 whitespace-nowrap"
            >
              Book Your Appointment <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="bg-white border-2 border-border text-foreground h-16 sm:h-20 px-8 sm:px-10 rounded-[24px] font-black text-lg sm:text-xl hover:bg-muted transition-all flex items-center justify-center gap-3 active:scale-95 whitespace-nowrap"
            >
              <Phone size={20} className="text-primary shrink-0" />
              Call Us: {BRAND.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-2/5 relative mt-14 lg:mt-0">
          <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-premium reveal max-w-lg mx-auto lg:max-w-none">
            <img
              src={heroDoctor}
              alt="Dr. Suryanarayan Sharma — Chief Dental Surgeon"
              className="w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/55 to-transparent mix-blend-multiply" />

            <div className="absolute bottom-8 left-8 right-8 bg-white/92 backdrop-blur-xl p-6 sm:p-8 rounded-[36px] shadow-2xl space-y-2 animate-on-scroll">
              <p className="font-black text-foreground text-lg sm:text-xl leading-tight">Dr. Suryanarayan Sharma</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                MDS · Chief Dental Surgeon
              </p>
            </div>
          </div>

          <div className="absolute -top-16 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
