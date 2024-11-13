import { InfiniteSlider } from "./InfiniteSlider"

export const CompanyCarousel = () => {
  return (
    <div className="flex flex-col items-center">
        <div className='font-cormorant font-light text-xl bg-[#282828] py-2 px-4 w-fit mt-20 rounded-sm'>Our Proud Partners</div>
        <div>
          <InfiniteSlider/>
        </div>
    </div>
  )
}
