
import React from "react";
import { useNavigate } from "react-router-dom";

interface JourneyCardProps {
  title: string;
  description: string;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  title,
  description,
}) => {
  const navigate = useNavigate();

  const handleStart = () => {
    window.scrollTo(0, 0);
    switch (title) {
      case "From Europe to Silicon Valley":
        navigate("/stories/france");
        break;
      case "Customer Success":
        navigate("/stories/customer-success");
        break;
      case "Startup Journey":
        navigate("/stories/startup");
        break;
    }
  };

  return (
    <div className="bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex grow flex-col text-xs font-normal w-full px-[22px] py-[21px] rounded-[10px] border-2 border-black transform hover:-rotate-1 transition-transform duration-200 max-md:mt-10 max-md:px-5">
      <h3 className="text-[rgba(91,116,191,1)] text-lg font-bold leading-loose">
        {title}
      </h3>
      <p className="text-[rgba(50,55,67,1)] text-[0.875rem] font-[350] leading-5 mt-[11px]">
        {description}
      </p>
      <button 
        onClick={handleStart}
        className="bg-[rgba(91,116,191,1)] border-2 border-black flex w-full flex-col overflow-hidden items-center text-gray-100 whitespace-nowrap leading-loose justify-center mt-[31px] px-[70px] py-1.5 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 max-md:px-5"
      >
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
