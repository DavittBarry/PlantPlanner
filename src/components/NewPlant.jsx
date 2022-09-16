import React from "react";
const { getInitationTime } = require('../routes/timer/timer.js')

function NewPlant() {
  return (
    <div className="NewPlant">
      <div className="home">
          <div className="create-user">
            <div className="d-flex justify-content-center">
              <form className="NewUser">

                <div className="row justify-content-center">
                  <h1>New Plant</h1>
                </div>

                <div className="d-flex row justify-content-space-between">
                  <div className="col">
                    <label for="Plantname">Plant name:</label>
                    <input type="text" id="Plantname" name="Plantname" placeholder="Your plant's name..."></input>
                  </div>

                </div>
                <div className="row">
                  <label for="info">Additional info:</label>
                  <textarea id="subject" name="subject" placeholder="Write something..."></textarea>
                    
                </div>

                <div className="row" >
                  <div class="row-10">  
                    <label for="Watering cycle">Watering cycle:</label>
                  
                    <select select id="country" name="country">
                    <option value="week">Once a week</option>
                    <option value="2week">Every two weeks</option>
                    <option value="month">Once a month</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="plant-watered">Plant has been watered</label>
                  <input type="checkbox" id="plant-watered"/>
                </div>

                <div className="row">
                  <p>Plant watered: <span id="js-initiation-time"></span></p>
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
