import { memo } from "react";
import {Link} from "react-scroll";
import { useHeight } from "../hooks/useHeight";

export const SideSection = memo(() => {
    const  {isHeight,sectionHeight} = useHeight();
    return (
        <div className='absolute top-[65vh] md:top-[55vh] gap-x-4 md:gap-x-10 -rotate-90 flex -left-40 md:-left-36 z-10' style={{ top: isHeight ? `${sectionHeight}vh` : '' }}>    
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500}  to="choreo">Choreography</Link>
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500} to="specialEffect">Special Effects </Link>
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500} to="decor">Decorations</Link>
        </div> 
    )
})
