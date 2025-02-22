import React from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

export const StartupJourney = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

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
            Startup Journey
          </h1>
          
          <p className="text-xl text-[rgba(50,55,67,1)] mb-12">
            Breaking into startups wasn't about having the perfect resume—it was about
            networking, showing my work, and proving value. My transition from
            freelancing to startups wasn't a straight path, but every decision I
            made helped me move forward.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/startup/transition")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you transition from freelancing to startups?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Learn about my journey from freelancing to the startup world.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/startup/networking")}
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
              onClick={() => handleOptionClick("/stories/startup/show-work")}
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
      </div>
    </div>
  );
};

export default StartupJourney;
