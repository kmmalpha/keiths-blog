import React from 'react';
import './styles/home.css';
import HomePage from '../components/HomePage';
import FlickingComponent from '../components/FlickingComponent';

const Home = () => {
    
    return (
        <div className='HomePage'>
            <div>
                <FlickingComponent />
            </div>
            <div>
                <HomePage />
            </div>
        </div>
    )
}

export default Home;