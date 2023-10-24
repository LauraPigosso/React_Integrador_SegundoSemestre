import { useState } from 'react'
import Header from './assets/Layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Principal'

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
