import React from 'react'

const Image = (props) => {
  return (
    <>
    <img src={props.image} className="image_test" alt={props.alt}/>
    <br/>
    </>
  )
}

export default Image