
import React from "react";
import { Testimonial } from "./Testimonial";

export const Hero: React.FC = () => {
  const scrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    journeySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[rgba(243,242,240,1)] z-10 flex mt-[-11px] w-full flex-col items-center justify-center px-20 py-[78px] max-md:mt-0 max-md:px-5 max-md:pt-0 max-md:pb-[30px]">
      <div className="w-full max-w-[1200px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[58%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch text-lg text-[rgba(50,55,67,1)] my-auto max-md:max-w-full max-md:mt-5">
                <h1 className="font-normal leading-loose bg-[rgba(91,116,191,1)] text-white inline-block w-fit px-4 py-2 rotate-[-2deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Hello, I'm Krystel!
                </h1>
                <h2 className="text-[rgba(23,26,31,1)] text-[64px] font-bold leading-[84px] mt-[13px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
                  Winning with Customer Success
                </h2>
                <p className="font-light leading-7 mr-[50px] mt-[41px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                  From freelancing to startups, I'm building customer-first
                  strategies, scaling operations, and turning chaos into growth
                  - one startup at a time.
                </p>
                <div className="flex gap-4 mt-[100px] max-md:flex-col max-md:mt-[50px]">
                  <button 
                    onClick={scrollToJourney}
                    className="bg-[rgba(91,116,191,1)] border-2 border-black flex items-stretch gap-[9px] overflow-hidden text-lg text-gray-100 font-normal leading-loose px-5 py-[18px] rounded-[10px_10px_10px_0px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 w-fit"
                  >
                    <span className="grow">Explore my journey</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/82894084f0019eb830f699643383bbb0eee1982428be7ca26d0680fdbb410a2f?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 shrink-0 my-auto"
                      alt="Arrow icon"
                    />
                  </button>
                  <a 
                    href="https://linkedin.com/in/krysteleal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-[rgba(91,116,191,1)] text-[rgba(91,116,191,1)] flex items-stretch gap-[9px] overflow-hidden text-lg font-normal leading-loose px-5 py-[18px] rounded-[10px_10px_10px_0px] shadow-[4px_4px_0px_0px_rgba(91,116,191,1)] hover:shadow-[2px_2px_0px_0px_rgba(91,116,191,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 w-fit"
                  >
                    <span className="grow">Follow me on LinkedIn</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/82894084f0019eb830f699643383bbb0eee1982428be7ca26d0680fdbb410a2f?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 shrink-0 my-auto [filter:brightness(0)_saturate(100%)_invert(47%)_sepia(8%)_saturate(2687%)_hue-rotate(194deg)_brightness(91%)_contrast(87%)]"
                      alt="Arrow icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[42%] ml-5 flex flex-col gap-5 max-md:w-full max-md:ml-0">
              <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] overflow-hidden rounded-[0px_40px_0px_40px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/6e7f8d9f030fd6afb81d2e665d3ff062217ce8bd24f7828e8d697614fb786410?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full"
                  alt="Profile"
                />
              </div>
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
