import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div>
        <footer className="footer bg-dark">
          <div>
            
          <a target="_blank" href="https://www.youtube.com/channel/UCcVhlN8B5LDXCg5chyqePtg" ><FontAwesomeIcon icon={faYoutube} size="2x" className="social_icon"/> </a>
          <a target="_blank" href="https://www.linkedin.com/in/hector-delgado-9860b1246/" ><FontAwesomeIcon icon={faLinkedin} size="2x" className="social_icon"/> </a>
          <a target="_blank" href="mailto:hdelgado@vetanalisisdatos.com" ><FontAwesomeIcon icon={faEnvelope} size="2x" className="social_icon"/> </a>
          </div>
          <p> Introducción al Análisis de Datos para MVZ </p>
          </footer>
    </div>
  )
}

export default Footer