import React from 'react'

const PlayerRow = (props) => {
    const {name,isSelected,image,bet,price,id,onSelect,isLobby,fate,winning}=props;
    return (
        <div className="column">
            {
           !isLobby?
           <div className="R_select">
               <input type="checkbox" onChange={()=>onSelect(id)} checked={isSelected}/>
           </div> :null
            }
           <div className="R_name">
               <div>{name}</div>
           </div>
           <div className="R_image">
               <img className="image" src={image}/>
           </div>
           <div className="R_bet">
               <div>{bet}</div>
           </div>
           <div className="R_price">
               <div>{price}</div>
           </div>
           {
               isLobby?
               <>
               <div className="R_price">
               {fate}
               </div>
               <div className="R_price">
                {winning}
               </div>
               </>
               :null
           }
        </div>
    )
}

export default PlayerRow
