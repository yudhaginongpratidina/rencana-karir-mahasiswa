// IMPORT LIBRARY
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT STYLE
import "./assets/index.css";

// IMPORT PAGE
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Register from "./pages/Register";


// IMPORT ADMINISTRATOR
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import AdminMessage from "./pages/AdminMessage";

import AdminData from "./pages/AdminData";
import AdminPekerjaan from "./pages/AdminPekerjaan";

import AdminRiwayat from "./pages/AdminRiwayat";



// IMPORT ERROR PAGE
import Error404 from "./pages/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />'
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/message" element={<AdminMessage />} />

        <Route path="/admin/data" element={<AdminData />} />

        <Route path="/admin/pekerjaan/tambah" element={<AdminPekerjaan panelName="Tambah Pekerjaan" panelLink="/admin/data" nameButton="Kembali" />} />
        <Route path="/admin/pekerjaan/:id/edit" element={<AdminPekerjaan panelName="Edit Pekerjaan" panelLink="/admin/data" nameButton="Kembali" />} />


        <Route path="/admin/riwayat" element={<AdminRiwayat />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
