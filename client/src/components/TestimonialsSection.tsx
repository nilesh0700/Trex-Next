"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { Testimonial as StrapiTestimonial } from '@/types/strapi';

interface TestimonialsSectionProps {
  data: {
    title: string;
    description: string;
    testimonials: StrapiTestimonial[];
    enabled: boolean;
  };
}

const TestimonialsSection = ({ 
  data,
}: TestimonialsSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    } as EmblaOptionsType
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  if (!data.testimonials || data.testimonials.length === 0) return null;

  const showNavigation = data.testimonials.length > 3;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      <div 
        className="relative px-12 py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {data.testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-6 pb-8"
              >
                <Card className="h-full bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Quote Section */}
                    <div className="flex-grow mb-8">
                      <div className="mb-6">
                        <svg
                          className="w-10 h-10 text-blue-600 mb-6 opacity-80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Separator Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                    {/* Author Info - Always at bottom */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="relative flex-shrink-0">
                        {testimonial.authorImage && (
                          <img
                            src={testimonial.authorImage}
                            alt={testimonial.authorImageAlt || testimonial.authorName}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                          />
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-gray-900 text-lg mb-1 truncate">
                          {testimonial.authorName}
                        </h4>
                        <p className="text-blue-600 font-semibold text-sm mb-1 truncate">
                          {testimonial.authorTitle}
                        </p>
                        <p className="text-gray-500 text-sm truncate">
                          {testimonial.authorCompany}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 border-gray-200 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 border-gray-200 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {showNavigation && (
        <div className="flex justify-center space-x-3 mt-8">
          {data.testimonials.slice(0, Math.ceil(data.testimonials.length / 3)).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(selectedIndex / 3) === index
                  ? 'bg-blue-600 scale-125 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index * 3)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection; 