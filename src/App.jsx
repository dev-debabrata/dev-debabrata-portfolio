import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import ProjectsList from './Pages/ProjectsList'


const App = () => {
  return (
    <div className=" relative">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projectsList' element={<ProjectsList />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>

    </div>
  )
}

export default App
