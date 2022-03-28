import React from 'react'
import { nanoid } from 'nanoid'
import { Fragment } from "react";
const Homehead = (props) => {
  return (
    <div className="hero blog" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
      {props.titulo.map(item => {
        return(
           <Fragment key={nanoid()}>{item}</Fragment>
        )
      })}
      </div>
    </div>
  )
}

export default Homehead