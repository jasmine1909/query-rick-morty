import React from 'react'

const Card = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.image} alt="" />
            <div className="text-container">
                <h3>{item.name}</h3>
                <p className="status">
                    {item.status} -{item.species}
                </p>
                <p className="title">last seen on</p>
                <p>{item.location.name}</p>
            </div>
        </div>
    )
}

export default Card