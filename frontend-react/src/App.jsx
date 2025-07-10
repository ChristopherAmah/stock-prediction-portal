import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/main'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import AuthProvider  from './AuthProvider' // Import AuthProvider to manage authentication state

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
