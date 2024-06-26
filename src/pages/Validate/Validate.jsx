import React, { useState } from "react";
import "./Validate.css";
import { confirmSignUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';



function Validate(props) {
    const [formData, setFormData] = useState({
        username:"",
        code: ""
    });

    const navigate = useNavigate()

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
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username: formData.username,
                confirmationCode: formData.code
              });
              props.updateAuth(true)
              window.localStorage.setItem("isLoggedIn", true)
              window.localStorage.setItem("user", formData.username)
              navigate ('/')
            } catch (error) {
              console.log('error confirming sign up', error);
        }
        
    }

    return (
        <div className="validate">
            <h1>Verify your email </h1>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Please verfiy your email address!</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="code">Username:</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="code">Confirmation code:</label>
                        <input
                            type="code"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Continue</button>
                </form>
                )}
        </div>
    );
}

export default Validate;