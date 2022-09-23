import React from 'react'
import './tenItem.scss'
export default function TenItem({film}) {
  return (
    <div className='topten'>
      {film.svg}
      <div className='tenItem'>
        <img src={film.image} alt="" />
      </div>
    </div>
  )
}
