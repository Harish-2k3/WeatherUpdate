import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import Visual from '../components/Visual/Visual'
import Contact from '../components/Contact/Contact'

export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main />}>
        <Route path='/' element={<Home />} />
        <Route path='/visual' element={<Visual />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
