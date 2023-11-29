// IMPORT LIBRARY
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// IMPORT STYLE
import './assets/index.css'

// IMPORT PAGE
import Home from './pages/Home'


// DEFINISIKAN SEMUA URL (ENDPOINT) DAN HALAMANNYA DISINI
const routes = [
  {
    path: '/*',
    element: <Home />,
  },
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
