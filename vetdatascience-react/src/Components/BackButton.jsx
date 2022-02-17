import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
const BackButton = () => {
  return (
    <div className='back_button'>
    <div className='btn btn-primary'> 
        <span>Volver a los contenidos</span> <FontAwesomeIcon icon={faHandPointUp}/>
    </div>
    </div>
  )
}

export default BackButton