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
            <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
                <li><Link to="/contact" className="nav-link">Contact us</Link></li>
            </ul>
            <div className="nav-right">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;