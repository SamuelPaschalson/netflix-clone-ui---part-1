import React from 'react'
import './listItem.scss'

export default function ListItem({film}) {
  return (
    <div className='list-data'>
      <div className='listItem'>
      <img src={film.image} alt="" />
      </div>
      <div className="progress">
        <span className="bar">
        {film.span}
        </span>
      </div>
    </div>
  )
}
