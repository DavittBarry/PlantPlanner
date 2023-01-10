import React from 'react'
import { NavLink } from "react-router-dom";

const handleLogin = () => {
    localStorage.setItem("token", "loggedin");
    window.location.assign("/PlantPlanner");
}

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/PlantPlanner");
}

const token = localStorage.getItem("token");

const LoginSwitchpreview = () => {
    if (token) {
        return (
            <li className="nav-item">
                        
                            <NavLink className="p-4" to="/PlantPlanner">
                            <button onClick={handleLogout} type="button" 
                            className="btn btn">
                    <h6>
                    Exit site preview
                    </h6>
                    </button>
                    </NavLink>
                </li>
        )
    }
        else return (
        <li className="nav-item">
                        
                            <NavLink className="p-4" to="/PlantPlanner">
                            <button onClick={handleLogin} type="button" 
                            className="btn btn">
                    <h6>
                    Site preview
                    </h6>
                    </button>
                    </NavLink>
                </li>
        
    );
};

export default LoginSwitchpreview
