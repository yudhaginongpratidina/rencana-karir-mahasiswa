import React, {useState} from 'react'
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { useNavigate, Link } from 'react-router-dom';

// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer';
import Button from '../components/elements/Button'
import AlertMessage from '../components/elements/AlertMessage';


const AdminData = () => {

  const navigate = useNavigate();
  const { mutate } = useSWRConfig()

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const resetMessage = () =>  setSuccess('') && setError('')

  const TambahPekerjaan = () => navigate('/admin/pekerjaan/tambah')


  const getPekerjaan = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/pekerjaan')
      return response.data.data
    } 
    catch (error) {
      console.log(error)
    }
  }

  const deletePekerjaan = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/pekerjaan/${id}`)
      mutate('pekerjaan')
      if (response) {
        resetMessage();
        setSuccess(response.data.msg)
      }
    } 
    catch (error) {
      setError(error.response.data.msg)
    }
  }

  const { data } = useSWR('pekerjaan', getPekerjaan)


  return (
    <Admin>
      
      <div className='px-2 py-4'>
        {error && <AlertMessage type="error" message={error} color="red" />}
        {success && <AlertMessage type="success" message={success} color="green" />}
      </div>


      <PanelContainer panelName="Data" panelLink="/admin/dashboard" nameButton="Kembali">



        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 mt-4'>
          <Button name="Tambah Pekerjaan (P)" onClick={() => {TambahPekerjaan()}} color="green" variant="w-full"/>
          <Button name="Tambah Kriteria (G)" color="green" variant="w-full"/>
          <Button name="Tambah Rule (R)" color="green" variant="w-full"/>
        </div>



        <div className='w-full py-3'>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 w-3">No</th>
                <th scope="col" className="px-6 py-3">Kode Pekerjaan</th>
                <th scope="col" className="px-6 py-3">Nama Pekerjaan</th>
                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((pekerjaan, index) => (
                  <tr key={index} className="bg-white border-b  hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                    <td className="px-6 py-4">{pekerjaan.kode}</td>
                    <td className="px-6 py-4">{pekerjaan.name}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Button name="Hapus" color="red" onClick={() => {deletePekerjaan(pekerjaan.id)}} variant="w-full" />
                      <Link to={`/admin/pekerjaan/${pekerjaan.id}/edit`} className='w-full px-2 py-3 bg-blue-500 text-white text-center'> Edit </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


        <div className='w-full py-3'>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 w-3">No</th>
                <th scope="col" className="px-6 py-3">Kode Kriteria</th>
                <th scope="col" className="px-6 py-3">Kriteria</th>
                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* {
                data?.map((pekerjaan, index) => (
                  <tr key={index} className="bg-white border-b  hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                    <td className="px-6 py-4">{pekerjaan.kode}</td>
                    <td className="px-6 py-4">{pekerjaan.name}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Button name="Hapus" color="red" onClick={() => {deletePekerjaan(pekerjaan.id)}} variant="w-full" />
                      <Link to={`/admin/pekerjaan/${pekerjaan.id}/edit`} className='w-full px-2 py-3 bg-blue-500 text-white text-center'> Edit </Link>
                    </td>
                  </tr>
                ))
              } */}
            </tbody>
          </table>
        </div>





      </PanelContainer>
    </Admin>
  )
}

export default AdminData