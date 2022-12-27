import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Invitation from './pages/Invitation'
import Home from './pages/home'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id/:lang" element={<Invitation />}></Route>
      </Routes>
    </>
  )
}

export default App  