import React from "react";
import logo from "../../assets/logo-white.png";
import menuIcon from "../../assets/menu.png"
import { Link } from "react-router-dom";
import "./Navbar.css"
import { signOut } from 'aws-amplify/auth';
import profileIcon from "../../assets/user.png"


function Navbar(props) {
    const [menuChecked, setMenu] = React.useState(true)

    function handleChange(event){
        setMenu(!menuChecked)
    }

    function handleLinkClick() {
        setMenu(true);
    }

    async function handleSignOut() {
        await signOut()
        props.updateAuth(false)
    }

    let buttons;
    { if (!props.isAuthenticated) {
        buttons = (
        <div className="nav-right">
            <button className="login-btn"><Link to="/login" className="button-link" onClick={handleLinkClick}>Login</Link></button>
            <button className="signup-btn"><Link to="/signup" className="button-link" onClick={handleLinkClick}>Sign Up</Link></button>
        </div> )
    }
    else {
        buttons = (
            <div className="nav-right">
                <button className="signout-btn"><Link to="/" className="button-link" onClick={handleSignOut}>Sign Out</Link></button>
                <Link to="/profile"> <img className="profile-icon" src={profileIcon} alt="Profile Icon"/></Link>
            </div> )    }
    }

    return (
        <div className="navbar">
            <Link to={"/"}>
                <img className="logo" src={logo} alt="Logo" />
            </Link>
            <ul className={ menuChecked ? "nav-list" : "nav-list-res"}>
                <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link></li>
                <li><Link to="/pricing" className="nav-link" onClick={handleLinkClick}>Pricing</Link></li>
                <li><Link to="/contactus" className="nav-link" onClick={handleLinkClick}>Contact us</Link></li>
            </ul>
            {buttons}
            <input type="checkbox" onChange={handleChange} value={menuChecked} id="check" name="check"/>
            <label  htmlFor="check" className="check-btn">
                <img className="menu-icon" src={menuIcon} alt="menu icon" />
            </label>
        </div>
    )
}

export default Navbar;