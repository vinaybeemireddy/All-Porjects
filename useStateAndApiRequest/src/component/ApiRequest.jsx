import React, { useState } from "react";
import PostsItem from "./PostsItem";

const ApiRequest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]= useState(false);
  const [error, setError]=useState(false)

  const fetchingData = async () => {
    try {
        setLoading(true)
      let url = "https://jsonplaceholder.typicode.com/posts";

      let response = await fetch(url); //promise(sucess, failure)
      let data = await response.json(); // to convert json data to object;

       console.log(data);
      setPosts(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
        setError(true)
      setLoading(false)
    }
  };
  if(loading){
    return <h1>Loading .....</h1>
  }
  if(error){
    return <h1>Something went wrong... please refresh</h1>
  }
  return (
    <>
      <h1>Click on the below button to get posts</h1>
      <button onClick={fetchingData}>Get posts</button>

      {posts.length>0 && posts.map((element) => {
        return (
          <PostsItem title={element.title} id={element.id} key={element.id} />
        );
      })}
    </>
  );
};

export default ApiRequest;
