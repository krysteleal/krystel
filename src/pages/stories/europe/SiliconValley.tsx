
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const SiliconValley = () => {
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
            Moving to Silicon Valley
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            Moving to Silicon Valley wasn't just about changing locations - it was about immersing myself in the world's most dynamic tech ecosystem. The decision came after years of following the tech industry from afar and realizing that to truly understand how technology was shaping the future, I needed to be at its epicenter.
            <br /><br />
            The Bay Area offered something unique: a concentration of innovative companies, forward-thinking individuals, and a culture that celebrated both success and failure as learning opportunities.
            <br /><br />
            But beyond the professional opportunities, what drew me here was the mindset. In Silicon Valley, people think big. They're not just solving today's problems - they're imagining and building tomorrow's solutions.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigate("/stories/startup")}
              className="w-full text-left p-6 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you transition from freelancing to startups?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my journey from freelancing to the startup world.
              </p>
            </button>

            <button
              onClick={() => handleNavigate("/stories/cs/silicon-valley-mindset")}
              className="w-full text-left p-6 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How has the Silicon Valley mindset changed your way of thinking?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover how the Silicon Valley mindset of collaboration and openness transformed my approach to life and career
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

export default SiliconValley;
