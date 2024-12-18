import React from 'react'

const TodoItem = (props) => {
    const {todo, handleDelete}= props
  return (
    <>
    {todo.map(function(element,index){
        return <>
        <li key={element.id}>{element.title}</li>
        <button>Edit</button>
        <button onClick={()=>handleDelete(element.id)}>Delete</button>
        
        </>
    })}
    </>
  )
}

export default TodoItem