import React, { useEffect, useState,useRef } from 'react'

const Timer = () => {
    const[count, setCount]=useState(10)
    const refId= useRef(0)
    useEffect(()=>{
   
        return ()=>{
            console.log("clean up function")
            stopTimer();
        }
    },[])

    const startTimer=()=>{
    if(refId.current!==0){
        return;
        //already timer is running with a id in refId.current.
    }
       refId.current=  setInterval(()=>{
            console.log("counter", Date.now());
            setCount(prev=>{
                if(prev<=1){
                clearInterval(refId.current);
                }
                else{
                   return prev-1;
                }
            })
        },1000)
    }

    const stopTimer=()=>{
        clearInterval(refId.current)
        refId.current=0;
    }
  return (
    <div>
         {count}
         <button onClick={startTimer}>start</button>
         <button onClick={stopTimer}>stop</button>

    </div>
  )
}

export default Timer