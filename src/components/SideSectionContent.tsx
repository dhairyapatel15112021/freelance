import decorSVG from "../assets/home/decor.svg";
import specialEffectSVG from "../assets/home/specialEffects.svg";
import choreoSVG from "../assets/home/choreography.svg";
import { useMobile } from "../hooks/useMobile";

interface data {
  index: number,
  title: string,
  subtitle: string,
  id : string
}

export const SideSectionContent = (inputdata: data) => {
  const isMobile = useMobile();
  const data = [{ svg: decorSVG }, { svg: specialEffectSVG }, { svg: choreoSVG }];
  return (
    <section id={inputdata.id} className="h-[100vh] w-[100%] relative md:bg-none bg-gradient-to-b from-black from-[40%] to-[#666666]">
      <div className="absolute left-[10%] top-[20%] md:left-40 md:top-60 z-10">
        <div className="font-cormorant text-4xl md:text-5xl tracking-wide w-[90%] md:w-[80%]">{inputdata.title}</div>
        <div className="font-poppins text-md md:text-xl font-extralight w-[90%] md:w-[80%] mt-4">{inputdata.subtitle}</div>
      </div>
      <div className={`absolute left-[0vw] md:left-[40vw] -z-0 opacity-20 w-[100vw] md:w-[60vw] h-[100vh] ${inputdata.index === 0 ? `bg-decor` : inputdata.index === 1 ? `bg-specialEffects` : `bg-choreo`} bg-right md:bg-center bg-cover`}></div>
      {
        isMobile && <div className="absolute left-0 top-[70vh]">
          <img src={data[inputdata.index].svg} />
        </div>
      }
    </section>
  )
}
