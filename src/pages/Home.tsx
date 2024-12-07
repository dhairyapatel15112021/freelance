import { SideSection } from "../components/SideSection"
import { SideSectionContent } from "../components/SideSectionContent";
import navigateIconFirst from "../assets/navigate-first.svg";
import navigateIconSecond from "../assets/navigate-second.svg";
import navigateIconThird from "../assets/navigate-third.svg";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { CompanyCarousel } from "../components/CompanyCarousel";
import { useHeight } from "../hooks/useHeight";
import { Header } from "../components/Header";
import { OurServiceHome } from "../components/OurServiceHome";
import { Information } from "../components/Information";
import { Testimonials } from "../components/Testimonials";
import { motion } from "framer-motion";
import { InstagramReels } from "../components/InstagramReels";

export const Home = () => {
  const data = [{ id: "decor", title: "Crafting the Perfect Ambiance", subtitle: "From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.", index: 0 }, { id: "specialEffect", title: "Elevate the Experience", subtitle: "From dazzling fireworks to immersive lighting, we create moments that leave a lasting impression.", index: 1 }, { id: "choreo", title: "Making Every Step Count", subtitle: "Personalised dance routines designed to make your special day even more memorable.", index: 2 }];
  const { isHeight, iconHeight } = useHeight();
  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);
  const handleClick = (): void => {
    setIndex((prevIndex: number) => (prevIndex + 1) % data.length);
  };
  const icons = [navigateIconFirst, navigateIconSecond, navigateIconThird];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage + 1) % 3);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-none md:bg-gradient-to-r from-[#101010] from-[5%] to-[#FE8F7E] text-white">
        <div className="sticky top-0 left-0 z-10">
          <Header />
          <SideSection />
          <div className="absolute left-[45%] md:left-1/2" style={{ top: isHeight ? `${iconHeight}vh` : '80vh' }} >
            <Link onClick={handleClick} className="cursor-pointer" activeClass="!font-bold" spy={true} smooth={true} duration={500} to={data[index].id}>
              <motion.img
                key={stage} // Key ensures Framer Motion recognizes it as a new element
                src={icons[stage]}
                alt="Navigate Icon"
                className="w-20 h-20"
                initial={{ opacity: 0.8}} // Initial state
                animate={{ opacity: 1 }} // Animated to
                exit={{ opacity: 0.7 }} // Exit state
                transition={{ duration:1 }} // Animation duration
              />
            </Link>
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
      <OurServiceHome />
      <Information />
      <InstagramReels/>
      <Testimonials />
    </div>

  )
}


// const NavigateFirst = () => {
//   return (
//     <img src={navigateIconFirst} alt="first icon" loading="lazy"></img>
//   )
// }

// const NavigateSecond = () => {
//   return (
//     <img src={navigateIconSecond} alt="second icon" loading="lazy"></img>
//   )
// }
// const NavigateThird = () => {
//   return (
//     <img src={navigateIconThird} alt="Third icon" loading="lazy"></img>
//   )
// }