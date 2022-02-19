import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
const BarraDeNavegacion = () => {
  return (
    <div id="navbar" className="navbar top">
        <h1 className= "logo">
        <span className="text-primary"><FontAwesomeIcon icon={faBookOpen} size="1x"/> Blog de Ciencia de Datos </span> para el campo</h1>
    
    <nav>
    <ul>
      <li><a href="index.html">Bienvenidos</a></li>
      <li><a href="blog.html">Acerca de</a></li>
      <li><a href="contenidos.html">Contenidos</a></li>
      <li><a href="index.html#team">Blogger</a></li>
      <li><a href="index.html#contact">Contacto</a></li>
    </ul>
    </nav>
    </div>
  )
}

export default BarraDeNavegacion;