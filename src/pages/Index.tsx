
import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F3F2F0]">
      <div className="bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)] overflow-hidden max-w-[1440px] mx-auto">
        <Header />
        <main>
          <Hero />
          <JourneySection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
