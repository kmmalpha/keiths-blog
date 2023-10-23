import React, { useState } from "react";
import './styles/authStyles.css'
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();

		// add auth logic here
		
		// clear form fields after login
		setEmail('');
		setPassword('')
	}

	return (
		<div className="form-container">
			<h2 className="form-heading">Login</h2>
			<form onSubmit={handleLogin}>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				<label htmlFor="remember-me">Remember me</label>
				<input type="checkbox" />
				<button type="submit">Login</button>
				<div className=""> {/*name the class */}
					<div>
						<span>Forgot password?</span>
					</div>
					<div>
						<span>New here? <Link to="/signup">Click here to sign up!</Link></span>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login;