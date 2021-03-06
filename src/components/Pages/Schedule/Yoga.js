import React from "react";
// import { Link, Route } from "react-router-dom";
// import NavSched from "./Schedule/NavSched";
import Materialize from "materialize-css";
import "./Schedule.css";

const Yoga = props => (
  <div className="container">
    <h2 className="master-header">Aerial Yoga Schedule</h2>
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
            <td>5:00-6:00 pm</td>
            <td>Aerial Yoga</td>
            <td>Jenn Doubleday</td>
            <td>Aerial Hammock Area</td>
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
            <td>11:30-12:30 pm</td>
            <td>Aerial Yoga</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammocks Area</td>
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
              <td>11:30-12:30 pm</td>
              <td>Aerial Yoga</td>
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
           
            <tr className="date-header">
                 <strong>Wednesday November 8th, 2017</strong>
                 </tr>
           
            <tr>
              <td>5:00-6:00 pm</td>
              <td>Aerial Yoga</td>
              <td>Jenn Doubleday</td>
              <td>Aerial Hammock Area</td>
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
              <td>11:30-12:30 pm</td>
              <td>Aerial Yoga</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hammocks Area</td>
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

export default Yoga;