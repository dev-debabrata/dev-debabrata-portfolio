import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Components/Projects'








const App = () => {
  return (
    <div className=" relative">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projectsList' element={<Projects />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>

    </div>
  )
}

export default App
