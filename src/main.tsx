import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Services } from './pages/Services.tsx'
import { AboutUs } from './pages/AboutUs.tsx'
import { Decor } from './components/Service/Decor.tsx'
import { SpecialEffect } from './components/Service/SpecialEffect.tsx'
import { WeddingChoreo } from './components/Service/WeddingChoreo.tsx'
import { SchoolChoreo } from './components/Service/SchoolChoreo.tsx'
import { ProfessionalDance } from './components/Service/ProfessionalDance.tsx'
import { WeddingEntry } from './components/Service/WeddingEntry.tsx'
import { FolkCultural } from './components/Service/FolkCultural.tsx'
import { Host } from './components/Service/Host.tsx'
import { CorporateChore } from './components/Service/CorporateChore.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path : "/" , index : true, element : <Home/>},
      {path : "service", element : <Services/> , children : [
        {index: true, element: <Navigate to="decor" replace /> },
        {path:"decor", element:<Decor/>},
        {path:"specialEffects",element:<SpecialEffect/>},
        {path:"weddingChoreography",element:<WeddingChoreo/>},
        {path : "corporateChoreography",element : <CorporateChore/>},
        {path:"schoolChoreography",element:<SchoolChoreo/>},
        {path:"professionalDanceGroup",element:<ProfessionalDance/> },
        {path:"weddingEntry",element:<WeddingEntry/>},
        {path:"folkCultural",element:<FolkCultural/>},
        {path:"host",element:<Host/>}
      ]},
      {path : "about", element : <AboutUs/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
