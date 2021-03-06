import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Parallax } from 'react-scroll-parallax';
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Schedule from "./components/Pages/Schedule/Schedule";
import Memberships from "./components/Pages/Pricing/Memberships";
// import Privates from "./components/Pages/Pricing/Privates";

import Contact from "./components/Pages/Contact";
import Acro from "./components/Pages/Schedule/Acro";
import CircusFitness from "./components/Pages/Schedule/CircusFitness";
import Hammock from "./components/Pages/Schedule/Hammock";
import Lyra from "./components/Pages/Schedule/Lyra";
import Pole from "./components/Pages/Schedule/Pole";
import Silks from "./components/Pages/Schedule/Silks";
import Yoga from "./components/Pages/Schedule/Yoga";
import SignIn from "./components/Pages/SignIn-SignUp/SignIn";
import SignUp from "./components/Pages/SignIn-SignUp/SignUp";
import API from "./util/API";

// import './App.css';



const App = () => (
  <div className="router">
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/schedule/acro" component={Acro} />
        <Route exact path="/schedule/circusfitness" component={CircusFitness} />
        <Route exact path="/schedule/Hammock" component={Hammock} />
        <Route exact path="/schedule/lyra" component={Lyra} />
        <Route exact path="/schedule/pole" component={Pole} />
        <Route exact path="/schedule/silks" component={Silks} />
        <Route exact path="/schedule/yoga" component={Yoga} />
        <Route exact path="/pricing" component={Memberships} />
        {/* <Route exact path="/pricing" component={Privates} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

      </div>
    </Router>
  </div>

  /* <div className="parallax-container">
      <Parallax
      className="custom-class"
      offsetYMax={20}
      offsetYMin={-20}
      slowerScrollRate
      tag="figure"
      >
      <img src="./Images/lyra4.png" alt="aerial lyra dancer in air" />
      </Parallax>
  </div> */

);
export default App;
