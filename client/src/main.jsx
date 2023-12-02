// IMPORT LIBRARY
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// IMPORT STYLE
import './assets/index.css'

// IMPORT PAGE
import Home from './pages/Home'
import Artikel from './pages/Artikel'
import Login from './pages/Login'
import Register from './pages/Register'

// IMPORT ERROR PAGE
import Error404 from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Article" element={<Artikel />} />
        <Route path="/Career" element={<Home />} />


        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
