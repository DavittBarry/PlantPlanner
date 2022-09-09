// Create variables to store time values
let initiationTime
let refreshTime

// Function which stores time in millis
function getInitationTime() {
  document.getElementById("js-initiation-time").innerHTML=new Date().toLocaleString('en-GB')
  initiationTime = Date.now()
}

// Function which stores time in millis
function getPlantWaterTime() {
  document.getElementById("js-plant-water-time").innerHTML=new Date().toLocaleString('en-GB')
  refreshTime = Date.now()
}

// Function which compares two values against eachother
function compareTime() {
  if (refreshTime > initiationTime) {
    document.getElementById("js-compare-time-result").innerHTML= "KASTELTU" 
  }else {
    document.getElementById("js-compare-time-result").innerHTML= "KASTELTAVA"
  }
}

module.exports.getInitationTime = getInitationTime
module.exports.getPlantWaterTime = getPlantWaterTime
module.exports.compareTime = compareTime
