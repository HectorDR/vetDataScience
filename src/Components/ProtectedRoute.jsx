import React from 'react'
import {withAuthenticationRequired} from "@auth0/auth0-react"
import Loadingpage from 'Pages/LoadingPage';
const ProtectedRoute = withAuthenticationRequired((props) => {
  return (
    <>
    {props.page}
    </>
  )
}, {onRedirecting: () =>(<Loadingpage/>)});

export default ProtectedRoute;