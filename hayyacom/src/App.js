import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventDetails from './pages/EventDetails'
import Invitation from './pages/Invitation'
import Preview from './pages/Preview'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/invitation/:id/:lang" element={<Invitation />}></Route>
        <Route path="/previewdetails/:id" element={<Preview />}></Route>
        <Route path="/eventdetails/:id/:lang" element={<EventDetails />}></Route>
      </Routes>
    </>
  )
}

export default App  