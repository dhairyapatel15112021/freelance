import founder_1 from "../../assets/about/founder_1.png";
import founder_2 from "../../assets/about/founder_2.png";

interface data {
    name : string,
    description : string,
    index : number
}

export const Founder = (inputData : data) => {
    const data = [ founder_1 , founder_2];
  return (
    <div className="w-[100%] md:w-[40%] flex flex-col justify-evenly gap-2 md:gap-0 mt-6 md:mt-0">
        <img src={data[inputData.index]} alt="founder image" />
        <div className="font-monserrat text-base md:text-lg font-light md:font-medium">{inputData.name}</div>
        <div className="font-monserrat text-sm md:text-base font-extralight md:font-light">{inputData.description}</div>
        <div className="font-monserrat text-sm md:text-base font-light md:font-medium">Connect</div>
    </div>
  )
}
