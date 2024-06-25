import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { resetPassword } from 'aws-amplify/auth';
import { confirmResetPassword } from 'aws-amplify/auth';



function ForgotPassword(props) {
    const [formData, setFormData] = useState({
        username: "",
        code: "",
        newpassword: "",
    });

    const Navigate = useNavigate()
    const [error, setError] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [success , setSuccess] = useState(false)
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    async function handleSubmit1(event) {
        event.preventDefault();
        handleResetPassword(formData.username)
    }

    async function handleSubmit2(event) {
        event.preventDefault();
        handleConfirmResetPassword(formData.username, formData.code, formData.newpassword)
    }


    async function handleResetPassword(username) {
        try {
          const output = await resetPassword({ username });
          handleResetPasswordNextSteps(output);
          setSubmitted(true)
          setError("")
        } catch (error) {
            setError(error.message);
        }
      }

      function handleResetPasswordNextSteps(output) {
        const { nextStep } = output;
        switch (nextStep.resetPasswordStep) {
          case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
            const codeDeliveryDetails = nextStep.codeDeliveryDetails;
            setConfirmation( `Confirmation code was sent to your email`);
             // Collect the confirmation code from the user and pass to confirmResetPassword.
            break;
          case 'DONE':
            console.log('Successfully reset password.');
            break;
        }
      }

      async function handleConfirmResetPassword(
        username,
        confirmationCode,
        newPassword
      ) {
        try {
          await confirmResetPassword({ username, confirmationCode, newPassword });
          setConfirmation( `Your password was updated successfully`);
          setSuccess(true)
          setError("")
        } catch (error) {
          setError(error.message);
        }
      }

    if (success) {
        return (
            <div className="login">
            <h1>Reset Your Password</h1>
            {confirmation && <p className="confirmation">{confirmation}</p>}
            </div>
        )
    }

    return (
        <div className="login">
            <h1>Reset Your Password</h1>
            {confirmation && <p className="confirmation">{confirmation}</p>}
            {submitted ? (
                <form onSubmit={handleSubmit2} >
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="code">Confirmation Code</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                        type="password"
                        id="newpassword"
                        name="newpassword"
                        value={formData.newpassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Reset</button>
            </form>
            ) : (
                <form onSubmit={handleSubmit1} >
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
                    <button type="submit">Reset</button>
                    {confirmation && <p className="confirmation">{confirmation}</p>}
                </form>
            )}
        </div>
    );
}

export default ForgotPassword;