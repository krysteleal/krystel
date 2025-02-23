
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

export const DigitalProjects = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold text-[rgba(23,26,31,1)] mb-8">
            How I became a freelancer
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            I didn't know it at the time, but my first experience building things online would shape my entire career.
            <br /><br />
            It started with blogs and personal websites. I spent hours <a href="https://www.linkedin.com/pulse/tale-my-first-computer-krystel-leal/?trackingId=3s4EBFDBQ3KbVFg6D0SwAQ%3D%3D" className="text-[rgba(91,116,191,1)] hover:underline" target="_blank" rel="noopener noreferrer">tweaking HTML and CSS, learning through trial and error</a>, and reverse-engineering how things worked. I joined forums, asked questions, and tested ideas - without realizing it, I was teaching myself web development, design, and problem-solving.
            <br /><br />
            That hands-on learning taught me something valuable: <strong>if you're curious enough, you can figure things out as you go</strong>. And that mindset would follow me throughout my entire career.
            <br /><br />
            That same curiosity led me to freelancing.
            <br /><br />
            By 2013-2014, I started taking on small projects, testing the waters on Upwork. I quickly realized there was a demand for WordPress development and SEO, so I decided to specialize in both. I immersed myself in the WordPress ecosystem, content optimization, and content marketing, refining my skills while working with clients in Portugal, France, and Brazil.
            <br /><br />
            In 2015, I took the leap and became a full-time remote freelancer. I worked on 50+ projects, learning not just how to build websites but how to position brands, optimize content for search engines, and generate organic traffic.
            <br /><br />
            By 2016, after two years of working as a freelancer, I decided to share what I had learned and was still learning. That's when I launched Nomadismo Digital Portugal - the first Portuguese blog dedicated to remote work and freelancing.
            <br /><br />
            That project would change my life forever.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick("/stories/startup")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did this lead to working in startups?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
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
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn how these experiences influenced my approach to team building and project scaling.
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

export default DigitalProjects;
