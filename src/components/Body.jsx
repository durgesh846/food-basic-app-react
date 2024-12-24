import React from 'react'
import Card from './Card'

const resData = [
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
    "name": "The Gourmet Kitchen",
    "rating": 4.5,
    "cuisines": ["Italian", "Continental"],
    "waitingTime": "30 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f",
    "name": "Spice Symphony",
    "rating": 4.2,
    "cuisines": ["Indian", "Chinese"],
    "waitingTime": "25 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
    "name": "Sushi World",
    "rating": 4.8,
    "cuisines": ["Japanese", "Sushi"],
    "waitingTime": "20 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tgh1teo4lkj5kuk7fkmo",
    "name": "Burger Hub",
    "rating": 4.0,
    "cuisines": ["American", "Fast Food"],
    "waitingTime": "15 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/auczcmkdvvxzt2mswvcc",
    "name": "Vegan Delight",
    "rating": 4.6,
    "cuisines": ["Vegan", "Healthy"],
    "waitingTime": "35 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mtr8w6msayubnigqmbkn",
    "name": "Grill House",
    "rating": 4.3,
    "cuisines": ["Barbecue", "Steakhouse"],
    "waitingTime": "40 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd519572ed1bed19de47e94186e743ea",
    "name": "Seafood Paradise",
    "rating": 4.7,
    "cuisines": ["Seafood", "Asian"],
    "waitingTime": "28 mins"
  },
  {
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    "name": "Dessert Dreams",
    "rating": 4.9,
    "cuisines": ["Desserts", "Bakery"],
    "waitingTime": "18 mins"
  }
];


function Body() {
  return (
    <div className='body'>
      <div className='search'></div>
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