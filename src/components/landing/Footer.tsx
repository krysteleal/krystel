import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(243,242,240,1)] flex w-full flex-col items-stretch text-sm text-[rgba(23,26,31,1)] font-normal leading-loose pb-[26px] px-px max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/35de434b44322d443884ca56b0542d2b12880978d76499164ec06ccdabf22b7e?placeholderIfAbsent=true"
        className="aspect-[1000] object-contain w-full max-md:max-w-full"
        alt="Decorative line"
      />
      <nav className="flex items-stretch gap-9 mr-[95px] mt-[18px] max-md:mr-2.5">
        <span className="font-medium">Connect:</span>
        <a
          href="#"
          className="hover:text-[rgba(91,116,191,1)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="hover:text-[rgba(91,116,191,1)] transition-colors"
        >
          X (Twitter)
        </a>
        <a
          href="#"
          className="hover:text-[rgba(91,116,191,1)] transition-colors"
        >
          Instagram
        </a>
      </nav>
    </footer>
  );
};
