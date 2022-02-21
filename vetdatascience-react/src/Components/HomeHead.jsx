import React from 'react'

const Homehead = (props) => {
  return (
    <div className="hero blog" style={{background: `url(${props.background}) no-repeat center center/cover`}}>
      <div className='content'>
      {props.titulo}
      </div>
    </div>
  )
}

export default Homehead