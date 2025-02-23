
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { NestedFooter } from "@/components/landing/NestedFooter";

const References = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F2F0] flex flex-col">
      <Header />
      <div className="py-20 max-md:py-5 px-20 max-md:px-5 bg-[#ecebe8] flex-grow">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl max-md:text-[1.6rem] font-bold text-[rgba(23,26,31,1)] mb-8">
            The Books, People and Resources That Shaped My Journey
          </h1>
          
          <div className="space-y-6 text-lg font-light leading-7 text-[rgba(50,55,67,1)]">
            <p>
              No career path is built in isolation - along the way, I've learned from incredible minds across technology, entrepreneurship, innovation, startups, and customer success.
            </p>
            
            <p>
              From books that shaped how I think about growth to the people and podcasts that continue to challenge my perspective, this is a collection of resources that have influenced my journey. Whether you're building a startup, scaling a team, or rethinking how businesses grow, I hope you find something valuable here!
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Key Books
                </h3>
                <ul className="list-disc pl-6 space-y-4 font-normal">
                  <li>
                    <a
                      href="https://amzn.to/4gVewn2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness"
                    </a>{" "}
                    by Eric Jorgenson
                  </li>
                  <li>
                    <a
                      href="https://amzn.to/4kabhei"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      "Show Your Work!: 10 Ways to Share Your Creativity and Get Discovered"
                    </a>{" "}
                    by Austin Kleon
                  </li>
                  <li>
                    <a
                      href="https://amzn.to/4hGKnct"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution"
                    </a>{" "}
                    by Walter Isaacson
                  </li>
                  <li>
                    <a
                      href="https://amzn.to/3Qw4aiJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      "Deep Work: Rules for Focused Success in a Distracted World"
                    </a>{" "}
                    by Cal Newport
                  </li>
                  <li>
                    <a
                      href="https://amzn.to/41sKdjm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      "The Startup's Guide to Customer Success: How to Champion the Customer at Your Company"
                    </a>{" "}
                    by Jennifer Chiang
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  Industry Resources, Blogs and Podcasts That Changed My Perspective
                </h3>
                <ul className="list-disc pl-6 space-y-4 font-normal">
                  <li>
                    <a
                      href="http://customersuccesscollective.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Customer Success Collective
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.womenofcustomersuccess.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Women In Customer Success Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thecscafe.com?r=4v77d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      The Customer Success Café Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@allin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      All-In Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://csinsider.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      CS Insider
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vitally.io/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Vitally Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[rgba(228,226,221,1)]">
                <h3 className="text-xl font-medium text-[rgba(23,26,31,1)] mb-2">
                  💡 People Who Have Inspired Me
                </h3>
                <ul className="list-disc pl-6 space-y-4 font-normal">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/angelaguedes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Angela Guedes
                    </a>
                  </li>
                  <li>
                    Anika Zubair's Newsletter (
                    <a
                      href="https://newsletter.thecustomersuccesspro.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      The Customer Success Pro's
                    </a>
                    )
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/daphnecostalopes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Daphne Costa Lopes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kristiserrano/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Kristi Faltorusso
                    </a>
                    {" "}and{" "}
                    <a
                      href="https://www.linkedin.com/in/stijn-smet-%F0%9F%90%B3-330435a9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Stijn (Stino) Smet
                    </a>
                    , mostly via their "Customer Success Hotline"{" "}
                    <a
                      href="https://www.youtube.com/playlist?list=PLkK3r6B97-DGN_BW5j7pTTjolxzQIzwV3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/markus-rentsch-customer-value-led-growth-for-saas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(91,116,191,1)] hover:underline"
                    >
                      Markus Rentsch
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[rgba(23,26,31,1)] mt-8 mb-4">
              Key Metrics & Frameworks
            </h2>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>Customer Health Scoring</li>
              <li>Net Revenue Retention (NRR)</li>
              <li>Customer Lifetime Value (CLV)</li>
              <li>Net Promoter Score (NPS)</li>
              <li>Time to Value (TTV)</li>
            </ul>
          </div>

          <div className="space-y-4 mt-12">
            <button
              onClick={() => navigate("/stories/customer-success")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                How did you learn about the Customer Success area?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Learn about my journey into Customer Success.
              </p>
            </button>

            <button
              onClick={() => navigate("/stories/france/silicon-valley")}
              className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[rgba(228,226,221,1)]"
            >
              <h3 className="text-xl font-semibold text-[rgba(91,116,191,1)] mb-2">
                When and why did you move to Silicon Valley?
              </h3>
              <p className="text-[14px] font-light leading-7 text-[rgba(50,55,67,1)]">
                Discover the story behind my decision to move to the Bay Area and build my career in the US.
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ecebe8]">
        <NestedFooter />
      </div>
    </div>
  );
};

export default References;
