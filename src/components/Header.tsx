import { useContext, useEffect, useState } from "react";
import dlogo from "../assets/dlogo.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menuIcon.svg";
import removeIcon from "../assets/removeIcon.svg";
import { useMobile } from "../hooks/useMobile";
import { OpenContext } from "../App";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isMobile = useMobile();
  const context = useContext(OpenContext);
  const [isHome,setIsHome] = useState(false);
  if (!context) {
    throw new Error("SomeComponent must be used within a OpenContext.Provider");
  }
  const { isOpen, setIsOpen } = context;
  const handleOnClick = () => {
    setIsOpen((prev : any) => !prev);
  }
  
  useEffect(()=>{
    if(location.pathname !== "/"){
      setIsHome(true);
    }
    else{
      setIsHome(false);
    }
  },[location.pathname]);

  return (
    <div className={`absolute top-0 left-0 w-[100%] grid grid-cols-3 place-items-center py-6 z-10 ${isHome ? `bg-black` : "bg-none"}`}>
      <div className="flex gap-x-2 col-start-1 mx-4 md:mx-0 md:col-start-2">
        <div>
          <img src={dlogo} alt="logo" />
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {
        isOpen ? 
        <div className="fixed self-start justify-self-end flex gap-x-3 mx-4 col-start-3 md:mx-12 py-6" onClick={handleOnClick}>
          <img src={removeIcon} alt="removeIcon" />
        </div> 
        : 
        <div className="self-start justify-self-end flex gap-x-3 mx-4 col-start-3 md:mx-12" onClick={handleOnClick}>
          {
            isMobile && <div>
              Menu
            </div>
          }
          <div>
            <img src={menuIcon} alt="menuIcon" />
          </div>
        </div>
      }

    </div>
  )
}
