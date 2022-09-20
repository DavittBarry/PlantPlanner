import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../static_files/Logo.png'
function Navigation() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  }

    return (
      <div className="navigation ">
        <nav className="navbar navbar-expand ">
          <div className="container ">
            <NavLink className="navbar-brand flex" to="/PlantPlanner">
            <img id="navLogo" src={logo} alt="PlantPlannerLogoImg"></img>
            <h1 className="my-auto mx-auto">PlantPlanner</h1>
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/PlantPlanner">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewUser">
                  New user
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewPlant">
                  New plant
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Plants">
                    Plants
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/LocalWeather">
                    Local weather
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button type="button" 
                          className="btn btn-success" 
                          onClick={handleLogout}>
                            <NavLink className="p-4" to="/Login">
                    Log In
                  </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;