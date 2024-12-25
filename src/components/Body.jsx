import React, { useEffect, useState } from 'react'
import Card from './Card'
import { restaurantData } from '../utils/restaurantData';



function Body() {
  const [resData, setResData] = useState(restaurantData);
  const [filterResData,setFilterResData] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");
  const filterRestaurants = () => {
    let resFilterList = resData.filter((res) => res.rating >= 4);
    setFilterResData(resFilterList);
  }
  const searchData = ()=>{
    const filterdRestaurantsList = resData.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilterResData(filterdRestaurantsList);
  }
  
  // useEffect(() => {
  //   fetchData();
  // },[]);
  // const fetchData = async () =>{
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //   const json = await data.json();
  //   console.log(json);
  // }
  return (
    <div className='body'>
      <div className='filter'>
        <div className='search-bar'>
          <input type='text' placeholder='Search restaurants...' className='search-input' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='search-button' onClick={searchData} >Search</button>
        </div>
        <button className='fltr-button' onClick={filterRestaurants}>Top rated restaurant</button>
      </div>
      <div className='res-container'>
        {filterResData.map((restaurant, index) => (
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