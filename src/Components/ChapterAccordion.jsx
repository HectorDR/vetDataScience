import React from 'react'
import { useState } from 'react'
import accordionarrow from "Media/images/accordion_arrow.svg"
import useCollapse from 'react-collapsed'
import { nanoid } from 'nanoid'
const ChapterAccordion = (props) => {
    
    const [arrowDown,setArrowDown] = useState(true)
    // hook para manejar el colapso de los sub capitulos
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: false})

  return (
    <div className='chapter_accordion' onClick={() => setArrowDown(!arrowDown)}>
        <div className='chapter_accordion__title'{...getToggleProps()}>
        <h6>{props.title}</h6><img src={accordionarrow} className={arrowDown===true?"chapter_accordion__img":"chapter_accordion__img up"}/>
        </div>

        {/* sub capitulos */}
        <ul className='chapter_accordion__subchapters' {...getCollapseProps()}>
        {props.subchapters.map(subchapter => {
            return (
                <li key={nanoid()}>{subchapter}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default ChapterAccordion