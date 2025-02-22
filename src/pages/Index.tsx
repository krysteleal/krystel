import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)] overflow-hidden">
      <Header />
      <main>
        <Hero />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
