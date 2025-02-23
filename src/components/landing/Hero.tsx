
import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch max-md:max-w-full">
      <div className="self-stretch flex w-full flex-col mt-[35px] items-start max-md:max-w-full">
        <div className="text-[rgb(35,39,47)] text-[200px] leading-[0.75] tracking-tighter self-stretch whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          HI, I'M KRYSTEL
        </div>
        <div className="text-[rgba(35,39,47,1)] text-[27px] leading-[0.93] tracking-[-0.5px] self-stretch mt-7 max-md:max-w-full max-md:text-4xl">
          French-born, educated in Montreal, and proud San Francisco resident. I embarked on a journey of constant learning, from leading Customer Success teams to founding my own startup.
        </div>
        <div className="text-[rgba(35,39,47,1)] text-[27px] leading-[0.93] tracking-[-0.5px] self-stretch mt-7 max-md:max-w-full max-md:text-4xl">
          Through my experiences, I've learned to be adaptable, develop innovative solutions, and build strong relationships in any environment.
        </div>
        <div className="items-stretch self-stretch flex justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
            <a
              href="https://www.linkedin.com/in/krysteleal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(35,39,47)] text-[27px] tracking-[-0.5px] whitespace-nowrap bg-[rgb(247,247,247)] w-fit px-7 py-5 rounded-[40px_0px_40px_0px] max-md:text-4xl max-md:px-5 hover:bg-gray-100 transition-colors"
            >
              Follow me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
