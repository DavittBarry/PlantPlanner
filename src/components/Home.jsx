import React from "react";
import Slideshow from "./Slideshow";

function Home() {
  return (
    //Wrapper
    <div className="slideshow-container" style={{ overflow: 'auto' }} >
      <div className="text-center">
        <Slideshow />
        <br />
        <h1>Introduction:</h1>
        <p>The goal of this project is to improve and experiment with various website developement technologies.</p>
        <p>PlantPlanner will help users solve the mystery of plant care!</p>
        <br />

      </div>

    </div > //Wrapper
  );
}

export default Home;
