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
            The decision to move to Silicon Valley wasn't just about career advancement—it was about 
            being at the intersection of technology, culture, and global business transformation. Here's my story.
          </p>

          <div className="space-y-4">
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
