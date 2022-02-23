import React from 'react'
import { useContext } from 'react'
import { scrollContext } from 'Layouts/MainLayout'
const ChapterHead = (props) => {

  return (
    <div className="hero blog" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
      <h1>{props.titulo}</h1>
      </div>
    </div>
  )
}

export default ChapterHead