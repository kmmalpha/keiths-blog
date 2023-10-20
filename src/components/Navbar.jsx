import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
