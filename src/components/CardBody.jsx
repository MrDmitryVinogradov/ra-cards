import React from 'react'

function CardBody(props) {
  return (
    <div className='card-body'>
      <h2 className='card-title'> {props.title} </h2>
      <div className='card-text'> {props.body} </div>
    </div>
  )
}

export default CardBody