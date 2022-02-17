import React from 'react'
import { useState } from 'react'
const ImagePlus = (props) => {

const [modalTrigger,setModalTrigger] = useState(false);
  return (
    <div className={props.style || "image_plus"} style={{width: `${props.width || "40%"}`}} onMouseEnter={() => setModalTrigger(true)} onMouseLeave={() => setModalTrigger(false)}>
        <img src={props.image} alt={props.alt}/>
        {modalTrigger === true?
        <div className='image_bottom_block'>
            {props.texto}
        </div>:null
        }
    </div>
  )
}

export default ImagePlus