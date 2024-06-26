import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";


function Profile(props) {

    return (
        <div className="profile">
            <h1 className>Profile</h1>
            <h3> Welcome back {props.user} !</h3>
            <p> You will be able to create your custom Watchlists soon ! </p>
            <p> Stay tuned for our next update ! </p>

        </div>
    );
}

export default Profile;