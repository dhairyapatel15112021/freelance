import dlogo from "../assets/dlogo.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menuIcon.svg";
import { useMobile } from "../hooks/useMobile";

export const Header = () => {
  const isMobile = useMobile();

  return (
    <div className="absolute top-0 left-0 w-[100%] grid grid-cols-3 place-items-center py-6">
      <div className="flex gap-x-2 col-start-1 mx-4 md:mx-0 md:col-start-2">
        <div>
          <img src={dlogo} alt="logo" />
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="self-start justify-self-end flex gap-x-3 mx-4 col-start-3 md:mx-12">
        {
          isMobile && <div>
            Menu
          </div>
        }
        <div>
          <img src={menuIcon} alt="sidebar" />
        </div>
      </div>
    </div>
  )
}
