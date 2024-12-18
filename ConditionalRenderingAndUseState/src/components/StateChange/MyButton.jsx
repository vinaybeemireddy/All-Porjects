import React, { useState } from 'react'

const MyButton = (props) => {
  const{count,onClick}= props
//  const[count, setCount ] =  useState(0)

    //return --> current value, function(update currentvalue)
    //hook
// let count=0;
// const handleClick=()=>{
//   setCount(count+1);//0+1-->1 
// //   count=1
   
//     // console.log("counter value", count)
// }
  return (
    <>
   
    <button onClick={onClick}>My Button</button>
    </>
  )
}

export default MyButton