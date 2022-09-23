import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import RecentItem from '../recentItem/RecentItem'
import './Recent.scss'
import { useRef, useState } from "react";
import '../../../akiraClient.521f4d0e1e1bf34ee682.css'
import { films } from '../recentItem/recentdata'

const Recent = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 40;
        let distance1 = listRef.current.getBoundingClientRect().x - 55;
        if (direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${240 + distance1}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-240 + distance}px)`;
        }
      };
  return (
    <div className='recent'>
        <span className="recentTitle">Recently Added</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
            <div className="container" ref={listRef}>
              {films.map((film, index) =>
                <RecentItem film={film}/>
              )}
            </div>
            <ArrowForwardIosOutlined
                className="sliderArrow right"
                onClick={() => handleClick("right")} />
        </div>
    </div>
  )
}

export default Recent