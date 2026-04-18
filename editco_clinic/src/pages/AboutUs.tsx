import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/MagneticButton";
import {
  MISSION_POINTS,
  VISION_POINTS,
  MILESTONES,
  PAIN_FREE_ITEMS,
  AWARDS,
  FACILITY_BULLETS,
  COMMUNITY_ITEMS,
} from "@/content/dentinContent";

import showcase01 from "@/assets/showcase-01.jpg";
import drSurya from "@/assets/Dr.-Surya.jpg";
import showcase02 from "@/assets/showcase-02.jpg";
import showcase03 from "@/assets/showcase-03.jpg";

const AboutUs = () => {
  return (
    <main className="pt-0">
      {/* 1. Hero Section (Restyled with Parallax Image) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src={showcase01} 
            alt="Dentin Oral Experts Reception" 
            className="w-full h-full object-cover opacity-30 parallax-image scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />
        </div>
        <div className="section-container max-w-4xl space-y-8 reveal relative z-10 pt-32 text-center">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-sm">
            About Us
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-foreground">
            15 Years of Smiles. <span className="text-primary italic">And Counting.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto">
            Dentin Oral Experts was built on one belief — that going to the dentist should never mean pain, fear, or anxiety.
            We've been proving that since 2010.
          </p>
        </div>
      </section>

      {/* 2. Our Story (Original content, split with Dr Surya image) */}
      <section className="bg-white">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8 reveal">
              <h2 className="text-4xl sm:text-5xl font-black">Our story</h2>
              <div className="space-y-6 text-xl text-foreground leading-relaxed font-medium">
                <p>
                  Founded in 2010 by Dr. Suryanarayan Sharma, Dentin Oral Experts started as a small clinic in Gowlidoddy,
                  Hyderabad — with a big mission: to make dental care comfortable, accessible, and completely anxiety-free.
                </p>
                <p>
                  Over 15 years, that vision has grown into a full-scale specialist clinic with 50+ dental professionals, 30+
                  services, state-of-the-art technology, and over 20,000 patients who've walked out smiling.
                </p>
                <p>
                  Every decision we make — from the treatments we offer to the technology we invest in — comes back to one
                  question: does this make it better for the patient?
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal relative">
              <div className="absolute -inset-4 bg-muted/50 rounded-[48px] -z-10" />
              <img 
                src={drSurya} 
                alt="Dr. Suryanarayan Sharma" 
                className="w-full object-cover rounded-[40px] shadow-2xl aspect-[4/5]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journey & Milestones (Original Content, Restyled Cards) */}
      <section className="bg-muted/20">
        <div className="section-container space-y-16">
          <h2 className="text-4xl sm:text-5xl font-black text-center reveal">Journey & milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {MILESTONES.map((m) => (
              <article key={m.year} className="animate-on-scroll rounded-[40px] border border-border/50 bg-white p-10 lg:p-12 space-y-4 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <p className="text-lg font-black text-primary uppercase tracking-widest">{m.year}</p>
                <h3 className="text-2xl font-black text-foreground">{m.title}</h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-medium">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision (Original Content, Restyled Backgrounds) */}
      <section className="bg-foreground text-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-10 reveal">
            <h2 className="text-4xl sm:text-5xl font-black">Our mission</h2>
            <p className="text-white/80 text-xl leading-relaxed font-medium">
              To eliminate pain and anxiety from the dental experience — and make excellent oral health care accessible,
              comfortable, and trustworthy for every patient we see.
            </p>
            <ul className="space-y-6 bg-white/5 rounded-[40px] p-8 lg:p-10 border border-white/10">
              {MISSION_POINTS.map((p) => (
                <li key={p} className="flex gap-4 text-lg text-white font-medium items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-light mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10 reveal">
            <h2 className="text-4xl sm:text-5xl font-black">Our vision</h2>
            <p className="text-white/80 text-xl leading-relaxed font-medium">
              To be Hyderabad's most trusted dental clinic — known for transforming how people feel about dental care
              through skill, technology, and genuine compassion.
            </p>
            <ul className="space-y-6 bg-white/5 rounded-[40px] p-8 lg:p-10 border border-white/10">
              {VISION_POINTS.map((p) => (
                <li key={p} className="flex gap-4 text-lg text-white font-medium items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-light mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Core Values (Original Array, Restyled Cards) */}
      <section className="bg-white">
        <div className="section-container space-y-16">
          <h2 className="text-4xl sm:text-5xl font-black text-center reveal">Our core values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                t: "Compassionate Care",
                d: "Every patient is treated with empathy and respect. We take time to understand your concerns, explain your options clearly, and never rush you into a decision.",
              },
              {
                t: "Clinical Excellence",
                d: "We hold ourselves to the highest standards — in diagnosis, treatment, and follow-up. Your outcome matters to us long after you leave the chair.",
              },
              {
                t: "Innovation",
                d: "We stay ahead of the curve — adopting new technology and techniques that improve accuracy, reduce discomfort, and deliver better results.",
              },
              {
                t: "Integrity",
                d: "Honest recommendations, transparent pricing, no unnecessary treatments. We tell you what you need — and why.",
              },
            ].map((x) => (
              <article key={x.t} className="animate-on-scroll rounded-[40px] bg-muted/20 border border-border p-10 lg:p-12 space-y-4 hover:border-primary/40 transition-colors">
                <h3 className="text-2xl font-black text-foreground">{x.t}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pain-Free Approach (Original Content, Restyled Grid) */}
      <section className="bg-muted/30">
        <div className="section-container space-y-16">
          <div className="max-w-4xl space-y-6 reveal text-center mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black">Our pain-free approach</h2>
            <p className="text-foreground/80 text-xl font-medium">
              We've built our entire practice around the idea that dental care should never hurt. Here's how we do it:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PAIN_FREE_ITEMS.map((item) => (
              <article key={item.title} className="animate-on-scroll rounded-[40px] bg-white shadow-sm border border-border p-10 lg:p-12 space-y-4 hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Awards & Recognition (Original Content, High Contrast Text) */}
      <section className="bg-white">
        <div className="section-container max-w-4xl space-y-10">
          <h2 className="text-4xl sm:text-5xl font-black text-center reveal">Awards & recognition</h2>
          <ul className="space-y-6">
            {AWARDS.map((a) => (
              <li key={a} className="animate-on-scroll text-xl text-foreground font-medium border-l-8 border-primary/40 pl-6 py-2 bg-muted/20 rounded-r-2xl">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Our Facility (Original Content + Image Additions) */}
      <section className="bg-foreground text-white">
        <div className="section-container space-y-16">
          <div className="max-w-4xl space-y-6 reveal text-center mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black">Our facility</h2>
            <p className="text-white/80 text-xl font-medium">
              A clinic designed with you in mind — clean, modern, and equipped with everything needed for accurate diagnosis
              and comfortable care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 reveal">
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-80">
              <img src={showcase02} alt="Treatment Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-80 hidden lg:block">
              <img src={showcase03} alt="Imaging Center" className="w-full h-full object-cover" />
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {FACILITY_BULLETS.map((line) => (
              <li key={line} className="animate-on-scroll text-lg font-medium text-white/90 bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Community Involvement (Original Content, Restyled Grid) */}
      <section className="bg-white">
        <div className="section-container max-w-5xl space-y-12">
          <div className="text-center space-y-6 reveal">
            <h2 className="text-4xl sm:text-5xl font-black">Community involvement</h2>
            <p className="text-foreground/80 text-xl leading-relaxed font-medium max-w-3xl mx-auto">
              We believe quality dental care should reach everyone — not just those who can afford it or who live near a clinic.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMUNITY_ITEMS.map((c) => (
              <li key={c} className="animate-on-scroll text-lg font-medium text-foreground bg-muted/40 border border-border rounded-[32px] p-8 lg:p-10 flex items-center text-center">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. Footer CTA (Original Content with Magnetic Wrapper) */}
      <section className="bg-muted/30 pb-24">
        <div className="section-container">
          <div className="rounded-[60px] bg-foreground text-white p-12 lg:p-24 text-center space-y-10 reveal shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black relative z-10 leading-tight">Come See the Difference <br className="hidden sm:block"/>for Yourself</h2>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto relative z-10">
              Book your first appointment and experience dental care that actually feels good.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 pt-4">
              <MagneticWrapper>
                <Link
                  to="/contact-us#booking"
                  className="inline-flex w-full sm:w-auto justify-center bg-primary text-white h-16 px-10 rounded-[24px] font-black text-xl shadow-2xl shadow-primary/30 items-center hover:scale-105 transition-transform"
                >
                  Book Your Appointment
                </Link>
              </MagneticWrapper>
              
              <MagneticWrapper>
                <Link
                  to="/"
                  className="inline-flex w-full sm:w-auto justify-center bg-white/10 border border-white/20 text-white h-16 px-10 rounded-[24px] font-black text-xl hover:bg-white/20 transition-all items-center hover:scale-105"
                >
                  Back to Home
                </Link>
              </MagneticWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
