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
    // quitar etiqueta p al haber refactorizado todo
    console.log(props.texto)
    return(
      <>
      <p>{props.texto}</p>
      <br></br>
      </>
    )
  }
}

export default Paragraph