"use client"
import React from 'react';

/**
 * Interface for individual statistic data
 * @interface StatisticItem
 * @property {string} number - The numerical value to display (can include '+' or '%')
 * @property {string} label - Description text below the number
 * @property {string} accent - Gradient color classes for the statistic
 */
interface StatisticItem {
  number: string;
  label: string;
  accent: string;
}

/**
 * Configuration object for the Statistics component
 * @const
 */
const STATISTICS_CONFIG = {
  COLORS: {
    PRIMARY: '#264065',
    SECONDARY: '#1a2d47',
    ACCENT: '#C88652',
    TEXT_GRAY: '#6c757d',
  },
  FONTS: {
    HEADING: 'Poppins',
    NUMBER: 'Inter',
  },
  ANIMATION: {
    DURATION: {
      FAST: 300,
      MEDIUM: 500,
      SLOW: 700,
    },
  },
  DIMENSIONS: {
    MIN_HEIGHT: {
      DEFAULT: 'min-h-[200px]',
      SM: 'sm:min-h-[180px]',
      MD: 'md:min-h-[200px]',
    },
  },
} as const;

/**
 * Array of statistics data
 * @const
 */
const STATISTICS_DATA: readonly StatisticItem[] = [
  {
    number: "300+",
    label: "Regional Buyers",
    accent: "from-[#264065] to-[#1a2d47]"
  },
  {
    number: "100+",
    label: "Exhibitors",
    accent: "from-[#264065] to-[#1a2d47]"
  },
  {
    number: "100%",
    label: "Excellent ROI",
    accent: "from-[#264065] to-[#1a2d47]"
  },
  {
    number: "365",
    label: "Days of Post Event Support",
    accent: "from-[#264065] to-[#1a2d47]"
  },
] as const;

/**
 * StatisticCard component for rendering individual statistic items
 * @component
 * @param {Object} props - Component props
 * @param {StatisticItem} props.stat - Statistics data for this card
 * @returns {JSX.Element} A card displaying a single statistic
 */
const StatisticCard: React.FC<{ stat: StatisticItem }> = ({ stat }) => (
  <div className="group relative">
    {/* Card Background with Hover Effects */}
    <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50/50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
    
    {/* Content */}
    <div className={`
      relative z-10 flex flex-col items-center justify-center text-center 
      p-8 sm:p-6 md:p-8 lg:p-6 xl:p-8 
      ${STATISTICS_CONFIG.DIMENSIONS.MIN_HEIGHT.DEFAULT}
      ${STATISTICS_CONFIG.DIMENSIONS.MIN_HEIGHT.SM}
      ${STATISTICS_CONFIG.DIMENSIONS.MIN_HEIGHT.MD}
    `}>
      {/* Number */}
      <div className="relative mb-4 sm:mb-3 md:mb-4">
        <span className={`
          block text-5xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
          font-light leading-none tracking-tight 
          text-[${STATISTICS_CONFIG.COLORS.PRIMARY}]
          group-hover:text-[${STATISTICS_CONFIG.COLORS.ACCENT}]
          transition-all duration-500 ease-out transform group-hover:scale-105
          font-[${STATISTICS_CONFIG.FONTS.NUMBER}]
        `}>
          {stat.number}
        </span>
        {/* Animated underline */}
        <div className={`
          w-0 h-1 mx-auto mt-2 rounded-full
          bg-[${STATISTICS_CONFIG.COLORS.ACCENT}]
          group-hover:w-full 
          transition-all duration-700 ease-out
        `}></div>
      </div>
      
      {/* Label */}
      <p className={`
        text-lg sm:text-base md:text-lg lg:text-base xl:text-lg 
        font-normal leading-relaxed max-w-[200px] 
        text-[${STATISTICS_CONFIG.COLORS.TEXT_GRAY}]
        group-hover:text-[${STATISTICS_CONFIG.COLORS.PRIMARY}]
        transition-colors duration-300
        font-[${STATISTICS_CONFIG.FONTS.HEADING}]
      `}>
        {stat.label}
      </p>
      
      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 
        bg-gradient-to-br from-[${STATISTICS_CONFIG.COLORS.ACCENT}]/10 to-[${STATISTICS_CONFIG.COLORS.ACCENT}]/5
        group-hover:opacity-100 
        transition-opacity duration-500 pointer-events-none
      `}></div>
    </div>
  </div>
);

/**
 * Statistics component that displays key metrics in an animated grid layout
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
 * - Interactive hover effects with animations
 * - Consistent styling with brand colors
 * - Accessible text and color contrast
 * - Optimized performance with CSS transitions
 * 
 * @component
 * @returns {JSX.Element} A grid of animated statistic cards
 */
const Statistics: React.FC = () => {
  return (
    <div className="w-full py-[80px] relative mx-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-white to-gray-100/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold mb-4 sm:mb-6 
            text-[${STATISTICS_CONFIG.COLORS.PRIMARY}]
            font-[${STATISTICS_CONFIG.FONTS.HEADING}]
          `}>
            Our Impact in Numbers
          </h2>
          <div className={`
            w-24 h-1 mx-auto rounded-full
            bg-gradient-to-r from-[${STATISTICS_CONFIG.COLORS.PRIMARY}] to-[${STATISTICS_CONFIG.COLORS.SECONDARY}]
          `}></div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {STATISTICS_DATA.map((stat, index) => (
            <StatisticCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics; 