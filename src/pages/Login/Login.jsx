import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from 'aws-amplify/auth';


function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const Navigate = useNavigate()
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // Here you would typically handle form submission, e.g., sending the data to a server
        try {
            const { isSignedIn, nextStep } = await signIn({ 
                username : formData.username, 
                password: formData.password });
            props.updateAuth(true)
            Navigate('/home')
          } catch (error) {
            setError(error.message);
          }

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
                    {error && <p className="error">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
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
                    <Link className="forgot" to={"/forgot-password"}> <p className="forgot"> Forgot password  </p></Link>
                </form>
            )}
        </div>
    );
}

export default Login;