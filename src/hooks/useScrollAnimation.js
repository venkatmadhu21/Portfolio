import { useEffect } from 'react';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animation
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('.scroll-animate');
      
      animatedElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate');
        }
      });
    };

    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
};

export default useScrollAnimation;