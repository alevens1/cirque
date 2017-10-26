import React from "react";
import { Link } from "react-router-dom";
import {NavItem, Navbar, Button} from 'react-materialize';
// import Schedule from "../components/Pages/Schedule.js";
// import Acro from "../components/Pages/Schedule/Acro";
// import CircusFitness from "../components/Schedule/CircusFitness";
// import Hammock from "../components/Pages/Schedule/Hammock";
// import Lyra from "../components/Pages/Schedule/Lyra";
// import Pole from "../components/Pages/Schedule/Pole";
// import Silks from "../components/Pages/Schedule/Silks";
// import Yoga from "../components/Pages/Schedule/Yoga";


const NavSched = () => (
<Navbar brand='Savannah Cirque' right>


<Button className={window.location.pathname === "/schedule" ? "active" : ""}> 
  <Link to="/schedule">Master</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/silks" ? "active" : ""}>
                  <Link to="/schedule/silks">Aerial Silks</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/hammock" ? "active" : ""}>
                  <Link to="/schedule/hammock">Aerial Hammocks</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/lyra" ? "active" : ""}>
                  <Link to="/schedule/lyra">Lyra</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/acro" ? "active" : ""}>
                  <Link to="/schedule/acro">Acro</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/yoga" ? "active" : ""}>
                  <Link to="/schedule/yoga">Aerial Yoga</Link>
</Button>}>;

<Button className={window.location.pathname === "/schedule/circusfitness" ? "active" : ""}>
                  <Link to="/schedule/circusfitness">Circus Fitness</Link>
</Button>}>


</Navbar>
);


export default NavSched;
