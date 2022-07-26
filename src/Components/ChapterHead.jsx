import React from 'react'
import { isOutsideVh } from 'Hooks_and_Functions/jFunctions'
import { useScrollPosition } from 'Hooks_and_Functions/jHooks'
import { useEffect } from 'react'
import { scrollContext } from 'Layouts/MainLayout'
import { useContext } from 'react'
const ChapterHead = (props) => {

  // trackeo de donde se encuentra el componente y si es visible
  const scrollPosition = useScrollPosition();
  const header = useContext(scrollContext)
  useEffect(() => {
    if(isOutsideVh("chapterHeader"))
    {
      header.setHeader(false)
    }
    else
    {
      header.setHeader(true)
    }
  },[scrollPosition,header])

  return (
    <div id='chapterHeader' className="ChapterHead" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
      <h1 style={{color: "yellow"}}>{props.titulo}</h1>
      </div>
    </div>
  )
}

export default ChapterHead