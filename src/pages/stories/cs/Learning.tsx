import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

const Learning = () => {
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
            My Customer Success Learning Journey
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              My journey into Customer Success was a combination of hands-on experience 
              and continuous learning, shaped by working directly with customers in 
              fast-growing startups.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Learning Phases
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  1. Early Stage Experience
                </h3>
                <p>
                  Started by wearing multiple hats in early-stage startups, which provided 
                  a comprehensive understanding of the entire customer journey and business operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  2. Professional Development
                </h3>
                <p>
                  Invested in formal training, certifications, and attended industry conferences 
                  to learn best practices and stay current with CS trends.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  3. Community Engagement
                </h3>
                <p>
                  Actively participated in CS communities, sharing experiences and learning 
                  from peers facing similar challenges in different contexts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  4. Experimentation & Innovation
                </h3>
                <p>
                  Continuously tested new approaches and methodologies, measuring their impact 
                  on customer health scores and retention rates.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Continuous Learning
            </h2>
            
            <p>
              The field of Customer Success is constantly evolving, and staying current 
              requires ongoing dedication to learning and adaptation. Key areas of focus include:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>Latest CS technologies and tools</li>
              <li>Emerging industry trends and best practices</li>
              <li>New methodologies for customer engagement</li>
              <li>Data analytics and reporting techniques</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)]">
              What would you like to explore next?
            </h2>
            
            <div className="space-y-4">
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
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
            <button
              onClick={() => navigate("/stories/cs/silicon-valley-mindset")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Silicon Valley Mindset</span>
            </button>
            <button
              onClick={() => navigate("/stories/cs/building-team")}
              className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            >
              <span>Building a Team</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
