import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { HashLink } from "@xzar90/react-router-hash-link";
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div>
        <footer className="footer bg-dark">
          <div>
            
          <a target="_blank" href="https://www.youtube.com/channel/UCcVhlN8B5LDXCg5chyqePtg" ><FontAwesomeIcon icon={faYoutube} size="2x" className="social_icon"/> </a>
          <a target="_blank" href="https://www.linkedin.com/in/hector-delgado-9860b1246/" ><FontAwesomeIcon icon={faLinkedin} size="2x" className="social_icon"/> </a>
          <HashLink smooth to={"/#contact"}>   <FontAwesomeIcon icon={faFacebook} size="2x" className="social_icon"/> </HashLink>
          </div>
          <p> Introducción al Análisis de Datos para MVZ </p>
          </footer>
    </div>
  )
}

export default Footer