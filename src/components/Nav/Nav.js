import React from "react";
import { Link } from "react-router-dom";
import {Dropdown, NavItem, Navbar, Button} from 'react-materialize';
import Materialize from "materialize-css";
// import '.../src/css/App.css';
import './Nav.css';




const Nav = () => (
<Navbar className= "N/A transparent z-depth-0" brand='Savannah Cirque' right>


<Button className= {window.location.pathname === "/" ? "active" : ""} id="#e53935 red darken-1"> 
  <Link to="/">Home</Link>
</Button>}>



<Button className={window.location.pathname === "/about" ? "active" : ""} id="about">
                  <Link to="/about">About</Link>
</Button>}>


<Dropdown className={"schedules-dropdown"} trigger={<Button>Schedule</Button>}>
    
    <NavItem className={window.location.pathname === "/schedule" ? "active" : ""}>
          <Link to="/schedule">Master</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/silks" ? "active" : ""}>
          <Link to="/schedule/Silks">Aerial Silks</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/hammock" ? "active" : ""}>
          <Link to="/schedule/Hammock">Aerial Hammock</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/lyra" ? "active" : ""}>
          <Link to="./Lyra">Lyra</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/pole" ? "active" : ""}>
          <Link to="./Pole">Pole</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/acro" ? "active" : ""}>
          <Link to="./Acro">Acro</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/yoga" ? "active" : ""}>
          <Link to="./Yoga">Yoga</Link>
    </NavItem>

    <NavItem className={window.location.pathname === "/schedule/circusfitness" ? "active" : ""}>
          <Link to="./CircusFitness">Circus Fitness</Link>
    </NavItem>

</Dropdown>



<Dropdown trigger={<Button>Pricing</Button>}>
    <NavItem href='get-started.html'>Getting started</NavItem>
    <NavItem>one</NavItem>
    <NavItem>two</NavItem>
    <NavItem divider />
    <NavItem>three</NavItem>
</Dropdown>

<Dropdown trigger={<Button>Contact</Button>}>
    <NavItem href='get-started.html'>Getting started</NavItem>
    <NavItem>one</NavItem>
    <NavItem>two</NavItem>
    <NavItem divider />
    <NavItem>three</NavItem>
</Dropdown>


<Button className={window.location.pathname === "/signin" ? "active" : ""}> 
  <Link to="/signin">Sign In</Link>
</Button>}>
<Button className={window.location.pathname === "/signup" ? "active" : ""}> 
  <Link to="/signup">Sign Up</Link>
</Button>}>

</Navbar>




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

