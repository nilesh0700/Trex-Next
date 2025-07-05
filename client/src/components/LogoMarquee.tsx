"use client"
import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "https://cdn.worldvectorlogo.com/logos/mastercard-4.svg", alt: "Mastercard" },
  { src: "https://cdn.worldvectorlogo.com/logos/fiverr-2.svg", alt: "Fiverr" },
  { src: "https://cdn.worldvectorlogo.com/logos/amlin-1.svg", alt: "Amlin" },
  { src: "https://cdn.worldvectorlogo.com/logos/enkei-wheels-1.svg", alt: "Enkei Wheels" },
  { src: "https://cdn.worldvectorlogo.com/logos/hoyer.svg", alt: "Hoyer" },
  { src: "https://cdn.worldvectorlogo.com/logos/meritrust-credit-union.svg", alt: "Meritrust" },
  { src: "https://cdn.worldvectorlogo.com/logos/general-electric.svg", alt: "General Electric" },
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full py-18 my-5">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>

      {/* Marquee outer container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        {/* Marquee inner container */}
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="w-48 h-24 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="w-48 h-24 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-content {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 4rem;
          min-width: 100%;
          animation: scroll 40s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee; 