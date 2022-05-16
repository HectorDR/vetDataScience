import React from 'react'
import home_logo from "Media/images/home_logo.svg"
import HomeButton from './HomeButton'
const HomeCover = (props) => {
  return (
    <div className="home_cover">
        <video autoPlay muted loop>
          <source src={props.video} type="video/mp4"/>
        </video>
        <img src={home_logo}/>
        <div className='home_container'>
            <div className='home_options'>
                <HomeButton  texto="Introduccion"/>
                <HomeButton  texto="Capitulos"/>
                <HomeButton  texto="Contacto"/>
            </div>
        </div>
      </div>
  )
}

export default HomeCover