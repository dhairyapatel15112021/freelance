import { useEffect } from "react";
import { Data } from "./Data";
interface data {
  row: number,
  column: number
}
export const Content = (inputData: data) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div>
      <img className="w-full h-full" src={Data[inputData.row][inputData.column].image} alt={Data[inputData.row][inputData.column].text} />
      <div className="mt-3 font-monserrat font-medium text-lg">{Data[inputData.row][inputData.column].text}</div>
    </div>
  )
}
