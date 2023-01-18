import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Post.css';

const Post = () => {
  const { postSlug } = useParams();
  const [wateringValue, setWateringValue] = useState(1);
  const [fertilizingValue, setFertilizingValue] = useState(1);

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  const wateringTimeScales = {
    1: "Once a week",
    2: "Every 3 days",
    3: "Every other day",
    4: "Every day",
    5: "Multiple times a day"
  }

  const fertilizingTimeScales = {
    1: "Every month",
    2: "Every 2 months",
    3: "Once every 6 month",
    4: "Once a year",
    5: "Once every two years"
  }


  return (
    <div className="post-container rounded" >
      <div className="plant-card watering-card rounded" style={{ backgroundColor: "#70917" }}>
        <div className="info-card p-3" >
          <h5 className="text-center" >Rose</h5>
          <div className="info-card-text p-3 plant-card2 rounded">
            <p>The rose is a type of flowering shrub. Its name comes from the Latin word Rosa. There are over three hundred species and tens of thousands of cultivars. The flowers of the rose grow in many different colors, from the well-known red rose or yellow rose and sometimes white or purple rose.</p>
          </div>
        </div>
        <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="plantImg" className="plant-img" />
        <div className="plant-info ">
          <div className="plant-card2 card-spacing rounded " style={{ backgroundColor: "#70917" }}>
            <h3>Watering</h3>
            <div className="p-3 card-spacing">
              <input type="range" min="1" max="5" value={wateringValue} onChange={(e) => setWateringValue(e.target.value)} />
            </div>
            <div className="watering-status test-dark">
              <p><b>Current watering level: </b></p>
              <p> {wateringTimeScales[wateringValue]}</p>
              <p><b>Last watered:</b></p>
              <p>17.3.2022</p>
            </div>
          </div>
          <div className="plant-card2 card-spacing rounded" style={{ backgroundColor: "#70917" }}>
            <h3>Fertilizing</h3>
            <div className="p-3 card-spacing">
              <input type="range" min="1" max="5" value={fertilizingValue} onChange={(e) => setFertilizingValue(e.target.value)} />
            </div>
            <div className="fertilizing-status">
              <p><b>Current fertilizing level: </b></p>
              <p> {fertilizingTimeScales[fertilizingValue]}</p>
              <p><b>Last fertilized:</b></p><p> 1.3.2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;