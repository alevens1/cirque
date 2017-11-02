import React from "react";
import { Link } from "react-router-dom";
import {Dropdown, NavItem, Navbar, Button} from 'react-materialize';
import Materialize from "materialize-css";
// import '.../src/css/App.css';
import './Nav.css';




const Nav = () => (


<div className="row">
      <div className="col-md-12">
            <div className="nav-wrap">
<Navbar className= "N/A transparent z-depth-0" brand='' right id="nav-buttons">



<Button className= {window.location.pathname === "/" ? "active" : ""} className="home" id="home" > 
  <Link to="/"> <span class="black-text ">Home</span></Link>
</Button>}>



<Button className={window.location.pathname === "/about" ? "active" : ""} className="about" id="about">
                  <Link to="/about"><span class="black-text ">About</span></Link>
</Button>}>



<Dropdown className={"schedules-dropdown"} trigger={<Button className="drop-button"><span class="black-text">Schedule</span></Button>}>
    
    <NavItem className={window.location.pathname === "/schedule" ? "active" : ""}id="master">
          <Link to="/schedule"><span class="black-text ">All Classes</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/silks" ? "active" : ""}id="silks">
          <Link to="/schedule/silks"><span class="black-text ">Aerial Silks</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/hammock" ? "active" : ""}id="hammock">
          <Link to="/schedule/hammock"><span class="black-text ">Aerial Hammock</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/lyra" ? "active" : ""}id="lyra">
          <Link to="/schedule/lyra"><span class="black-text ">Lyra</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/pole" ? "active" : ""}id="pole">
          <Link to="/schedule/pole"><span class="black-text ">Pole</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/acro" ? "active" : ""}id="acro">
          <Link to="/schedule/acro"><span class="black-text ">Acro</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/yoga" ? "active" : ""}id="yoga">
          <Link to="/schedule/yoga"><span class="black-text ">Yoga</span></Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/circusfitness" ? "active" : ""}id="fitness">
          <Link to="/schedule/circusfitness"><span class="black-text ">Circus Fitness</span></Link>
    </NavItem>

</Dropdown>

     


<Dropdown className="price-dropdown" trigger={<Button className="drop-button"><span class="black-text ">Pricing</span></Button>}>
      <NavItem className={window.location.pathname === "/schedule/memberships" ? "active" : ""}id="pricing">
             <Link to="./pricing"><span class="black-text ">Memberships</span></Link>
      </NavItem>

      <NavItem className={window.location.pathname === "/schedule/privates" ? "active" : ""}id="privates">
            <Link to="./privates"><span class="black-text ">Private Classes</span></Link>
      </NavItem>
</Dropdown>


<Button className={window.location.pathname === "/contact" ? "active" : ""} className="contact" id="contact">
<Link to="/contact"><span class="black-text ">Contact</span></Link>
</Button>}>


<Button className={window.location.pathname === "/signin" ? "active" : ""}className="signin" id="signin"> 
  <Link to="/signin"><span class="black-text ">Sign In</span></Link>
</Button>}>
<Button className={window.location.pathname === "/signup" ? "active" : ""}className="signup" id="signup"> 
  <Link to="/signup"><span class="black-text ">Sign Up</span></Link>
</Button>}>

</Navbar>
</div>
</div>
</div>




  // <nav className="navbar navbar-default">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button
  //         type="button"
  //         className="navbar-toggle collapsed"
  //         data-toggle="collapse"
  //         data-target="#navbar"
  //         aria-expanded="false"
  //         aria-controls="navbar"
  //       >
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar" />
  //         <span className="icon-bar" />
  //         <span className="icon-bar" />
  //       </button>
  //       <a className="navbar-brand" href="/">
  //        Savannah Cirque
  //       </a>
  //       <div className="navbar-form navbar-left">
  //         <button type="home" className="btn btn-default">
  //           <button className={window.location.pathname === "/" ? "active" : ""}>
  //              <Link to="/">Home</Link>
  //            </button>
  //            <button className={window.location.pathname === "/about" ? "active" : ""}>
  //                  <Link to="/about">About</Link>
  //            </button>
  //            <button className={window.location.pathname === "/schedule" ? "active" : ""}>
  //                 <Link to="/schedule">Schedule</Link>
  //            </button>
  //            <button className={window.location.pathname === "/schedule" ? "active" : ""}>
  //                 <Link to="/pricing">Pricing</Link>
  //            </button>
  //           <button className={window.location.pathname === "/contact" ? "active" : ""}>
  //                 <Link to="/contact">Contact</Link>
  //           </button>
  //           <button className={window.location.pathname === "/contact/learn" ? "active" : ""}>
  //               <Link to="/contact/learn">Learn</Link>
  //           </button>
  //         </button>


  //       </div>
  //     </div>
  //   </div>
  // </nav>
);




export default Nav;

