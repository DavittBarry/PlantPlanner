import React from 'react'
import { NavLink } from "react-router-dom";

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
}

const token = localStorage.getItem("token");

const LoginSwitch = ({}) => {
    if (token) {
        return (
            <li className="nav-item">
                        
                            <NavLink className="p-4" to="/Login">
                            <button onClick={handleLogout} type="button" 
                            className="btn btn-success">
                    <h6>
                    Log Out
                    </h6>
                    </button>
                    </NavLink>
                </li>
        )
    }
        else return (
        <li className="nav-item">
                        
                            <NavLink className="p-4" to="/Login">
                            <button type="button" 
                            className="btn btn-success">
                    <h6>
                    Log In
                    </h6>
                    </button>
                    </NavLink>
                </li>
        
    );
};

export default LoginSwitch