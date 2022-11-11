import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, NotFound, Login, Registation } from "./pages"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/registration' element={<Registation />} />
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
