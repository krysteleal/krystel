
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const CustomerSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            Customer Success
          </h1>
          
          <div className="space-y-6 text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
            <p>
              When I first heard about Customer Success as a career, I had already been doing it for years without realizing it.
            </p>

            <p>
              As a freelancer, I spent years helping brands with web development, SEO, and content strategy. I worked directly with brands, helping them with their web strategy, content, and SEO. But I wasn't just optimizing websites - I was helping businesses understand their customers better.
            </p>

            <p>
              I became obsessed with understanding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Why do customers stay? Why do they churn?</li>
              <li>What makes them loyal to a brand or product?</li>
              <li>How can companies ensure their users get long-term value?</li>
            </ul>

            <p>
              At some point, I realized: I was already doing Customer Success - I just hadn't called it that yet.
            </p>

            <p>
              I officially transitioned into Customer Success when{" "}
              <a 
                href="https://www.linkedin.com/posts/krysteleal_youll-wear-many-hats-at-a-startup-when-activity-7265091557391818753-LqNw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABISZsMBZgBuYWrEUIyF-rxLfClpsJKcj8s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(91,116,191,1)] hover:underline"
              >
                I joined OneText as the first CS hire
              </a>
              . But when I look back, I see that I had been preparing for this role for years - just without knowing what to call it.
            </p>

            <p>
              Customer Success wasn't a career I chose - it was the natural extension of the work I had already been doing. And once I fully embraced it, I realized how powerful CS could be in driving growth, retention, and long-term business success.
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <button
              onClick={() => navigate("/stories/cs/references")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                What are your Customer Success references?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Check out my recommended resources and network.
              </p>
            </button>

            <button
              onClick={() => navigate("/stories/cs/silicon-valley-mindset")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did the Silicon Valley mindset change the way you think?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover how Silicon Valley's unique approach influenced my way of thinking
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

export default CustomerSuccess;
