
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when header is not visible (after scrolling past 100px)
      const headerHeight = 100;
      setIsVisible(window.scrollY > headerHeight);
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
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="secondary"
      className="fixed bottom-8 right-8 backdrop-blur-sm hover:bg-white/90 text-[rgba(91,116,191,1)] shadow-lg transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-4 w-4" />
    </Button>
  );
};
