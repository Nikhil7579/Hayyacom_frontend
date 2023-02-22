import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Image from './pages/Image'
import Invitation from './pages/Invitation'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/invitation/:id/:lang" element={<Invitation />}></Route>
        <Route path="/image" element={<Image />}></Route>
      </Routes>
    </>
  )
}

export default App  