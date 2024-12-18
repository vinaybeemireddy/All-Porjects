// import { useEffect, useState, useRef, useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Counter1 } from './Components/Counter1'
// import Counter2 from './Components/Counter2'
import React, { useReducer } from 'react'

const initialState={
  userName:""
}

const reducer=(state, action)=>{
  switch(action.type){
    case "UPDATE_USERNAME":{
        return{
          ...state,
          userName:action.payload
        }
    }
    default:{
      throw new Error("action not defined")
    }
  }
}

const App = () => {
  const [state, dispatch]=useReducer(reducer, initialState);

  const handleChange=(e)=>{
    dispatch({type:"UPDATE_USERNAME", payload:e.target.value})
  }


  return (
    <>
    <h1>form with useReducer</h1>
    <label htmlFor="">userName</label>
    <input onChange={(e)=>handleChange(e)}value={state.userName}/>
    </>)
}

export default App


// import { useEffect, useReducer } from "react";

// // Function to fetch data from API
// const getData = async (url) => {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
//   } catch {
//     throw new Error(`Something went wrong while fetching data`);
//   }
// };

// // Initial state for our component
// const initState = {
//   loading: false,
//   data: [],
//   err: false
// };

// // Reducer function to update our state
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_LOADING":
//       return {
//         ...state,
//         loading: true,
//         err: false,
//         data: []
//       };
//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         err: false
//       };
//     case "FETCH_ERROR":
//       return {
//         ...state,
//         loading: false,
//         err: true,
//         data: []
//       };
//     default:
//       throw new Error(`Action type is invalid`);
//   }
// };

// // Our main App component
// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initState);

 
//   const fetchAndUpdateData = (url) => {
  
//     dispatch({ type: "FETCH_LOADING" });

//     getData(url)
//       .then((res) => {
//         // If the request is successful, we update our state with the data
//         dispatch({ type: "FETCH_SUCCESS", payload: res }); //data
//       })
//       .catch(() => {
//         // If there's an error, we update our state accordingly
//         dispatch({ type: "FETCH_ERROR" });
//       });
//   };

//   useEffect(() => {
//     fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
//   }, []);

//   const { loading, err, data } = state;

//   return loading ? (
//     <h1>Loading..</h1>
//   ) : err ? (
//     <h1>Something went wrong</h1>
//   ) : (
//     <div className="App">
//       {data.map((post) => (
//         <p key={post.id}>
//           {post?.id} - {post?.title}
//         </p>
//       ))}
//     </div>
//   );
// }
