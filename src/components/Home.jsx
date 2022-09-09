import React from "react";
import Slideshow from "./Slideshow";

function Home() {
  return (
    //Wrapper
<div className="home" class="text-center">
  <div className="introduction">
    <Slideshow />
    <h1>Introduction:</h1>
    <p>We are 3 full-stack web developer students from Taitotalo, Helsinki. The goal of this dynamic group project is to learn how to develop a web service as a group and learn about its technologies.</p>
    <p>Check out our dev blog here: 
    <a href="https://plantplanner287818493.wordpress.com/"> Plantplanner Dev Blog</a>
    </p>
    <h2>Technologies</h2>
    <ul>
    <li>HTML 5</li>
    <li>CSS 3</li>
    <li>Javascript</li>
    <li>React</li>
    <li>MongoDB</li>
    <li>Bootstrap</li>
    </ul>
  </div>
</div> //Wrapper
);
}

export default Home;
