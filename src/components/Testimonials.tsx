import { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { TestimonialsContent } from './TestimonialsContent'

export const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  const data = [ { text : "The décor was breathtaking, and the special effects left everyone speechless! Our first dance felt like a fairytale thanks to their choreography." , name : "Rahul Singh"},
    {text : "They transformed our event into something magical. Couldn’t have asked for more!" , name : "Simran & Kunal"},
    {text : "D Effects made our wedding truly magical! The décor was stunning, and the choreography for our first dance was so much fun to learn. Our guests were amazed!”" , name :"Rohan & Meera"},
    {text : "D Effects made our corporate event feel like a grand celebration. Professional and creative in every way!" , name : "Sunil K." , },
    {text : "The décor was breathtaking, and the special effects added that extra spark we were hoping for. They truly went above and beyond!" , name : "Shruti & Abhishek"}
  ]

  return (
    <div className='left-0 mt-16 flex flex-col justify-center items-center'>
      <div className='sticky top-[64px] font-cormorant font-semibold text-4xl md:text-5xl'>
        Hear From Our Clients
        {/* https://www.youtube.com/watch?v=4ehYkfh7P-I */}
      </div>
      <div ref={targetRef} className='relative h-[1000px] md:h-[900px] w-screen'>
        <div className='sticky top-[176px] flex items-center mt-16 overflow-hidden'>
          {/* overflow-hidden for above div */}
          <motion.div style={{x}} className='flex gap-4'>
            {
              data.map((item,index)=>{
                return(
                  <TestimonialsContent key={index} text={item.text} name={item.name}/>
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}
