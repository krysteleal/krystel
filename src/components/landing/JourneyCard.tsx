
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
    window.scrollTo(0, 0); // Scroll to top before navigation
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
    <div className="bg-white neo-border neo-shadow-lg p-6 mb-6">
      <h3 className="text-xl font-vt323 font-bold mb-4 text-neo-black">
        {title}
      </h3>
      <p className="text-base mb-6 text-neo-black">
        {description}
      </p>
      <button 
        onClick={handleStart}
        className="neo-button bg-neo-pink text-neo-black font-bold w-full flex justify-center items-center gap-2"
      >
        <span>Start</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
};
