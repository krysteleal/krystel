import React from "react";

interface JourneyCardProps {
  title: string;
  description: string;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)] flex grow flex-col text-xs font-normal w-full px-[22px] py-[21px] rounded-[10px] border-[rgba(228,226,221,1)] border-solid border-[3px] max-md:mt-10 max-md:px-5">
      <h3 className="text-[rgba(91,116,191,1)] text-lg font-bold leading-loose">
        {title}
      </h3>
      <p className="text-[rgba(50,55,67,1)] leading-5 mt-[11px]">
        {description}
      </p>
      <button className="bg-[rgba(91,116,191,1)] border flex w-full flex-col overflow-hidden items-center text-gray-100 whitespace-nowrap leading-loose justify-center mt-[31px] px-[70px] py-1.5 rounded-md border-[rgba(0,0,0,0)] border-solid hover:bg-opacity-90 transition-colors max-md:px-5">
        <div className="flex w-[43px] items-stretch gap-0.5">
          <span className="grow">Start</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/f6f3f2b1933e31a7ced4083b80170af165fdccdae90b1e7a2a4cf216906c1dd8?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3 shrink-0 my-auto"
            alt="Arrow icon"
          />
        </div>
      </button>
    </div>
  );
};
