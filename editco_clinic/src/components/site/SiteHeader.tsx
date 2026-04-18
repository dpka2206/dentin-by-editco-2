import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/content/dentinContent";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact-us", label: "Contact" },
] as const;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-[12px] uppercase tracking-widest font-bold transition-colors",
    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
  );

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-16 py-6 lg:py-8 pointer-events-none">
      <div className="max-w-[1400px] mx-auto pointer-events-auto">
        <div className="flex items-center justify-between bg-white/70 backdrop-blur-2xl border border-white/40 shadow-premium rounded-3xl px-6 lg:px-8 py-4 lg:py-5 reveal">
          <Link to="/" className="flex items-center min-w-0">
            <img src="/logo.png" alt={BRAND.name} className="h-10 sm:h-12 w-auto object-contain shrink-0" />
          </Link>

          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                {label}
              </NavLink>
            ))}
            <Button
              asChild
              className="rounded-2xl font-black text-[11px] uppercase tracking-widest px-6 h-11 bg-foreground hover:bg-primary"
            >
              <Link to="/contact-us#booking">Book Appointment</Link>
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon" className="rounded-2xl border-border shrink-0" aria-label="Open menu">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,320px)] pt-12">
              <nav className="flex flex-col gap-1">
                {links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "py-3 px-2 rounded-xl text-[13px] font-bold uppercase tracking-widest",
                        isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
                      )
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <Button asChild className="mt-4 rounded-2xl font-black">
                  <Link to="/contact-us#booking" onClick={() => setOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
