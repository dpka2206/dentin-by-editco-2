import { Link } from "react-router-dom";
import { BRAND, FOOTER_SERVICE_LINKS } from "@/content/dentinContent";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white overflow-hidden pb-8">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          width: 100%;
        }
        .marquee-content {
          display: flex;
          flex-shrink: 0;
          min-width: 100%;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="py-10 border-t border-white/5 overflow-hidden">
        <div className="marquee-container opacity-20 hover:opacity-100 transition-opacity">
          <div className="marquee-content gap-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-[100px] sm:text-[120px] font-black tracking-tighter text-white">
                {BRAND.name.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="marquee-content gap-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-[100px] sm:text-[120px] font-black tracking-tighter text-white">
                {BRAND.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-8 pb-12 border-t border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center bg-white/10 w-fit p-3 rounded-2xl">
              <img src="/logo.png" alt={BRAND.name} className="h-12 w-auto object-contain drop-shadow-md brightness-[0] invert" />
            </div>
            <p className="text-[15px] text-white/60 leading-relaxed max-w-sm">{BRAND.tagline}</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Quick links</h4>
            <nav className="flex flex-col gap-2">
              {[
                ["/", "Home"],
                ["/about-us", "About Us"],
                ["/services", "Services"],
                ["/doctors", "Our Doctors"],
                ["/testimonials", "Testimonials"],
                ["/contact-us", "Contact Us"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="text-[14px] text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER_SERVICE_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="text-[13px] text-white/60 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Contact</h4>
            <div className="space-y-2 text-[14px] text-white/70">
              <p>
                <a href={`tel:${BRAND.phoneTel}`} className="hover:text-white font-semibold">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${BRAND.emailInfo}`} className="hover:text-white break-all">
                  {BRAND.emailInfo}
                </a>
              </p>
              <p className="text-white/60 leading-relaxed">{BRAND.addressShort}</p>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col lg:flex-row flex-wrap gap-4 justify-between items-center text-[12px] text-white/45">
          <p>© 2026 Dentin Oral Experts. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/25">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-white/25">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
          <p className="text-white/50">
            Powered by <a href="https://editcomedia.com" target="_blank" rel="noopener noreferrer" className="text-white/80 font-semibold hover:text-white transition-colors">editcomedia.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
