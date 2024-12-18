import React, { useState,useEffect } from 'react'

const Count = () => {

const [count, setCount]=useState(0);

useEffect(()=>{
  const fetching = async()=>{
    const response= await fetch("https://jsonplaceholder.org/posts");
    const data= await response.json();
    console.log(data);
 
 }
 fetching();
},[count]) //sideeffect 



  return (
    <>
    <div>{count}</div>
    {/* <button onClick={()=>setCount(count+1)}>inc</button> */}
    <Button setCount={setCount} count={count}/>
    </>
    
  )
}

export default Count



function Button( {setCount,count}){
  return(
    <button onClick={()=>setCount(count+1)}>inc</button>
  )
}

//api 
//setTimeout and setInterval


// //class component. lifecycle
// 1. mounting stage
// 2. updating stage
// 3. delete stage