import { Founder } from "../components/About/Founder";
import { Image } from "../components/About/Image"

export const AboutUs = () => {
  const data = [{ name: "Name", description: "Lorem ipsum dolor sit amet consectetur. Et purus diam sed sed. Curabitur diam auctor dui pellentesque erat consectetur mi ornare vitae. Suspendisse eu montes vitae mauris mi tincidunt molestie ornare suspendisse. Bibendum mauris non" },
  { name: "Name", description: "Lorem ipsum dolor sit amet consectetur. Et purus diam sed sed. Curabitur diam auctor dui pellentesque erat consectetur mi ornare vitae. Suspendisse eu montes vitae mauris mi tincidunt molestie ornare suspendisse. Bibendum mauris non" }];
  return (
    <div>
      <Image />
      <div className="flex justify-center items-center mt-20">
        <div className="w-[80vw] text-center font-poppins font-extralight md:font-light text-sm md:text-base">
          D Effects & Entertainment began with a passion for bringing people together through the joy of dance. Starting with wedding choreography, we helped couples create memorable moments on the dance floor. As our team grew, so did our services; we expanded into wedding décor and event styling, now transforming spaces with personalized décor and stunning special effects. Today, we are not just event planners – we’re storytellers who believe in creating magic with every detail. From unique décor and lighting to custom dance routines, every event we plan reflects your story, making each moment unforgettable.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-[80vw]">
          <div className="text-left md:text-center font-cormorant font-medium text-4xl md:text-5xl">Meet the Founders</div>
        </div>
        <div className="h-fit md:h-[70vh] w-[80vw] mt-6 md:mt-14 flex justify-between flex-col md:flex-row">
          {
            data.map((item, index) => {
              return (
                <Founder name={item.name} description={item.description} index={index} />
              )
            })
          }
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-20">
        <div className="w-[80vw] font-cormorant font-light bg-[#282828] py-2 px-4 rounded-sm text-center text-xs md:text-xl">
          We’re here to make sure your special day is as magical as you’ve always imagined. Let’s create something unforgettable together.
        </div>
      </div>
      
    </div>
  )
}
