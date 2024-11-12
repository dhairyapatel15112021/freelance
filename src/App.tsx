import { createContext, useState,Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { SideNavBar } from "./components/SideNavBar";

interface OpenContextType {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
export const OpenContext = createContext<OpenContextType | undefined>(undefined);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white">
      <OpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Header />
        {isOpen && <SideNavBar />}
        <Outlet />
      </OpenContext.Provider>
  
    </div>
  )
}

export default App
