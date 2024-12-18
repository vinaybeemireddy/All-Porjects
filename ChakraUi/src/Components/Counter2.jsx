import React, { useReducer } from 'react'

const reducerFunction=(currentState, actionObject)=>{
    // if(actionObject.type==="Increase_count"){
    //     return currentState+1;
    // }
    // else if(actionObject.type==="decrease_count"){
    //     return currentState -1;
    // }
    // else{
    //     throw new Error("object type not defined");
    // }

    switch(actionObject.type){
        case "Increase_count" :{
            return currentState +actionObject.payload; //0 +2
        }
        case "decrease_count":{
            return currentState-actionObject.payload; //0 -1
        }
        case "RESET_COUNT":{
            return actionObject.payload
        }
        default:{
            throw new Error("object type not defined"); 
        }
    }
}

const Counter2 = () => {
    const[count, dispatch ]=useReducer(reducerFunction,0)
    console.log(count);
    const handleIncrement = () => {
        dispatch({ type:"Increase_count", payload:2});
      };
      const handleDecrement = () => {
        dispatch({type:"decrease_count", payload:1});
      };
      const handleReset=()=>{
        dispatch({type:"RESET_COUNT", payload:0})
      }

    //   dispatch---> reductionFunction --->return state will get updated

  return (
    <>
     <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
<button onClick={handleReset}>reset</button>
    </>
  )
}

export default Counter2