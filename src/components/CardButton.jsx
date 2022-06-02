import React from 'react'

function CardButton(props) {
  return (
    <button className='btn btn-primary'>
      {props.button}
    </button>
  )
}
export default CardButton