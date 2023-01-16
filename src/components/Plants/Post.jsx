import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Post.css';

const Post = () => {
  const { postSlug } = useParams();
  const [wateringValue, setWateringValue] = useState(0);
  const [fertilizingValue, setFertilizingValue] = useState(0);

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
    1: "Once a month",
    2: "Once every 2 weeks",
    3: "Once a week",
    4: "Every 3 days",
    5: "Every day"
  }


  return (
    <div className="post-container rounded" >
      <div className="plant-card watering-card rounded" style={{ backgroundColor: "#70917" }}>
        <div className="info-card " >
          <h2 >Rose</h2>
          <div className="info-card-text p-1 ">
            <p>The rose is a type of flowering shrub. Its name comes from the Latin word Rosa. There are over three hundred species and tens of thousands of cultivars. The flowers of the rose grow in many different colors, from the well-known red rose or yellow rose and sometimes white or purple rose.</p>
          </div>
        </div>
        <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="plantImg" className="plant-img" />
        <div className="plant-info ">
          <div className="watering-card card-spacing" style={{ backgroundColor: "#70917" }}>
            <h4>Watering</h4>
            <div className="watering-slider card-spacing">
              <input type="range" min="1" max="5" value={wateringValue} onChange={(e) => setWateringValue(e.target.value)} />
            </div>
            <div className="watering-status">
              <p>Current watering level: </p>
              <p> {wateringTimeScales[wateringValue]}</p>
              <p>Last watered: 17.3.2022</p>
            </div>
          </div>
          <div className="fertilizing-card card-spacing" style={{ backgroundColor: "#70917" }}>
            <h4>Fertilizing</h4>
            <div className="fertilizing-slider card-spacing">
              <input type="range" min="1" max="5" value={fertilizingValue} onChange={(e) => setFertilizingValue(e.target.value)} />
            </div>
            <div className="fertilizing-status">
              <p>Current fertilizing level: </p>
              <p> {fertilizingTimeScales[fertilizingValue]}</p>
              <p>Last fertilized: 1.3.2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;