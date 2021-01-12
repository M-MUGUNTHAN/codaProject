import React, { useEffect, useState } from 'react'

const Filters = ({list,setList,listName,issort,random}) => {
    const [search,setSearch]=useState(null);
    const [sort,setSort]=useState("");
    useEffect(()=>{
        if(search!==null){
        const allPlayers=JSON.parse(localStorage.getItem(listName));
     if(search){
       const filter=allPlayers.filter(({Name})=>{
           const res=Name.toLowerCase().includes(search.toLowerCase());
         return res
       })
       if(!filter.length){
         setList(allPlayers);  
       }
       else{
           setList(filter)
       }
     }
     else{
         if(random!==undefined){
            const data=allPlayers.map(item=>({
                ...item,
                fate:random===parseInt(item.Bet)?"WIN":"LOSE",
                winning:random===parseInt(item.Bet)?item.Price*2:0
            }))
            setList(data)
         }
         else{
             setList(allPlayers)

         }
     }
    }
    },[search])
    return (
        <div>
            <div>
                <input value={search} 
                onChange={({target:{value}})=>setSearch(value)}
                placeholder="Search Player"
                />
            </div>
            {
            issort?
            <div>
                <div className="column">
                    <input type="radio" value={"asc"} 
                    checked={sort==="asc"}
                    onChange={({target:{value}})=>setSort(value)}/>
                    <div>Sort by ascending</div>
                </div>

                <div className="column">
                   <input type="radio" value={"desc"} 
                    checked={sort==="desc"}
                    onChange={({target:{value}})=>setSort(value)}/>
                    <div>Sort by descending</div>
                </div>

                <div className="column">
                   <input type="radio" value={""} 
                    checked={sort===""}
                    onChange={({target:{value}})=>setSort(value)}/>
                    <div>No sorting</div>
                </div>
            </div>
            :null
            }
        </div>
    )
}

export default Filters
