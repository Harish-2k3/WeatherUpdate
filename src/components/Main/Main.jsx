import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../core/Header/Header'
import Footer from '../../core/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Main() {
  return (
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}
