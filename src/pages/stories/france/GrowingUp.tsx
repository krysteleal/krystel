
import React, { useState } from "react";
import { ArrowLeft, Home, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

export const GrowingUp = () => {
  const navigate = useNavigate();
  const [isThoughtsExpanded, setIsThoughtsExpanded] = useState(false);

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
            Growing Up in France & Portugal
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            Growing up in two cultures gave me a unique perspective on adaptability, communication, and creativity - all of which later became essential in my career.
            <br /><br />
            France gave me a strong foundation in communication and media, especially through my studies at the Sorbonne University. It's where I learned how to analyze, structure, and present ideas - a skill that later helped me in startups when I had to turn chaotic information into clear strategies.
            <br /><br />
            Meanwhile, Portugal shaped my adaptability and ability to navigate uncertainty. Growing up there, I learned how to make the most of what's available, find creative solutions, and stay flexible when things don't go as planned.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/france/digital-projects")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Tell me about your first digital projects
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my early experiences with technology and how they shaped my path.
              </p>
            </button>

            <div className="border border-[rgba(228,226,221,1)] rounded-lg overflow-hidden">
              <button
                onClick={() => setIsThoughtsExpanded(!isThoughtsExpanded)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[rgba(91,116,191,1)]">
                  💡 What were you thinking during these formative years?
                </span>
                {isThoughtsExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[rgba(91,116,191,1)]" />
                )}
              </button>
              {isThoughtsExpanded && (
                <div className="p-6 bg-white border-t border-[rgba(228,226,221,1)]">
                  <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
                    During these formative years, my mind was constantly racing with ideas
                    and possibilities. Growing up between two distinct cultures gave me a
                    unique perspective on problem-solving and innovation. I was fascinated
                    by how technology could bridge cultural gaps and create opportunities
                    for global connection. This period wasn't just about learning technical
                    skills - it was about understanding how different worldviews could
                    contribute to better product development and user experiences.
                  </p>
                  <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mt-4">
                    I was particularly inspired by how the internet was breaking down
                    traditional barriers and enabling new forms of collaboration. This
                    mindset would later prove invaluable in my approach to building
                    products and leading teams across different cultures and markets.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ecebe8]">
        <NestedFooter />
      </div>
    </div>
  );
};

export default GrowingUp;
