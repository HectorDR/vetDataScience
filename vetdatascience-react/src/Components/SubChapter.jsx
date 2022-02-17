import React from 'react'
import BackButton from './BackButton'
const SubChapter = (props) => {
  return (
    <div class="container bg-light">
        {props.children}
        <BackButton/>
    </div>
  )
}

export default SubChapter