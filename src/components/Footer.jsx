import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
  <footer className="page-footer footer fixed-bottom site-footer text-center">
    <div className="LoginContainer">
      <br/>
      <NavLink className="navbar-brand flex" to="/PlantPlanner">
        <h4 className="my-auto mx-auto p-1">PlantPlanner</h4>
      </NavLink>
      <NavLink className="navbar-brand flex p-1" to="/Cookies">
        <h6 className="my-auto mx-auto">Cookie policy</h6>
      </NavLink>
      <NavLink className="navbar-brand flex" to="/terms">
        <h6 className="my-auto mx-auto">terms & conditions</h6>
      </NavLink>
      <br/>
      <ul class="list-inline">
      <li class="list-inline-item">
        <a href="https://www.linkedin.com/in/davitt-barry-840aa456/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="48" height="48" alt="LinkedIn"></img></a>
      </li>
      <li class="list-inline-item">
        <a href="https://github.com/DavittBarry/PlantPlanner" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968896.png" width="48" height="48" alt="GitHub"></img></a>
      </li>
      
    </ul>
    </div>
  </footer>
    
  );
}

export default Footer;