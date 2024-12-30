import { InstagramReelContent } from "./InstagramReelContent"

export const InstagramReels = () => {
    return (
        <div className='mt-16 mb-20 flex flex-col justify-center items-center'>
            <div className='font-great-vibes tracking-[0.35rem] font-semibold text-4xl md:text-5xl self-start px-[10vw]'>
                Our Latest Work
            </div>
            <div className='flex items-center mt-16 overflow-scroll no-scrollbar w-full gap-4 px-[5vw]'>
                {
                    Array.from({length : 6} , (_,index)=>{
                        return(
                            <InstagramReelContent key={index} index={index}/>
                        )
                    })
                }
          </div>
        </div>
    )
}
