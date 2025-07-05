import { useRouter } from 'next/navigation';
import { EventHighlightCardProps } from '@/types/event-highlights';
import { THEME } from '@/constants/event-highlights';

/**
 * EventHighlightCard Component
 * 
 * A card component that displays an event highlight with an expandable view on hover.
 * Features a background image, title, and detailed description with a call-to-action button.
 * 
 * @component
 * @example
 * ```tsx
 * <EventHighlightCard
 *   highlight={highlightData}
 *   isHovered={isHovered}
 *   index={0}
 *   onMouseEnter={(index) => setHoveredIndex(index)}
 *   onMouseLeave={() => setHoveredIndex(null)}
 * />
 * ```
 */
const EventHighlightCard: React.FC<EventHighlightCardProps> = ({
  highlight,
  isHovered,
  index,
  onMouseEnter,
  onMouseLeave,
}) => {
  const router = useRouter();

  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer
        transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${isHovered ? 'md:w-[35rem] w-full' : 'md:w-[12rem] w-full'}
        ${isHovered ? 'md:h-[30rem] h-[30rem]' : 'md:h-[30rem] h-[12rem]'}
        transform-gpu shadow-lg hover:shadow-xl
      `}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      style={{ 
        willChange: 'width, height, transform',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background Image with zoom effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[400ms] ease-out transform-gpu"
        style={{ 
          backgroundImage: `url(${highlight.backgroundImage})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1.01)',
          willChange: 'transform'
        }}
      />

      {/* Gradient Overlay for text readability */}
      <div 
        className={`
          absolute inset-0 transition-opacity duration-[400ms]
          ${isHovered 
            ? 'bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100' 
            : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90'
          }
        `}
      />

      {/* Content Container */}
      <div 
        className={`
          absolute inset-0 flex items-end p-6
          transition-all duration-[400ms] ease-out
        `}
      >
        <div className="relative z-10 w-full">
          {/* Title */}
          <h3 
            className={`
              font-semibold text-white transition-all duration-[400ms] font-sans
              ${isHovered ? 'text-2xl mb-3' : 'text-xl transform-gpu'}
              ${!isHovered && 'absolute bottom-6'}
            `}
          >
            {highlight.title}
          </h3>

          {/* Expanded Content (visible on hover) */}
          <div 
            className={`
              overflow-hidden transition-all duration-[400ms]
              ${isHovered ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0'}
            `}
          >
            <p className="text-white/90 mb-6 text-base leading-relaxed">
              {highlight.detailedDescription}
            </p>

            <button 
              onClick={() => router.push('/events')}
              className="
                bg-[#264065] text-white px-6 py-2.5 rounded-full
                hover:bg-[#C88652] transition-colors
                transform hover:scale-105 duration-200
                text-sm font-medium
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div 
        className={`
          absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#264065] to-[#C88652]
          transition-all duration-[400ms] ease-out
          ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
        `}
      />
    </article>
  );
};

export default EventHighlightCard; 