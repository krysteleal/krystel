
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
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            The Silicon Valley Mindset
          </h1>
          
          <div className="space-y-6 text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
            <p>
              California didn't just change where I lived - it changed how I think, work, and approach opportunities.
            </p>

            <p>
              Before moving here, I had always been independent, resourceful, and curious. But something shifted when I started attending startup events, meeting founders, and seeing how businesses were built here.
            </p>

            <p className="mt-8">
              Here's what I learned:
            </p>
            
            <ul className="list-none space-y-8">
              <li>
                <p className="mb-2">
                  <strong>Failure isn't something to fear - it's a step toward success.</strong> In Silicon Valley, failure isn't seen as a personal loss - it's seen as a learning experience. People don't dwell on mistakes; they adapt, pivot, and try again. That gave me the confidence to take bigger risks.
                </p>
              </li>
              <li>
                <p className="mb-2">
                  <strong>Speed beats perfection.</strong> I used to spend too much time making things <em>just right</em>. In this ecosystem, I saw companies launch, learn, and iterate so quickly that perfection was an afterthought. Execution mattered more than endless planning and perfectionism.
                </p>
              </li>
              <li>
                <p className="mb-2">
                  <strong>Opportunities come from people, not job listings.</strong> I used to think a good job came from building a great resume and being at the right time at the right moment. But in Silicon Valley, I realized that who you know, how you contribute, and how you position yourself matters just as much as what you know. <strong>Your network is your leverage.</strong>
                </p>
              </li>
            </ul>

            <p className="mt-8">
              Being here pushed me to act faster, think bigger, and take bolder risks.
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <button
              onClick={() => navigate("/stories/customer-success")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you learn about the Customer Success area?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my journey into Customer Success.
              </p>
            </button>

            <button
              onClick={() => navigate("/stories/france/silicon-valley")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                When and why did you move to Silicon Valley?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover the story behind my decision to move to the Bay Area and build my career in the US.
              </p>
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
