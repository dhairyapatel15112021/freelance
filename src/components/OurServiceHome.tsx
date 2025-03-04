import { useRef } from "react";
import { OurServiceHomeContent } from "./OurServiceHomeContent"
import { useScroll, useTransform } from "framer-motion";
import { useGetHeight } from "../hooks/useGetHeight";
import { useMobile } from "../hooks/useMobile";

export const OurServiceHome = () => {
    const height = useGetHeight();
    const isMobile = useMobile();
    const targetRef = useRef(null);
    const { scrollY } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });
    const data = [{ title: "Wedding Decor", description: "From elegant centrepieces, stages to grand entrances, we design it all to match your theme and vision.", index: 0,to : "/service/decor" },
    { title: "Party & Event Decor", description: "Perfect setups for birthday bashes, anniversaries, and corporate events, tailored to every occasion.", index: 1,to : "/service/corporateChoreography" },
    { title: "Fireworks & Special Effects", description: "Add a touch of magic with confetti blasts, aerial fireworks, and dry ice effects.", index: 2,to : "/service/specialEffects" },
    { title: "Dance Choreography", description: "From Bollywood to folk, make your event come alive with our curated dance performances.", index: 3,to : "/service/specialEffects" }];
    const cardTimeLine = data.map((_, index) => {
        const start = (height * 3) + index * (height * 0.8) + 56 + (height * 0.05) + (!isMobile ? 24 : 64) +  index * 700;
        const end = (height * 3) + (index + 1) * (height * 0.8) + 56 + (height * 0.05) + (!isMobile ? 24 : 64) + (index + 1) * 700;
        return [start, end];
    });
    const timeLine = [[height * 3, height * 3], ...cardTimeLine];

    const animation = timeLine.map((d) => ({
        scale: useTransform(scrollY, [d[0], d[1]], [1, 0.8]),
        opacity: useTransform(scrollY, [d[0], d[1]], [1, 0])
    }))
    return (
        <div ref={targetRef} className="flex flex-col justify-center items-center mt-14 mx-[10vw]">
            <div className='sticky top-[5vh] left-0 z-10 self-start md:self-center font-great-vibes tracking-[0.35rem] text-4xl md:text-5xl font-medium'>Our Services</div>
            {/* backdrop-blur-md w-full flex justify-center items-center */}
                {
                    data.map((item,index) => {
                        return (
                            <>
                            <OurServiceHomeContent to={item.to} scaleNumber = {animation[index+1].scale} opacityNumber = {animation[index+1].opacity} title={item.title} description={item.description} index={item.index} />
                            <div className="w-screen h-[700px]"></div>
                            </>
                        )
                    })
                }
        </div>
    )
}
