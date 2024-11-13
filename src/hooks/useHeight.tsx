import { useEffect, useState } from 'react';
import { useMobile } from './useMobile';

export const useHeight = () => {
  const isMobile = useMobile();
  const [isHeight, setIsHeight] = useState(false);
  const [sectionHeight,setSectionHeight] = useState(0);
  const [iconHeight,setIconHeight] = useState(0);

  const checkScrollPosition = () : void => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollPosition >= 2 * viewportHeight) {
      setIsHeight(true);
    } else {
      setIsHeight(false);
    }
    setSectionHeight(((viewportHeight* 3 - scrollPosition)/viewportHeight)*100 - (isMobile ? 45 : 35));
    setIconHeight(((viewportHeight* 3 - scrollPosition)/viewportHeight)*100 - 20);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [isMobile]);

  return {isHeight,sectionHeight,iconHeight};
};
