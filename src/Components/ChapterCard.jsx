import React from 'react'
import { useNavigate } from 'react-router-dom'
const ChapterCard = (props) => {

  const navigate = useNavigate()

  return (
    <div className='chapter_card' onClick={() => navigate(`/${props.link}`)}>
        <img src={props.imagen} className="chapter_card__image" alt={props.titulo}/>
        <div className='chapter_card__body'> 
            <h3>{props.titulo}</h3>
        </div>
    </div>
  )
}

export default ChapterCard