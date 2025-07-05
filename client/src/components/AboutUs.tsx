"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import RegistrationButton from './RegistrationButton';

/**
 * Configuration object containing all theme-related constants
 * @const
 */
const THEME = {
  COLORS: {
    PRIMARY: '#264065',
    SECONDARY: '#1a2d47',
    ACCENT: '#C88652',
    TEXT: {
      GRAY: '#6c757d',
      LIGHT_BLUE: 'blue-200',
    },
    BACKGROUND: {
      LIGHT: '#FAF8F5',
    },
  },
  FONTS: {
    PRIMARY: 'Poppins',
  },
  ANIMATION: {
    DURATION: {
      DEFAULT: '0.3s',
      SLOW: '0.8s',
      VERY_SLOW: '1s',
    },
    DELAYS: {
      200: '0.2s',
      300: '0.3s',
      400: '0.4s',
      500: '0.5s',
      600: '0.6s',
      1000: '1s',
    },
  },
} as const;

/**
 * Interface for impact metrics data
 */
interface ImpactMetric {
  value: string;
  label: string;
}

/**
 * Interface for market insight data
 */
interface MarketInsight {
  text: string;
  animationDelay: string;
}

/**
 * Constants for impact metrics
 */
const IMPACT_METRICS: ImpactMetric[] = [
  { value: "300+", label: "Regional Buyers" },
  { value: "100+", label: "Exhibitors" },
  { value: "100%", label: "Excellent ROI" },
  { value: "365", label: "Days of post event support" },
];

/**
 * Constants for market insights
 */
const MARKET_INSIGHTS: MarketInsight[] = [
  { text: "Tier 2/3 cities showing 40% faster growth", animationDelay: "0s" },
  { text: "Regional markets driving 60% of new bookings", animationDelay: THEME.ANIMATION.DELAYS[500] },
  { text: "B2B events generating 3x higher ROI", animationDelay: THEME.ANIMATION.DELAYS[1000] },
];

/**
 * Props interface for the AboutUs component
 */
interface AboutUsProps {
  /** Whether to show the Learn More button */
  showLearnMore?: boolean;
}

/**
 * Button component with consistent styling and animations
 */
const StyledButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button 
    className={`
      group bg-[${THEME.COLORS.PRIMARY}] hover:bg-[${THEME.COLORS.SECONDARY}] 
      text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl 
      font-medium text-base sm:text-lg font-['${THEME.FONTS.PRIMARY}'] 
      transition-all duration-300 ease-out transform 
      hover:scale-105 hover:shadow-lg active:scale-95 
      focus:outline-none focus:ring-4 focus:ring-[${THEME.COLORS.PRIMARY}]/20
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

/**
 * Animated background circles component
 */
const AnimatedCircles: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {[
      { radius: 80, duration: "10s", dasharray: "5,5" },
      { radius: 50, duration: "15s", dasharray: "3,3", reverse: true },
      { radius: 20, duration: "8s", dasharray: "2,2" },
    ].map((circle, index) => (
      <circle
        key={index}
        cx="100"
        cy="100"
        r={circle.radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={index === 0 ? "2" : "1"}
        strokeDasharray={circle.dasharray}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur={circle.duration}
          values={circle.reverse ? "360 100 100;0 100 100" : "0 100 100;360 100 100"}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);

/**
 * Impact metric card component
 */
const MetricCard: React.FC<{ metric: ImpactMetric }> = ({ metric }) => (
  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
    <div className={`text-2xl font-bold text-[${THEME.COLORS.ACCENT}] mb-1`}>
      {metric.value}
    </div>
    <p className={`text-xs text-${THEME.COLORS.TEXT.LIGHT_BLUE} font-['${THEME.FONTS.PRIMARY}']`}>
      {metric.label}
    </p>
  </div>
);

/**
 * Market insight item component
 */
const InsightItem: React.FC<{ insight: MarketInsight }> = ({ insight }) => (
  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
    <div 
      className={`w-2 h-2 bg-[${THEME.COLORS.ACCENT}] rounded-full animate-pulse`}
      style={{ animationDelay: insight.animationDelay }}
    />
    <p className={`text-sm font-['${THEME.FONTS.PRIMARY}']`}>{insight.text}</p>
  </div>
);

/**
 * TREX Impact Card component that displays metrics and insights
 */
const TrexImpactCard: React.FC = () => (
  <div className={`bg-gradient-to-br from-[${THEME.COLORS.PRIMARY}] to-[${THEME.COLORS.SECONDARY}] rounded-2xl p-8 text-white relative overflow-hidden`}>
    {/* Animated Background */}
    <div className="absolute inset-0 opacity-10">
      <AnimatedCircles />
    </div>
    
    <div className="relative z-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h4 className={`text-3xl font-bold font-['${THEME.FONTS.PRIMARY}']`}>TREX Impact</h4>
        <p className={`text-${THEME.COLORS.TEXT.LIGHT_BLUE} text-sm font-['${THEME.FONTS.PRIMARY}']`}>
          Connecting Travel Industry Nationwide
        </p>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {IMPACT_METRICS.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Market Insights */}
      <div className="space-y-4 mb-6">
        {MARKET_INSIGHTS.map((insight, index) => (
          <InsightItem key={index} insight={insight} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className={`text-${THEME.COLORS.TEXT.LIGHT_BLUE} text-sm font-['${THEME.FONTS.PRIMARY}']`}>
          Seize your opportunity in India's emerging markets. <RegistrationButton variant="link">Register today.</RegistrationButton>
        </p>
      </div>
    </div>
  </div>
);

/**
 * AboutUs Component
 * 
 * A comprehensive section that presents TREX's mission, impact, and key metrics.
 * Features include:
 * - Responsive design with grid layout
 * - Animated elements for engagement
 * - Interactive buttons and hover effects
 * - SEO-friendly heading structure
 * - Accessible color contrast
 * - Performance optimized animations
 * 
 * @component
 * @param {AboutUsProps} props - Component props
 * @returns {JSX.Element} The AboutUs section
 * 
 * @example
 * ```tsx
 * <AboutUs showLearnMore={true} />
 * ```
 */
const AboutUs: React.FC<AboutUsProps> = ({ showLearnMore = true }) => {
  const router = useRouter();

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content Section - About Us */}
          <div className={`
            space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-10 rounded-2xl 
            bg-[${THEME.COLORS.BACKGROUND.LIGHT}]
            order-1 lg:order-1
          `}>
            {/* Section Header */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 
                font-bold text-[${THEME.COLORS.PRIMARY}] 
                font-['${THEME.FONTS.PRIMARY}'] leading-tight 
                animate-fadeInUp
              `}>
                About Us
              </h2>
              
              {/* Main Description */}
              <div className="space-y-4 sm:space-y-6 animate-fadeInUp animation-delay-200">
                <p className={`
                  text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 
                  text-[${THEME.COLORS.TEXT.GRAY}] leading-relaxed 
                  font-['${THEME.FONTS.PRIMARY}'] max-w-2xl
                `}>
                  <span className={`font-semibold text-[${THEME.COLORS.PRIMARY}]`}>
                    TREX - Travel Relations & Exhibitions
                  </span> is India's first-of-its kind regional B2B travel trade exhibition focused on unlocking the potential of Tier 2 and Tier 3 markets.
                </p>
                
                <p className={`
                  text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 
                  text-[${THEME.COLORS.TEXT.GRAY}] leading-relaxed 
                  font-['${THEME.FONTS.PRIMARY}'] max-w-2xl
                `}>
                  Led by industry veterans at <span className={`font-semibold text-[${THEME.COLORS.PRIMARY}]`}>
                    Netra India LLP
                  </span>, TREX connects regional buyers with national sellers through innovation, insights, and meaningful collaborations. More than just an event, it's a platform driving business growth and industry evolution.
                </p>
              </div>
            </div>
            
            {/* Learn More Button */}
            {showLearnMore && (
              <div className="animate-fadeInUp animation-delay-400">
                <StyledButton onClick={() => router.push('/about')}>
                  <span className="flex items-center gap-2">
                    Learn more
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </StyledButton>
              </div>
            )}
          </div>
          
          {/* Right Side - TREX Impact Card */}
          <div className="relative order-2 lg:order-2">
            <TrexImpactCard />
          </div>
        </div>
      </div>
      
      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(3deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(3deg);
          }
          70% {
            transform: scale(0.9) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(3deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp ${THEME.ANIMATION.DURATION.SLOW} ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight ${THEME.ANIMATION.DURATION.SLOW} ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn ${THEME.ANIMATION.DURATION.VERY_SLOW} ease-out forwards;
        }
        
        .animation-delay-200 { animation-delay: ${THEME.ANIMATION.DELAYS[200]}; }
        .animation-delay-300 { animation-delay: ${THEME.ANIMATION.DELAYS[300]}; }
        .animation-delay-400 { animation-delay: ${THEME.ANIMATION.DELAYS[400]}; }
        .animation-delay-500 { animation-delay: ${THEME.ANIMATION.DELAYS[500]}; }
        .animation-delay-600 { animation-delay: ${THEME.ANIMATION.DELAYS[600]}; }
        .animation-delay-1000 { animation-delay: ${THEME.ANIMATION.DELAYS[1000]}; }
      `}</style>
    </section>
  );
};

export default AboutUs; 