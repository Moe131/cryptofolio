import React from "react";
import logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>
            <ul className="nav-list">
                <Link to={"/"}> <li>Home</li> </Link>
                <Link to={"/about"}> <li>About</li> </Link>
                <Link to={"/pricing"}> <li>Pricing</li> </Link>
                <Link to={"/contact"}> <li>Contact us</li> </Link>
            </ul>
            <div className="nav-right">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;