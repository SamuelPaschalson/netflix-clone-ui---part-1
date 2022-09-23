import "./login.scss";
import React from "react";
import Logins from '../../assets/logo.png'
import { Link } from "react-router-dom";
import netfliximg from '../../assets/login.jpg'
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  const signUp = () => {
    history.push("/browser");
  }

  return (
    <div className="login">
      <img src={netfliximg} alt="" />
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={Logins}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button onClick={signUp} className="loginButton">Sign In</button>
          <span>
            New to Netflix? 
            <Link to='register'>
              <b> Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
