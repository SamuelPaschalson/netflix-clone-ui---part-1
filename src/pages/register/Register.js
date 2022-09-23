import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import logins from '../../assets/logo.png'
import part1 from '../../assets/part1.png'
import part2 from '../../assets/part2.jpg'
import part3 from '../../assets/part3img.png'
import part4 from '../../assets/part4.png'
import part3vid from '../../assets/part3video.m4v'
import netfliximg from '../../assets/login.jpg'
import box from '../../assets/boxshot.png'
import vids from '../../assets/video-tv-0819.m4v'
import trail1 from '../../assets/The Imperfects _ Official Trailer _ Netflix.mp4'

import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register1">
      <div className="container1">
        <div className="head">
            <img src={logins} alt=""/>
            <Link className="sign" to="login">Sign In</Link>
        </div>
      </div>
      <div className="container">
        <img src={netfliximg} alt="banner" className="fit"/> 
        <div className="box">
          <div className="heading">
            <h2>Unlimited movies, TV shows and more </h2>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          {!email ? (
          <div className="Email">
              <input type="email" ref={emailRef} placeholder="Enter Email" />
              <Link onClick={handleStart}>Get Started </Link>
          </div>
          ) : (
            <div className="Email">
              {/* <input ref={passwordRef} type="password" placeholder="Enter Paasword" /> */}
              <input type="password" placeholder="Enter Paasword" ref={passwordRef} />
              <Link to="browser" onClick={handleFinish}>
                Start
              </Link>
          </div>
          )}
      </div>
      </div>
      <div className="style-card">
        <div className="card-1">
          <div className="desc-1">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.</p>
          </div>
          <img src={part1} alt=""/>
          <video src={vids} playsInline muted autoPlay={true} loop />
        </div>

        <div className="card-2">  
          <div className="img-cont">
            <img src={part2} className='part2' alt="img"/>
            <div className="load-cont">
              <img src={box} alt="" />
              <div className="animation">
                <div className="text">Stranger Things</div>
                <div className="texts">Downloading...</div>
              </div>
              <div className="loads"></div>
            </div>
          </div>
          <div className="desc-2">
            <h1>Download your shows to watch offline.</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
        <div className="card-3">
            <div className="desc-3">
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
          <img src={part3} alt=""/>
          <video src={part3vid} playsInline muted autoPlay={true} loop />

        </div>
        <div className="card-4">
          <img src={part4} alt="img"/>
          <div className="desc-4">
              <h1>Create profiles for kids.</h1>
              <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div> 
    </div>
  );
}
