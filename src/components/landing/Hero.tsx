
import React from "react";

export const Hero: React.FC = () => {
  const scrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    journeySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-neo-background py-16 px-8 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="neo-border neo-shadow bg-neo-pink p-6 transform -rotate-1">
              <h1 className="font-vt323 text-3xl text-neo-black">
                Hello, I'm Krystel!
              </h1>
            </div>
            
            <div className="neo-border neo-shadow-lg bg-white p-8 transform rotate-1">
              <h2 className="font-vt323 text-5xl md:text-6xl font-bold text-neo-black leading-tight">
                Winning with Customer Success
              </h2>
            </div>
            
            <div className="neo-border neo-shadow bg-neo-blue p-6 transform -rotate-1">
              <p className="text-lg text-neo-black">
                From freelancing to startups, I'm building customer-first
                strategies, scaling operations, and turning chaos into growth
                - one startup at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={scrollToJourney}
                className="neo-border neo-shadow bg-neo-green text-neo-black font-vt323 text-xl py-4 px-6 font-bold flex items-center justify-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
              >
                Explore my journey
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </button>
              
              <a 
                href="https://linkedin.com/in/krysteleal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-border neo-shadow bg-white text-neo-black font-vt323 text-xl py-4 px-6 font-bold flex items-center justify-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
              >
                Follow me on LinkedIn
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="neo-border neo-shadow-lg bg-neo-yellow p-4 transform rotate-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/6e7f8d9f030fd6afb81d2e665d3ff062217ce8bd24f7828e8d697614fb786410?placeholderIfAbsent=true"
                className="w-full h-auto object-cover neo-border"
                alt="Krystel profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
