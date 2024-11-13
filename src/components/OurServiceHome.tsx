import { OurServiceHomeContent } from "./OurServiceHomeContent"

export const OurServiceHome = () => {
    const data = [{title: "Wedding Decor",description:"From elegant centrepieces, stages to grand entrances, we design it all to match your theme and vision.",index:0},
        {title:"Party & Event Decor",description:"Perfect setups for birthday bashes, anniversaries, and corporate events, tailored to every occasion.",index:1},
        {title:"Fireworks & Special Effects",description:"Add a touch of magic with confetti blasts, aerial fireworks, and dry ice effects.",index:2},
        {title:"Dance Choreography",description:"From Bollywood to folk, make your event come alive with our curated dance performances.",index:3}]
    return (
        <div className="flex flex-col justify-center items-center mt-14 mx-[10vw]">
                <div className='sticky top-[5vh] left-0 font-cormorant text-5xl font-medium'>Our Services</div>
                {/* backdrop-blur-md w-full flex justify-center items-center */}
                <div>
                    {
                        data.map((item)=>{
                            return(
                                <OurServiceHomeContent title={item.title} description={item.description} index={item.index}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
