import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const ImageCorousel = (props) => {
  return (
    <div className='Image_Carousel'>
    <Carousel>
        {props.images.map(image =>{
            return(
        <div>
            <img src={image.image}/>
            <p className="legend">{image.texto}</p>
        </div>
            )
        })}
    </Carousel>
    </div>
  )
}

export default ImageCorousel