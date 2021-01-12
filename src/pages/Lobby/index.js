import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Filters from '../../components/Filters';
import PlayerList from '../../organism/PlayerList';

const Lobby = (props) => {
    const [random,setRandom]=useState("");
    const [list,setList]=useState([])
    useEffect(()=>{
       const v= Math.floor(Math.random() * 9) + 1;
       setRandom(v);
       const l=JSON.parse(localStorage.getItem("selected_list"));
       if(l&&l.length){
           const data=l.map(item=>({
               ...item,
               fate:v===parseInt(item.Bet)?"WIN":"LOSE",
               winning:v===parseInt(item.Bet)?item.Price*2:0
           }))
           setList(data)
       }
       return()=>{
          localStorage.removeItem("selected_list")
       }
    },[])
    if(random===""){
        return null;
    }
    if(!list.length){
     return <Redirect to="/"/>
    }
    return (
        <div>
           <h1 style={{textAlign:"center"}}>{random}</h1>
           {
           list&&list.length?
           <Filters list={list} 
           issort={true}
           random={random}
           setList={setList} listName="selected_list"/>
            :null
           }
           <PlayerList list={list} isLobby={true}/>
        </div>
    );
}

export default Lobby
