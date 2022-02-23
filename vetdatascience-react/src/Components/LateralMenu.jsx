import React from 'react'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LateralMenu = () => {

    const [open,setOpen] = useState(false);
  
  if(open==true)
  {  
  return (
    <div className='lateral_menu' onClick={() => setOpen(false)}>
    </div>
  )
  }
  else{
      return (
        <div className='floating_hamburger' onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="3x"/>
        </div>
      )
  }
}

export default LateralMenu