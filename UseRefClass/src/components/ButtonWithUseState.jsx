export function ButtonWithUseState(){
    const [val, setVal]= useState(0)
  
    function handleCount(){
      setVal(val+1);
     
      console.log(val);
    }
    console.log("render");
    return(
      <>
      <h1>count:{val}</h1>
       <button onClick={handleCount}>Click</button>
       
      </>
    )
  }
  