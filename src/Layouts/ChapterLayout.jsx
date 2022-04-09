import React from 'react'
import ChapterHead from 'Components/ChapterHead'
import LateralMenu from 'Components/LateralMenu'
import { scrollContext } from './MainLayout'
import { useContext } from 'react'
const ChapterLayout = (props) => {
  
  return (
    <div id="home">
        <ChapterHead
          titulo={props.chapter_title}
          background={props.chapter_image}
        />
         <main className="inside_layout">
          <LateralMenu/>
          <div className="main_content">
              {props.children}
          </div>
          </main>
    </div>
  )
}

export default ChapterLayout