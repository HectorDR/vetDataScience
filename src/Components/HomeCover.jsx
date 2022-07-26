import React from 'react'
import HomeButton from './HomeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import home_logo from "Media/images/logovetDataAnalisis.svg"

const HomeCover = (props) => {
  return (
    <div className="home_cover">
        <video autoPlay muted loop>
          <source src={props.video} type="video/mp4"/>
        </video>
        <div className='home_container'>
          <img src={home_logo} alt="Vet Analisis Datos Logo"/>
            <div className='home_options'>
                <HomeButton  texto="Introducción" link="introduccion"/>
                <HomeButton  texto="Capitulos" link="contents"/>
                <HomeButton  texto="Contacto" link="contact"/> 
            </div>
            <FontAwesomeIcon icon={faAngleDown} size="5x" beatFade className='home_arrown_down'/>
        </div>
      </div>
  )
}

export default HomeCover