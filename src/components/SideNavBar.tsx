import { memo, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { OpenContext } from '../App';
import { useMobile } from '../hooks/useMobile';
import phoneSVG from "../assets/phone.svg";
import instagramSVG from "../assets/instagram.svg";
import youtubeSVG from "../assets/youtube.svg";
import removeIcon from "../assets/removeIcon.svg";

export const SideNavBar = memo(() => {
    const context = useContext(OpenContext);
    const isMobile = useMobile();
    if (!context) {
        console.warn("OpenContext is missing, defaulting to closed");
        return null; 
    }
    const { setIsOpen } = context;
    const handleOnClick = () : void => {
      setIsOpen((prev : boolean) => !prev);
    }
    return (
        <div className='fixed top-0 left-0 h-[100vh] w-[100vw] md:w-[40vw] bg-black flex items-center justify-center z-20'>
            <div className='h-[80%] w-[80%] flex flex-col justify-between'>
                <div className='flex flex-col h-[17%] justify-between'>
                    <NavLink onClick={handleOnClick} to="/" className={({isActive})=> `${isActive ? `font-semibold` : `font-thin hover:scale-110`} font-poppins tracking-wide text-xl transition-transform duration-300 ease-in-out`}> Home </NavLink>
                    <NavLink onClick={handleOnClick} to="/about" className={({isActive})=> `${isActive ? `font-semibold` : `font-thin hover:scale-110`} font-poppins tracking-wide text-xl transition-transform duration-300 ease-in-out`}> About Us</NavLink>
                    <NavLink onClick={handleOnClick} to="/service" className={({isActive})=> `${isActive ? `font-semibold` : `font-thin hover:scale-110`} font-poppins tracking-wide text-xl transition-transform duration-300 ease-in-out`}> Our Services </NavLink>
                </div>
                <div className='flex gap-x-4'>
                    <div><img src={phoneSVG} alt="phone" loading="lazy" /></div>
                    <div><img src={instagramSVG} alt="instagram" loading="lazy" /></div>
                    <div><img src={youtubeSVG} alt="youtube" loading="lazy" /></div>
                </div>
               {
                !isMobile && <div className='absolute top-[5%] left-[90%]' onClick={handleOnClick}>
                    <img src={removeIcon} alt="removeIcon" loading="lazy" />
                </div>
               }
            </div>
        </div>
    )
})
