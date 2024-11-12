import { useEffect, useState } from 'react'

export const useMobile = () => {
    const [isMobile,setMobile] = useState(window.innerWidth >= 600);
    const checkIsMobile = () => setMobile(window.innerWidth >= 600);

    useEffect(()=>{
        window.addEventListener("resize",checkIsMobile);
        return () => window.removeEventListener("resize",checkIsMobile);
    },[]);

  return (isMobile)
}
