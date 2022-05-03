import React from 'react'
import { HashLink } from "@xzar90/react-router-hash-link";
import { nanoid } from 'nanoid'
const ContentsTable = (props) => {
  return (
    <>
        <section className="post">
            <div id="menu" className=" bg-light">
                <h2>Contenidos</h2>
                <ul>
                    {props.contenidos.map(contenido => {
                        return <li key={nanoid()}><HashLink smooth to={contenido.link.indexOf("#") === 0?contenido.link:`/${contenido.link}`}>{contenido.titulo}</HashLink></li>
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default ContentsTable