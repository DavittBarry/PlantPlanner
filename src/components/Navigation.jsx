import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../static_files/Logo.png'
import PlantPlanner from '../static_files/PlantPlanner.png'
function Navigation() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  }

    return (
      <div className="navigation">
        <nav className="navbar navbar-expand">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img id="navLogo" src={logo} alt="PlantPlannerLogoImg"></img>
            <img id="navText"src={PlantPlanner} alt="LogoText"></img>
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewUser">
                  NewUser
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewPlant">
                  NewPlant
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Plants">
                    Plants
                  </NavLink>
                </li>
                <li classname="nav-item">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;