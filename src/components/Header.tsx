import { memo, useContext } from "react";
import dlogo from "../assets/dlogo.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menuIcon.svg";
import removeIcon from "../assets/removeIcon.svg";
import { useMobile } from "../hooks/useMobile";
import { OpenContext } from "../App";
import { Link } from "react-router-dom";

export const Header = memo(() => {
  const isMobile = useMobile();
  const context = useContext(OpenContext);
  if (!context) {
    console.warn("OpenContext is missing, defaulting to closed");
    return null;
  }
  const { isOpen, setIsOpen } = context;
  const handleOnClick = () : void => {
    setIsOpen((prev: boolean) => !prev);
  }

  return (
    <div className={`absolute top-0 left-0 w-[100%] grid grid-cols-3 place-items-center py-6 z-10`}>
      <Link to="/" className="flex gap-x-2 col-start-1 mx-4 md:mx-0 md:col-start-2">
        <div>
          <img src={dlogo} alt="logo" loading="lazy" />
        </div>
        <div>
          <img src={logo} alt="logo" loading="lazy" />
        </div>
      </Link>
      {
        isOpen ?
          <div className="fixed self-start justify-self-end flex gap-x-3 mx-4 col-start-3 md:mx-12 py-6 cursor-pointer" onClick={handleOnClick}>
            <img src={removeIcon} alt="removeIcon" loading="lazy"/>
          </div>
          :
          <div className="self-start justify-self-end flex gap-x-3 mx-4 col-start-3 md:mx-12 cursor-pointer" onClick={handleOnClick}>
            {
              isMobile && <div className="font-monserrat font-normal md:font-medium">
                Menu
              </div>
            }
            <div>
              <img src={menuIcon} alt="menuIcon" loading="lazy" />
            </div>
          </div>
      }
    </div>
  )
})
