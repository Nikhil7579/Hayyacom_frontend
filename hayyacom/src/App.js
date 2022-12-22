import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Invitation from './pages/Invitation'

const App = () => {

  return (
    <>
      <Routes>
        {/* <Route path="/mobile/invite/:id/:lang" element={<Invitation />}></Route> */}
        <Route path="/invitation/:id/:lang" element={<Invitation />}></Route>
      </Routes>
    </>
  )
}

export default App  