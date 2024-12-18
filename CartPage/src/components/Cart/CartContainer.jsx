import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

let cartItems = [
  { id: 1, label: "Noodles", price: 30, quantity: 1 },
  { id: 2, label: "Biryani", price: 90, quantity: 1 },
  { id: 3, label: "Chips", price: 10, quantity: 1 },
];
const CartContainer = () => {
 const[cart,setCart] =useState(cartItems);


 const changeQuantity=(id,value)=>{
//  cart.quantity= cart.quantity +value;
    let updateCart= cart.map((item)=>(
        item.id === id ? {...item, quantity: item.quantity+ value } : item

        // {...item, quantity: 1 +1}
    ))

    setCart(updateCart);
 }

 const totalPrice= cart.reduce(function(bag, item){
    return (
        bag + (item.price *item.quantity)
    )
 },0)
  return (
    <>
    {cart.map((item)=>(
        <CartItem key={item.id} {...item} changeQuantity={changeQuantity}/>
    ))}
     
      <Total totalPrice={totalPrice}/>
    </>
  );
};

export default CartContainer;
