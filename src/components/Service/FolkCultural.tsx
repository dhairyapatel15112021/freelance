import { Content } from './Content';

export const FolkCultural = () => {
  return (
    <div className='w-[100%] md:w-[80%] grid grid-rows-9 md:grid-rows-3 grid-cols-1 md:grid-cols-3 gap-y-6 place-items-center'>
    {
      Array.from({ length: 9 }).map((_, index) => {
        return (
          <Content key={index} row={7} column={index} />
        )
      })
    }
  </div>
  )
}
