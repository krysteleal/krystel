
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const GrowingUp = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
            Growing Up in France and Portugal
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            Growing up between France and Portugal gave me a unique perspective on life and work. In France, I was exposed to a culture that valued intellectual pursuits and theoretical knowledge. In Portugal, I learned about resilience, adaptability, and the importance of community.
            <br /><br />
            This dual cultural background taught me to see things from different angles and adapt to new situations - skills that would prove invaluable in my career.
            <br /><br />
            Moving to Paris alone at 19 was my first big step toward independence. It wasn't just about studying - it was about proving to myself that I could build a life on my own terms.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigate("/stories/europe/digital-projects")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Tell me about your first digital projects and freelance work
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my early experiences with technology and how they shaped my path.
              </p>
            </button>

            <button
              onClick={() => handleNavigate("/stories/europe/silicon-valley")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                When and why did you move to Silicon Valley?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover the story behind my decision to move to the Bay Area and build my career in the US.
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ecebe8]">
        <NestedFooter />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default GrowingUp;
