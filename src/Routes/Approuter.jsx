import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import Visual from '../components/Visual/Visual'
import Contact from '../components/Contact/Contact'
import Home1 from '../components/Home1/Home1'
import Cripto from '../components/Cripto/Cripto'
import Visual1 from '../components/Visual/Visual1'

export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main />}>
        <Route path='/home' element={<Home />} />
        <Route path='/visual' element={<Visual />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home1' element={<Home1 />} />
        <Route path='/' element={<Cripto />} />
        <Route path='/visual1' element={<Visual1 />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
