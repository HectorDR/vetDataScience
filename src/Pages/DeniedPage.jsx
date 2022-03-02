import React from 'react'
import GoogleButton from 'react-google-button'
import { useAuth0 } from '@auth0/auth0-react'
const DeniedPage = () => {
  const {loginWithRedirect} = useAuth0()
  return (
    <div className='access_denied_page'>
      <div className='access_denied_page__content'>
        <h1 className='access_denied_page__title'>No estas autorizado para ver la Web
        Registrate o Accede con tu cuenta de Google</h1>
        <div className='access_denied_page__signin_button'>
        <GoogleButton label='Entrar' onClick={() => loginWithRedirect()}/>
        </div>
      </div>
    </div>
  )
}

export default DeniedPage