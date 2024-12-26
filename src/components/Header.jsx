import React from 'react'
import foodlogo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <img src={foodlogo} alt="Logo" />
            </div>
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#cart">Cart</a></li>
            </ul>
        </nav>
    )
}

export default Header