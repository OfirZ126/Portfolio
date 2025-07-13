import { useEffect } from 'react';

export function AnimationProvider() {
  useEffect(() => {
    // Remove any existing js-loaded class
    document.documentElement.classList.remove('js-loaded');
    
    // Add js-loaded class after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      console.log('Adding js-loaded class');
      document.documentElement.classList.add('js-loaded');
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null;
}