import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import Footer from "@/components/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const PageShell = () => {
  useScrollReveal();
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageShell;
