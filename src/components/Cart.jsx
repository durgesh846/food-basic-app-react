import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const restaurants = useSelector((store) => (store.cart.items));
    const dispatch = useDispatch();
    const handleClearItem = () => {
        dispatch(clearItem());
    }
    const navigate = useNavigate();
    const clickHome = () =>{
        navigate("/")
    }
    return (
        <div className="cart-page">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'40px 240px' }}>
                <h1>Your Cart</h1>
                <button className='add-item-button' onClick={handleClearItem}>Clear Cart</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <div className="restaurant-card" key={restaurant.id}>
                        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                        <div className="restaurant-details">
                            <h2 className="restaurant-name">{restaurant.name}</h2>
                            <p className="restaurant-rating">Rating: {restaurant.rating} ⭐</p>
                            <p className="restaurant-waiting">Waiting Time: {restaurant.waitingTime}</p>
                            <div className="restaurant-menu">
                                <h3>Menu:</h3>
                                <ul>
                                    {restaurant.menu.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                {
                    restaurants.length === 0 && (<button className="empty-cart-message" onClick={clickHome}>Your Cart is empty. Add Items to the Cart</button>)
                }
            </div>
        </div>
        
    )
}

export default Cart