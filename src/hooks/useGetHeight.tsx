import { useEffect, useState } from 'react'

export const useGetHeight = () => {
    const [height,setHeight] = useState(window.innerHeight);
    const heightFunction = () => {
        setHeight(window.innerHeight);
    }
    useEffect(()=>{
        window.addEventListener("resize",heightFunction);
        return () => window.removeEventListener("resize",heightFunction);
    },[]);
  return (height)
}
