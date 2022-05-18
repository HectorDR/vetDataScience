import React from 'react'
import { HashLink } from '@xzar90/react-router-hash-link'
const HomeButton = (props) => {
  return (
    <HashLink smooth to={`#${props.link}`}><button className={`home_button`}>{props.texto}</button></HashLink>
  )
}

export default HomeButton