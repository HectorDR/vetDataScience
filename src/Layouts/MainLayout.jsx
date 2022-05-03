import React from 'react'
import BarraDeNavegacion from 'Components/BarraDeNavegacion'
import Footer from 'Components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useRef } from 'react'
export const scrollContext = React.createContext();

const MainLayout = () => {

  // scroll control
  const page = useRef()
  const [headerVisible,setheaderVisible] = useState(true);

  return (
    <div className='main_layout' ref={page}>
      <scrollContext.Provider value={{headerVisible: headerVisible, setHeader: setheaderVisible}}>
        <BarraDeNavegacion/>
        <Outlet/>
        <Footer/>
      </scrollContext.Provider>
      </div>
  )
}

export default MainLayout