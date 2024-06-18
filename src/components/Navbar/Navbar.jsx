import React from "react";
import logo from "../../assets/logo-white.png"
import signupIcon from "../../assets/arrow_icon.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact us</li>
            </ul>
            <div className="nav-right">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;