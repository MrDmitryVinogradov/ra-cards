import React from 'react'

function Card(props) {
  return (
    <div className='card-body'>
      {props.children}
    </div >
  )
}

export default Card