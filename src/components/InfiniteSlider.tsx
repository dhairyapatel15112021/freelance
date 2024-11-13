import tata from "../assets/compnies/tata.svg";
import vodafone from "../assets/compnies/vodafone.svg";
import mahindra from "../assets/compnies/mahindra.svg";
import asianpaints from "../assets/compnies/asianpaints.svg";
import airtel from "../assets/compnies/airtel.svg";
import flipkart from "../assets/compnies/flipkart.svg";
import pepsico from "../assets/compnies/pepsico.svg";
import sbi from "../assets/compnies/sbi.svg";

export const InfiniteSlider = () => {
    const logos = [
        <img src={airtel} alt="airtel" />,
        <img src={tata} alt="tata motors" />,
        <img src={vodafone} alt="vodafone" />,
        <img src={sbi} alt="sbi" />,
        <img src={flipkart} alt="flipkart" />,
        <img src={mahindra} alt="mahindra" />,
        <img src={pepsico} alt="pepsico" />,
        <img src={asianpaints} alt="asian paints" />
    ]
  return (
    <div className="mt-10 relative w-[100vw] md:w-[80vw] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)] gap-x-10">
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
