
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

export const FromFranceToValley = () => {
  const navigate = useNavigate();
  const [isThoughtsExpanded, setIsThoughtsExpanded] = useState(false);

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
            My journey didn't start in Silicon Valley—it started in France and Portugal.
            From my first digital projects to eventually moving to the Bay Area, each
            step shaped the way I think about tech, business, and career growth.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/france/digital-projects")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Tell me about your first digital projects
              </h3>
              <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
                Explore my early experiences with digital projects and how they shaped my career path.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/france/growing-up")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did growing up in France & Portugal shape your career?
              </h3>
              <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about the cultural influences that impacted my professional journey.
              </p>
            </button>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsThoughtsExpanded(!isThoughtsExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[rgba(91,116,191,1)]">
                  What I was thinking at the time?
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
                    During these pivotal years of transition, I was constantly evaluating 
                    the potential impact of technology on global connectivity. The contrast 
                    between European and American tech ecosystems fascinated me, and I saw 
                    an opportunity to bridge these different approaches to innovation.
                  </p>
                  <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mt-4">
                    I believed that my multicultural background could bring a unique 
                    perspective to Silicon Valley's fast-paced environment. The decision 
                    to move wasn't just about career advancement—it was about being at 
                    the intersection of technology, culture, and global business 
                    transformation.
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

export default FromFranceToValley;
