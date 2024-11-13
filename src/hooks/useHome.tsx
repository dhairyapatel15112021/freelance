import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { useDebouce } from "./useDebouce";


export const useHome = () => {
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname) {
            console.warn("Location pathname is undefined.");
            return;
        }
        setIsHome(location.pathname === "/");
    }, [location.pathname]);
    
    return useDebouce(isHome,200);
}
