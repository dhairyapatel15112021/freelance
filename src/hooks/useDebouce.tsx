import { useEffect, useState } from 'react'

export const useDebouce = (value : any , delay : number) : any => {
    const [deboucedValue,setDebouncedValue] = useState(value);

    useEffect(()=>{
    const timeout = setTimeout(()=>{
        setDebouncedValue(value);
    },delay);
    return ()=> clearTimeout(timeout);
    },[value,delay]);
    
  return (deboucedValue)
}
