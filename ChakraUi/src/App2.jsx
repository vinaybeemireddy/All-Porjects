function App() {
 return(
  <>
<Counter1/>
<Counter2/>
  </>
 )
}
export default App


import { useState, useEffect } from "react";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch {
    throw new Error(`something went wrong while fetching data`);
  }
};

export default function App2() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = (url) => {
    setLoading(true);
    setErr(false);
    getData(url)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setErr(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  }, []);

  return loading ? (
    <h1>Loading..</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <div className="App">
      {data.map((post) => (
        <p key={post.id}>
          {post?.id} - {post?.title}
        </p>
      ))}
    </div>
  );
}