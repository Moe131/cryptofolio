import React from "react";
import "./Pricing.css";

function Pricing() {
    return (
        <div className="pricing">
            <h1>Pricing</h1>
            <div className="tier_container">
                <div className="tier">
                <h2>Free</h2>
                <p>Basic access to features</p>
                <b>$0 / month</b>
                </div>
                <div className="tier">
                <h2>Standard</h2>
                <p>Access to all features </p>
                <br/>
                <b>$5 / month</b>
                </div>
                <div className="tier">
                <h2>Premium</h2>
                <p>Priority support and exclusive features</p>
                <p><b>$15 / month</b></p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
