import { Content } from './Content'

export const Host = () => {
  return (
    <div className='w-[100%] md:w-[80%] grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-y-6 place-items-center'>
    {
      Array.from({length : 4}).map((_,index)=>{
        return(
          <Content key={index} row={8} column={index}/>
        )
      })
    }
</div>
  )
}
