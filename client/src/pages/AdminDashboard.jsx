// IMPORT LIBRARY
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useSWR, {useSWRConfig} from "swr";
import axios from 'axios'
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';


// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer';
import PanelItem from '../components/PanelItem';
import Button from '../components/elements/Button'
import AlertMessage from '../components/elements/AlertMessage'


const AdminDashboard = () => {

  const { mutate } = useSWRConfig();
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const resetMessage = () => {
    setSuccess('')
    setError('')
  }

  const getMessage = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/messages')
      return response.data.data
    } 
    catch (error) {
      console.log(error)
    }
  }

  
  // PARSING DATA
  const { data } = useSWR('messages', getMessage)
  
  const deleteMessage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/messages/${id}`)
      if (response) {
        resetMessage();
        setSuccess(response.data.msg)
        mutate('messages')
      }
    } 
    catch (error) {
      resetMessage();
      setError(error.response.data.msg)
    }
  }

  return (
    <Admin>
      <div className='px-4 pt-6'>
        
        {error && <AlertMessage type="error" message={error} color="red" />}
        {success && <AlertMessage type="success" message={success} color="green" />}

        <div className='grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4'>
          <LeftPanel>
              {data?.slice(0, 5).map((message, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                  <td className="px-6 py-4 text-left"> {formatDistanceToNow(parseISO(message.createdAt), { addSuffix: true, locale: id })} </td>
                  <td className="px-6 py-4">{message.subject}</td>
                  <td className="px-6 py-4 text-center flex justify-center gap-2">
                    <Link to={`/admin/message/${message._id}`} className='py-2 px-3 bg-green-500 text-white rounded'>Detail</Link>
                    <Button type="button" name="Delete" color="red" onClick={() => deleteMessage(message.id)} />
                  </td>
                </tr>
              ))}
          </LeftPanel>
          <RightPanel/>
        </div>

        <ButtomPanel>
          <tr className="odd:bg-white even:bg-gray-50 border-b ">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</td>
            <td className="px-6 py-4">User 1</td>
            <td className="px-6 py-4">Programmer</td>
            <td className="px-6 py-4">Front End Developer</td>
            <td className="px-6 py-4">8 Desember 2023</td>
          </tr>
        </ButtomPanel>
      </div>
    </Admin>
  )
}

export default AdminDashboard

const LeftPanel = (props) => {
  const { children } = props;
  return (
    <PanelContainer panelName="Pesan Masuk Hari Ini" panelLink="/admin/message">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 w-3">No</th>
            <th scope="col" className="px-6 py-3 text-left w-56">Date</th>
            <th scope="col" className="px-6 py-3">Subject</th>
            <th scope="col" className="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </PanelContainer>
  )
}

const RightPanel = () => {
  return (
    <PanelContainer panelName="Data" panelLink="/admin/data">
      <div className='my-3 grid grid-cols-1 gap-4 md:grid-cols-4'>
        <PanelItem Name="Rule" Count="10" Url="/admin/user" />
        <PanelItem Name="Admin" Count="10" Url="/admin/user" />
        <PanelItem Name="Riwayat" Count="10" Url="/admin/user" />
        <PanelItem Name="Pesan" Count="10" Url="/admin/user" />
      </div>
    </PanelContainer>
  )
}


const ButtomPanel = (props) => {

  const { children } = props;
  return (
    <PanelContainer panelName="Riwayat" panelLink="/admin/riwayat">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Bidang Pekerjaan</th>
            <th scope="col" className="px-6 py-3">Pekerjaan</th>
            <th scope="col" className="px-6 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </PanelContainer>
  )
}