
import React, { useState } from "react";
import { ArrowLeft, Home, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";

export const CustomerSuccess = () => {
  const navigate = useNavigate();
  const [isSiliconValleyExpanded, setIsSiliconValleyExpanded] = useState(false);
  const [isLearningExpanded, setIsLearningExpanded] = useState(false);
  const [isBuildingTeamExpanded, setIsBuildingTeamExpanded] = useState(false);
  const [isReferencesExpanded, setIsReferencesExpanded] = useState(false);

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
            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsSiliconValleyExpanded(!isSiliconValleyExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[rgba(91,116,191,1)]">
                  How did the Silicon Valley mindset change the way you think about Customer Success?
                </span>
                {isSiliconValleyExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isSiliconValleyExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed">
                    The Silicon Valley approach to Customer Success fundamentally changed my perspective. 
                    Instead of viewing CS as a reactive support function, I learned to see it as a 
                    proactive driver of growth. In the Valley, CS teams are strategic partners that 
                    help shape product development, drive adoption, and directly impact revenue.
                  </p>
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed mt-4">
                    This mindset shift meant focusing on metrics like Time-to-Value, Net Revenue 
                    Retention, and Product-Led Growth. It's about building scalable processes that 
                    enable customers to succeed while maintaining efficiency as the business grows.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsLearningExpanded(!isLearningExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[rgba(91,116,191,1)]">
                  How did you learn about the Customer Success area?
                </span>
                {isLearningExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isLearningExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed">
                    My journey into Customer Success was a combination of hands-on experience 
                    and continuous learning. I started by working directly with customers in 
                    early-stage startups, where I had to wear multiple hats and understand 
                    the entire customer journey.
                  </p>
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed mt-4">
                    I invested heavily in learning from industry leaders, attending conferences, 
                    and participating in CS communities. The most valuable lessons came from 
                    experimenting with different approaches and seeing their impact on customer 
                    health scores and retention rates.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsBuildingTeamExpanded(!isBuildingTeamExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[rgba(91,116,191,1)]">
                  How do you build a CS team from scratch in a fast-growing startup?
                </span>
                {isBuildingTeamExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isBuildingTeamExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed">
                    Building a CS team starts with understanding your customer segments and 
                    their needs. I focused on creating a strong foundation by defining clear 
                    processes, success metrics, and customer journey maps before scaling the team.
                  </p>
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed mt-4">
                    Key steps included implementing the right tools and systems, developing 
                    onboarding playbooks, and establishing clear career paths for team members. 
                    The goal was to build a scalable operation that could maintain high-quality 
                    customer experiences while growing rapidly.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsReferencesExpanded(!isReferencesExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[rgba(91,116,191,1)]">
                  What are your Customer Success references?
                </span>
                {isReferencesExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isReferencesExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed">
                    My CS knowledge comes from a mix of practical experience and industry resources. 
                    I've learned from pioneers like Gainsight, engaging with their methodologies 
                    and best practices. The Customer Success community on LinkedIn and various CS 
                    forums have been invaluable for sharing experiences and learning from peers.
                  </p>
                  <p className="text-[rgba(50,55,67,1)] leading-relaxed mt-4">
                    Key books that shaped my approach include "Customer Success" by Nick Mehta, 
                    "The Customer Success Professional's Handbook" by Ashvin Vaidyanathan, and 
                    "Farm Don't Hunt" by Guy Nirpaz. These resources helped me develop a 
                    comprehensive understanding of modern CS practices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
