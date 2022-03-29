import React from 'react'
import { useState } from 'react'
import accordionarrow from "Media/images/accordion_arrow.svg"
import useCollapse from 'react-collapsed'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { HashLink } from '@xzar90/react-router-hash-link'
const ChapterAccordion = (props) => {
    
    const [arrowDown,setArrowDown] = useState(true)
    // hook para manejar el colapso de los sub capitulos
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: false})

  return (
    <div className='chapter_accordion'>
        <div className='chapter_accordion__title'>
        <Link to={props.chapter.link}><h6>{props.chapter.texto}</h6></Link><img src={accordionarrow} className={arrowDown===true?"chapter_accordion__img":"chapter_accordion__img up"}
        {...getToggleProps({onClick: () => setArrowDown(!arrowDown)})}/>
        </div>

        {/* sub capitulos */}
        <ul className='chapter_accordion__subchapters' {...getCollapseProps()}>
        {props.subchapters.map(subchapter => {
            return (
                <li key={nanoid()}><HashLink className='chapter_accordion__subchapters' smooth to={`${props.chapter.link + subchapter.link}`}>{subchapter.texto}</HashLink></li>
            )
        })}
        </ul>
    </div>
  )
}

export default ChapterAccordion