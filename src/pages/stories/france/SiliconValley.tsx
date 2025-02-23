
import React, { useState } from "react";
import { ArrowLeft, Home, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

const SiliconValley = () => {
  const navigate = useNavigate();
  const [isThoughtsExpanded, setIsThoughtsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <Header />
      <div className="py-20 px-20 max-md:px-5">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
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
    </div>
  );
};

export default SiliconValley;
