import React from 'react'
import { useState } from "react";
import './navbar.scss'
import netflix from '../../../assets/logo.png'
import avatar from '../../../assets/avatar.png'
import { Search, Notifications, ArrowDropDown, ShoppingCart, ArrowDropUp } from '@material-ui/icons'
import { Badge,IconButton } from '@material-ui/core'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navigation headers-container  scrolled" : "navigation headers-container"}>
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={netflix} alt="" />
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                    <span>Browse by Languages</span>
                </div>
                <div className="right" style={{marginLeft: '40px'}}>
                    <Search className='icon'/>
                    <span>Kids</span>
                    <IconButton color="inherit">
                        <Badge badgeContent='1' color="secondary">
                            <Notifications className='icon1' />
                        </Badge>
                    </IconButton>
                    <div className="profile">
                        <img style={{marginLeft: '10px'}} src={avatar} alt="" />
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <ArrowDropUp style={{marginRight: '20px'}} className='icon'/>
                            <div className="opt" style={{marginTop: '-10px', marginRight: '40px'}}>
                                <span>Settings</span>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar