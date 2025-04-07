
import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";
import { Testimonial } from "@/components/landing/Testimonial";

const Index = () => {
  return (
    <div className="min-h-screen bg-neo-background">
      <div className="bg-neo-background overflow-hidden max-w-[1440px] mx-auto">
        <Header />
        <main>
          <Hero />
          <div className="py-16 px-8">
            <h2 className="text-4xl font-vt323 font-bold mb-8 text-neo-black">Testimonials</h2>
            <Testimonial />
          </div>
        </main>
      </div>
      <div className="bg-neo-yellow py-10">
        <JourneySection />
      </div>
      <div className="bg-neo-background overflow-hidden max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
