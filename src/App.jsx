import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
