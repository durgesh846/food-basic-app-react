import React from 'react'
import foodlogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
    // subscribing the store using the selector
    const cartItem = useSelector((store) => store.cart.items);
    
    return (
        <nav className="header">
            <div className="logo">
                <img src={foodlogo} alt="Logo" />
            </div>
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart {cartItem.length}</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
            </ul>
        </nav>
    )
}

export default Header