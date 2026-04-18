import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAND, WORKING_HOURS_LINES } from "@/content/dentinContent";

const ContactBand = () => {
  return (
    <section id="contact" className="bg-foreground text-white">
      <div className="section-container">
        <div className="rounded-[48px] border border-white/10 bg-white/[0.04] p-10 lg:p-16 reveal backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <Badge className="bg-primary/25 text-primary-light border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
                Contact
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                We&apos;re Right Here. <span className="text-primary italic">Let&apos;s Talk.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed">
                Visit us in Gowlidoddy or reach out by phone or email — we&apos;re happy to help with appointments and
                emergencies.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex text-sm font-black uppercase tracking-widest text-primary-light hover:underline underline-offset-4"
              >
                Full contact page & map →
              </Link>
            </div>

            <ul className="space-y-8 text-[15px]">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-white mb-1">Address</p>
                  <p className="text-white/70 leading-relaxed">{BRAND.addressFull}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-white mb-1">Phone</p>
                  <a href={`tel:${BRAND.phoneTel}`} className="text-white/80 hover:text-white font-bold">
                    {BRAND.phoneDisplay} (Appointments & Emergencies)
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-white mb-1">Email</p>
                  <p className="text-white/80">
                    <a href={`mailto:${BRAND.emailInfo}`} className="hover:text-white block">
                      {BRAND.emailInfo}
                    </a>
                    <a href={`mailto:${BRAND.emailAppointments}`} className="hover:text-white block">
                      {BRAND.emailAppointments}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="w-6 h-6 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-white mb-1">Working hours</p>
                  <ul className="text-white/70 space-y-1">
                    {WORKING_HOURS_LINES.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBand;
