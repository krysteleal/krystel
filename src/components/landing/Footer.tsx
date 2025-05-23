
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(228,226,221,0.44)] flex w-full items-stretch gap-5 flex-wrap justify-between px-20 py-[39px] max-md:px-5">
      <Link to="/" aria-label="Go to homepage">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/377d19621dce4fd59f445ba27ffcf8306159d5c18c18e14129958c2f6ef45335?placeholderIfAbsent=true"
          className="aspect-[4.03] object-contain w-[202px] shrink-0 max-w-full"
          alt="Logo"
        />
      </Link>
      <nav className="flex gap-3.5 my-auto items-center">
        <a 
          href="https://www.linkedin.com/in/krysteleal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/3399bd5edb4a27c23177c90e649c791bffac1ccac6ab5b76d8e018932afd131a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="LinkedIn Icon"
          />
        </a>
        <a 
          href="https://x.com/krysteleal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) Profile"
          className="flex items-center"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/ba8d9fc204a2e5f4a8df38f85b5525b45d2b568f1b8d2f2babc1a8e6ecb1ed09?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0"
            alt="X (Twitter) Icon"
          />
        </a>
        <a 
          href="https://www.instagram.com/krysteleal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="flex items-center"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b1cb979bcc2b4677a6d8b00fcde863df/6f26b7f448b493a4d7a0794968e50e8b2a0faa71393bdab2686f4100858de3c8?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Instagram Icon"
          />
        </a>
      </nav>
    </footer>
  );
};
