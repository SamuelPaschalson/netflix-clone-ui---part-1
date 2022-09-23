import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import TenItem from '../tenItem/TenItem'
import './Ten.scss'
import { useRef, useState } from "react";
import '../../../akiraClient.521f4d0e1e1bf34ee682.css'
import { films } from '../tenItem1/tendata'
const Ten = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 200;
        let distance1 = listRef.current.getBoundingClientRect().x - 650;
        if (direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${1470 + distance1}px)`;
        }
        if (direction === "right" && slideNumber < 1) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-1720 + distance}px)`;
          console.log(listRef.current.style.transform = `translateX(${-720 + distance}px)`);
        }
      };
  return (
    <div className='Ten'>
        <span className="TenTitle">Top 10 Movies in the World Today</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
            <div className="container" ref={listRef}>
                {films.map((film, index) =>
                <TenItem film={film}/>
              )}
            </div>
            <ArrowForwardIosOutlined
                className="sliderArrow right"
                onClick={() => handleClick("right")} />
        </div>
    </div>
  )
}

export default Ten