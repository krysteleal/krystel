
import React, { useState } from "react";
import { ArrowLeft, Home, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const SiliconValley = () => {
  const navigate = useNavigate();
  const [isThoughtsExpanded, setIsThoughtsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            Moving to Silicon Valley
          </h1>
          
          <p className="text-xl text-[rgba(50,55,67,1)] mb-12">
            Moving to Silicon Valley wasn't always part of my plan. Initially, I came to the Bay Area because of my husband's passion for exploring this ecosystem. At first, I saw it as an opportunity to finally visit San Francisco - a dream trip inspired by my love for the Beat Generation.
            <br /><br />
            But <strong>Silicon Valley is one of those places that changes you the moment you start engaging with it</strong>.
            <br /><br />
            I started attending startup events, meeting founders, and immersing myself in the ecosystem. I saw how quickly ideas turned into companies, how ambitious people surrounded themselves with others who pushed them forward. The energy was contagious.
            <br /><br />
            As someone who had been freelancing for years and working remotely, being here changed my perspective on growth, networking, and career opportunities. I realized that this was the best place to take my career to the next level.
            <br /><br />
            So, what started as curiosity became a long-term commitment to being part of this ecosystem. I knew: I wanted to be here.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/stories/startup/transition")}
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
              onClick={() => navigate("/stories/cs/silicon-valley-mindset")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did the Silicon Valley mindset change the way you think about Customer Success?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover how Silicon Valley's unique approach influenced my CS philosophy.
              </p>
            </button>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsThoughtsExpanded(!isThoughtsExpanded)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[rgba(91,116,191,1)]">
                  💡 My Silicon Valley Journey
                </span>
                {isThoughtsExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isThoughtsExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
                    Coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ecebe8]">
        <NestedFooter />
      </div>
    </div>
  );
};

export default SiliconValley;
