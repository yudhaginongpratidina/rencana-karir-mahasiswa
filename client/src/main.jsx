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
import ViewMessage from "./components/ViewMessage";
// import AdminRiwayat from "./pages/AdminRiwayat";

// HALAMAN FORM INPUT DATA
import AdminBidang from "./pages/AdminBidang";
import AdminPekerjaan from "./pages/AdminPekerjaan";
import AdminKriteria from "./pages/AdminKriteria";
import AdminRule from "./pages/AdminRule";


// HALAMAN VIEW DATA
import DataBidang from "./components/DataBidang";
import DataPekerjaan from "./components/DataPekerjaan";
import DataKriteria from "./components/DataKriteria";
import DataRule from "./components/DataRule";
import DataHistory from "./components/DataHistory";


// IMPORT ERROR PAGE
import Error404 from "./pages/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* ROUTE USER */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />'
        <Route path="*" element={<Error404 />} />

        {/* ROUTE ADMIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />     

        {/* ROUTE PESAN */}   
        <Route path="/admin/message" element={<AdminMessage />} />
        <Route path="/admin/message/:id" element={<ViewMessage />} />

        {/* ROUTE DATA */}
        <Route path="/admin/data" element={<AdminData />} />
        <Route path="/admin/data/bidang" element={<DataBidang />} />
        <Route path="/admin/data/pekerjaan" element={<DataPekerjaan />} />
        <Route path="/admin/data/kriteria" element={<DataKriteria />} />
        <Route path="/admin/data/rule" element={<DataRule />} />
        <Route path="/admin/data/riwayat" element={<DataHistory />} />

        {/* ROUTE BIDANG */}
        <Route path="/admin/bidang/tambah" element={<AdminBidang panelName="Tambah Bidang" panelLink="/admin/data/bidang" nameButton="Kembali" />} />
        <Route path="/admin/bidang/:kode/edit" element={<AdminBidang panelName="Edit Bidang" panelLink="/admin/data/bidang" nameButton="Kembali" />} />

        {/* ROUTE PEKERJAAN */}
        <Route path="/admin/pekerjaan/tambah" element={<AdminPekerjaan panelName="Tambah Pekerjaan" panelLink="/admin/data/pekerjaan" nameButton="Kembali" />} />
        <Route path="/admin/pekerjaan/:kode/edit" element={<AdminPekerjaan panelName="Edit Pekerjaan" panelLink="/admin/data/pekerjaan" nameButton="Kembali" />} />

        {/* ROUTE KRITERIA */}
        <Route path="/admin/kriteria/tambah" element={<AdminKriteria panelName="Tambah Kriteria" panelLink="/admin/data/kriteria" nameButton="Kembali" />} />
        <Route path="/admin/kriteria/:kode/edit" element={<AdminKriteria panelName="Edit Kriteria" panelLink="/admin/data/kriteria" nameButton="Kembali" />} />

        {/* ROUTE RULE */}
        <Route path="/admin/rule/tambah" element={<AdminRule panelName="Tambah Rule" panelLink="/admin/data/rule" nameButton="Kembali" />} />
        <Route path="/admin/rule/:kode/edit" element={<AdminRule panelName="Edit Rule" panelLink="/admin/data/rule" nameButton="Kembali" />} />


        {/* ROUTE HISTORY ATAU RIWAYAT */}
        {/* <Route path="/admin/riwayat" element={<AdminRiwayat />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
