
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const DigitalProjects = () => {
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
            Digital Projects and Freelance Work
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            During my time at Sorbonne University, I started exploring the digital world beyond just using technology. I began creating websites using WordPress, learning about SEO, and understanding how online businesses worked.
            <br /><br />
            My first projects were simple - helping small businesses set up their online presence. But each project taught me something new about digital marketing, user experience, and business strategy.
            <br /><br />
            By my second year of university, I was making enough money from freelancing to support myself. This experience showed me that there were opportunities beyond traditional career paths.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigate("/stories/startup")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you transition from freelancing to startups?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my journey from freelancing to the startup world.
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

export default DigitalProjects;
