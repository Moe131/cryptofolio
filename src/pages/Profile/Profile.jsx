import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";


function Profile(props) {
    const navigate = useNavigate()
    React.useEffect( () => {     
        if (! props.isAuthenticated){
        navigate('/login')
        } }, [])

    return (
        <div className="profile">
            <h1>Profile</h1>
            <h3> Welcome back { window.localStorage.getItem("user")} !</h3>
            <p> You will be able to edit your account information soon ! </p>
            <p> Stay tuned for our next update ! </p>

        </div>
    );
}

export default Profile;