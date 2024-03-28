import React from 'react'
import "./greeting.scss"

function Greeting(props) {
  return (
    <div className='Greeting'>
      {props.message}
      <h1>{props.firstName}{props.lastName}</h1>
    </div>
  )
}

export default Greeting