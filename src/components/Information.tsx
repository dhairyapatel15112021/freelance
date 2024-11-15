import download from "../assets/download.svg";
import { InformationDetails } from "./InformationDetails";

export const Information = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center mt-10'>
        <button className='font-cormorant font-light bg-[#282828] py-2 px-4 w-fit rounded-sm flex justify-center items-center gap-x-2 text-xl cursor-pointer'>
            <img src={download} alt="downloadIcon" />
            <div>Download Our Broucher</div>
        </button>
        <div className="w-[80vw] flex flex-col justify-center items-center mt-16">
            <div className="font-cormorant self-start md:self-center font-light md:font-medium text-4xl md:text-5xl">About Us</div>
            <div className="text-left md:text-center font-poppins font-extralight md:font-light mt-4">At D Effects & Entertainment, we specialize in turning your big moments into unforgettable experiences. With a passion for creativity and a commitment to perfection, we offer top-tier wedding décor, unique special effects, and professional dance choreography. Our team of experts works closely with you to bring your vision to life, making every event as unique as you are. From intimate gatherings to grand celebrations, we’ve got you covered!</div>
        </div>
        <div className="w-[80vw] flex flex-col justify-center items-center mt-20">
            <div className="font-cormorant self-start md:self-center font-light md:font-medium text-4xl md:text-5xl">Why Choose Us?</div>
            <InformationDetails/>
        </div>
    </div>
  )
}
