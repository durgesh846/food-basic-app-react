import React from 'react'
import foodlogo from '../assets/logo.png'


function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <img src={foodlogo} alt="Logo" />
            </div>
            <ul className="nav-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cart">Cart</a></li>
            </ul>
        </nav>
    )
}

export default Header