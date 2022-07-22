import React from 'react'
import { nanoid } from 'nanoid'
import { Fragment } from 'react'
const Paragraph2 = (props) => {
  if(typeof(props.texto) === "string")
  {
  return (
    <>
    <p>{props.texto}</p>
    <br></br>
    </>
  )
  }
  else
  {
    console.log(props.texto)
    return(
      <>
    {props.texto.map(item => {
      if(typeof(item) === "string")
      {
        return(
          <p key={nanoid()}>{item}</p>
        )
      }
      else
      {
        return(
        <Fragment>{item}</Fragment>
        )
      }
    })}
    </>
    )
  }
}



export default Paragraph2