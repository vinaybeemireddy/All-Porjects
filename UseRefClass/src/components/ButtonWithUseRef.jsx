import {useRef, useState} from "react"

export function ButtonWithUseRef(){
    const [flag,setFlag]=useState(false);
   const Val= useRef(0)
    function handleCount(){
    
      Val.current= Val.current+1;
  
      console.log(Val);
    }
    console.log("render")
    return(
      <>
      
       <button onClick={handleCount}>Click</button>
       <button onClick={()=>setFlag(!flag)}>{flag? "start": "stop"}</button>
  
      </>
    )
  }

