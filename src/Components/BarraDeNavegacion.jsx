import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link';
import LogoutButton from './LogoutButton';
const BarraDeNavegacion = () => {
  return (
    <div id="navbar" className="navbar top">
        <h1 className= "logo">
        <span className="text-primary"><FontAwesomeIcon icon={faBookOpen} size="1x"/> Introducción a la Ciencia de Datos para MVZ</span> </h1>
    
    <nav>
    <ul>
      <li><Link to={"/"}>Bienvenidos</Link></li>
      <li><Link to={"/Blog"}>Acerca de</Link></li>
      <li><Link to={"/Contenidos"}>Contenidos</Link></li>
      <li><HashLink smooth to={"/#contact"}>Contacto</HashLink></li>
      <li><LogoutButton/></li>
    </ul>
    </nav>
    </div>
  )
}

export default BarraDeNavegacion;