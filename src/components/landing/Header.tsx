
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";

  return (
    <header className="bg-[rgba(228,226,221,0.44)] flex w-full items-stretch gap-5 flex-wrap justify-between px-20 py-[39px] border-b-4 border-black max-md:max-w-full max-md:px-5">
      <Link 
        to="/" 
        aria-label="Go to homepage"
        className="transform hover:-rotate-2 transition-transform duration-200"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true"
          className="aspect-[4.03] object-contain w-[202px] shrink-0 max-w-full"
          alt="Logo"
        />
      </Link>
      {!isIndexPage && (
        <nav className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:-translate-y-1 transition-transform duration-200 border-2 border-black px-4 py-2 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-[rgba(91,116,191,1)] hover:-translate-y-1 transition-transform duration-200 border-2 border-black p-2 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            aria-label="Go to homepage"
          >
            <Home className="w-5 h-5" />
          </button>
        </nav>
      )}
    </header>
  );
};
