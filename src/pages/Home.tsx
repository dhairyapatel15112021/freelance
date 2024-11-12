import { Header } from "../components/Header"
import { SideSection } from "../components/SideSection"
import { SideSectionContent } from "../components/SideSectionContent";
import navigateIcon from "../assets/navigateIcon.svg";
import { Link } from "react-scroll";
import { useState } from "react";

export const Home = () => {
  const data = [{id : "decor",title:"Crafting the Perfect Ambiance",subtitle:"From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.",index:0},{id:"specialEffect",title:"Elevate the Experience",subtitle:"From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.",index:1},{id:"choreo",title:"Making Every Step Count",subtitle:"Personalised dance routines designed to make your special day even more memorable.",index:2}];
  const [index,setIndex] = useState(0);
  const handleClick = () => {
    setIndex((prevIndex)=> (prevIndex + 1) % 3);
  };

  return (
    <div className="bg-none md:bg-gradient-to-r from-[#000000] from-[40%] to-[#666666] text-white">
      <div className="sticky top-0 left-0 z-10">
        <Header />
        <SideSection />
        <div className="absolute top-[80vh] left-[45%] md:left-1/2">
        <Link onClick={handleClick} className="cursor-pointer" activeClass="!font-bold" spy={true} smooth={true} duration={500}  to={data[index].id}><img src={navigateIcon} alt="icon" /> </Link>
        </div>  
      </div>
      <div>
        {
          data.map((item,index)=>{
            return(
              <SideSectionContent id={item.id} key={index} title={item.title} index={index} subtitle={item.subtitle}/>
            )
          })
        }
      </div>
    </div>

  )
}
