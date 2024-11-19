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
        <div className='grid grid-cols-1 py-4 md:grid-cols-new grid-rows-3 gap-5 md:gap-0 md:grid-rows-1 mt-16 bg-gradient-to-b from-black via-[#101010] via-[20%] to-[#3E3E3E]'>
            <div>
                <img src={logo} alt="footer logo" className="w-[70%] md:w-fit" />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 text-base font-extralight font-poppins w-[90%] ml-[5%] md:w-fit md:ml-0'>
                <div className='font-semibold text-lg'>Our Services</div>
                <div>Decoration</div>
                <div>SFX / Special Effects</div>
                <div>Wedding Choreography</div>
                <div>Corporate Choreography</div>
                <div>School Choreography</div>
                <div>Professional Dance Group</div>
                <div>Wedding Entry Concept</div>
                <div>Folk Cultural Groups</div>
                <div>Anchor / Show Host</div>
            </div>
            <div className='flex flex-col justify-start items-start gap-3 font-poppins w-[90%] ml-[5%] md:w-fit md:ml-0'>
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
                            <div onClick={()=>copyToClipboard("+918690893300")} className="hover:cursor-pointer">+ 91 86908 93300</div>
                            <div>,</div>
                            <div onClick={()=>copyToClipboard("+918330718883")} className="hover:cursor-pointer">+ 91 83307 18883</div>
                        </div>
                        {/* <div className="absolute top-[100%] left-[50%]">copied</div> */}
                    </div>
                    <div className="flex gap-3">
                        <img src={instagram} alt="instagram icon" />
                        <div>/d_effects_event_entertainment</div>
                    </div>
                    <div className="flex gap-3">
                        <img src={youtube} alt="youtube icon" />
                        <div>/D effects Entertainment</div>
                    </div>
                </div>
                <NavLink className="self-end" to="https://wa.me/8690893300" target="_blank">
                    <img src={whatsapp} alt="whatsapp icon" className="w-[70%]" />
                </NavLink>
            </div>
        </div>
    )
}
