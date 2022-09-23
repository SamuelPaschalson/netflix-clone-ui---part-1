import { Add, PlayArrow, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './recentItem.scss'

export default function RecentItem({film}) {
  return (
    <div className='recentItem'>
      <img src={film.image} alt="" />
    </div>
  )
}
