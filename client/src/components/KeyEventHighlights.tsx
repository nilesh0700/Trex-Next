"use client"

import React, { useState, useEffect, useRef } from 'react';
import { EVENT_HIGHLIGHTS } from '@/constants/event-highlights';
import EventHighlightCard from './EventHighlightCard';

/**
 * KeyEventHighlights Component
 * 
 * A showcase section that displays key event features in an interactive carousel.
 * Each highlight expands on hover to reveal more details about the feature.
 * 
 * Features:
 * - Responsive design that adapts to mobile and desktop views
 * - Smooth animations and transitions
 * - GPU-accelerated transformations for better performance
 * - Accessibility considerations for keyboard navigation
 * 
 * @component
 * @example
 * ```tsx
 * <KeyEventHighlights />
 * ```
 */
const KeyEventHighlights: React.FC = () => {
  // State for tracking which card is currently hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // State for handling mobile responsiveness
  const [isMobile, setIsMobile] = useState(false);
  
  // Ref for the slider track
  const trackRef = useRef<HTMLDivElement>(null);

  /**
   * Handle window resize events to update mobile state
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width:767px)").matches);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Handles mouse enter event for cards
   * @param index - The index of the card being hovered
   */
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  /**
   * Handles mouse leave event for cards
   */
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center justify-center gap-4">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-semibold text-[#264065] mb-4 animate-fadeInUp"
            style={{
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            Key Event Highlights
          </h2>
          <div 
            className="mt- w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto animate-slideInLeft"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          />
        </div>

        {/* Highlights Slider */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 md:flex-row flex-col items-start justify-center"
            style={{ 
              willChange: 'transform',
              perspective: '1000px',
              perspectiveOrigin: 'center'
            }}
          >
            {EVENT_HIGHLIGHTS.map((highlight, index) => (
              <EventHighlightCard
                key={highlight.id}
                highlight={highlight}
                isHovered={index === hoveredIndex}
                index={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyEventHighlights; 