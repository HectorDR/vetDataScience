import React from 'react'

const ContentsTable = (props) => {
  return (
    <>
        <section class="post">
            <div id="menu" class="container bg-light">
                <h2>Contenidos</h2>
                <ul>
                    {props.contenidos.map(contenido => {
                        return <li><a href={contenido.link}>{contenido.titulo}</a></li>
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default ContentsTable