import React from "react";
import Slideshow from "./Slideshow";

function Home() {
  return (
    //Wrapper
<div className="slideshow-container" >
  <div className="text-center">
    <Slideshow />
    <br/>
    <h1>Introduction:</h1>
    <br/>
    <p>The goal of this project is to improve and experiment with various website developement technologies.</p>
    <p>PlantPlanner will help users solve the mystery of plant care!</p>
    <br/>
    <br/>
    <h2>Technologies:</h2>
    <br/>
    <ul className="list-inline justify-content-center">
      <li>HTML 5</li>
      <li>CSS 3</li>
      <li>PHP</li>
      <li>JavaScript (React)</li>
      <li>MongoDB</li>
      <li>Bootstrap</li>
    </ul>
  </div>
</div> //Wrapper
);
}

export default Home;
