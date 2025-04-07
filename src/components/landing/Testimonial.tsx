
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
  },
  {
    quote: "She pays meticulous attention to every detail that comes with working with a multi-faceted team - whether troubleshooting with customer service, reporting metrics, or surprising us with a new idea, Krystel helps bring it all together for the customer. Whenever we had an idea or request, she was quick to translate it into actionable tasks for everyone involved.",
    author: "Casey Frankel",
    company: "Caden Lane",
    image: "/lovable-uploads/afa5a644-d914-40cc-b922-cc18715f220e.png"
  },
  {
    quote: "She was a virtual extension of our internal team. She brought insight, recommendations, and brand ownership and kindness daily. I highly recommend her for any company she pursues and that is looking to add a key professional with a true ownership mindset.",
    author: "Tim Marinello",
    company: "The Adventure Challenge",
    image: "/lovable-uploads/4a757c27-6b7c-4ed7-8ac1-ba7c4c210164.png"
  }
];

export const Testimonial: React.FC = () => {
  return (
    <Carousel className="relative w-full" opts={{ loop: true }}>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className={`
              neo-border neo-shadow-lg 
              bg-${index % 4 === 0 ? 'neo-pink' : index % 4 === 1 ? 'neo-yellow' : index % 4 === 2 ? 'neo-green' : 'neo-blue'}
              p-8 rounded-none relative
            `}>
              <blockquote className="text-neo-black text-lg font-normal leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3 mt-6 justify-end">
                <div className="flex flex-col items-stretch text-right">
                  <cite className="font-bold not-italic text-neo-black">{testimonial.author}</cite>
                  <div className="font-normal text-neo-black">{testimonial.company}</div>
                </div>
                <img
                  loading="lazy"
                  src={`${testimonial.image}?placeholderIfAbsent=true`}
                  className="neo-border aspect-square object-cover w-12 h-12"
                  alt={`${testimonial.author} from ${testimonial.company}`}
                />
              </div>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 neo-border bg-white hover:bg-white neo-hover [&>svg]:text-neo-black" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 neo-border bg-white hover:bg-white neo-hover [&>svg]:text-neo-black" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
