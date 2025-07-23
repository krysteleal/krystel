import React from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

export default function AIConsulting() {
  return (
    <div className="min-h-screen bg-[rgba(243,242,240,1)]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[rgba(243,242,240,1)] pt-20 pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-[64px] font-bold leading-[84px] text-[rgba(23,26,31,1)] mb-6 max-md:text-[40px] max-md:leading-[48px]">
              AI Process Optimization
            </h1>
            <p className="text-xl text-[rgba(50,55,67,1)] font-light leading-8 max-w-4xl mx-auto mb-12">
              Transform your business processes with AI workflows that actually solve real problems. 
              Because no AI will solve the day if you don't have clarity on the problem you're trying to solve.
            </p>
            
            <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
              <Button 
                size="lg"
                className="bg-[rgba(91,116,191,1)] text-white hover:bg-[rgba(91,116,191,0.9)] px-8 py-4 text-lg rounded-[10px_10px_10px_0px]"
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[rgba(91,116,191,1)] text-[rgba(91,116,191,1)] hover:bg-[rgba(91,116,191,0.1)] px-8 py-4 text-lg rounded-[10px_10px_10px_0px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] font-bold text-[rgba(23,26,31,1)] text-center mb-16 max-md:text-[36px]">
            How I Help You Succeed
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[rgba(243,242,240,1)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">
                Process Analysis
              </h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Deep dive into your current workflows to identify bottlenecks and inefficiencies.
              </p>
            </div>
            
            <div className="bg-[rgba(243,242,240,1)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">
                Problem Clarity
              </h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Ask the right questions to understand what you're really trying to solve.
              </p>
            </div>
            
            <div className="bg-[rgba(243,242,240,1)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">
                AI Workflow Design
              </h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Create custom AI solutions that address your specific challenges.
              </p>
            </div>
            
            <div className="bg-[rgba(243,242,240,1)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">
                Implementation Support
              </h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Guide your team through successful adoption and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="bg-[rgba(91,116,191,1)] py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[48px] font-bold text-white mb-8 max-md:text-[36px]">
            My Philosophy
          </h2>
          <blockquote className="text-2xl text-white font-light leading-10 italic">
            "No AI will solve the day if you don't have clarity on the problem that you are trying to solve. 
            If you don't know the question that you are trying to answer."
          </blockquote>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] font-bold text-[rgba(23,26,31,1)] text-center mb-16 max-md:text-[36px]">
            Who I Work With
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[rgba(91,116,191,1)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">Individuals</h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Professionals looking to streamline their personal workflows
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[rgba(91,116,191,1)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">Teams</h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Cross-functional teams seeking better collaboration and efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[rgba(91,116,191,1)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">Startups</h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Early-stage companies building scalable processes from the ground up
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[rgba(91,116,191,1)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-[rgba(23,26,31,1)] mb-4">Companies</h3>
              <p className="text-[rgba(50,55,67,1)] leading-7">
                Established businesses optimizing operations and reducing costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[rgba(243,242,240,1)] py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[48px] font-bold text-[rgba(23,26,31,1)] mb-8 max-md:text-[36px]">
            Ready to Transform Your Processes?
          </h2>
          <p className="text-xl text-[rgba(50,55,67,1)] font-light leading-8 mb-12 max-w-2xl mx-auto">
            Let's work together to identify your real challenges and design AI workflows that deliver measurable results.
          </p>
          
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button 
              size="lg"
              className="bg-[rgba(91,116,191,1)] text-white hover:bg-[rgba(91,116,191,0.9)] px-8 py-4 text-lg rounded-[10px_10px_10px_0px]"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-[rgba(91,116,191,1)] text-[rgba(91,116,191,1)] hover:bg-[rgba(91,116,191,0.1)] px-8 py-4 text-lg rounded-[10px_10px_10px_0px]"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}