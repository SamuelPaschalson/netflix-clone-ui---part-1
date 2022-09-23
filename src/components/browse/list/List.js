import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import ListItem from '../listitem/ListItem'
import './list.scss'
import { useRef, useState } from "react";
import '../../../akiraClient.521f4d0e1e1bf34ee682.css'
import { films } from '../listItem/listdata'

const List = () => {
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
    <div className='list'>
        <span className="listTitle">Continue Watching for Samuel</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
            <div className="container" ref={listRef}>
            {films.map((film, index) =>
                <ListItem film={film}/>
              )}
            </div>
            <ArrowForwardIosOutlined
                className="sliderArrow right"
                onClick={() => handleClick("right")} />
        </div>
    </div>
  )
}

export default List