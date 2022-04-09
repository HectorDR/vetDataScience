import React from 'react'
import { isOutsideVh } from 'Hooks_and_Functions/jFunctions'
import { useScrollPosition } from 'Hooks_and_Functions/jHooks'
import { useEffect } from 'react'
import { scrollContext } from 'Layouts/MainLayout'
import { useContext } from 'react'
const Homehead = (props) => {
  const scrollPosition = useScrollPosition();
  const header = useContext(scrollContext)
  useEffect(() => {
    if(isOutsideVh("mainheader"))
    {
      header.setHeader(false)
    }
    else
    {
      header.setHeader(true)
    }
  },[scrollPosition,header])
  return (
    <div id="mainheader" className="hero blog" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
          {props.titulo}
      </div>
    </div>
  )
}

export default Homehead