import React from "react";
// import { Link, Route } from "react-router-dom";
// import NavSched from "./Schedule/NavSched";
import Materialize from "materialize-css";
import "./Schedule.css";

const CircusFitness = props => (
  <div className="container">
    <h2 className="master-header">Circus Fitness Schedule</h2>
      <table class="responsive-table highlight">
        <thead>
          <tr>
            <th>Start Time</th>
            <th>Classes</th>
            <th>Teacher</th>
            <th>Room</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="date-header">
            <td>
               <strong>Wednesday November 1st, 2017</strong>
            </td>
        </tr>
        
          <tr>
            <td>10:30-11:30 am</td>
            <td>Pole Strength Moves for Beginners</td>
            <td>Jenni Ashley</td>
            <td>FCF Pole Room</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:30-12:00 pm</td>
            <td>Step Aerobics</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>12:00-12:30 pm</td>
            <td>Awesome Abs</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
          <tr>
            <td>7:15-8:00 pm</td>
            <td>Kickboxing</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>8:00-8:45 pm</td>
            <td>Booty Blaster</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr className="date-header">

              <strong>Thursday November 2nd, 2017</strong>
        </tr>
       
          <tr>
            <td>10:30-11:15 am</td>
            <td>Booty Blaster</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:15-12:00 pm</td>
            <td>Kickboxing</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
          <tr>
            <td>12:00-12:30 pm</td>
            <td>Awesome Abs</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
        
          <tr>
            <td>7:00-7:30 pm</td>
            <td>Circus Fitness</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
          <tr>
            <td>8:00-9:00 pm</td>
            <td>Pole Strength Moves for Beginners</td>
            <td>Tyler Routley</td>
            <td>FCF Pole Room</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr className="date-header">
           
              <strong>Friday November 3rd, 2017</strong>
            </tr>
           
          <tr>
            <td>11:15-12:00 pm</td>
            <td>Kickboxing</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>12:00-12:30 pm</td>
            <td>Awesome Abs</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>12:30-1:00 pm</td>
            <td>Gymnastics Fitness</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
          <tr>
            <td>5:00-5:30pm</td>
            <td>Circus Fitness</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>7:30-8:30 pm</td>
            <td>Cirque Creature Flow</td>
            <td>Chris Kubick</td>
            <td></td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
        
         
          <tr className="date-header">
           <strong>Monday November 6th, 2017</strong>
           </tr>
           
          <tr>
            <td>10:30-11:30 am</td>
            <td>Gymnastics Fitness</td>
            <td>Carly Scorla</td>
            <td>Silk Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>12:30-1:00 pm</td>
            <td>Awesome Abs</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>4:00-5:00 pm</td>
            <td>Youth Circus Pole Fitness</td>
            <td>Sabrina Madsen</td>
            <td>FCF Pole Room</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>6:00-6:30 pm</td>
            <td>Circus Fitness</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>7:00-7:30 pm</td>
            <td>Step Aerobics</td>
            <td>Sabrina Madsen</td>
            <td>Silk Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>7:30-8:00 pm</td>
            <td>Awesome Abs</td>
            <td>Sabrina Madsen</td>
            <td>Silk Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>8:00-8:45 pm</td>
            <td>Kickboxing</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>

          <tr className="date-header">
               <strong>Tuesday November 7th, 2017</strong>
               </tr>
            
          <tr>
            <td>10:30-11:15 am</td>
            <td>Kickboxing</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:15-12:00 pm</td>
            <td>Booty Blaster</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          
            
            <tr>
              <td>12:00-12:30 pm</td>
              <td>Awesome Abs</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
            <tr>
              <td>7:30-8:00 pm</td>
              <td>Circus Fitness</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>8:00-9:00 pm</td>
              <td>Pole Strength Moves for Beginners</td>
              <td>Tyler Routley</td>
              <td>FCF Pole Room</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                 <strong>Wednesday November 8th, 2017</strong>
                 </tr>
             
            <tr>
              <td>10:30-11:30 am</td>
              <td>Pole Strength Moves for Beginners</td>
              <td>Jenni Ashley</td>
              <td>FCF Pole Room</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>11:30-12:00 pm</td>
              <td>Step Aerobics</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>12:00-12:30 pm</td>
              <td>Awesome Abs</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr>
              <td>7:15-8:00 pm</td>
              <td>Kickboxing</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>8:00-8:45 pm</td>
              <td>Booty Blaster</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
            <tr className="date-header">
                <strong>Thursday November 9th, 2017</strong>
                </tr>
             
            <tr>
              <td>10:30-11:15 am</td>
              <td>Booty Blaster</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>11:15-12:00 pm</td>
              <td>Kickboxing</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr>
              <td>12:00-12:30 pm</td>
              <td>Awesome Abs</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
            <tr>
              <td>7:00-7:30 pm</td>
              <td>Circus Fitness</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr>
              <td>8:00-9:00 pm</td>
              <td>Pole Strength Moves for Beginners</td>
              <td>Tyler Routley</td>
              <td>FCF Pole Room</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                 <strong>Friday November 10th, 2017</strong>
                 </tr>
             
            <tr>
              <td>11:15-12:00 pm</td>
              <td>Kickboxing</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
            <tr>
              <td>12:00-12:30 pm</td>
              <td>Awesome Abs</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>12:30-1:00 pm</td>
              <td>Gymnastics Fitness</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr>
              <td>5:00-5:30pm</td>
              <td>Circus Fitness</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr>
              <td>7:30-8:30 pm</td>
              <td>Cirque Creature Flow</td>
              <td>Chris Kubick</td>
              <td></td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
           
          </tbody>
      </table>
    </div>
    );

export default CircusFitness;