import React, { useState , useEffect} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

const Todos = () => {
    const [todo, setTodo]=useState([])
    const [loading, setLoading]= useState(false)
//get-->read
   async function fetchAndUpdateData(){
    try{
        setLoading(true)
        let response= await fetch("http://localhost:3000/todos");
        let data= await response.json();
        setTodo(data);
        setLoading(false)
    }
    catch(error){
        console.log(error)
        setLoading(false)
    }
    }

    useEffect(()=>{
        fetchAndUpdateData();
    },[])

//post -->create
    const handleAdd=(inputVal)=>{
        const newTodoItem={
            title:inputVal,
            status:false
        }
        
       let result= fetch("http://localhost:3000/todos", {
            method:"POST",
            headers:{
               "Content-Type": "application/json"
            },
            body:JSON.stringify(newTodoItem)//object to json.
        })

        result.then(()=>{
            fetchAndUpdateData();
        })
        result.catch((error)=>{
            console.log(error)
        })
    }
//delete-->delete
    const handleDelete=(id)=>{
        let result= fetch(`http://localhost:3000/todos/${id}`, {
            method:"DELETE",
        })

        result.then(()=>{
            fetchAndUpdateData();
        })
    }

//patch/put--> update
    const handleToggle=(id,body)=>{
        let result= fetch(`http://localhost:3000/todos/${id}`, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
             },
             body:JSON.stringify(body)//object to json.
        })

        result.then(()=>{
            fetchAndUpdateData();
        })
    }
  return (
    <>
    <AddTodo handleAdd={handleAdd}/>
    {loading ? <h1>Loading...</h1> : 
        todo.map((item,id)=>{
            return(
                <TodoItem {...item} key={id} handleDelete={handleDelete} handleToggle={handleToggle}/>
            )
        })
    } 
    </>
  )
}

export default Todos