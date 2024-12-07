import { TestimonialsContent } from './TestimonialsContent'

export const Testimonials = () => {
 
  const data = [ { text : "The décor was breathtaking, and the special effects left everyone speechless! Our first dance felt like a fairytale thanks to their choreography." , name : "Rahul Singh"},
    {text : "They transformed our event into something magical. Couldn’t have asked for more!" , name : "Simran & Kunal"},
    {text : "D Effects made our wedding truly magical! The décor was stunning, and the choreography for our first dance was so much fun to learn. Our guests were amazed!”" , name :"Rohan & Meera"},
    {text : "D Effects made our corporate event feel like a grand celebration. Professional and creative in every way!" , name : "Sunil K." , },
    {text : "The décor was breathtaking, and the special effects added that extra spark we were hoping for. They truly went above and beyond!" , name : "Shruti & Abhishek"}
  ]

  return (
    <div className='mt-16 mb-20 flex flex-col justify-center items-center'>
      <div className='font-great-vibes tracking-[0.1rem] md:tracking-[0.35rem] font-semibold text-4xl md:text-5xl'>
        Hear From Our Clients
        {/* https://www.youtube.com/watch?v=4ehYkfh7P-I */}
      </div>
      {/* <div className='relative w-screen'> */}
        {/* <div className='flex items-center mt-16 overflow-scroll bg-red-500'> */}
          <div className='flex items-center mt-16 overflow-scroll no-scrollbar w-full gap-4'>
            {
              data.map((item,index)=>{
                return(
                  <TestimonialsContent key={index} text={item.text} name={item.name}/>
                )
              })
            }
          </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}
