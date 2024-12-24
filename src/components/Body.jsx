import React, { useState } from 'react'
import Card from './Card'
import { restaurantData } from '../utils/restaurantData';



function Body() {
  const [resData,setResData] = useState(restaurantData);
  const filterRestaurants = () => {
    let resFilterList = resData.filter((res)=>res.rating>=4);
    setResData(resFilterList);
  }
  return (
    <div className='body'>
      <div className='filter'>
          <button className='fltr-button' onClick={filterRestaurants}>Top rated restaurant</button>
      </div>
      <div className='res-container'>
        {resData.map((restaurant, index) => (
          <Card
            key={index}
            image={restaurant.image}
            name={restaurant.name}
            rating={restaurant.rating}
            cusines={restaurant.cuisines.join(", ")} // Joining array into string
            waitingTime={restaurant.waitingTime}
          />
        ))}
      </div>
    </div>
  )
}

export default Body