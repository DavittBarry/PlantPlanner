import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../static_files/Logo.png';
import LoginSwitch from './LoginSwitch';
import LoginSwitchpreview from './LoginSwitchpreview';
function Navigation() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  }



    return (
      <div className="navigation text-light">
        <nav className="navbar navbar-expand ">
          <div className="container ">
            <NavLink className="navbar-brand flex" to="/PlantPlanner">
            <img id="navLogo" src={logo} alt="PlantPlannerLogoImg"></img>
            <h1 className="my-auto mx-auto">PlantPlanner</h1>
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <h5>
                    Home
                    </h5>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewUser">
                  <h5>
                  New User
                  </h5>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewPlant">
                    <h5>
                    New Plant
                    </h5>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Plants">
                    <h5>
                    Plants
                    </h5>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/LocalWeather">
                    <h5>
                    Local Weather
                    </h5>
                  </NavLink>
                </li>
                
                <div id="signInDiv"></div>
                <LoginSwitch />
                <LoginSwitchpreview />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;