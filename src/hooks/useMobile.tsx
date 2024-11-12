import { useEffect, useState } from 'react'

export const useMobile = () => {
    const [isMobile,setMobile] = useState(window.innerWidth >= 767);
    const checkIsMobile = () => setMobile(window.innerWidth >= 767);

    useEffect(()=>{
        window.addEventListener("resize",checkIsMobile);
        return () => window.removeEventListener("resize",checkIsMobile);
    },[]);

  return (isMobile)
}
