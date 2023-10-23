import React, { useState } from "react";
import './styles/authStyles.css'
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        // add user reg logic here

        // clear form fields after signup
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    
    return (
        <div className="form-container">
            <h2 className="form-heading">Sign Up</h2>
			<form onSubmit={handleSignUp}>
                <label htmlFor="username">Username:</label>
                <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} required /> {/* uname = username */}
				<label htmlFor="email">Email:</label>
				<input type="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<label htmlFor="password">Password:</label>
				<input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
				<input type="password" className="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
				
                <button type="submit">Sign up </button>
                <div className=""> {/*name the class */}
					<div>
                        <span><Link to="/forgot-password">Forgot password?</Link></span>
					</div>
					<div>
						<span><Link to="/login">Already have an account?!</Link></span>
					</div>
				</div>
			</form>
        </div>
    )
}

export default SignUp;