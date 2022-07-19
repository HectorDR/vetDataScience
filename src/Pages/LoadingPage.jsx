import React from 'react'
import cowLogo from "Media/images/cow_logo.svg"
const LoadingPage = () => {
  return (
    <div className='access_denied_page'>
      <div className='access_denied_page__content'>
        <h1 className='access_denied_page__title'>Bienvenido a VetCienciaDeDatos</h1><br/>
        <h1 className='access_denied_page__title'>Redirigiendo...</h1>
        <img className='loading_img' src={cowLogo}/>
      </div>
    </div>
  )
}

export default LoadingPage