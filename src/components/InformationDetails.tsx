import { useMobile } from '../hooks/useMobile';
import { Counter } from './Counter'

export const InformationDetails = () => {
    const isMobile = useMobile();
    const descriptionData = [{title : "One-stop Solution",subtitle : "Décor, choreography, and effects, all in one place."},
        {title : "Customised Themes",subtitle : "We tailor every element to fit your style."},
        {title : "Experienced Team",subtitle : "Years of experience in creating unforgettable moments."}
    ]
    const lineData = [0,10,0,10,0];
    const roundData = [10,-10,10,-10,10];
    const data = [
        {number : 3000 , description : "Professional Dance Group" , align : 'left'},
        {number : 3000 , description : "Wedding Choreography" , align : 'right'},
        {number : 2000 , description : "Wedding Entry Concepts",align : 'left'},
        {number : 2000 , description : "Corporate Events",align : 'right'},
        {number : 1500 , description : "School & College Functions",align : 'left'}
    ]
    return (
        <div className='w-[100%] flex flex-col md:flex-row items-center justify-center mt-12 md:mt-16 gap-12 md:gap-0'>
            <div className='w-[70vw] md:w-[40vw] h-[50vh] relative top-0 left-[15vw] md:left-0'>
                <div className='ml-[-10vw] md:mx-0 font-monserrat font-light text-black bg-light-pink py-2 px-4 w-[95%] md:w-[48%] md:ml-[10%] rounded-sm flex justify-center items-center gap-x-2 text-xl h-[7.14vh] '>
                    <div className='flex justify-center items-center w-[15%]'>
                        <Counter />
                        <div className='font-monserrat font-semibold'>+</div>
                    </div>
                    <div className='text-xl font-monserrat font-extralight tracking-wide w-[85%] text-nowrap'>
                        Years of Experience
                    </div> 
                </div>
                <div className='absolute h-[42.86vh] w-[2px] bg-[#222222] top-[7.14vh] left-[27.5%] md:left-[32.5%]'></div>
                {
                    lineData.map((item,index)=>{
                        return(
                            <div key={index} style={{top : `${7.14* (index + 2)}vh`,left : `${(!isMobile ? 27.5 : 32.5) - item}%`}} className={`absolute w-[10%] h-[2px] bg-[#222222]`}></div>
                        )
                    })
                }
                {
                    roundData.map((item,index)=>{
                        return(
                            <div key={index} style={{top : `calc(${7.14 * (index + 2)}vh - 5px)`,left : `${(!isMobile ? 27.5 : 32.5)  + item}%`}} className={`absolute w-[10px] h-[10px] rounded-full bg-[#222222]`}></div>
                        )
                    })
                }
                {
                    data.map((item,index)=>{
                        const topValue = `calc(${7.14 * (index + 2)}vh - 3.57vh)`;

                        // Calculate the `left` value in JavaScript, ensuring consistent units
                        const roundDataValue = roundData[index];
                        const additionalPixels = (roundDataValue / 10) * 10; // This is a pixel value (10px per unit)
                        const leftValue = `${(!isMobile ? 27.5 : 32.5)  + roundDataValue - (index % 2 === 1 ? 40 : -2)}%`; // percentage-based calculation
                        const textAlign = index % 2 === 0 ? 'left' : 'right';
                    
                        return (
                          <div
                            key={index}
                            style={{
                              top: topValue,
                              left: `calc(${leftValue} + ${additionalPixels}px)`, // Mixing percentage and px properly
                              textAlign: textAlign,
                            }}
                            className="absolute w-[40%] h-[7.14vh]"
                          >
                            <div
                              className="flex font-monserrat font-semibold"
                              style={{ justifyContent: index % 2 === 0 ? 'start' : 'end' }}
                            >
                              <div>{item.number}</div>
                              <div>+</div>
                            </div>
                            <div className='font-monserrat font-extralight'>{item.description}</div>
                          </div>
                        );
                    })
                }
            </div>
            <div className='w-[80vw] md:w-[40vw] h-[40vh] md:h-[50vh] grid grid-rows-3 grid-cols-1 gap-6'>
                {
                    descriptionData.map((item,index)=>{
                        return(
                            <DescriptionInformation key={index} title={item.title} subtitle={item.subtitle}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface data {
    title : string,
    subtitle : string
}

const DescriptionInformation = (inputData : data)  => {

    return (
        <div className='flex flex-col justify-evenly'>
            <div className='font-monserrat font-light md:font-medium text-xl md:text-2xl'>{inputData.title}</div>
            <div className='font-monserrat font-extralight md:font-light text-base md:text-lg'>{inputData.subtitle}</div>
            <div className='h-[2px] bg-white'></div>
        </div>
    )
}