
import React from "react";
import { JourneyCard } from "./JourneyCard";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="bg-[rgba(91,116,191,1)] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center pl-5 pr-20 pt-[77px] pb-[163px] max-md:max-w-full max-md:pr-5 max-md:pb-[100px]">
        <div className="flex w-[945px] max-w-full items-center justify-center gap-5 text-[52px] text-[rgba(243,242,240,1)] font-bold text-center leading-none max-md:text-[40px] max-md:text-left">
          <h2 className="max-md:max-w-full max-md:text-[40px]">
            Explore My Journey
          </h2>
        </div>
        <p className="text-white text-lg font-light leading-[30px] text-center w-[943px] mt-[71px] max-md:max-w-full max-md:mt-10 max-md:text-left">
          From freelancing to startups, from Portugal to Silicon Valley - I didn't
          follow the traditional path into tech. Instead, I built my career by
          connecting with people, sharing my work, and taking on opportunities
          that pushed me forward.
          <br />
          <br />
          This is not just a resume - it's an interactive way to explore the key
          moments, decisions, and lessons that shaped my journey. Pick a path and
          dive in.
        </p>
        <div className="mb-[-33px] w-full max-w-[1015px] mt-[71px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-md:w-full max-md:ml-0">
              <JourneyCard
                title="From France to Silicon Valley"
                description="Follow my journey from growing up in France and Portugal to building a career in tech."
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <JourneyCard
                title="Customer Success"
                description="Discover my thoughts on how Customer Success contributes to startups and the value it brings to businesses."
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <JourneyCard
                title="Startup Journey"
                description="Discover how I transitioned from being a freelancer to working with and for tech startups."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
