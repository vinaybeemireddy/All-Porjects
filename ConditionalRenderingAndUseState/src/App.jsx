import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting/Greeting';
import MyButton from './components/StateChange/MyButton';
const array=[{
  "id": 1,
  "avatar": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
  "first_name": "Chrisse",
  "last_name": "Duddy",
  "address": "4018 Sachs Trail",
  "karma": 79073,
  "followers": 66868,
  "posts": 1841,
  "is_following": true
},
{
  "id": 2,
  "avatar": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "first_name": "Alf",
  "last_name": "Sexty",
  "address": "43766 Mallory Place",
  "karma": 57005,
  "followers": 97350,
  "posts": 930,
  "is_following": false
},
{
  "id": 3,
  "avatar": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "first_name": "Lottie",
  "last_name": "Pieters",
  "address": "564 Messerschmidt Court",
  "karma": 9058,
  "followers": 18272,
  "posts": 597,
  "is_following": true
},
{
  "id": 4,
  "avatar": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
  "first_name": "Gray",
  "last_name": "Burker",
  "address": "50 Schiller Point",
  "karma": 67311,
  "followers": 66348,
  "posts": 876,
  "is_following": true
},
{
  "id": 5,
  "avatar": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "first_name": "Ellis",
  "last_name": "Breslauer",
  "address": "917 Old Shore Plaza",
  "karma": 96034,
  "followers": 32423,
  "posts": 243,
  "is_following": true
},] 
function App() {
 const [count, setCount]= useState(array);
// let isUserAuthenticated=true;

// let content;
// if(isUserAuthenticated){
//   content=<h1>USER authenticated</h1>

// }else{
//   content=<h1>User not Authenticate</h1>
// }
const handleClick=()=>{
  setCount(count+1);//0+1-->1 

}
  return (
   <div>
     <h1>{count}</h1>
    {/* {content} */}
    {/* {isUserAuthenticated ? <h1 className='App'>user authenticated</h1>:
    <h1  className='App'>user not authenticated</h1>}

    <Greeting/> */}
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
   </div>
  )
}

export default App

//ternary operator
// condition ? true statement : false statement 
