export const getAllPlayers=()=>{
    return new Promise(async(resolve)=>{
    const response=await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json");
    const d=await response.json();
    const data=d.map((item,index)=>({
    ...item,
    id:index+1,
    isSelected:false,
    }))
    localStorage.setItem("player_list",JSON.stringify(data))
    resolve(data);
    })
}