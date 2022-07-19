import React from 'react'
import { nanoid } from 'nanoid'
const ReferencesBlock = (props) => {
  return (
    <div className="container bg-light">
        <h2>Referencias</h2>
        <ul>
        {props.references.map(reference => {
            return(
                <li key={nanoid()}>{reference}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default ReferencesBlock