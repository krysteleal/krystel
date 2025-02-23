
import React from "react";

export const Testimonial: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-stretch pt-[31px] pb-[11px] px-5 rounded-[16px_16px_16px_0px] max-md:max-w-full">
      <blockquote className="text-[rgba(50,55,67,1)] text-xs font-normal leading-5">
        "She is an amazing combination of both a problem solver and client
        advocate; I always felt like she had my back in any situation. If you
        need to provide best-in-class care to your audience or customers,
        Krystel is the answer."
      </blockquote>
      <div className="flex items-stretch gap-[9px] text-[10px] text-[rgba(23,26,31,1)] leading-[1.6] mt-4 justify-end">
        <div className="flex flex-col items-stretch">
          <cite className="font-bold not-italic">Jason Lee</cite>
          <div className="font-normal">Raycon Inc.</div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d?placeholderIfAbsent=true"
          className="aspect-[1.67] object-contain w-10 shrink-0 my-auto rounded-xl"
          alt="Testimonial author"
        />
      </div>
    </div>
  );
};
