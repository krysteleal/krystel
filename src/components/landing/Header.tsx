
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(228,226,221,0.44)] flex w-full items-stretch gap-5 flex-wrap justify-between px-20 py-[39px] max-md:max-w-full max-md:px-5">
      <Link to="/" aria-label="Go to homepage">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true"
          className="aspect-[4.03] object-contain w-[202px] shrink-0 max-w-full"
          alt="Logo"
        />
      </Link>
    </header>
  );
};
