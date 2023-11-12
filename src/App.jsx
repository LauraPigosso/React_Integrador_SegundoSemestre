import { useState } from 'react'
import Header from './Layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Principal'

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
          
    </BrowserRouter>

  
  )
}

export default App
