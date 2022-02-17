import React from 'react'

// este componente asi queda listo para modificar cada subtitulo con tailwind
// o si en algun futuro le queremos añadir cualquier cosa a todos los titulos
const SubTitle = (props) => {
  return (
    <>
    <h2>{props.title}</h2>
    <br></br>
    </>
  )
}

export default SubTitle