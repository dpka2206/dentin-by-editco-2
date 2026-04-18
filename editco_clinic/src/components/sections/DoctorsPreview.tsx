import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DOCTORS } from "@/content/dentinContent";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const shots = [avatar1, avatar2, avatar3, avatar4];

const DoctorsPreview = () => {
  return (
    <section id="doctors" className="bg-white">
      <div className="section-container space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-6 reveal">
          <Badge className="bg-[#D4EC6B] text-[#1A1A1A] border-none px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Our team
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-foreground tracking-tight leading-[1.05]">
            Meet the Experts Behind <span className="text-primary italic">Your Smile</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Our team of experienced, qualified dental specialists is here to give you the very best care — with skill, patience,
            and a personal touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((d, i) => (
            <article
              key={d.name}
              className="animate-on-scroll flex flex-col rounded-[32px] border border-border bg-muted/20 p-8 hover:border-primary/35 transition-colors"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 mx-auto">
                <img src={shots[i % shots.length]} alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-center text-foreground leading-snug">{d.name}</h3>
              <p className="text-[11px] font-black text-primary text-center uppercase tracking-[0.15em] mt-1.5 px-2">
                {d.designation}
              </p>
              <p className="text-[14px] text-foreground/70 text-center mt-4 leading-relaxed flex-1 font-medium">
                {d.note || d.specialises}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <Button asChild variant="outline" className="rounded-[24px] h-12 px-8 font-black border-2">
            <Link to="/doctors">
              Meet all doctors <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsPreview;
