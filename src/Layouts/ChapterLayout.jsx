import React from 'react'
import ChapterHead from 'Components/ChapterHead'
import LateralMenu from 'Components/LateralMenu'
import { scrollContext } from './MainLayout'
import { useContext } from 'react'
const ChapterLayout = (props) => {
  
  const scrollPosition = useContext(scrollContext)
  return (
    <div id="home">
        <ChapterHead
          titulo={props.chapter_title}
          background={props.chapter_image}
        />
         <main className="inside_layout">
          {scrollPosition >500?<LateralMenu/>:null}
          <div className="main_content">
              {props.children}
          </div>
          </main>
    </div>
  )
}

export default ChapterLayout