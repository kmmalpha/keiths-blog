import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Contact from './pages/Contact';


const App = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</Router>

			<Footer />
		</div>
	);
}

export default App;
