
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export const FromFranceToValley = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
            From Europe to Silicon Valley
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            My journey didn't start in Silicon Valley - it started in France and Portugal. Born in France but raised in Portugal, I made a bold decision at 19 to move to Paris on my own to study Communication at Sorbonne University.
            <br /><br />
            At the time, I was certain I would become a journalist. I loved language, storytelling, and the power of words to shape knowledge. But life had other plans. Instead of reporting the news, I found myself diving deep into the digital world - building projects, learning WordPress, and eventually becoming a freelancer.
            <br /><br />
            From my first digital projects and later moving to the Bay Area, every step along the way shaped how I think about technology, business, and career growth.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/france/growing-up")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did growing up in France and Portugal shape your career?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about the cultural influences that impacted my professional journey.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/france/digital-projects")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Tell me about your first digital projects and freelance work
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Explore my early experiences with digital projects and how I became a freelancer.
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
      <ScrollToTop />
    </div>
  );
};

export default FromFranceToValley;
