import testimonialIcon from "../assets/testimonial/testimonialIcon.svg"
interface data {
  text: string,
  name: string
}
export const TestimonialsContent = (inputData: data) => {
  return ( 
    <div className="h-[250px] w-[300px] md:w-[400px] relative top-0 left-[10vw] md:left-[5vw] font-monserrat text-sm md:text-base font-extralight md:font-light flex-shrink-0">
      <img src={testimonialIcon} alt="testimonialIcon" className="absolute top-0 left-0 ml-6 z-10" />
      <div className="absolute top-5 h-[90%] w-full text-black bg-light-pink hover:bg-black hover:text-light-pink px-6 pt-12 pb-6 rounded-md flex flex-col justify-between">
        <div>{inputData.text}</div>
        <div> - {inputData.name}</div>
      </div>
    </div>
  )
}
