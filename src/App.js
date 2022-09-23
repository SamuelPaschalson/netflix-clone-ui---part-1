import React from "react";
import "./app.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./components/landing/profile/Profile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route  exact path='/'>
          <Register/>
        </Route>
        <Route  exact path='/browser'>
          <Profile/>
        </Route>
        <Route  exact path='/browse'>
          <Home/>
        </Route>
        <Route  exact path='/login'>
          <Login/>
        </Route>
        <Route  exact path='/register'>
          <Register/>
        </Route>
      </Switch>
    </Router>
    );
};

export default App;
