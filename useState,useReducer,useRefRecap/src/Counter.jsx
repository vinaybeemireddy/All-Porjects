import React from 'react'
import { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect2")
        // let id= setInterval(()=>{
        //   console.log("interval running2");
        // },1000);
        return ()=>{
            // clearInterval(id);
            console.log("clean up 2")
        }
      },[count]);
   
    useEffect(()=>{
        console.log("useEffect1")
        
        return ()=>{
            // clearInterval(id);
            console.log("clean up1")
            
        }
      },[]);

    
   
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>increase</button>
    </>
  )
}

export default Counter