import React from 'react'
import BackButton from './BackButton'
const SubChapter = (props) => {
  return (
    <div className="container bg-light">
        {props.children}
        <BackButton/>
    </div>
  )
}

export default SubChapter