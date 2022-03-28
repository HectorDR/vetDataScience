import React from 'react'
const Paragraph = (props) => {
  if(typeof(props.texto) === "string")
  {
  return (
    <>
    <p>{props.texto}</p>
    <br></br>
    </>
  )
  }
  else{
    return(
      <>
      {props.texto}
      <br></br>
      </>
    )
  }
}

export default Paragraph