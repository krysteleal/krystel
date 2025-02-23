import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const Transition = () => {
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
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            From Freelancing to Startups
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              The transition from freelancing to startups was a journey of growth, learning, 
              and adapting to new challenges. Here's how I navigated this significant career shift.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Steps in the Transition
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Building a Portfolio
                </h3>
                <p>
                  Used freelance projects to build a strong portfolio showcasing my ability 
                  to deliver impactful solutions and work with diverse clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Networking Strategically
                </h3>
                <p>
                  Attended startup events, connected with founders, and joined relevant 
                  communities to understand the startup ecosystem.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Skills Development
                </h3>
                <p>
                  Identified and developed key skills needed in startups: fast learning, 
                  adaptability, and working in cross-functional teams.
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
                onClick={() => handleNavigate("/stories/startup/networking")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  Why is networking so important?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Discover the power of building meaningful connections in the startup ecosystem.
                </p>
              </button>

              <button
                onClick={() => handleNavigate("/stories/startup/show-work")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  What does 'show your work' really mean?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Understand the importance of visibility and building in public.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
            <button
              onClick={() => navigate("/stories/startup")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Startup Journey</span>
            </button>
            <button
              onClick={() => navigate("/stories/startup/networking")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <span>Networking</span>
              <ChevronRight className="w-4 h-4" />
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

export default Transition;
