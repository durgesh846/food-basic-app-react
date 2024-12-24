import React from 'react'

function Card({ image, name, rating, cusines, waitingTime }) {
    return (
        <div className="food-card">
            <img src={image} alt={name} />
            <div className="food-card-content">
                <h2>{name}</h2>
                <h3 className="description">{cusines}</h3>
                <p className="rating">Rating: {rating} ★</p>
                <p className="waiting-time">Waiting Time: {waitingTime}</p>
            </div>
        </div>
    )
}

export default Card