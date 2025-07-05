import { Theme, EventHighlight } from '../types/event-highlights';

/**
 * Theme configuration for the event highlights component
 */
export const THEME: Theme = {
  colors: {
    primary: '#264065',
    secondary: '#1a2d47',
    accent: '#C88652',
    text: {
      dark: '#1a2d47',
      light: '#6c757d',
    },
    background: {
      light: '#ffffff',
      highlight: '#f8f9fa',
    }
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  }
} as const;

/**
 * Event highlights data
 * Each object represents a unique event feature that will be displayed in the carousel
 */
export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    id: "hosted-buyer",
    title: "Hosted Buyer Program",
    description: "Connect with pre-qualified international buyers",
    backgroundImage: "/assets/hosted-buyer-program.png",
    detailedDescription: "Our premier Hosted Buyer Program facilitates meaningful connections between exhibitors and pre-qualified international buyers.",
  },
  {
    id: "networking-lounge",
    title: "TREx Networking Lounge",
    description: "Exclusive networking space for business connections",
    backgroundImage: "/assets/trex-networking-lounge.png",
    detailedDescription: "A sophisticated space designed for meaningful networking and business discussions in a professional environment.",
  },
  {
    id: "matchmaking",
    title: "Business Matchmaking Program",
    description: "AI-powered partner matching system",
    backgroundImage: "/assets/business-matchmaking.webp",
    detailedDescription: "Leverage our advanced AI-powered matchmaking system to connect with the most relevant business partners."
  },
  {
    id: "showcases",
    title: "Product Showcases & Presentation",
    description: "Dynamic platform for product innovation",
    backgroundImage: "/assets/product-showcases-presentation.png",
    detailedDescription: "Present your products and innovations in our state-of-the-art showcase spaces designed for maximum impact."
  },
  {
    id: "knowledge-sessions",
    title: "Innovation & Knowledge Sessions",
    description: "Expert-led industry insights",
    backgroundImage: "/assets/innovation-knowledge-sessions.png",
    detailedDescription: "Gain valuable insights from industry experts through our curated knowledge sessions and workshops."
  }
] as const; 