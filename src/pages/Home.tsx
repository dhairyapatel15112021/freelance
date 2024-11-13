import { SideSection } from "../components/SideSection"
import { SideSectionContent } from "../components/SideSectionContent";
import navigateIcon from "../assets/navigateIcon.svg";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { CompanyCarousel } from "../components/CompanyCarousel";
import { useHeight } from "../hooks/useHeight";

export const Home = () => {
  const data = [{ id: "decor", title: "Crafting the Perfect Ambiance", subtitle: "From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.", index: 0 }, { id: "specialEffect", title: "Elevate the Experience", subtitle: "From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.", index: 1 }, { id: "choreo", title: "Making Every Step Count", subtitle: "Personalised dance routines designed to make your special day even more memorable.", index: 2 }];
  const isHeight = useHeight();
  const [index, setIndex] = useState(0);
  const [height,setHeight] = useState(0);
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setHeight(((windowHeight* 3 - scrollY)/windowHeight)*100 - 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  return (
    <div>
      <div className="bg-none md:bg-gradient-to-r from-[#000000] from-[40%] to-[#666666] text-white bg-red-600">
        <div className="sticky top-0 left-0 z-10">
            <Header />
            <SideSection />
            <div className="absolute left-[45%] md:left-1/2" style={{ top: isHeight ? `${height}vh` : '80vh' }} >
              <Link onClick={handleClick} className="cursor-pointer" activeClass="!font-bold" spy={true} smooth={true} duration={500} to={data[index].id}><img src={navigateIcon} alt="naviagte icon" loading="lazy" /> </Link>
            </div>
        </div>
        <div>
          {
            data.map((item, index) => {
              return (
                <SideSectionContent id={item.id} key={index} title={item.title} index={index} subtitle={item.subtitle} />
              )
            })
          }
        </div>
      </div>
      <CompanyCarousel />
    </div>

  )
}
