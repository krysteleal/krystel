
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";

  return (
    <header className="bg-white flex w-full items-stretch gap-5 flex-wrap justify-between px-20 py-[39px] max-md:max-w-full max-md:px-5">
      <Link to="/" aria-label="Go to homepage">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true"
          className="aspect-[4.03] object-contain w-[202px] shrink-0 max-w-full"
          alt="Logo"
        />
      </Link>
      {!isIndexPage && (
        <nav className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-[rgba(91,116,191,1)] hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <Home className="w-5 h-5" />
          </button>
        </nav>
      )}
    </header>
  );
};
