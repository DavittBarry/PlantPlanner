import React from "react";
import { Outlet } from "react-router-dom";
import './Post.css';

function Plants() {
  return (
    <div className="introduction slideshow-container">
      <div class="container">
        <h4 className="text-center p-3 plant-card rounded">Your plants:</h4>
        <Outlet />
      </div>
    </div>
  );
}

export default Plants;