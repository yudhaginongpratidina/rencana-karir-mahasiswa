// IMPORT LIBRARY
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// IMPORT STYLE
import './assets/index.css'

// IMPORT PAGE
import Home from './pages/Home'
import Artikel from './pages/Artikel'
import Contact from './pages/Contact'
import Career from './pages/Career'
import Login from './pages/Login'
import Register from './pages/Register'

// IMPORT ERROR PAGE
import Error404 from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Artikel />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />'


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
