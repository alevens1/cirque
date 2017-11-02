import React from "react";
// import { Link, Route } from "react-router-dom";
// import NavSched from "./Schedule/NavSched";
import Materialize from "materialize-css";
import "./Schedule.css";

const Pole = props => (
  <div className="container">
    <h2 className="master-header">Pole Schedule</h2>
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
            <td>6:00-7:00 pm</td>
            <td>Open Pole</td>
            <td>Abby Levens</td>
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
            <td>7:00-8:00 pm</td>
            <td>Beginning Pole Dance</td>
            <td>Abby Levens</td>
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
            <td>8:00-9:00 pm</td>
            <td>Intermediate/Advanced Pole Fitness</td>
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
         
          <tr className="date-header">

              <strong>Thursday November 2nd, 2017</strong>
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
            <td>11:30-12:30 pm</td>
            <td>Beginning Pole Dance</td>
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
            <td>7:30-8:30 pm</td>
            <td>Frisky Friday Exotic Pole Dance</td>
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
         
          <tr className="date-header">
         
             <strong>Saturday November 4th, 2017</strong>
        </tr>
           
          <tr>
            <td>10:30-11:30 am</td>
            <td>Stiletto Fusion Saturday</td>
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
            <td>3:15-10:00pm</td>
            <td>Private Pole Lessons</td>
            <td>Sabrina Madsen, Jenni Ashley, Abby Levens</td>
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
               <strong>Sunday November 5th, 2017</strong>
          </tr>
          <tr>
            <td>2:00-3:00 pm</td>
            <td>Beginning Pole Dance</td>
            <td>Abby Levens</td>
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
            <td>3:00-4:00 pm</td>
            <td>Open Pole</td>
            <td>Abby Levens</td>
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
           <strong>Monday November 6th, 2017</strong>
           </tr>
           
          <tr>
            <td>10:30-11:30 am</td>
            <td>Beginning Pole Dance</td>
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
            <td>8:00-9:00 pm</td>
            <td>Intermediate/Advanced Spinning Pole Fitness</td>
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
          

          <tr className="date-header">
               <strong>Tuesday November 7th, 2017</strong>
               </tr>
            
            <tr>
              <td>5:00-6:00 pm</td>
              <td>Beginning Pole Dance</td>
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
              <td>6:00-7:00 pm</td>
              <td>Open Pole</td>
              <td>Abby Levens</td>
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
              <td>7:00-8:00 pm</td>
              <td>Beginning Pole Dance</td>
              <td>Abby Levens</td>
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
              <td>8:00-9:00 pm</td>
              <td>Intermediate/Advanced Pole Fitness</td>
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
            <tr className="date-header">
                <strong>Thursday November 9th, 2017</strong>
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
              <td>11:30-12:30 pm</td>
              <td>Beginning Pole Dance</td>
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
              <td>7:30-8:30 pm</td>
              <td>Frisky Friday Exotic Pole Dance</td>
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
           
            <tr className="date-header">
                 <strong>Saturday November 11th, 2017</strong>
                 </tr>
             
            <tr>
              <td>10:30-11:30 am</td>
              <td>Stiletto Fusion Saturday</td>
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
              <td>3:15-10:00pm</td>
              <td>Private Pole Lessons</td>
              <td>Sabrina Madsen, Jenni Ashley, Abby Levens</td>
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
                 <strong>Sunday November 12th, 2017</strong>
                 </tr>
              <tr>
              <td>2:00-3:00 pm</td>
              <td>Beginning Pole Dance</td>
              <td>Abby Levens</td>
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
              <td>3:00-4:00 pm</td>
              <td>Open Pole</td>
              <td>Abby Levens</td>
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
          
          </tbody>
      </table>
    </div>
    );

export default Pole;