"use client"
import React from 'react';

/**
 * Interface representing a logo item in the marquee
 * @interface Logo
 * @property {string} src - The URL of the logo image
 * @property {string} alt - Alternative text for accessibility
 */
interface Logo {
  src: string;
  alt: string;
}

/**
 * Configuration object for the LogoMarquee component
 * @const
 */
const MARQUEE_CONFIG = {
  // Animation duration in seconds
  DESKTOP_DURATION: 40,
  MOBILE_DURATION: 25,
  // Gradient overlay width in pixels
  GRADIENT_WIDTH: '5rem',
  // Container dimensions
  CONTAINER_DIMENSIONS: {
    MOBILE: {
      width: 'w-48',
      height: 'h-28',
      padding: 'px-6',
      maxImageHeight: 'max-h-16'
    },
    DESKTOP: {
      width: 'w-60',
      height: 'h-32',
      padding: 'px-8',
      maxImageHeight: 'max-h-20'
    }
  }
} as const;

/**
 * Array of logo objects to be displayed in the marquee
 * @const
 */
const LOGOS: readonly Logo[] = [
  { src: "https://cdn.worldvectorlogo.com/logos/mastercard-4.svg", alt: "Mastercard" },
  { src: "https://cdn.worldvectorlogo.com/logos/fiverr-2.svg", alt: "Fiverr" },
  { src: "https://cdn.worldvectorlogo.com/logos/amlin-1.svg", alt: "Amlin" },
  { src: "https://cdn.worldvectorlogo.com/logos/enkei-wheels-1.svg", alt: "Enkei Wheels" },
  { src: "https://cdn.worldvectorlogo.com/logos/hoyer.svg", alt: "Hoyer" },
  { src: "https://cdn.worldvectorlogo.com/logos/meritrust-credit-union.svg", alt: "Meritrust" },
  { src: "https://cdn.worldvectorlogo.com/logos/general-electric.svg", alt: "General Electric" },
] as const;

/**
 * LogoContainer component for rendering individual logo items
 * @component
 * @param {Object} props - Component props
 * @param {Logo} props.logo - Logo object containing src and alt text
 * @returns {JSX.Element} A container with a logo image
 */
const LogoContainer: React.FC<{ logo: Logo }> = ({ logo }) => (
  <div className={`
    ${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.MOBILE.width} 
    ${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.MOBILE.height}
    ${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.MOBILE.padding}
    sm:${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.DESKTOP.width}
    sm:${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.DESKTOP.height}
    sm:${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.DESKTOP.padding}
    flex items-center justify-center
  `}>
    <img
      src={logo.src}
      alt={logo.alt}
      className={`
        w-full 
        ${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.MOBILE.maxImageHeight}
        sm:${MARQUEE_CONFIG.CONTAINER_DIMENSIONS.DESKTOP.maxImageHeight}
        object-contain grayscale opacity-70 
        hover:grayscale-0 hover:opacity-100 
        transition-all duration-300
      `}
    />
  </div>
);

/**
 * LogoMarquee component that creates an infinite scrolling logo carousel
 * Features:
 * - Responsive design with different sizes for mobile and desktop
 * - Infinite scroll animation
 * - Grayscale logos that turn colorful on hover
 * - Gradient overlays on the edges for smooth transition
 * - Optimized performance with CSS animations
 * 
 * @component
 * @returns {JSX.Element} An infinite scrolling logo marquee
 */
const LogoMarquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full py-10 my-5">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent"></div>

      {/* Marquee outer container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        {/* Marquee inner container */}
        <div className="marquee-content">
          {LOGOS.map((logo, index) => (
            <div key={`logo-1-${index}`} className="w-48 sm:w-60 h-28 sm:h-32 flex items-center justify-center px-6 sm:px-8">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full max-h-16 sm:max-h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content">
          {LOGOS.map((logo, index) => (
            <div key={`logo-2-${index}`} className="w-48 sm:w-60 h-28 sm:h-32 flex items-center justify-center px-6 sm:px-8">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full max-h-16 sm:max-h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: max-content;
          animation: scroll 40s linear infinite;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .marquee-content {
            animation: scroll 25s linear infinite;
          }
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