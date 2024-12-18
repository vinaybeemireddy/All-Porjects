import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Restaurant from './components/Restaurant'

function App() {
  

  return (
   <>
<Routes>
  <Route path="/" element={<Restaurant/>}/>
</Routes>
   </>
  )
}

export default App
