import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = ({isAuthenticated, setIsAuthenticated}) => {
    const handleLogout = () => {
        // log the use out
        setIsAuthenticated(false);
    }

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        {isAuthenticated ? (
                            // If the user is signed in, display logout button
                            <li onClick={handleLogout}>
                                Logout
                            </li>
                        ) : (
                            // If the user is not signed in, display login and sign up button
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
