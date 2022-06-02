import React from 'react'
import { useState } from 'react'
import DownloadButton from './DownloadButton';
const ImagePlus = (props) => {

const [modalTrigger,setModalTrigger] = useState(false);
  return (
    <div className={props.style || "image_plus"} style={{width: `${props.width || "40%"}`,maxWidth:`${props.max_zoom}` || "100%" }} onMouseEnter={() => setModalTrigger(true)} onMouseLeave={() => setModalTrigger(false)}>
        <img src={props.image} alt={props.alt}/>
        {modalTrigger === true?
        <div className='image_bottom_block'>
            <span>{props.texto}</span>
            <DownloadButton/>
        </div>:null
        }
    </div>
  )
}

export default ImagePlus