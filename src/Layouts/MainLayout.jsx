import React from 'react'
import BarraDeNavegacion from 'Components/BarraDeNavegacion'
import Footer from 'Components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
export const scrollContext = React.createContext();

const MainLayout = () => {
  // scroll control
  const page = useRef()
  const [scrollPosition,setScrollPosition] = useState(0);
  window.addEventListener('scroll',() => setScrollPosition(window.scrollY))

  return (
    <div className='main_layout' ref={page}>
      <scrollContext.Provider value={scrollPosition}>
        {scrollPosition<400?<BarraDeNavegacion/>:null}
        <Outlet/>
        <Footer/>
      </scrollContext.Provider>
      </div>
  )
}

export default MainLayout