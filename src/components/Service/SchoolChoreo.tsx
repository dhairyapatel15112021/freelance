import { Content } from './Content'

export const SchoolChoreo = () => {
  return (
    <div className='w-[100%] md:w-[80%] grid grid-rows-6 md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-y-6 place-items-center'>
    {
      Array.from({ length: 6 }).map((_, index) => {
        return (
          <Content key={index} row={4} column={index} />
        )
      })
    }
  </div>
  )
}
