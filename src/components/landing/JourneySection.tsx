import React from "react";
import { JourneyCard } from "./JourneyCard";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="bg-[rgba(91,116,191,1)] flex w-full flex-col items-center pl-5 pr-20 pt-[77px] pb-[163px] max-md:max-w-full max-md:pr-5 max-md:pb-[100px]">
      <div className="flex w-[945px] max-w-full items-stretch gap-5 text-[52px] text-[rgba(243,242,240,1)] font-bold text-center leading-none flex-wrap justify-between max-md:text-[40px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/8a60f499f4c6a50750f0f7f69f7e94c074124d7fa5e51eba24198f59d1eece95?placeholderIfAbsent=true"
          className="aspect-[1.01] object-contain w-[72px] shrink-0"
          alt="Journey icon"
        />
        <h2 className="max-md:max-w-full max-md:text-[40px]">
          Explore My Journey
        </h2>
      </div>
      <p className="text-white text-xl font-normal leading-[30px] text-center w-[943px] mt-[71px] max-md:max-w-full max-md:mt-10">
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
              description="Learn how I built and scaled Customer Success teams from the ground up."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <JourneyCard
              title="Startup Journey"
              description="Experience my transition from freelancing to tech startups."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
