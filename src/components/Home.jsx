import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="total-container">
            <header className="header">
                <img src="src\assets\logo-docqmentor.png" alt="DocQmentor Logo" />
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Sign Out</li>
                </ul>
            </header>
        </div>
    );
}

export default Home;