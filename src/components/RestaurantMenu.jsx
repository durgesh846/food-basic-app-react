import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/resMenu.css'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


function RestaurantMenu() {
  const { resid } = useParams();
  // custom hook
  const restaurant = useRestaurantMenu(resid);
  const dispatch = useDispatch();

  const handleAddItem = () =>{
    dispatch(addItem(restaurant))
  }
  return (
    <div className='res-menu'>
      <div className="restaurant-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="restaurant-image"
          />
          <button className='add-item-button' onClick={handleAddItem}>Add</button>
        </div>
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <p className="restaurant-info">
          <strong>Rating:</strong> {restaurant.rating}
        </p>
        <p className="restaurant-info">
          <strong>Cuisines:</strong> {restaurant.cuisines.join(", ")}
        </p>
        <p className="restaurant-info">
          <strong>Waiting Time:</strong> {restaurant.waitingTime}
        </p>

        <h3 className="restaurant-section-title">Menu</h3>
        <ul className="menu-list">
          {restaurant.menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="restaurant-section-title">Customer Feedback</h3>
        <ul className="feedback-list">
          {restaurant.customerFeedback.map((feedback, index) => (
            <li key={index}>
              <p>
                <strong>{feedback.name}:</strong> {feedback.comment} (
                {feedback.rating} stars)
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu