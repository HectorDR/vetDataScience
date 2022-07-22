import React from 'react'
import home_logo from "Media/images/home_logo.svg"
import HomeButton from './HomeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const HomeCover = (props) => {
  return (
    <div className="home_cover">
        <video autoPlay muted loop onPlay={(e) => e.target.playbackRate = 0.8}>
          <source src={props.video} type="video/mp4"/>
        </video>
        <div className='home_container'>
          <img src={home_logo}/>
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