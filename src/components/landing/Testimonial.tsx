
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "She is an amazing combination of both a problem solver and client advocate; I always felt like she had my back in any situation. If you need to provide best-in-class care to your audience or customers, Krystel is the answer.",
    author: "Jason Lee",
    company: "Raycon Inc.",
    image: "https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/9f3b8b7dbb78f8087b2e95b06b45374b88d4abaef399f4c7c2873a25ad90187d"
  },
  {
    quote: "As a customer success professional, she stands out not only for her exceptional communication skills but also for her deep knowledge of the product and her remarkable initiative. Working with Krystel felt like having an extension of my own team—her commitment and collaboration went far beyond expectations.",
    author: "Kyle Bergman",
    company: "Swoveralls",
    image: "/lovable-uploads/a7b0aa75-71d5-4d1f-a314-abdda17ce6b1.png"
  },
  {
    quote: "She crafted intentional and genuine relationships with not only the team but also our customers, really setting a gold standard for relationship building and maintenance. Krystel is a Swiss Army knife teammate, and will be an asset anywhere she goes.",
    author: "Mandy Rogers",
    company: "OneText",
    image: "/lovable-uploads/b1eeabd4-d227-4860-b586-1461f39edfaf.png"
  }
];

export const Testimonial: React.FC = () => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="bg-white flex flex-col items-stretch pt-[31px] pb-[11px] px-16 rounded-[40px_0px_40px_0px] max-md:max-w-full relative">
              <blockquote className="text-[rgba(50,55,67,1)] text-xs font-normal leading-5 mx-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-stretch gap-[9px] text-[10px] text-[rgba(23,26,31,1)] leading-[1.6] mt-4 justify-end">
                <div className="flex flex-col items-stretch">
                  <cite className="font-bold not-italic">{testimonial.author}</cite>
                  <div className="font-normal">{testimonial.company}</div>
                </div>
                <img
                  loading="lazy"
                  srcSet={`${testimonial.image}?placeholderIfAbsent=true&width=100 100w, ${testimonial.image}?placeholderIfAbsent=true&width=200 200w, ${testimonial.image}?placeholderIfAbsent=true&width=400 400w, ${testimonial.image}?placeholderIfAbsent=true&width=800 800w, ${testimonial.image}?placeholderIfAbsent=true&width=1200 1200w, ${testimonial.image}?placeholderIfAbsent=true&width=1600 1600w, ${testimonial.image}?placeholderIfAbsent=true&width=2000 2000w, ${testimonial.image}?placeholderIfAbsent=true`}
                  className="aspect-[1.67] object-contain w-10 shrink-0 my-auto rounded-xl"
                  alt="Testimonial author"
                />
              </div>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none hover:bg-transparent [&>svg]:text-[#5b74bf]" variant="ghost" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none hover:bg-transparent [&>svg]:text-[#5b74bf]" variant="ghost" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
