import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

const BuildingTeam = () => {
  const navigate = useNavigate();

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
            Building a CS Team from Scratch
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              Building a successful CS team in a fast-growing startup requires a strategic 
              approach that balances immediate customer needs with long-term scalability.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Foundation Building
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  1. Understanding Customer Segments
                </h3>
                <p>
                  Before hiring, thoroughly analyze customer segments and their specific needs 
                  to inform team structure and required skill sets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  2. Process Development
                </h3>
                <p>
                  Create clear processes for onboarding, ongoing support, and customer 
                  success management that can scale with the team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  3. Tool Selection
                </h3>
                <p>
                  Implement the right tools and systems for customer management, communication, 
                  and success tracking from the start.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Team Growth Strategy
            </h2>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>Start with experienced CS professionals who can wear multiple hats</li>
              <li>Develop clear career paths and growth opportunities</li>
              <li>Create comprehensive onboarding and training programs</li>
              <li>Establish metrics for team and individual performance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Success Factors
            </h2>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>Strong alignment with company vision and goals</li>
              <li>Data-driven decision making</li>
              <li>Regular team training and development</li>
              <li>Clear communication channels with other departments</li>
              <li>Focus on scalable solutions</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)]">
              What would you like to explore next?
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={() => navigate("/stories/cs/references")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  What are your Customer Success references?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Check out my recommended resources and network.
                </p>
              </button>

              <button
                onClick={() => navigate("/stories/cs/silicon-valley-mindset")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  How did the Silicon Valley mindset change the way you think about CS?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Circle back to learn about the Silicon Valley approach to Customer Success.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
            <button
              onClick={() => navigate("/stories/cs/learning")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Learning Journey</span>
            </button>
            <button
              onClick={() => navigate("/stories/cs/references")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <span>References</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingTeam;
