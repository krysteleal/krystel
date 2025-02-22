
import React from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

export const GrowingUp = () => {
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
            Growing Up in France & Portugal
          </h1>
          
          <p className="text-xl text-[rgba(50,55,67,1)] mb-12">
            The blend of French and Portuguese cultures shaped my perspective on 
            technology, business, and innovation. This unique background provided me
            with diverse insights that would later influence my approach to building
            global products.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/france/digital-projects")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Tell me about your first digital projects
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Learn about my early experiences with technology and how they shaped my path.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/france/thoughts")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                What were you thinking during these formative years?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Explore the mindset and motivations that drove my early career decisions.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingUp;
