import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Here you would typically handle form submission, e.g., sending the data to a server
        setSubmitted(true);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank you for logging in!</h2>
                    <p>Welcome back!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;
