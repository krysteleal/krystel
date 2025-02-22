import React from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

export const CustomerSuccess = () => {
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
            Customer Success
          </h1>
          
          <p className="text-xl text-[rgba(50,55,67,1)] mb-12">
            Customer Success is more than just support—it's a strategic function that
            drives revenue, product adoption, and long-term customer relationships.
            My approach to CS was shaped by working in high-growth startups and
            experiencing firsthand how Silicon Valley companies scale.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/cs/silicon-valley-mindset")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did the Silicon Valley mindset change the way you think about Customer Success?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Discover how Silicon Valley's unique approach influenced my CS philosophy.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/cs/learning")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you learn about the Customer Success area?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Learn about my journey into Customer Success.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/cs/building-team")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How do you build a CS team from scratch in a fast-growing startup?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Explore the process of building and scaling a CS team.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/cs/references")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                What are your Customer Success references?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Check out my recommended resources and network.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
