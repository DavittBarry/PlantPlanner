import React from "react";
import Slideshow from "./Slideshow";

function Home() {
  return (
    //Wrapper
<div className="home" >
  <div className="text-center">
    <Slideshow />
    <br/>
    <h1>Introduction:</h1>
    <br/>
    <p>We are 3 full-stack web developer students from Taitotalo, Helsinki.</p>
    <p>The goal of this project is to improve and experiment with various website developement technologies.</p>
    <p>Check out our dev blog here:</p>
    
    <a href="https://plantplanner287818493.wordpress.com/"> Plantplanner Dev Blog</a>
    <br/>
    <br/>
    <h2>Technologies:</h2>
    <br/>
    <ul>HTML 5</ul>
    <ul>CSS 3</ul>
    <ul>PHP</ul>
    <ul>JavaScript (React)</ul>
    <ul>MongoDB</ul>
    <ul>Bootstrap</ul>
  </div>
</div> //Wrapper
);
}

export default Home;
