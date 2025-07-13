import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    console.log('Setting up IntersectionObserver');
    
    const observer = new IntersectionObserver(([entry]) => {
      console.log('Intersection observed:', {
        isIntersecting: entry.isIntersecting,
        ratio: entry.intersectionRatio,
        element: entry.target
      });
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Unobserve after animation
        // observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.15,
      rootMargin: '50px',
      ...options
    });

    const element = elementRef.current;
    if (element) {
      console.log('Starting observation of element:', element);
      observer.observe(element);
    }

    return () => {
      if (element) {
        console.log('Cleaning up observation');
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
};