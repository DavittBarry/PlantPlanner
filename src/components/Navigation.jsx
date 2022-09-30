import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../static_files/Logo.png'
function Navigation() {

  /*const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  }*/

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "650092870688-ceu9papi8p7bufl6e848ijihvlaukc9s.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, [])

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
                            <NavLink className="p-4" to="/Login">
                            <button type="button" 
                          className="btn btn-success">
                    Log In
                    </button>
                  </NavLink>
                </li>
                <div id="signInDiv"></div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;