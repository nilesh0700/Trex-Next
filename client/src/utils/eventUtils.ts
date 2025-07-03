/**
 * Event utilities for date formatting, state management, and styling
 */

/**
 * Simple date formatting that returns the pre-formatted date string from CMS
 * No formatting needed as the date is already in display format
 */
export function formatDateSimple(dateString: string): string {
  return dateString;
}

/**
 * Parse date string safely, extracting the last date mentioned in the string
 * For strings like "14th & 15th November 2025", it will use "15th November 2025"
 */
export function parseEventDate(dateString: string): Date {
  // Extract all numbers from the string
  const numbers = dateString.match(/\d+/g);
  if (!numbers) return new Date(); // Return current date if no numbers found
  
  // Extract month name from the string
  const months = ['january', 'february', 'march', 'april', 'may', 'june',
                 'july', 'august', 'september', 'october', 'november', 'december'];
  const monthMatch = months.find(month => 
    dateString.toLowerCase().includes(month)
  );
  
  // Extract year (assuming it's the last number in the string)
  const year = numbers[numbers.length - 1];
  
  // Extract day (assuming it's the last number before the month/year)
  const day = numbers[numbers.length - 2];
  
  if (!monthMatch || !year || !day) return new Date();
  
  const monthIndex = months.indexOf(monthMatch);
  return new Date(parseInt(year), monthIndex, parseInt(day));
}

/**
 * Format date for display consistently across the app
 */
export function formatEventDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = parseEventDate(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('en-US', options || defaultOptions);
}

/**
 * Event state utilities for determining event status and appropriate actions
 */

export type EventState = 'upcoming' | 'ongoing' | 'past';

export interface EventActionConfig {
  state: EventState;
  primaryAction: {
    text: string;
    variant: 'register' | 'live' | 'archive';
    icon?: string;
  };
  secondaryAction?: {
    text: string;
    variant: 'details' | 'notify' | 'download';
    icon?: string;
  };
  badgeText?: string;
  badgeColor?: string;
}

/**
 * Determines the current state of an event based on its date
 */
export function getEventState(eventDate: string): EventState {
  const now = new Date();
  const eventDateTime = parseEventDate(eventDate);
  
  // Reset time to compare dates only
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const eventDay = new Date(eventDateTime.getFullYear(), eventDateTime.getMonth(), eventDateTime.getDate());
  
  if (eventDay > today) {
    return 'upcoming';
  } else if (eventDay.getTime() === today.getTime()) {
    return 'ongoing';
  } else {
    return 'past';
  }
}

/**
 * Gets the appropriate action configuration for an event based on its state
 */
export function getEventActionConfig(eventDate: string): EventActionConfig {
  const state = getEventState(eventDate);
  
  switch (state) {
    case 'upcoming':
      return {
        state,
        primaryAction: {
          text: 'Register Now',
          variant: 'register',
          icon: 'user-plus'
        },
        secondaryAction: {
          text: 'View Details',
          variant: 'details',
          icon: 'arrow-right'
        }
      };
      
    case 'ongoing':
      return {
        state,
        primaryAction: {
          text: 'Join Live',
          variant: 'live',
          icon: 'play'
        },
        secondaryAction: {
          text: 'View Details',
          variant: 'details',
          icon: 'arrow-right'
        },
        badgeText: 'LIVE NOW',
        badgeColor: 'bg-gradient-to-r from-red-500 to-red-600'
      };
      
    case 'past':
      return {
        state,
        primaryAction: {
          text: 'View Summary',
          variant: 'archive',
          icon: 'document'
        },
        secondaryAction: {
          text: 'Notify Me',
          variant: 'notify',
          icon: 'bell'
        },
        badgeText: 'COMPLETED',
        badgeColor: 'bg-gradient-to-r from-slate-500 to-slate-600'
      };
      
    default:
      return {
        state: 'upcoming',
        primaryAction: {
          text: 'Register Now',
          variant: 'register'
        }
      };
  }
}

/**
 * Formats event date with status context
 */
export function formatEventDateWithStatus(eventDate: string): string {
  const state = getEventState(eventDate);
  const formattedDate = formatEventDate(eventDate);
  
  switch (state) {
    case 'upcoming':
      return formattedDate;
    case 'ongoing':
      return `${formattedDate} - Live Now!`;
    case 'past':
      return `${formattedDate} - Completed`;
    default:
      return formattedDate;
  }
}

/**
 * Checks if an event should show registration functionality
 */
export function shouldShowRegistration(eventDate: string): boolean {
  return getEventState(eventDate) === 'upcoming';
}

/**
 * Gets the appropriate CSS classes for premium event state styling
 */
export function getEventStateStyles(eventDate: string) {
  const state = getEventState(eventDate);
  
  switch (state) {
    case 'upcoming':
      return {
        container: 'hover:shadow-xl transition-all duration-300',
        image: 'relative overflow-hidden',
        content: 'text-slate-900'
      };
    case 'ongoing':
      return {
        container: 'ring-2 ring-red-500/30 ring-offset-2 shadow-red-500/20 shadow-xl hover:shadow-2xl transition-all duration-300',
        image: 'relative overflow-hidden',
        content: 'text-slate-900'
      };
    case 'past':
      return {
        container: 'opacity-75 hover:opacity-90 transition-all duration-300 grayscale hover:grayscale-0',
        image: 'relative overflow-hidden',
        content: 'text-slate-600'
      };
    default:
      return {
        container: 'hover:shadow-xl transition-all duration-300',
        image: 'relative overflow-hidden',
        content: 'text-slate-900'
      };
  }
} 