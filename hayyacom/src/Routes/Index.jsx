import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventDetails from '../pages/EventDetails/EventDetails'
import Invitation from '../pages/Invitation/Invitation'
import Notfound from '../pages/Notfound/Notfound'
import Preview from '../pages/Preview/Preview'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/invitation/:id/:lang" element={<Invitation />}></Route>
        <Route path="/goldUser/preview/:id" element={<Preview />}></Route>
        <Route path="/eventdetails/:id/:lang" element={<EventDetails />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  )
}

export default Index
