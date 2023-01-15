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

  return (
    <div className="post-container rounded" >
      <div className="plant-card watering-card rounded" style={{ backgroundColor: "#70917" }}>
        <div className="info-card " >
          <h2>Rose</h2>
          <div className="info-card-text p-1">
            <p>The rose is a type of flowering shrub. Its name comes from the Latin word Rosa. There are over three hundred species and tens of thousands of cultivars. The flowers of the rose grow in many different colors, from the well-known red rose or yellow rose and sometimes white or purple rose.</p>
          </div>
        </div>
        <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="plantImg" className="plant-img" />
        <div className="plant-info">
          <div className="watering-card" style={{ paddingTop: "20px", backgroundColor: "#70917" }}>
            <h3>Watering</h3>
            <div className="watering-slider">
              <input type="range" min="1" max="5" value={wateringValue} onChange={(e) => setWateringValue(e.target.value)} />
            </div>
            <div className="watering-status">
              <p>Current watering level: {wateringValue}</p>
              <p>Last watered: 17.3.2022</p>
            </div>
          </div>
          <div className="fertilizing-card" style={{ paddingTop: "20px", backgroundColor: "#70917" }}>
            <h3>Fertilizing</h3>
            <div className="fertilizing-slider">
              <input type="range" min="1" max="5" value={fertilizingValue} onChange={(e) => setFertilizingValue(e.target.value)} />
            </div>
            <div className="fertilizing-status">
              <p>Current fertilizing level: {fertilizingValue}</p>
              <p>Last fertilized: 1.3.2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;