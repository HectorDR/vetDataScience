import React from 'react'
import { Card } from 'react-bootstrap'
const ChapterCard = (props) => {
  return (
    <div className='chapter_card'>
        <img src={props.imagen} className="chapter_card__image"/>
        <div className='chapter_card__body'> 
        <a href={props.link}><h3>{props.titulo}</h3></a>
            <p>{props.descripcion}</p>
        </div>
    </div>
  )
}

export default ChapterCard