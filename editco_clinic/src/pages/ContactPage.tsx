import { useEffect, useState, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BRAND, SERVICES, WORKING_HOURS_LINES } from "@/content/dentinContent";
import { toast } from "sonner";

function buildTimeSlots(): string[] {
  const out: string[] = [];
  for (let mins = 9 * 60; mins <= 21 * 60; mins += 30) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const ampm = h >= 12 ? "PM" : "AM";
    const mm = m.toString().padStart(2, "0");
    out.push(`${hour12}:${mm} ${ampm}`);
  }
  return out;
}
const timeSlots = buildTimeSlots();

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Gowlidoddy+Hyderabad+Telangana+500075&output=embed";

const ContactPage = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#booking") {
      const el = document.getElementById("booking");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service) {
      toast.error("Please fill in your name, phone, and service.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, date, time }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Thank you — we’ll confirm your appointment shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-24">
      <section className="bg-white pb-12">
        <div className="section-container max-w-4xl space-y-6 reveal text-center">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Contact
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            Let&apos;s Get You <span className="text-primary italic">Smiling</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Have a question or ready to book? We&apos;re just a call or click away.
          </p>
        </div>
      </section>

      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div id="booking" className="scroll-mt-36 space-y-6 reveal rounded-[40px] border border-border bg-muted/20 p-8 lg:p-10">
          <h2 className="text-2xl font-black">Book an appointment</h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl h-12"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl h-12"
                placeholder={BRAND.phoneDisplay}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl h-12"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Select service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="rounded-xl h-12 bg-white">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent className="bg-white border-border shadow-lg z-50">
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={date} 
                  min={new Date().toISOString().split("T")[0]} 
                  onChange={(e) => setDate(e.target.value)} 
                  className="rounded-xl h-12 bg-white" 
                />
              </div>
              <div className="space-y-2">
                <Label>Preferred time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="rounded-xl h-12 bg-white">
                    <SelectValue placeholder="9:00 AM – 9:00 PM" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-white border-border shadow-lg z-50">
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full rounded-2xl h-14 font-black text-base">
              {isSubmitting ? "Submitting..." : "Confirm booking"}
            </Button>
          </form>
        </div>

        <div className="space-y-10 reveal">
          <div className="space-y-6">
            <h2 className="text-2xl font-black">Contact details</h2>
            <ul className="space-y-6 text-[15px]">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-black mb-1">Address</p>
                  <p className="text-muted-foreground leading-relaxed">{BRAND.addressFull}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-black mb-1">Phone</p>
                  <a href={`tel:${BRAND.phoneTel}`} className="text-primary font-bold hover:underline">
                    {BRAND.phoneDisplay} (Appointments & Emergencies)
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-black mb-1">Email</p>
                  <p className="text-muted-foreground">
                    <a href={`mailto:${BRAND.emailInfo}`} className="hover:text-primary">
                      {BRAND.emailInfo}
                    </a>
                    <br />
                    <a href={`mailto:${BRAND.emailAppointments}`} className="hover:text-primary">
                      {BRAND.emailAppointments}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-black mb-1">Working hours</p>
                  <ul className="text-muted-foreground space-y-1">
                    {WORKING_HOURS_LINES.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-border aspect-video bg-muted">
            <iframe
              title="Dentin Oral Experts location"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Map location is approximate — call us for precise directions.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
