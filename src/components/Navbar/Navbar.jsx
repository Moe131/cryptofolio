import React from "react";
import logo from "../../assets/logo-white.png"
import signupIcon from "../../assets/arrow_icon.png"

function Navbar() {
    return (
        <navbar className="navbar">
            <img src={logo} alt="Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact us</li>
            </ul>
            <div className="nav-right">
                <select>
                    <option value="usd">USD</option>
                    <option value="usd">EUR</option>
                </select>
                <button>Sign Up <img src={signupIcon} alt="Sign up Icon" /></button>
            </div>
        </navbar>
    )
}

export default Navbar;