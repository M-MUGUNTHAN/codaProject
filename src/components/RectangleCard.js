import React from 'react'

const RectangleCard = ({image,price,name,bet}) => {
    return (
        <div  className="column">
        <div>
         <img className="image" src={image}/>
        </div>
        <div>
            <div>{name}</div>
            <div>{bet}</div>
        </div>
        <div>{price}</div>
        </div>
    )
}

export default RectangleCard;
