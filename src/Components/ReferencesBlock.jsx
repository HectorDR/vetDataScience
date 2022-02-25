import React from 'react'

const ReferencesBlock = (props) => {
  return (
    <div className="container bg-light">
        <h2>Referencias</h2>
        <ul>
        {props.references.map(reference => {
            return(
                <li>{reference}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default ReferencesBlock