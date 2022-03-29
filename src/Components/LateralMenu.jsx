import React from 'react'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cowLogo from "Media/images/cow_logo.svg"
import ChapterAccordion from './ChapterAccordion';
import menuexit from "Media/images/menuexit.svg"
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
    <div className={menuClass}>
    <div style={{display: "flex", flexDirection: "row"}}>   
    <img src={cowLogo} className="lateral_menu__logo"/>
    <img src={menuexit} className="lateral_menu__exit" onClick={() => {
      setOpen(false)
      setMenuClass('lateral_menu')}}/>
    </div> 
    <h3>VetDataScience</h3>
    <ChapterAccordion chapter={{texto:"1- Definiciónes generales de la ciencia de los datos",link:"/Post"}}
    subchapters={[{texto:"1.1-Qué es la ciencia de los datos",link:"#definicion"},{texto:"1.2- Qué son los datos crudos",link:"#datos"},{texto:"1.3- Clasificación de los datos según su naturaleza",link:"#raw"}]}/>
    </div>
    </>
  )
}

export default LateralMenu