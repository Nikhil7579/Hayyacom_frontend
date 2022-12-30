import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Invitation from './pages/Invitation'
import Home from './pages/home'

const App = () => {

  return (
    <>
      <Routes>
        {/* <Route path="/invitation" element={<Home />}></Route> */}
        <Route path="/invitation/:id/:lang" element={<Invitation />}></Route>
      </Routes>
    </>
  )
}

export default App  