import React from 'react'
import BarraDeNavegacion from 'Components/BarraDeNavegacion'
import Footer from 'Components/Footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className='main_layout'>
        <BarraDeNavegacion/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout