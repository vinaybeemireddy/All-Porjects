import React from 'react'
import { NavLink } from 'react-router-dom'


const links =[
    {
        path:"/", text:'AboutDemo'
    },
    {
        path:'/CartDemo', text:'CartDemo'
    },
    {
        path:'/UsersDemo', text:'UsersDemo'
    }
]

const NavBarDemo = () => {

    const activeStyle={
        color:"red"
    }
    const defaultStyle={
        color:"black"
    }
  return (
    <div style={{display:"flex",gap:"10px"}}>
        {
            links.map((link)=>{
                return(
                    <NavLink to={link.path} key={link.path} style={({isActive})=>{
                        return isActive? activeStyle:defaultStyle
                    }}>{link.text}</NavLink>
                )
                
            })
        }
    </div>
  )
}

export default NavBarDemo