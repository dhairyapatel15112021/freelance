import call from "../../assets/footer/call.svg";
import instagram from "../../assets/footer/instagram.svg";
import youtube from "../../assets/footer/youtube.svg";
import logo from "../../assets/footer/footer_Logo.svg";
import whatsapp from "../../assets/footer/whatsapp.svg";
import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {

    const copyToClipboard = async (text : string) => {
        await navigator.clipboard.writeText(text);
    }

    return (
        <div className='grid grid-cols-1 py-4 md:grid-cols-new grid-rows-3 gap-5 md:gap-0 md:grid-rows-1 mt-16 bg-gradient-to-b from-[#FD6D9E] to-[80%] to-[#77334A]'>
            <div>
                <img src={logo} alt="footer logo" className="w-[70%] md:w-fit" />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 text-base font-extralight font-monserrat w-[90%] ml-[5%] md:w-fit md:ml-0'>
                
                <div className='font-semibold text-lg'>Our Services</div>
                <Link to="/service/decor" className="hover:scale-105 transition-transform duration-300 ease-in-out">Decoration</Link>
                <Link to="/service/specialEffects" className="hover:scale-105 transition-transform duration-300 ease-in-out">SFX / Special Effects</Link>
                <Link to="/service/weddingChoreography" className="hover:scale-105 transition-transform duration-300 ease-in-out">Wedding Choreography</Link>
                <Link  to="/service/corporateChoreography" className="hover:scale-105 transition-transform duration-300 ease-in-out">Corporate Choreography</Link>
                <Link to="/service/schoolChoreography" className="hover:scale-105 transition-transform duration-300 ease-in-out">School Choreography</Link>
                <Link to="/service/professionalDanceGroup" className="hover:scale-105 transition-transform duration-300 ease-in-out">Professional Dance Group</Link>
                <Link to="/service/weddingEntry" className="hover:scale-105 transition-transform duration-300 ease-in-out">Wedding Entry Concept</Link>
                <Link to="/service/folkCultural" className="hover:scale-105 transition-transform duration-300 ease-in-out">Folk Cultural Groups</Link>
                <Link to="/service/host" className="hover:scale-105 transition-transform duration-300 ease-in-out">Anchor / Show Host</Link>
            </div>
            <div className='flex flex-col justify-start items-start gap-3 font-monserrat w-[90%] ml-[5%] md:w-fit md:ml-0'>
                <Link to="/about" className='font-semibold text-lg'>About Us</Link>
                <div className='flex flex-col gap-2'>
                    <div className='font-semibold text-lg'>Contact Us</div>
                    <div className='w-[85%] text-base font-extralight'>04 Shreenath colony, opp. samarpan tower, Modi hospital  K.k. nagar
                        Ghatlodia - 382481</div>
                </div>
                <div className='flex flex-col gap-4 text-base font-extralight'>
                    <div className='flex gap-3'>
                        <img src={call} alt="call icon" />
                        <div className="flex gap-2">
                            <div onClick={()=>copyToClipboard("+918690893300")} className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" >+ 91 86908 93300</div>
                            <div>,</div>
                            <div onClick={()=>copyToClipboard("+918330718883")} className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">+ 91 83307 18883</div>
                        </div>
                        {/* <div className="absolute top-[100%] left-[50%]">copied</div> */}
                    </div>
                    <div className="flex gap-3">
                        <img src={instagram} alt="instagram icon" />
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out">/d_effects_event_entertainment</div>
                    </div>
                    <div className="flex gap-3">
                        <img src={youtube} alt="youtube icon" />
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out">/D effects Entertainment</div>
                    </div>
                </div>
                <NavLink className="self-end" to="https://wa.me/8690893300" target="_blank">
                    <img src={whatsapp} alt="whatsapp icon" className="w-[70%]" />
                </NavLink>
            </div>
        </div>
    )
}
