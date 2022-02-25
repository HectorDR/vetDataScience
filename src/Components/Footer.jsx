import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div>
        <footer className="footer bg-dark">
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2x" className="social_icon"/>
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social_icon"/>
            <FontAwesomeIcon icon={faYoutube} size="2x" className="social_icon"/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="social_icon"/>
          </div>
          <p>Copyright &copy; 2020 - DSMVZ </p>
          </footer>
    </div>
  )
}

export default Footer