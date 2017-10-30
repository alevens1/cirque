import React from "react";
// import { ParallaxProvider } from 'react-scroll-parallax';
import Materialize from "materialize-css"
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import "./Home.css";


const Home = () => (



  // <div className="row">
  // <div className="col s6">
  //     <img src = "img/lyra4.png" bottom={0} left={0} height={500} width={800}></img> 
  
  //     </div>
   
  //     <div className="col s6">
  //       <img src = "img/logo.png"></img>
  //       <h5 className="header col s12 light">Savannah's only fully equipped circus studio</h5>
  //       <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Your Circus Experience Today!</a>
  //     </div>

  <div className="body">
      <article>
        <h1>Savannah Cirque <br /> <span>(Made by <a href="http://mattgross.io" target="_blank">Abby Levens</a></span></h1>
      </article>


      <video autoPlay loop id="video-background" muted plays-inline>
        <source src="./img/aerialspider.mp4" type="video/mp4"/>
      </video>
  </div>
          
           
          

);

export default Home;