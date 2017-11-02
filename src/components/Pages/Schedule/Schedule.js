import React from "react";
import { Link, Route } from "react-router-dom";
// import NavSched from "./Schedule/NavSched";
import Materialize from "materialize-css";
import "./Schedule.css";

const Schedule = props => (
  <div className="container">
    <h2 className="master-header">Master Schedule</h2>
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
            <td>Aerial Silks</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>10:30-11:30 am</td>
            <td>Pole Strength Moves for Beginners</td>
            <td>Jenni Ashley</td>
            <td>FCF Pole Room</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" target="_blank" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>4:00-5:00 pm</td>
            <td>Youth Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammmock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:00-7:00 pm</td>
            <td>Aerial Hoop/Lyra</td>
            <td>Morgan Anderson</td>
            <td>Lyra/Hoop Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:00-7:00 pm</td>
            <td>Youth Aerial Silks</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:00-8:00 pm</td>
            <td>Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:00-8:00 pm</td>
            <td>Aerial Silks</td>
            <td>Morgna Anderson</td>
            <td>Aerial Silks Are</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
         
          <tr className="date-header">

              <strong>Thursday November 2nd, 2017</strong>
        </tr>
        <tr>
            <td>10:30-11:30 am</td>
            <td>Aerial Hoop/Lyra</td>
            <td>Sabrina Madsen</td>
            <td>Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>12:30-1:00 pm</td>
            <td>Everything Handstands</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Are</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>4:00-5:00 pm</td>
            <td>Aerial Silks</td>
            <td>Morgan Anderson</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>5:00-6:00 pm</td>
            <td>Aerial Hammock</td>
            <td>Morgan Anderson</td>
            <td>Aerial Hammocks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:00-7:00 pm</td>
            <td>Solo/Acro Handbalancing</td>
            <td>Tyler Routley and Morgan Anderson</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:30-8:00 pm</td>
            <td>Everything Handstands</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr className="date-header">
           
              <strong>Friday November 3rd, 2017</strong>
            </tr>
            <tr>
            
            <td>10:30-11:30 am</td>
            <td>Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammocks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>

          <tr>
            <td>10:30-11:15 pm</td>
            <td>Master Bends Flexibility</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>3:30-4:30 pm</td>
            <td>Youth Aerial Hoop/Lyra & Static Trapeze</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>5:30-6:30 pm</td>
            <td>Aerial Silks</td>
            <td>Chris Kubick</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>5:30-6:00 pm</td>
            <td>Everything Handstands</td>
            <td>Tyler Routley</td>
            <td>Aerial Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>5:30-6:30 pm</td>
            <td>Youth Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:30-7:30 pm</td>
            <td>Partner/Group Cirque Acro</td>
            <td>Sabrina Madsen, Tyler Routley, Chris Kubick</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:30-8:30 pm</td>
            <td>Solo Acro/Handbalancing</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr className="date-header">
         
             <strong>Saturday November 4th, 2017</strong>
        </tr>
            <tr>
          
            <td>10:30-11:30 am</td>
            <td>Aerial Hoop/Lyra</td>
            <td>Morgan Anderson</td>
            <td>Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>10:30-11:30 am</td>
            <td>Youth Aerial Silks</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:30-12:30 pm</td>
            <td>Aerial Silks</td>
            <td>Morgan Anderson</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>12:30-1:30 pm</td>
            <td>Aerial Hammock</td>
            <td>Morgan Anderson</td>
            <td>Aerial Hammocks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>3:15-10:00pm</td>
            <td>Private Pole Lessons</td>
            <td>Abby Levens and Sabrina Madsen</td>
            <td>FCF Pole Room</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>4:00-5:00 pm</td>
            <td>Master Bends Flexibility</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr className="date-header">
           <strong>Monday November 6th, 2017</strong>
           </tr>
            <tr>
            <td>10:30-11:30 am</td>
            <td>Aerial Silks</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:00-11:30am</td>
            <td>Everything Handstands</td>
            <td>Carly Scorla</td>
            <td>Silk Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>11:30-12:30 pm</td>
            <td>Aerial Hoop/Lyra and Trapeze</td>
            <td>Sabrina Madsen</td>
            <td>Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>5:00-6:00 pm</td>
            <td>Solo Acro-Handbalancing</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:00-7:00 pm</td>
            <td>Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Silk Hammock Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:00-7:00 pm</td>
            <td>Aerial Silks</td>
            <td>Chris Kubrick</td>
            <td>Hoop/Lyra Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>6:30-7:00 pm</td>
            <td>Everything Handstands</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:00-8:00 pm</td>
            <td>Solo Acro/Handbalancing</td>
            <td>Tyler Routley</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>
          <tr>
            <td>7:15-8:00 pm</td>
            <td>Master Bends Flexibility</td>
            <td>Demark Manigo</td>
            <td>Aerial Silks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
          </tr>

          <tr className="date-header">
               <strong>Tuesday November 7th, 2017</strong>
               </tr>
            <tr>
            <td>10:30-11:30 am</td>
            <td>Aerial Hammock</td>
            <td>Sabrina Madsen</td>
            <td>Aerial Hammocks Area</td>
            <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>12:30-1:00 pm</td>
              <td>Everything Handstands</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>3:00-4:00 pm</td>
              <td>Aerial Hoop/Lyra</td>
              <td>Jenn Doubleday</td>
              <td>Hoop/Lyra Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>4:00-5:00 pm</td>
              <td>Aerial Silks</td>
              <td>Jenn Doubleday</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>5:00-6:00 pm</td>
              <td>Aerial Silks</td>
              <td>Jenn Doubleday</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>Aerial Silks</td>
              <td>Morgan Anderson</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>Solo Acro/Handbalancing</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>7:00-8:00 pm</td>
              <td>Aerial Hammock</td>
              <td>Morgan Anderson</td>
              <td>Aerial Hammock Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                 <strong>Wednesday November 8th, 2017</strong>
                 </tr>
              <tr>
              <td>10:30-11:30 am</td>
              <td>Aerial Silks</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>4:00-5:00 pm</td>
              <td>Youth Aerial Hammock</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hammmock Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>Aerial Hoop/Lyra</td>
              <td>Morgan Anderson</td>
              <td>Lyra/Hoop Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>Youth Aerial Silks</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>7:00-8:00 pm</td>
              <td>Aerial Hammock</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hammock Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>7:00-8:00 pm</td>
              <td>Aerial Silks</td>
              <td>Morgna Anderson</td>
              <td>Aerial Silks Are</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                <strong>Thursday November 9th, 2017</strong>
                </tr>
              <tr>
              <td>10:30-11:30 am</td>
              <td>Aerial Hoop/Lyra</td>
              <td>Sabrina Madsen</td>
              <td>Hoop/Lyra Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>12:30-1:00 pm</td>
              <td>Everything Handstands</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Are</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>4:00-5:00 pm</td>
              <td>Aerial Silks</td>
              <td>Morgan Anderson</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>5:00-6:00 pm</td>
              <td>Aerial Hammock</td>
              <td>Morgan Anderson</td>
              <td>Aerial Hammocks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>Solo/Acro Handbalancing</td>
              <td>Tyler Routley and Morgan Anderson</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>7:30-8:00 pm</td>
              <td>Everything Handstands</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                 <strong>Friday November 10th, 2017</strong>
                 </tr>
              <tr>
              <td>10:30-11:30 am</td>
              <td>Aerial Hammock</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hammocks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>

            <tr>
              <td>10:30-11:15 pm</td>
              <td>Master Bends Flexibility</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>3:30-4:30 pm</td>
              <td>Youth Aerial Hoop/Lyra & Static Trapeze</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hoop/Lyra Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>5:30-6:30 pm</td>
              <td>Aerial Silks</td>
              <td>Chris Kubick</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>5:30-6:00 pm</td>
              <td>Everything Handstands</td>
              <td>Tyler Routley</td>
              <td>Aerial Hoop/Lyra Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>5:30-6:30 pm</td>
              <td>Youth Aerial Hammock</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Hammock Area</td>  <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>6:30-7:30 pm</td>
              <td>Partner/Group Cirque Acro</td>
              <td>Sabrina Madsen, Tyler Routley, Chris Kubick</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>7:30-8:30 pm</td>
              <td>Solo Acro/Handbalancing</td>
              <td>Tyler Routley</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr className="date-header">
                 <strong>Saturday November 11th, 2017</strong>
                 </tr>
              <tr>
              <td>10:30-11:30 am</td>
              <td>Aerial Hoop/Lyra</td>
              <td>Morgan Anderson</td>
              <td>Hoop/Lyra Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>10:30-11:30 am</td>
              <td>Youth Aerial Silks</td>
              <td>Sabrina Madsen</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>11:30-12:30 pm</td>
              <td>Aerial Silks</td>
              <td>Morgan Anderson</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>12:30-1:30 pm</td>
              <td>Aerial Hammock</td>
              <td>Morgan Anderson</td>
              <td>Aerial Hammocks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>3:15-10:00pm</td>
              <td>Private Pole Lessons</td>
              <td>Abby Levens and Sabrina Madsen</td>
              <td>FCF Pole Room</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
            <tr>
              <td>4:00-5:00 pm</td>
              <td>Master Bends Flexibility</td>
              <td>Demark Manigo</td>
              <td>Aerial Silks Area</td>
              <td>
            <div className="col s1">
              <a href="https://clients.mindbodyonline.com/classic/admmainclass?studioid=113289&tg=28&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=10%2f30%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&tabID=7#an2" id="mind-body-link" class="btn-large waves-effect waves-light red">Book Now</a>
              </div>
            </td>
            <td>
            <div className="col s1">
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="mind-body-link" class="btn-large waves-effect waves-light red">Save</a>
            </div>
            </td>
            </tr>
          </tbody>
      </table>
    </div>
    );

export default Schedule;