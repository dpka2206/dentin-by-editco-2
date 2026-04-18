import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";
import { TRUST_STATS } from "@/content/dentinContent";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/[\d,]+/);
  const numericString = numMatch ? numMatch[0].replace(/,/g, "") : "0";
  const num = parseInt(numericString, 10);
  const suffix = value.replace(/[\d,]+/g, "");

  const spring = useSpring(0, {
    duration: 2500,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return Math.floor(current).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(num);
    }
  }, [isInView, num, spring]);

  if (isNaN(num)) return <span>{value}</span>;

  return (
    <span ref={ref} className="inline-flex justify-center">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

const TrustBadges = () => {
  return (
    <section id="trust" className="bg-white border-y border-border/60">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST_STATS.map((s) => (
            <div
              key={s.label}
              className="text-center space-y-2 animate-on-scroll bg-muted/40 rounded-[32px] border border-border/80 px-6 py-10 hover:border-primary/30 transition-colors group"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tighter group-hover:scale-105 transition-transform duration-500">
                <Counter value={s.value} />
              </p>
              <p className="text-[13px] sm:text-sm font-bold text-muted-foreground uppercase tracking-widest leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
