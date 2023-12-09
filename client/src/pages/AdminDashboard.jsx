import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Admin from '../components/template/Admin'

const AdminDashboard = () => {
  return (
    <Admin>
      <div className='px-4 pt-6'>
        <div className='grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4'>
          <LeftPanel/>
          <RightPanel/>
        </div>
        <ButtomPanel/>
      </div>
    </Admin>
  )
}

export default AdminDashboard

const LeftPanel = () => {
  return (
    <PanelContainer panelName="Pesan Masuk Hari Ini" panelLink="/admin/message">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <th scope="col" className="px-6 py-3">No</th>
          <th scope="col" className="px-6 py-3">Subject</th>
          <th scope="col" className="px-6 py-3 text-center">Aksi</th>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</td>
            <td className="px-6 py-4">User 1</td>
            <td className="px-6 py-4 flex items-center justify-center">
              <Link to="/admin/message" className='text-white border py-2 px-4 bg-green-500 rounded'>Lihat</Link>
              <button className='text-white border px-4 py-2 bg-red-500 rounded'>Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </PanelContainer>
  )
}

const RightPanel = () => {
  return (
    <PanelContainer panelName="Data" panelLink="/admin/message">
      <div className='my-3 grid grid-cols-1 gap-4 md:grid-cols-4'>
        <PanelItem Name="Rule" Count="10" Url="/admin/user" />
        <PanelItem Name="Admin" Count="10" Url="/admin/user" />
        <PanelItem Name="Riwayat" Count="10" Url="/admin/user" />
        <PanelItem Name="Pesan" Count="10" Url="/admin/user" />
      </div>
    </PanelContainer>
  )
}


const ButtomPanel = () => {
  return (
    <PanelContainer panelName="Riwayat" panelLink="/admin/message">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <th scope="col" className="px-6 py-3">No</th>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Bidang Pekerjaan</th>
          <th scope="col" className="px-6 py-3">Pekerjaan</th>
          <th scope="col" className="px-6 py-3">Date</th>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b ">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</td>
            <td className="px-6 py-4">User 1</td>
            <td className="px-6 py-4">Programmer</td>
            <td className="px-6 py-4">Front End Developer</td>
            <td className="px-6 py-4">8 Desember 2023</td>
          </tr>
        </tbody>
      </table>
    </PanelContainer>
  )
}


const PanelContainer = (props) => {
  const { panelName, panelLink, children } = props
  return (
    <div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 xl:mb-0'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-medium'>{panelName}</h1>
        <Link to={panelLink} className='text-white border py-2 px-4 bg-green-500 rounded-lg'>Lihat Semua</Link>
      </div>
      {children}
    </div>
  )
}

const PanelItem = (props) => {
  const { Name, Count, Url } = props
  return (
    <div className='flex justify-between items-center p-3 border rounded-lg shadow'>
      <div>
        <h3 className="text-gray-500"> {Name} </h3>
        <p className="text-3xl font-bold"> {Count} </p>
      </div>
      <div>
        <Link to={Url} >
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path  d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

