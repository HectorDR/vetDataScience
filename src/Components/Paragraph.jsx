import React from 'react'

// este componente asi queda listo para modificar cada subtitulo con tailwind
// o si en algun futuro le queremos añadir cualquier cosa a todos los titulos
const Paragraph = (props) => {
  return (
    <>
    <p>{props.texto}</p>
    <br></br>
    </>
  )
}

export default Paragraph