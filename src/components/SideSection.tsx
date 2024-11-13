import { memo } from "react";
import {Link} from "react-scroll";

export const SideSection = memo(() => {
    return (
        <div className='absolute top-[65vh] md:top-[55vh] gap-x-4 md:gap-x-10 -rotate-90 flex -left-40 md:-left-36 z-10'>    
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500}  to="choreo">Choreography</Link>
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500} to="specialEffect">Special Effects </Link>
            <Link className="cursor-pointer font-poppins font-extralight md:font-light" activeClass="!font-bold" spy={true} smooth={true} duration={500} to="decor">Decorations</Link>
        </div> 
    )
})
