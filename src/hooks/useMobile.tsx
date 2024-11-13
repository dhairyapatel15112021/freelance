import { useEffect, useState } from 'react'
import { useDebouce } from './useDebouce';

export const useMobile = () => {
    const [isMobile,setMobile] = useState(window.innerWidth >= 767);
    const checkIsMobile = () : void => setMobile(window.innerWidth >= 767);

    useEffect(()=>{
        window.addEventListener("resize",checkIsMobile);
        return () => window.removeEventListener("resize",checkIsMobile);
    },[]);

  return useDebouce(isMobile,200);
}
