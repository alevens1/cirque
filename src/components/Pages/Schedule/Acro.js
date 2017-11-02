import React from "react";
// import NavSched from "./Schedule/NavSched";
import Materialize from "materialize-css";
import "./Schedule.css";

const Acro = props => (
  <div className="container">
    <h2 className="master-header">Acro Schedule</h2>
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

              <strong>Thursday November 2nd, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
          <tr className="date-header">
           
              <strong>Friday November 3rd, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
         
           
          
          <tr className="date-header">
               <strong>Sunday November 5th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
          <tr className="date-header">
           <strong>Monday November 6th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
          </tr>
        

          <tr className="date-header">
               <strong>Tuesday November 7th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
            
          
              
              
            <tr className="date-header">
                <strong>Thursday November 9th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
            
            <tr className="date-header">
                 <strong>Friday November 10th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
           
              
            
            <tr className="date-header">
                 <strong>Sunday November 12th, 2017</strong>
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
              <a href="https://itunes.apple.com/us/app/mindbody-book-fitness-classes/id689501356" id="save-link" class="btn-large waves-effect waves-light red">Save for Later</a>
            </div>
            </td>
            </tr>
          </tbody>
      </table>
    </div>
    );

export default Acro;