import React from 'react'
import RectangleCard from '../components/RectangleCard';

const SelectedPlayerList = ({list,onStart}) => {
    return (
        <div>
            {
             list.map(item=>{
                 return(
                     <RectangleCard
                     price={item.Price}
                     name={item.Name}
                     image={item["Profile Image"]}
                     bet={item.Bet}
                     />
                 );
             })
            }
            {
                list&&list.length===9?
                <div onClick={()=>onStart()} className="startbtn">Start</div>:null
            }
        </div>
    )
}

export default SelectedPlayerList;
