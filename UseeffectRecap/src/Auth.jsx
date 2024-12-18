import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = ({children}) => {
const [auth, setAuth]= useState(true)

const navigate=useNavigate()

useEffect(()=>{

    if(!auth){
       
        navigate("/")  
    }

},[auth])
return(
    
    children
)
}

export default Auth