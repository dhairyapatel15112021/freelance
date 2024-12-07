import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='flex flex-row md:flex-col overflow-scroll no-scrollbar w-[100%] md:w-[20%]'>
        <NavLink to="/service/decor" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : `bg-none`} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Decoration</NavLink>
        <NavLink to="/service/specialEffects" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : `bg-none`} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>SFX / Special Effects</NavLink>
        <NavLink to="/service/weddingChoreography" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Wedding Choreography</NavLink>
        <NavLink to="/service/corporateChoreography" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Corporate Choreography</NavLink>
        <NavLink to="/service/schoolChoreography" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>School Choreography</NavLink>
        <NavLink to="/service/professionalDanceGroup" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Professional Dance Group</NavLink>
        <NavLink to="/service/weddingEntry" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Wedding Entry Concept</NavLink>
        <NavLink to="/service/folkCultural" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Folk Cultural Groups</NavLink>  
        <NavLink to="/service/host" className={({isActive})=>`${isActive ? `bg-light-pink text-black rounded-md` : ``} text-nowrap p-3 font-monserrat font-light md:font-medium text-sm md:text-base`}>Anchor / Show Host</NavLink>   
    </div>
  )
}
