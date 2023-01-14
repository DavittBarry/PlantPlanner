import React from "react";
import { Outlet } from "react-router-dom";

function Plants() {
  return (
    <div className="introduction slideshow-container">
      <div class="container">
        <h1 className="text-center mt-5">Your plants:</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Plants;