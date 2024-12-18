import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='nav-center'>
            <div className='nav-header'>

            <div>
                portfolio
            </div>
            </div>
        
        <ul className='nav-links' id="nav-links">

{pageLinks.map((link)=>{
    return (
        <a href={link.href} className='nav-link' >
            {link.text}
        </a>
    )
})}
        </ul>
        <ul className='nav-icons'>
            {socialLinks.map((link)=>{
                const {href,icon}= link;
                return(
                    <a href={href}  className='nav-icon'>
                        <i >{icon}</i>
                    </a>
                )
            })}
        </ul>
        </div>
    </nav>
  )
}

export default Navbar