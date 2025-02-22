
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-[rgba(91,116,191,1)] p-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-1 text-sm border border-[rgba(228,226,221,1)] z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 h-4" />
      <span className="mr-1">Top</span>
    </button>
  );
};
