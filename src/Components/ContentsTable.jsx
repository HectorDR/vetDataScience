import React from 'react'
import { HashLink } from "@xzar90/react-router-hash-link";
const ContentsTable = (props) => {
  return (
    <>
        <section class="post">
            <div id="menu" class=" bg-light">
                <h2>Contenidos</h2>
                <ul>
                    {props.contenidos.map(contenido => {
                        return <li><HashLink smooth to={contenido.link.indexOf("#") === 0?contenido.link:`/${contenido.link}`}>{contenido.titulo}</HashLink></li>
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default ContentsTable