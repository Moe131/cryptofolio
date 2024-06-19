import React from "react";
import logo from "../../assets/logo-white.png";
import menuIcon from "../../assets/menu.png"
import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
    const [menuChecked, setMenu] = React.useState(true)

    function handleChange(event){
        setMenu(!menuChecked)
    }

    return (
        <div className="navbar">
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>
            <ul className={ menuChecked ? "nav-list" : "nav-list-res"}>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
                <li><Link to="/contact" className="nav-link">Contact us</Link></li>
            </ul>
            <div className="nav-right">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign up</button>
            </div>
            <input type="checkbox" onChange={handleChange} value={menuChecked} id="check" name="check"/>
            <label  htmlFor="check" className="check-btn">
                <img className="menu-icon" src={menuIcon} alt="menu icon" />
            </label>
        </div>
    )
}

export default Navbar;