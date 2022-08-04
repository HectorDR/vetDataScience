import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link';
// import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { scrollContext } from 'Layouts/MainLayout'
import { useContext } from 'react'
import { useEffect, useState } from 'react';
const BarraDeNavegacion = () => {

  const {user} = useAuth0();

  // manejo de navbar por contexto compartido con el header de la web
  const [navClass, setNavClass] = useState("navbar")
  const header = useContext(scrollContext)
  useEffect(() =>{
    if(header.headerVisible)
    {
      setNavClass("navbar")
    }
    else
    {
      setNavClass("navbar hidden")
    }
  },[header.headerVisible])

  return (
    <div id="navbar" className={navClass}>
        <div className= "logo">
        <span className="text-primary"><FontAwesomeIcon icon={faBookOpen} size="1x"/> Introducción al Análisis de Datos para MVZ</span>
        </div>
        <div className='navbar_container'>
          <ul className='navbar_links'>
            <li><Link to={"/"}>Bienvenidos</Link></li>
            <li><Link to={"/Blog"}>Acerca de</Link></li>
            <li><Link to={"/Contenidos"}>Contenidos</Link></li>
            <li><Link to = {"/Referencias"}>Referencias</Link></li>
            <li><HashLink smooth to={"/#contact"}>Contacto</HashLink></li>
            {/* <li className='navbar__user_message'>Hola {user.given_name}!</li> */}
          </ul>
          {/* <LogoutButton/> */}
        </div>
      </div>
  )
}

export default BarraDeNavegacion;