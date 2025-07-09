import { useState } from 'react'
import './assets/css/style.css'
import Main from './assets/components/main'
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/components/header'
import Footer from './assets/components/footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
