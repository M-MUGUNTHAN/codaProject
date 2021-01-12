import React from 'react'
import PlayerRow from '../components/PlayerRow';

export default function PlayerList({list,onSelect,isLobby}) {
    return (
        <div className="conatiner">
        <div className="column">
            {
           !isLobby?
           <div className="R_select">
              SELECT
           </div> 
           :null
            }
           <div className="R_name">
               <div>PLAYER NAME</div>
           </div>
           <div className="R_image">
              AVATAR
           </div>
           <div className="R_bet">
              BET
           </div>
           <div className="R_price">
               PRICE
           </div>
           {
         isLobby?
         <>
           <div className="R_price">
            FATE
           </div>
           <div className="R_price">
             WINNING
          </div>
          </>
          :null
           }
        </div>
        {
            list.map(item=>{
                return(
                    <PlayerRow
                    key={item.id}
                     price={item.Price}
                     name={item.Name}
                     image={item["Profile Image"]}
                     bet={item.Bet}
                     id={item.id}
                     isSelected={item.isSelected}
                     isLobby={isLobby}
                     fate={item.fate?item.fate:""}
                     winning={item.winning!==undefined?item.winning:""}
                     onSelect={onSelect}
                     />
                );
            })
        }
       </div>
    )
}
