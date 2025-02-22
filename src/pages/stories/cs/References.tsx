import React from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

const References = () => {
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
            Customer Success References
          </h1>
          
          <div className="space-y-6 text-[rgba(50,55,67,1)]">
            <p className="text-xl">
              My CS knowledge and expertise have been shaped by various resources, 
              industry leaders, and communities. Here are the key references that have 
              influenced my approach to Customer Success.
            </p>
            
            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Essential Reading
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Key Books
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>"Customer Success" by Nick Mehta, Dan Steinman, and Lincoln Murphy</li>
                  <li>"The Customer Success Professional's Handbook" by Ashvin Vaidyanathan</li>
                  <li>"Farm Don't Hunt" by Guy Nirpaz</li>
                  <li>"Chief Customer Officer 2.0" by Jeanne Bliss</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Industry Resources
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Gainsight's CS resources and methodologies</li>
                  <li>Customer Success Association forums</li>
                  <li>LinkedIn CS communities and thought leaders</li>
                  <li>CS industry blogs and newsletters</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Professional Development
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>CS certifications and training programs</li>
                  <li>Industry conferences and webinars</li>
                  <li>Peer networking groups</li>
                  <li>Mentorship programs</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Metrics & Frameworks
            </h2>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>Customer Health Scoring</li>
              <li>Net Revenue Retention (NRR)</li>
              <li>Customer Lifetime Value (CLV)</li>
              <li>Net Promoter Score (NPS)</li>
              <li>Time to Value (TTV)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center pt-8 border-t border-[rgba(228,226,221,1)]">
        <button
          onClick={() => navigate("/stories/cs/building-team")}
          className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Building a Team</span>
        </button>
        <button
          onClick={() => navigate("/stories/customer-success")}
          className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
        >
          <span>Back to Customer Success</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default References;
