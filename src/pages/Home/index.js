import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
import PlayerList from '../../organism/PlayerList';
import SelectedPlayerList from '../../organism/SelectedPlayerList';
import {getAllPlayers} from "../../utils/network";
const Home = (props) => {
    const [list,setList]=useState([]);
    const [selected,setSelected]=useState([])
    useEffect(()=>{
        getAllPlayers().then(data=>{
           setList(data);
        })  
    },[])
    useEffect(() => {
        if(list&&list.length){
            const filter=list.filter(({isSelected})=>isSelected===true);
            setSelected(filter);
        }
    }, [list])
    const selectePlayers=(idx)=>{
        if(selected.length>=9){
          const ispresent=selected.findIndex(item=>item.id===idx);
          if(ispresent<0){
              return alert("Maximum 9 Players can be selected")
          }
        }
        const newlist=list.map(item=>{
           if(item.id===idx){
               return{
                   ...item,
                   isSelected:!item.isSelected
               }
           }
           return item
        })
        setList(newlist)
    }
    const onStart=()=>{
        localStorage.setItem("selected_list",JSON.stringify(selected));
        props.history.push("/lobby")
    }
    return (
        <div className="column">
           <SelectedPlayerList list={selected} onStart={onStart}/>
           <div style={{width:"100%"}}>
               {
                    list&&list.length?
                    <Filters issort={false} list={list} 
                    setList={setList} listName="player_list"/>
                    :null
               }
            {
            list&&list.length?
           <PlayerList list={list} onSelect={selectePlayers} isLobby={false}/>
           :null
            }
           </div>
        </div>
    );
}

export default Home;
