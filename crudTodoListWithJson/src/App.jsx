import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { createConnection } from './chat'
import Todos from './components/Todos'
import TodoListDemo from './DemoComponents/TodoListDemo'


// function ChatRoom({roomId}){
//      const[serverUrl, setServerUrl] =
//      useState("https://localhost:1234")

//      useEffect(()=>{
//       const connection= createConnection(serverUrl, roomId);

//       connection.connect();

//       return ()=>{
        
//         connection.disconnect();
//       }
//      },[serverUrl,roomId]);

//      return(
//       <>
//       <label >
//         Server URL:{""}
//         <input type="text"  value={serverUrl} onChange={(event)=>{
//           setServerUrl(event.target.value)
//         }}/>
//       </label>
//       <h1>welcome to the {roomId} room!</h1>
//       </>
//      )

// }


function App() {
  const [roomId,setRoomId]= useState("general");
  const [show, setShow]=useState(false)

  // return (
  //   <>
  //   <label >
  //     choose the chatRoom: {""}
  //     <select value={roomId} onChange={(event)=>setRoomId(event.target.value)}>
  //       <option value="general">general</option>
  //       <option value="travel">travel</option>
  //       <option value="music">music</option>
  //     </select>
  //   </label>
  //   <button onClick={()=>setShow(!show)}>{show ? "Close Chat":"Open Chat"}</button>
  //   {show && <ChatRoom roomId={roomId}/>}
  //   </>)

  return(
    // <Todos/>
    <TodoListDemo/>
   
  )
}
export default App
