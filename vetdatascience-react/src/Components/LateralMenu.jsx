import React from 'react'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cowLogo from "Media/images/cow_logo.svg"
const LateralMenu = () => {

    const [open,setOpen] = useState(false);
    const [menuClass,setMenuClass] = useState('lateral_menu')

  return (
    <>
    {/* // espacio real para la barra */}
    {open===true?<div className='lateral_menu__relative_block'/>:null}

    {/* // boton flotante hamburguesa */}
    {open===false?<div className='floating_hamburger' onClick={() => {
          setOpen(true)
          setMenuClass('lateral_menu active')}}>
            <FontAwesomeIcon icon={faBars} size="3x"/>
    </div>:null}

    {/* //menu lateral */}
    <div className={menuClass} onClick={() => {
      setOpen(false)
      setMenuClass('lateral_menu')}}>
    <img src={cowLogo} className="lateral_menu__logo"/>
    <h3>VetDataScience</h3>
    </div>
    </>
  )
}

export default LateralMenu