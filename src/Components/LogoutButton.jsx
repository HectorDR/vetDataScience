import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const LogoutButton = () => {
    const {isAuthenticated} = useAuth0()
    const {logout} = useAuth0()
  return (
    <button className='logout_button' onClick={() => logout({returnTo: window.location.origin})}>{isAuthenticated ? "autorizado ":"no autorizado "}Salir</button>
  )
}

export default LogoutButton