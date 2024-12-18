import React from 'react'
// import './Greeting.css'
import object from "./Greeting.module.css"

const Greeting = () => {
    console.log(object);
  return (
    <>
     <h2 id={object.heading}>greeting , Earthlings</h2>
    <h3 className={object.App}>Hello</h3>
    </>
   
  )
}

export default Greeting