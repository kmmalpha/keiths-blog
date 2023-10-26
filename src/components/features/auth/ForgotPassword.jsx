import React, { useState } from "react";
// import './styles/forgotPassword.css'
import './styles/authStyles.css'


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        // Password reset logic

        // After a successful reset request, set 'isEmailSent' to true

        // Clear the email field
        setEmail('');
        setIsEmailSent(false); // Set isEmailSent to true after a successful reset request
    }

    return (
        <div className="form-container">
            <h2 className="form-heading">Forgot Password</h2>
            {isEmailSent ? (
                <span>An email with instructions has been sent to your email address.</span>
            ) : (
                <form onSubmit={handlePasswordReset}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    )
}

export default ForgotPassword;