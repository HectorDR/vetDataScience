import React from 'react'

const ContentsTable = (props) => {
  return (
    <>
        <section class="post">
            <div id="menu" >
                
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