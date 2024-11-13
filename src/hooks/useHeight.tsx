import { useEffect, useState } from 'react';

export const useHeight = () => {
  const [isHeight, setIsHeight] = useState(false);

  function checkScrollPosition() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollPosition >= 2 * viewportHeight) {
      setIsHeight(true);
    } else {
      setIsHeight(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return isHeight;
};
