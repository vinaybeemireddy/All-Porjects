import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonWithUseRef } from './components/ButtonWithUseRef'
import InputBox from './components/InputBox'
import Timer from './components/Timer'


function App() {

  return(
    // <InputBox/>
    <Timer/>

  )
}
export default App


//1. the update will not re-render the component.
//2. useRef will store the the prev-value in-respective or number of re-render.