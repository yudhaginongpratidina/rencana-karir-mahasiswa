// IMPORT LIBRARY
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT STYLE
import "./assets/index.css";

// IMPORT PAGE
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Register from "./pages/Register";


// IMPORT ADMINISTRATOR
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/admin/Profile";

//IMPOERT PAGE ADMINISTRATOR
// import Dashboard from "./pages/administrator/Dashboard";
// import Data from "./pages/administrator/Data";
// import Message from "./pages/administrator/Message";
// import Profile from "./pages/administrator/Profile";
// import Kriteria from "./pages/administrator/Kriteria";

// IMPORT ERROR PAGE
import Error404 from "./pages/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
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

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />


        
        {/* ADMINISTRATOR ROUTES */}
        {/* <Route path="/administrator/dashboard" element={<Dashboard />} />
        <Route path="/administrator/data" element={<Data />} />
        <Route path="/administrator/message" element={<Message />} />
        <Route path="/administrator/profile" element={<Profile />} />
        <Route path="/administrator/kriteria" element={<Kriteria />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
