import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const ShowWork = () => {
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
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            Show Your Work
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              'Show your work' is more than just displaying finished projects—it's about 
              sharing your journey, process, and learnings with the community.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Why Show Your Work?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Build Credibility
                </h3>
                <p>
                  Sharing your work process and decisions helps establish expertise 
                  and builds trust in your capabilities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Learn in Public
                </h3>
                <p>
                  Document your learning journey, share challenges and solutions, 
                  and engage with others facing similar issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Create Opportunities
                </h3>
                <p>
                  Visibility leads to opportunities. When people can see your work 
                  and thought process, they're more likely to reach out.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)]">
              What would you like to explore next?
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={() => handleNavigate("/stories/startup/transition")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  How did you transition from freelancing to startups?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Circle back to learn about my journey from freelancing to the startup world.
                </p>
              </button>

              <button
                onClick={() => handleNavigate("/stories/startup/networking")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  Why is networking so important?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Learn about the power of building meaningful connections.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
            <button
              onClick={() => handleNavigate("/stories/startup/networking")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Networking</span>
            </button>
            <button
              onClick={() => handleNavigate("/stories/startup")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <span>Back to Startup Journey</span>
              <ChevronRight className="w-4 h-4" />
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

export default ShowWork;
