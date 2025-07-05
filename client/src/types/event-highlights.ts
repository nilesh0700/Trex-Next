/**
 * Theme configuration for the event highlights component
 * @interface Theme
 */
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: {
      dark: string;
      light: string;
    };
    background: {
      light: string;
      highlight: string;
    };
  };
  transitions: {
    default: string;
    slow: string;
  };
}

/**
 * Represents a single event highlight item
 * @interface EventHighlight
 */
export interface EventHighlight {
  /** Unique identifier for the event highlight */
  id: string;
  /** Title of the event highlight */
  title: string;
  /** Short description shown in non-expanded state */
  description: string;
  /** Path to the background image */
  backgroundImage: string;
  /** Detailed description shown in expanded state */
  detailedDescription: string;
}

/**
 * Props for the EventHighlightCard component
 * @interface EventHighlightCardProps
 */
export interface EventHighlightCardProps {
  /** The event highlight data */
  highlight: EventHighlight;
  /** Whether the card is currently hovered */
  isHovered: boolean;
  /** Index of the card in the list */
  index: number;
  /** Callback when mouse enters the card */
  onMouseEnter: (index: number) => void;
  /** Callback when mouse leaves the card */
  onMouseLeave: () => void;
} 