import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const [inputVal, setInputVal]= useState("")

    function handleClick(){
        handleAdd(inputVal)
    }
  return (
    <><input type="text"value={inputVal} onChange={(event)=>setInputVal(event.target.value)} />
     <button onClick={handleClick}>Add</button>
    
    </>
  )
}

export default AddTodo