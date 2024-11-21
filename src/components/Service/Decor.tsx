import { Content } from './Content'

export const Decor = () => {
  return (
    <div className='w-[100%] grid grid-rows-10 grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-y-6 place-items-center'>
        {
          Array.from({length : 10}).map((_,index)=>{
            return(
              <Content key={index} row={0} column={index}/>
            )
          })
        }
    </div>
  )
}
