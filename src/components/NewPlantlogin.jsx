import React from "react";
const { getInitationTime } = require('../routes/timer/timer.js')

function NewPlant() {
  return (
    <div className="introduction NewPlant slideshow-container">
      <div>
          <div className="create-user">
            <div className="d-flex justify-content-center">
              <form className="NewUser">

                <div >
                  <h1>New Plant</h1>
                </div>
                <div >
                  <div className="p-2">
                    <label for="Plantname">Plant name:</label>
                    <div >
                    <input type="text" id="Plantname" name="Plantname" placeholder="Your plant's name..."></input>
                    </div>
                  </div>

                </div>
                <div className="rp-2 p-2">
                  <label for="info">Additional info:</label>
                  <br/>
                  <textarea id="subject" name="subject" placeholder="Write something..."></textarea>
                    
                </div>

                <div className="p-2" >
                  <div>  
                    <label for="Watering cycle">Watering cycle:</label>
                    <br/>
                    <select select id="country" name="country">
                    <option value="week">Once a week</option>
                    <option value="2week">Every two weeks</option>
                    <option value="month">Once a month</option>
                    </select>
                  </div>
                </div>

                <div className="p-2">
                  <label for="plant-watered">Plant has been watered:</label>
                  <br/>
                  <input type="checkbox" id="plant-watered"/>
                  <span id="js-initiation-time"></span>
                </div>      
                <div className="row justify-content-center">
                <input type="submit" value="Submit" onClick={getInitationTime}></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewPlant;
