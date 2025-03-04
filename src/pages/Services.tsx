import { Outlet } from "react-router-dom"
import { Image } from "../components/Service/Image"
import { Sidebar } from "../components/Service/Sidebar"
export const Services = () => {
  return (
    <div>
      <Image />
      <div className="flex flex-col md:flex-row mt-12 p-10 gap-10">
        {/* <div className="w-[100%] md:w-[20%] overflow-hidden"> */}
        <Sidebar />
        {/* </div> */}
        <Outlet />
      </div>
    </div>
  )
}
