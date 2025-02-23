import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const SiliconValleyMindset = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
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
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            The Silicon Valley Mindset
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              The Silicon Valley approach to Customer Success fundamentally changed my perspective. 
              Instead of viewing CS as a reactive support function, I learned to see it as a 
              proactive driver of growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Mindset Shifts
            </h2>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Growth-Driven:</strong> CS teams are strategic partners that help shape 
                product development, drive adoption, and directly impact revenue.
              </li>
              <li>
                <strong>Data-Focused:</strong> Emphasis on metrics like Time-to-Value, Net Revenue 
                Retention, and Product-Led Growth indicators.
              </li>
              <li>
                <strong>Scalable Processes:</strong> Building systems that enable customer success 
                while maintaining efficiency as the business grows.
              </li>
              <li>
                <strong>Proactive Engagement:</strong> Moving from reactive support to proactive 
                partnership with customers.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Impact on Business
            </h2>
            
            <p>
              This mindset transformation led to significant improvements in customer retention, 
              expansion revenue, and overall customer satisfaction. By adopting Silicon Valley's 
              approach to CS, we were able to:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>Reduce Time-to-Value by 40%</li>
              <li>Increase Net Revenue Retention to over 120%</li>
              <li>Improve customer satisfaction scores by 25%</li>
              <li>Build more scalable onboarding processes</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)]">
              What would you like to learn next?
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={() => navigate("/stories/cs/learning")}
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
                onClick={() => navigate("/stories/cs/building-team")}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
              >
                <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                  How do you build a CS team from scratch in a fast-growing startup?
                </h3>
                <p className="text-[rgba(50,55,67,1)]">
                  Explore the process of building and scaling a CS team.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
            <button
              onClick={() => navigate("/stories/customer-success")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Customer Success</span>
            </button>
            <button
              onClick={() => navigate("/stories/cs/learning")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <span>Learning Journey</span>
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

export default SiliconValleyMindset;
