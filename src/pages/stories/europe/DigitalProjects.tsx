
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const DigitalProjects = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
            Digital Projects and Freelance Work
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            I still remember when I got my first computer. I shared <a href="https://www.linkedin.com/pulse/tale-my-first-computer-krystel-leal/?trackingId=3s4EBFDBQ3KbVFg6D0SwAQ%3D%3D" className="text-[rgba(91,116,191,1)] hover:underline" target="_blank" rel="noopener noreferrer">my story in this LinkedIn post</a>:
            <br /><br />
            <span className="italic border-l-4 border-[rgba(91,116,191,1)] pl-4 block">
              I remember spending hours reading blogs on Blogger and LiveJournal whenever I was allowed to use the computer. My fascination turned into trying to figure out how they appeared on screen, and that's when I discovered HTML and CSS. That was the beginning of my journey into the web.
            </span>
            <br />
            That early passion for the digital world never left me. I was fascinated by how things appeared on a screen, how people connected through content, and how knowledge spread online.
            <br /><br />
            So, when I finished high school in Portugal, pursuing Communication felt like the obvious choice. I was drawn to journalism - I loved language, storytelling, and the ability to shape perspectives. It seemed like the perfect fit.
            <br /><br />
            But moving to Paris alone at 19 was more than just starting college - it was a crash course in independence. To support myself, I worked multiple jobs:<br />
            🥐 At a bakery (a dream for anyone living in Paris!)<br />
            🍔 Fast food chains<br />
            📄 Handing out flyers on the street
            <br /><br />
            And every night, after long shifts, I'd come home and read about "digital nomads" building businesses online. I realized that the digital skills I had learned as a teenager - HTML, CSS, and content creation - had real value. I started teaching myself WordPress development, became obsessed with SEO, and learned how content was king at the time.
            <br /><br />
            By 2014, I was experimenting with freelance platforms, digital marketing, and personal branding.
            <br /><br />
            By 2015, I had built a solid portfolio, a steady stream of clients, and was earning more money freelancing than in any job I had before. That's when I made the decision: I wasn't just going to get a job - I was going to build my own career, on my own terms. I became a full-time freelancer.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigate("/stories/startup")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you transition from freelancing to startups?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my journey from freelancing to the startup world.
              </p>
            </button>

            <button
              onClick={() => handleNavigate("/stories/europe/silicon-valley")}
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
      <ScrollToTop />
    </div>
  );
};

export default DigitalProjects;
