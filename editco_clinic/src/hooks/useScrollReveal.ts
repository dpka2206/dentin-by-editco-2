import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Matches existing `.reveal` / `.animate-on-scroll` / `.reveal-stagger` patterns in `index.css`. */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".animate-on-scroll, .reveal, .reveal-stagger").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname, location.hash]);
}
