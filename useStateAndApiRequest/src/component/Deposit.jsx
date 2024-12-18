import React, { useState } from 'react'

const Deposit = () => {
const [amount, setAmount]= useState(0);//100//200//300/400


  // const handleDeposit =()=>{
  //   setAmount(amount+100); //setAmount(0+100)
  //   setAmount(amount+100); //setAmount(0+100)
  //   setAmount(amount+100); //setAmount(0+100)
  //   setAmount(amount+100); //setAmount(0+100)
  //   setAmount(amount+100); //setAmount(0+100)
  //   setAmount(amount+100); //setAmount(0+100)
  //   setText("new Data");


  //   console.log(amount); 
    
  // }


  const handleDeposit =()=>{
//  prevState-0
// setAmount(amount+300); //0+300;-->prevState-300
    setAmount((a)=>  {
      console.log("1prevValue",a)
     return a+100}); //0+100--->prev-->100

    setAmount((previousValue)=>  {
      console.log("2prevValue",previousValue)
     return previousValue+100});// 100+100-->prev-->200

    setAmount((previousValue)=>  {
      console.log("3prevValue",previousValue)
     return previousValue+100});//200+100-->prev-->300

    setAmount((previousValue)=>  {
      console.log("4prevValue",previousValue)
     return previousValue+100});//300+100--->prev-->400

console.log(amount); //0

  }

  console.log("amount after re-render", amount);

  console.log("rendering")
  return (
      <div>
        <h1>Current:{amount}</h1>
        <button onClick={handleDeposit}>Deposit 100</button>
      </div>
  )
}

export default Deposit