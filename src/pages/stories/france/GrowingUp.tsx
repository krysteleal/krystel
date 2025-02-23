
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

export const GrowingUp = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            Growing up in France and Portugal
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            Growing up in two cultures gave me a unique perspective on adaptability, communication, and creativity - all of which later became essential in my career.
            <br /><br />
            France gave me a strong foundation in communication and media, especially through my studies at the Sorbonne University. It's where I learned how to analyze, structure, and present ideas - a skill that later helped me in startups when I had to turn chaotic information into clear strategies.
            <br /><br />
            Meanwhile, Portugal shaped my adaptability and ability to navigate uncertainty. Growing up there, I learned how to make the most of what's available, find creative solutions, and stay flexible when things don't go as planned.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/france/digital-projects")}
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
              onClick={() => handleOptionClick("/stories/france/silicon-valley")}
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
    </div>
  );
};

export default GrowingUp;
