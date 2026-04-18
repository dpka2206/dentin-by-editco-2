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

const DoctorsPage = () => {
  return (
    <main className="pt-28">
      <section className="bg-white pb-12">
        <div className="section-container max-w-4xl space-y-6 reveal">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Doctors
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            Expert Doctors Who <span className="text-primary italic">Genuinely Care</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Our team of highly trained dental specialists brings years of clinical experience, advanced skills, and a patient-first
            mindset to every single appointment.
          </p>
        </div>
      </section>

      <section className="bg-muted/25">
        <div className="section-container space-y-12 max-w-4xl">
          {DOCTORS.map((d, i) => (
            <article
              key={d.name}
              className="animate-on-scroll rounded-[40px] border border-border bg-white p-10 lg:p-12 space-y-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-muted shrink-0 mx-auto sm:mx-0">
                  <img src={shots[i % shots.length]} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <h2 className="text-2xl font-black">{d.name}</h2>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">
                    {d.qualification} · {d.designation}
                  </p>
                  <p className="text-[15px] text-muted-foreground">
                    <span className="font-bold text-foreground">Experience:</span> {d.experience}
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    <span className="font-bold text-foreground">Specialises in:</span> {d.specialises}
                  </p>
                  {(d.personalNote || d.note) && (
                    <p className="text-[15px] text-muted-foreground leading-relaxed pt-2 border-t border-border mt-4">
                      {d.personalNote || d.note}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center sm:justify-start">
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

export default DoctorsPage;
