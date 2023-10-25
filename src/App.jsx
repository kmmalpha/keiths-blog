import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Login from './components/features/auth/Login';
import SignUp from './components/features/auth/SignUp';
import ForgotPassword from './components/features/auth/ForgotPassword';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	return (
		<div>
			{/* <Login />
			<SignUp /> */}
			{/* <Router> */}
				{isAuthenticated ? (<Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />) : (<Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} {/* Pass isAuthenticated state to the Navbar component */}
				<Routes>
					{/* <Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Navigate to='/' />} /> */}
					<Route path='/' exact Component={Home} />
					<Route path='/about' Component={About} />
					<Route path='/blog' Component={Blog} />
					<Route path='/contact' Component={Contact} />
					<Route path='*' element={<Navigate to='/' />} />

					<Route path='/login' Component={Login} />
					<Route path='/signup' Component={SignUp} />

					<Route path='/forgot-password' Component={ForgotPassword} />
				</Routes>
			{/* </Router> */}

			<Footer />
		</div>
	);
}

export default App;
