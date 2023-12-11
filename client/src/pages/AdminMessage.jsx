import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useSWR, {useSWRConfig} from "swr";
import axios from 'axios'
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';


// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer'
import AlertMessage from '../components/elements/AlertMessage'
import Button from '../components/elements/Button'

const AdminMessage = () => {

  const { mutate } = useSWRConfig();
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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
      resetMessage();
      setError(error.response.data.msg)
    }
  }

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

      <div className='px-2 py-4'>
        {error && <AlertMessage type="error" message={error} color="red" />}
        {success && <AlertMessage type="success" message={success} color="green" />}
      </div>

      <PanelContainer panelName="Semua Pesan" panelLink="/admin/dashboard" nameButton="Kembali">
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 w-3">No</th>
                <th scope="col" className="px-6 py-3 text-left w-56">Date</th>
                <th scope="col" className="px-6 py-3">Subject</th>
                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
              </tr>
              {
                data && data.map((message, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                    <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">{index + 1}</th>
                    <td className="px-6 py-4 text-left"> {formatDistanceToNow(parseISO(message.createdAt), { addSuffix: true, locale: id })} </td>
                    <td className="px-6 py-3">{message.subject}</td>
                    <td className="px-6 py-4 text-center flex justify-center gap-2">
                      <Link to={`/admin/message/${message.id}`} className='py-2 px-3 bg-green-500 text-white rounded'>Detail</Link>
                      <Button type="button" name="Delete" color="red" onClick={() => deleteMessage(message.id)} />
                    </td>
                  </tr>
                ))
              }
            </thead>
          </table>
        </div>
      </PanelContainer>
    </Admin>
  )
}

export default AdminMessage