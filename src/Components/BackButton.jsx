import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
const BackButton = () => {
  return (
    <div className='back_button'>
       <a href = "#tabla">
    <div className='btn btn-primary'> 
        <span>Volver a los contenidos</span> <FontAwesomeIcon icon={faHandPointUp}/>
    </div>
    </a>
    </div>
  )
}

export default BackButton