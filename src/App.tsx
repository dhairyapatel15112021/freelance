import { createContext, useState, Dispatch, SetStateAction, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { SideNavBar } from "./components/SideNavBar";
import { useHome } from "./hooks/useHome";

interface OpenContextType {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value

export const OpenContext = createContext<OpenContextType | undefined>(undefined);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const contextValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);
  const isHome = useHome();
  return (
    <div className="text-white bg-black">
      <OpenContext.Provider value={contextValue}>
        {!isHome && <Header />}
        {isOpen && <SideNavBar />}
        <Outlet />
      </OpenContext.Provider>
    </div>
  )
}

export default App
