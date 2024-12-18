import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"

const links =[
    {
        path:"/", text:"Home"
    },
    {
        path:"/about", text:"About"
    },
    {
        path:"/cart", text:"Cart"
    },
    {
        path:"/users", text:"Users"
    }

]
const Navbar = () => {

const defaultStyle={
    color:"black",
    TextDecoration:"none"

}
const activeStyle={
    color:"green",
    TextDecoration:"none"

}

  return (
    <div style={{display:"flex", gap:"10px"}}>
    {links.map((link)=>{
        return(
            <NavLink to={link.path}
            key={link.path}
            style={({isActive})=>{
                return isActive ? activeStyle :defaultStyle
                
            }}>{link.text}</NavLink>
        )
    })}
  </div>
  )
}

export default Navbar