import wedding_1 from "../assets/home/wedding/wedding_1.png";
import wedding_2 from "../assets/home/wedding/wedding_2.png";
import wedding_3 from "../assets/home/wedding/wedding_3.png";
import wedding_4 from "../assets/home/wedding/wedding_4.png";
import party_1 from "../assets/home/party/party_1.png";
import party_2 from "../assets/home/party/party_2.png";
import party_3 from "../assets/home/party/party_3.png";
import party_4 from "../assets/home/party/party_4.png";
import firework_1 from "../assets/home/firework/firework_1.png";
import firework_2 from "../assets/home/firework/firework_2.png";
import firework_3 from "../assets/home/firework/firework_3.png";
import firework_4 from "../assets/home/firework/firework_4.png";
import dance_1 from "../assets/home/dance/dance_1.png";
import dance_2 from "../assets/home/dance/dance_2.png";
import dance_3 from "../assets/home/dance/dance_3.png";
import dance_4 from "../assets/home/dance/dance_4.png";

interface data {
  index : number,
  title : string,
  description : string
}

export const OurServiceHomeContent = (inputData : data) => {
  const contentData = [{
    first : wedding_1, second : wedding_2,third : wedding_3,fourth : wedding_4 },
    {first : party_1,second: party_2 , third : party_3, fourth : party_4},
    {first : firework_1 , second : firework_2 , third : firework_3, fourth :firework_4},
  {first : dance_1 , second : dance_2 , third : dance_3 , fourth : dance_4}];
  return (
    <div className='w-[100vw] h-[70vh] my-6 md:my-16 flex flex-col md:flex-row'>
        <div className='w-[100vw] md:w-[50vw] h-[20vh] md:h-full flex justify-center items-center'>
            <div className='w-[80vw] md:w-[20vw] flex flex-col gap-2'>
                <div className='font-poppins font-semibold text-lg'>{inputData.title}</div>
                <div className='font-poppins font-extralight text-base'>{inputData.description}</div>
                <div className='font-poppins font-semibold text-lg'>Learn More</div>
            </div>
        </div>
        <div className='w-[80vw] mx-[10vw] md:mx-0 mt-[5vh] md:mt-0 md:w-[40vw] h-[40vh] md:h-full grid grid-rows-3 grid-cols-3'>
            <div className= "w-full h-full">
              <img src={contentData[inputData.index].first} alt="first" className="w-full h-full rounded-md drop-shadow-shadow" />
            </div>
            <div className=" w-full h-full">
              <img src={contentData[inputData.index].second} alt="second" className="w-full h-full rounded-md drop-shadow-shadow"  />
            </div>
            <div className=" w-full h-full">
              <img src={contentData[inputData.index].third} alt="third" className="w-full h-full rounded-md drop-shadow-shadow" />
            </div>
            <div className='row-span-2 col-span-3 w-full h-full'>
              <img src={contentData[inputData.index].fourth} alt="fourth" className="w-full h-full rounded-md drop-shadow-shadow"   />
            </div>
        </div>
    </div>
  )
}
