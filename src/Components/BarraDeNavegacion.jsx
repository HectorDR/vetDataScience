import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
const BarraDeNavegacion = () => {
  return (
    <div id="navbar" className="navbar top">
        <h1 className= "logo">
        <span className="text-primary"><FontAwesomeIcon icon={faBookOpen} size="1x"/> Introducción a la Ciencia de Datos para MVZ</span> </h1>
    
    <nav>
    <ul>
      <li><a href="/">Bienvenidos</a></li>
      <li><a href="Blog">Acerca de</a></li>
      <li><a href="Contenidos">Contenidos</a></li>
      <li><a href="index.html#team">Blogger</a></li>
      <li><a href="/#contact">Contacto</a></li>
    </ul>
    </nav>
    </div>
  )
}

export default BarraDeNavegacion;