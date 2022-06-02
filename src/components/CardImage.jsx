import React from 'react'

function CardImage(props) {
  return (
    <img className='card-img-top' alt={props.title} src={props.img}>
    </img>
  )
}

export default CardImage
