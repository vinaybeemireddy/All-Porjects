import { useEffect, useState, useRef, useContext } from 'react'

import { Route, Routes,Link} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import AboutDemo from './ComponentsDemos/AboutDemo'
import CartDemo from './ComponentsDemos/CartDemo'
import UsersDemo from './ComponentsDemos/UsersDemo'
import SingleUsersDemo from './ComponentsDemos/SingleUsersDemo'
import NavBarDemo from './ComponentsDemos/NavBarDemo'






function App() {
 return(
  <>
  {/* <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path ="/users/:id" element={<SingleUserPage/>}/>

 </Routes> */}

<NavBarDemo/>
 <Routes>
  <Route path='/' element={<AboutDemo/>}/>
  <Route path='/CartDemo' element ={<CartDemo/>}/>
  <Route path="/UsersDemo" element={<UsersDemo/>}/>
  <Route path='/UsersDemo/:id' element={<SingleUsersDemo/>}/>
 </Routes>
 `

 
 
  </> 
 )
}
export default App




