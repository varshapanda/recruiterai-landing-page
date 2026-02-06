import React, { useState } from "react";

const Integrations = () => {
  const platforms = [
    { name: "LinkedIn", domain: "linkedin.com" },
    { name: "Naukri", domain: "naukri.com" },
    { name: "Indeed", domain: "indeed.com" },
    { name: "AngelList", domain: "angellist.com" },
    { name: "Wellfound", domain: "wellfound.com" },
    { name: "Instahyre", domain: "instahyre.com" },
    { name: "IIMJobs", domain: "iimjobs.com" },
    { name: "Glassdoor", domain: "glassdoor.com" },
    { name: "Monster India", domain: "monsterindia.com" },
    { name: "Cutshort", domain: "cutshort.io" },
  ];

  const duplicatedPlatforms = [...platforms, ...platforms];

  const LogoImage = ({ platform, index }) => {
    const [imgError, setImgError] = useState(0);

    const logoSources =
      platform.name === "Instahyre"
        ? [
            "https://www.instahyre.com/static/images/logo.png",
            "https://assets.instahyre.com/images/logo.png",
            `https://www.google.com/s2/favicons?domain=instahyre.com&sz=256`,
          ]
        : [
            `https://cdn.brandfetch.io/${platform.domain}/w/400/h/400`,
            `https://img.logo.dev/${platform.domain}?token=pk_X-FqaNSYTv2p0yBY-ulorQ`,
            `https://logo.clearbit.com/${platform.domain}`,
            `https://www.google.com/s2/favicons?domain=${platform.domain}&sz=256`,
          ];

    return (
      <div
        key={index}
        className="flex items-center gap-4 group cursor-pointer transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <img
            src={logoSources[imgError] || logoSources[logoSources.length - 1]}
            alt={platform.name}
            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            onError={() => {
              if (imgError < logoSources.length - 1) {
                setImgError(imgError + 1);
              }
            }}
            loading="lazy"
          />
        </div>
        <span className="text-base font-semibold text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
          {platform.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="integrations"
      className="pt-20 pb-12 px-6 relative overflow-hidden bg-gradient-to-b from-dark-primaryBg to-[#404040]/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Post Once, <span className="text-gradient">Reach Everywhere</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            RecruiterAI automatically syncs your job postings across all major
            platforms
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-primaryBg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-primaryBg to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll hover:pause-animation">
            <div className="flex gap-12 items-center min-w-max pr-12">
              {duplicatedPlatforms.map((platform, index) => (
                <LogoImage key={index} platform={platform} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 8s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, #a5d8ff 0%, #b197fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
