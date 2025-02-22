
import React from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

export const DigitalProjects = () => {
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
            My First Digital Projects
          </h1>
          
          <p className="text-xl text-[rgba(50,55,67,1)] mb-12">
            From building small websites to experimenting with new technologies,
            every project was a stepping stone toward something bigger. These early
            experiences taught me valuable lessons about project management,
            client relationships, and the importance of continuous learning.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/startup")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did this lead to working in startups?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Discover how my early digital projects paved the way for my startup career.
              </p>
            </button>

            <button
              onClick={() => handleOptionClick("/stories/customer-success")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did your early projects shape the way you build projects and scale teams?
              </h3>
              <p className="text-[rgba(50,55,67,1)]">
                Learn how these experiences influenced my approach to team building and project scaling.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalProjects;
