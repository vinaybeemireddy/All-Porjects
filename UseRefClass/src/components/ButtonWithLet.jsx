export function ButtonWithLet(){
    const [flag,setFlag]=useState(false);
    let val=0; //reset
  
    function handleCount(){
      val= val+1;
      console.log(val);
    }
    console.log("render");
    return(
      <>
      <h1>count:{val}</h1>
       <button onClick={handleCount}>Click</button>
       <button onClick={()=>setFlag(!flag)}>{flag? "start": "stop"}</button>
      </>
    )
  }