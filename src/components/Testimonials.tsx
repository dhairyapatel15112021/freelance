import { TestimonialsContent } from './TestimonialsContent'

export const Testimonials = () => {
  return (
    <div className='mt-16 flex flex-col justify-center items-center bg-red-500'>
        <div className='font-cormorant font-semibold text-4xl md:text-5xl'>
            Hear From Our Clients
        </div>
        <div>
            <TestimonialsContent/>
        </div>
    </div>
  )
}
