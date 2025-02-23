
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const StartupJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            Startup Journey
          </h1>
          
          <p className="text-lg font-light leading-7 text-[rgba(50,55,67,1)] mb-12">
            For a long time, I thought freelancing was my dream career. I built a steady income, worked remotely, and had the flexibility to choose my projects.
            <br /><br />
            But after a few years, I hit a wall. I started to realize that working solo had its limits. I missed the collaboration, the shared mission, and the energy of building something bigger than myself.
            <br /><br />
            That's when I started engaging with founders, growth teams, and product leaders. I began seeing how startups operated from the inside and how fast things moved when you had the right team in place. It wasn't just about the work - it was about being in an environment where everyone was pushing toward a common goal.
            <br /><br />
            At the same time, I realized that what I had been doing for years as a freelancer - helping businesses retain customers, optimize user experience, and scale through content and digital strategy - was actually what Customer Success teams did inside startups.
            <br /><br />
            Breaking into startups wasn't about having the perfect resume - it was about networking, showing my work, and proving value. My transition from freelancing to startups wasn't a straight path, but every decision I made helped me move forward.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/stories/startup/transition")}
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
              onClick={() => navigate("/stories/startup/networking")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                Why is networking so important?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover the power of building meaningful connections in the startup ecosystem.
              </p>
            </button>

            <button
              onClick={() => navigate("/stories/startup/show-work")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                What does 'show your work' really mean?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Understand the importance of visibility and building in public.
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

export default StartupJourney;
