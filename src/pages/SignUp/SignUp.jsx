import React, { useState } from "react";
import "./SignUp.css";
import { signUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';


function SignUp(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
              username:formData.username ,
              password:formData.password ,
              options: {
                userAttributes: {
                  email: formData.email,
                },
                autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
              }
            });
            navigate ('/validate')
          } catch (error) {
            setError(error.message);
            console.log('error signing up:', error);
          }
    }


    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Please verfiy your email address!</h2>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            )}
        </div>
    );
}

export default SignUp;