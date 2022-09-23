import React from 'react'
import './featured.scss'
import background from '../../../assets/background1.png'
import info from '../../../assets/info1.png'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img className='background' src={background} alt="" />
        <div className="shadow"></div>
        <div className="info">
            <img src={info} alt="" />
            {/* <span className="desc">
            Based on historical events, this series dramatizes the story of Queen Elizabeth II and the political and personal events that have shaped her reign.
            </span> */}
            <div className="buttons">
            <button className="play">
                <PlayArrow className='arrow' />
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined className='arrow1'/>
                <span>More Info</span>
            </button>
            </div>
        </div>
            <div className="eplus">
                <span>18+</span>
            </div>
    </div>
  )
}

export default Featured