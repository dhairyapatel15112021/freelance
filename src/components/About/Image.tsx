export const Image = () => {

    
  return (
    <div className="relative flex justify-center items-center h-[40vh] md:h-[60vh] w-[100vw] bg-gradient-to-b md:bg-gradient-to-r from-[#101010] from-[25%] md:to-[70%] to-[#FE8F7E]">
        <div className="absolute top-0 left-0 h-full w-full bg-about bg-cover bg-center md:opacity-50 opacity-30" > </div>
        <div style={{ top: "calc(50% - 30px)" }} className="absolute flex flex-col justify-center items-center gap-2 w-[65%] md:w-[75%]">
            <div className="font-great-vibes tracking-[0.3rem] text-4xl md:text-5xl font-medium">About Us</div>
            <div className="font-monserrat text-base md:text-lg font-light text-center">Creating Unforgettable Moments – From Dance to Décor</div>
        </div>
    </div>
  

  )
}
