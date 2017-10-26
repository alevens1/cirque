import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = () => (
 
        <ParallaxProvider>
           <div class="section no-pad-bot">
              <div class="container">
                <h1 class="header center teal-text text-lighten-2">Savannah Cirque</h1>
                <div class="row center">
                <h5 class="header col s12 light">Savannah's only fully equipped circus studio</h5>
                </div>
                <div class="row center">
                  <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light teal lighten-1">Book Your Circus Experience Today!</a>
                </div>
                </div>
              </div>
              
        

        </ParallaxProvider>
    );








export default Home;
