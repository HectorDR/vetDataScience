import React from 'react'
import home_logo from "Media/images/home_logo.svg"
import HomeButton from './HomeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const HomeCover = (props) => {
  return (
    <div className="home_cover">
        <video autoPlay muted loop>
          <source src={props.video} type="video/mp4"/>
        </video>
        <div className='home_container'>
          <img src={home_logo}/>
            <div className='home_options'>
                <HomeButton  texto="Introduccion"/>
                <HomeButton  texto="Capitulos"/>
                <HomeButton  texto="Contacto"/> 
            </div>
            <FontAwesomeIcon icon={faAngleDown} size="5x" beatFade className='home_arrown_down'/>
        </div>
      </div>
  )
}

export default HomeCover